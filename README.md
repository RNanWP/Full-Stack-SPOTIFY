# 🎵 WebSite Full Stack de Streaming de Músicas ("Spotify")

## 📌 Descrição

Este é um projeto de um site de streaming de músicas desenvolvido com React e um Back-end Node.js. Ele permite visualizar uma lista de artistas e músicas, navegar entre eles e reproduzir faixas de forma interativa.

## 🚀 Tecnologias Utilizadas

- **React**
- **Vite**
- **React Router**
- **FontAwesome**
- **CSS Modules**
- **Node.js**
- **Express.js**
- **MongoDB**

## 📂 Estrutura do Projeto

```
Full-Stack-SPOTIFY/
│
├── back-end/
│   └── api/
│       ├── connect.js                (Configuração da conexão com o banco de dados)
│       └── server.js                 (Servidor principal da API)
│
└── front-end/
    ├── src/
    │   ├── assets/
    │   │   ├── database/
    │   │   │   ├── artists.js        (Dados dos artistas)
    │   │   │   └── songs.js          (Dados das músicas)
    │   │   ├── footer/
    │   │   │   └── wave.png          (Imagem para o rodapé)
    │   │   └── logo/
    │   │       └── spotify-logo.png  (Logo do Spotify)
    │   ├── components/
    │   │   ├── Footer.jsx            (Componente do rodapé)
    │   │   ├── Header.jsx            (Componente de cabeçalho)
    │   │   ├── ItemList.jsx          (Componente para lista de itens)
    │   │   ├── Main.jsx              (Componente principal)
    │   │   ├── Player.jsx            (Componente do player de música)
    │   │   ├── SingleItem.jsx        (Componente de item único (artista/música))
    │   │   ├── SongItem.jsx          (Componente de item de música)
    │   │   └── SongList.jsx          (Componente de lista de músicas)
    │   ├── pages/
    │   │   ├── Artist.jsx           (Página do artista)
    │   │   ├── Artists.jsx          (Página com a lista de artistas)
    │   │   ├── Home.jsx             (Página inicial)
    │   │   ├── Song.jsx             (Página de música)
    │   │   └── Songs.jsx            (Página com a lista de músicas)
    │   ├── App.jsx                  (Arquivo principal do React)
    │   ├── index.css                (Estilos principais)
    │   └── main.jsx                 (Ponto de entrada da aplicação)
    │
    ├── index.html                  (Arquivo HTML)
    ├── vite.config.js              (Configuração do Vite)
    └── to_do.txt                   (Lista de tarefas a realizar)

```

<!-- ```
/FULL-STACK-SPOTIFY
│-- back-end
│
│
│
│-- front-end
│        /src
│        │-- assets
│        │   ├── database
│        │   │   ├── artists.js (Dados dos artistas)
│        │   │   ├── songs.js (Dados das músicas)
│        │-- components
│        │   ├── Player.js (Reprodutor de música)
│        │   ├── SingleItem.js (Componente para exibição de um artista/música)
│        │   ├── ItemList.js (Lista de itens: artistas ou músicas)
│        │   ├── Main.js (Componente principal que gerencia a exibição dos itens)
│        │-- App.js (Arquivo principal do React)
│        │-- index.js (Ponto de entrada da aplicação)
│        │-- styles (Folhas de estilo do projeto)
``` -->

## 📦 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/RNanWP/Full-Stack-SPOTIFY.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd Full-Stack-SPOTIFY
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## ▶️ Como Rodar o Projeto

Para iniciar o projeto em modo de desenvolvimento, utilize o comando:

```sh
1. npm start

#Ou

2. cd back-end
npm start

3. cd front-end
npm start
```

A aplicação estará disponível em **http://localhost:3000**.

## 📬 Contato

Caso tenha alguma dúvida ou sugestão, entre em contato:

<!-- - 📧 Email: seu-email@exemplo.com -->

- 🔗 GitHub: [RNanWP](https://github.com/RNanWP)
- 💼 LinkedIn: [Renan Santos de Oliveira](https://www.linkedin.com/in/renanodev)
