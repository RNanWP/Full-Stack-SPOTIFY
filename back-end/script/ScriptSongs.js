import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import play from "play-dl";
import { db } from "../api/connect.js";
import { ObjectId } from "mongodb";
import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { promisify } from "util";
import { createReadStream } from "fs";

dotenv.config({ path: "../.env" });

const execPromise = promisify(exec);

const CAMINHO_YT_DLP =
  "C:\\Users\\Pichau\\scoop\\apps\\yt-dlp\\current\\yt-dlp.exe";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_REGION = process.env.AWS_REGION;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PASTA_DOWNLOADS = path.join(__dirname, "downloads");

const sanitizeFilename = (name) => name.replace(/[<>:"/\\|?*]/g, "");

// --- 2. SCRIPT DE AUTOMAÇÃO COMPLETO ---

async function corrigirTudo() {
  const musicasComErro = []; // Array para registrar as músicas que falharem
  try {
    console.log("Iniciando a busca por músicas que precisam ser corrigidas...");
    await fsp.mkdir(PASTA_DOWNLOADS, { recursive: true });

    const musicasParaCorrigir = await db
      .collection("songs")
      .find({
        audio: {
          $not: new RegExp(
            `^https://${BUCKET_NAME}\\.s3\\.${AWS_REGION}\\.amazonaws\\.com/.*`
          ),
        },
      })
      .toArray();

    if (musicasParaCorrigir.length === 0) {
      console.log("Nenhuma música para corrigir encontrada. Tudo certo!");
      return;
    }
    console.log(
      `Total de ${musicasParaCorrigir.length} músicas a serem corrigidas.`
    );

    for (const musica of musicasParaCorrigir) {
      const nomeCompleto = `${musica.artist} - ${musica.name}`;
      console.log(`\nProcessando: "${nomeCompleto}"`);

      const nomeArtistaSanitizado = sanitizeFilename(
        musica.artist.replace(/\s|\//g, "_")
      );
      const nomeMusicaSanitizado = sanitizeFilename(
        musica.name.replace(/\s|\//g, "_")
      );
      const nomeArquivoFinal = `${musica._id.toString()}__${nomeArtistaSanitizado}_${nomeMusicaSanitizado}.m4a`;
      const caminhoFinal = path.join(PASTA_DOWNLOADS, nomeArquivoFinal);

      try {
        const searchResults = await play.search(nomeCompleto, {
          limit: 1,
          source: { youtube: "video" },
        });
        if (searchResults.length === 0) {
          throw new Error("Vídeo não encontrado no YouTube.");
        }
        const videoUrl = searchResults[0].url;

        console.log(" -> Baixando áudio com yt-dlp...");
        const comando = `"${CAMINHO_YT_DLP}" -f bestaudio -x --audio-format m4a -o "${caminhoFinal}" "${videoUrl}"`;
        await execPromise(comando);

        console.log(" -> Download concluído.");

        console.log(" -> Fazendo upload para a AWS S3...");
        const fileStream = createReadStream(caminhoFinal);
        const uploadParams = {
          Bucket: BUCKET_NAME,
          Key: nomeArquivoFinal,
          Body: fileStream,
          ContentType: "audio/m4a",
        };
        await s3Client.send(new PutObjectCommand(uploadParams));

        const novaUrlDoAudio = `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${nomeArquivoFinal}`;

        await db
          .collection("songs")
          .updateOne(
            { _id: new ObjectId(musica._id) },
            { $set: { audio: novaUrlDoAudio } }
          );
        await fsp.unlink(caminhoFinal);
        console.log(` -> SUCESSO! Música atualizada.`);
      } catch (err) {
        // **AQUI ESTÁ A MUDANÇA:** Registra a música com erro no array
        const erroMsg = err.stderr || err.message || "Erro desconhecido";
        console.error(` -> ERRO ao processar "${nomeCompleto}". Pulando.`);
        musicasComErro.push({ nome: nomeCompleto, erro: erroMsg });
        try {
          await fsp.unlink(caminhoFinal);
        } catch (e) {}
      }
    }
  } catch (error) {
    console.error("\nOcorreu um erro geral no processo:", error);
  } finally {
    console.log("\n--------------------------------------------------");
    console.log("Processo de correção finalizado.");

    // **RELATÓRIO FINAL:** Imprime a lista de músicas que falharam
    if (musicasComErro.length > 0) {
      console.log(
        `\n🚨 ${musicasComErro.length} MÚSICAS FALHARAM E PRECISAM DE ATENÇÃO MANUAL:`
      );
      musicasComErro.forEach((item) => {
        let motivo = "Motivo desconhecido";
        if (item.erro.includes("Sign in to confirm your age")) {
          motivo = "Restrição de idade";
        } else if (item.erro.includes("Requested format is not available")) {
          motivo = "Formato de áudio indisponível";
        } else if (item.erro.includes("Vídeo não encontrado")) {
          motivo = "Não foi encontrado no YouTube";
        }
        console.log(`- ${item.nome} (Motivo: ${motivo})`);
      });
    } else {
      console.log("\n✅ Todas as músicas foram processadas com sucesso!");
    }
    console.log("--------------------------------------------------");
    process.exit(0);
  }
}

corrigirTudo();
