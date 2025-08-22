// import React, { useState, useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBackwardStep,
//   faCirclePlay,
//   faCirclePause,
//   faForwardStep,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const formatTime = (timeInSeconds) => {
//   const minutes = Math.floor(timeInSeconds / 60)
//     .toString()
//     .padStart(2, "0");
//   const seconds = Math.floor(timeInSeconds - minutes * 60)
//     .toString()
//     .padStart(2, "0");
//   return `${minutes}:${seconds}`;
// };

// const timeInSeconds = (timeString) => {
//   if (typeof timeString !== "string" || !timeString.includes(":")) return 0;
//   const splitArray = timeString.split(":");
//   const minutes = Number(splitArray[0]);
//   const seconds = Number(splitArray[1]);
//   return seconds + minutes * 60;
// };

// const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
//   const audioPlayer = useRef();
//   const progressBar = useRef();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(formatTime(0));
//   const durationInSeconds = timeInSeconds(duration);

//   // Efeito para controlar a troca de música
//   useEffect(() => {
//     if (audioPlayer.current) {
//       // Quando o 'audio' (a URL da música) muda,
//       // forçamos o play e atualizamos o estado.
//       audioPlayer.current.play();
//       setIsPlaying(true);
//     }
//   }, [audio]);

//   const playPause = () => {
//     const previouslyPlaying = isPlaying;
//     setIsPlaying(!previouslyPlaying);
//     if (!previouslyPlaying) {
//       audioPlayer.current.play();
//     } else {
//       audioPlayer.current.pause();
//     }
//   };

//   // Efeito para atualizar a barra de progresso
//   useEffect(() => {
//     const audioEl = audioPlayer.current;
//     if (!audioEl) return;

//     const updateProgressBar = () => {
//       setCurrentTime(formatTime(audioEl.currentTime));
//       if (progressBar.current) {
//         progressBar.current.style.setProperty(
//           "--_progress",
//           `${(audioEl.currentTime / durationInSeconds) * 100}%`
//         );
//       }
//     };

//     audioEl.addEventListener("timeupdate", updateProgressBar);
//     return () => audioEl.removeEventListener("timeupdate", updateProgressBar);
//   }, [durationInSeconds]);

//   return (
//     <div className="player">
//       <div className="player__controllers">
//         <Link to={randomIdFromArtist ? `/song/${randomIdFromArtist}` : "#"}>
//           <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
//         </Link>

//         <FontAwesomeIcon
//           className="player__icon player__icon--play"
//           icon={isPlaying ? faCirclePause : faCirclePlay}
//           onClick={playPause}
//         />
//         <Link to={randomId2FromArtist ? `/song/${randomId2FromArtist}` : "#"}>
//           <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
//         </Link>
//       </div>

//       <div className="player__progress">
//         <p>{currentTime}</p>
//         <div className="player__bar">
//           <div ref={progressBar} className="player__bar-progress"></div>
//         </div>
//         <p>{duration}</p>
//       </div>
//       <audio ref={audioPlayer} src={audio} preload="metadata"></audio>
//     </div>
//   );
// };

// export default Player;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBackwardStep,
//   faCirclePlay,
//   faCirclePause,
//   faForwardStep,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { useRef, useEffect } from "react";

// const formatTime = (timeInSeconds) => {
//   const minutes = Math.floor(timeInSeconds / 60)
//     .toString()
//     .padStart(2, "0");
//   const seconds = Math.floor(timeInSeconds - minutes * 60)
//     .toString()
//     .padStart(2, "0");

//   return `${minutes}:${seconds}`;
// };

// const timeInSeconds = (timeString) => {
//   const splitArray = timeString.split(":");
//   const minutes = Number(splitArray[0]);
//   const seconds = Number(splitArray[1]);

//   return seconds + minutes * 60;
// };

// const Player = ({
//   duration,
//   randomIdFromArtist,
//   randomId2FromArtist,
//   audio,
// }) => {
//   const audioPlayer = useRef();
//   const progressBar = useRef();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(formatTime(0));
//   const durationInSeconds = timeInSeconds(duration);

//   const playPause = () => {
//     isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

//     setIsPlaying(!isPlaying);
//     setCurrentTime(formatTime(audioPlayer.current.currentTime));
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (isPlaying)
//         setCurrentTime(formatTime(audioPlayer.current.currentTime));

//       progressBar.current.style.setProperty(
//         "--_progress",
//         (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
//       );
//     }, 500);

//     return () => clearInterval(intervalId);
//   }, [isPlaying]);

//   return (
//     <div className="player">
//       <div className="player__controllers">
//         <Link to={`/song/${randomIdFromArtist}`}>
//           <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
//         </Link>

//         <FontAwesomeIcon
//           className="player__icon player__icon--play"
//           icon={isPlaying ? faCirclePause : faCirclePlay}
//           onClick={() => playPause()}
//         />
//         <Link to={`/song/${randomId2FromArtist}`}>
//           <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
//         </Link>
//       </div>

//       <div className="player__progress">
//         <p>{currentTime}</p>

//         <div className="player__bar">
//           <div ref={progressBar} className="player__bar-progress"></div>
//         </div>

//         <p>{duration}</p>
//       </div>
//       <audio ref={audioPlayer} src={audio}></audio>
//     </div>
//   );
// };

// export default Player;

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCirclePlay,
  faCirclePause,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Função auxiliar para formatar o tempo de segundos para MM:SS
const formatTime = (timeInSeconds) => {
  if (isNaN(timeInSeconds) || timeInSeconds === 0) return "00:00";
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Player = ({ randomIdFromArtist, randomId2FromArtist, audio }) => {
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // Estado para a duração real

  // Efeito principal que controla a música
  useEffect(() => {
    const audioEl = audioPlayer.current;
    if (!audioEl) return;

    // Função para quando os metadados da música (incluindo duração) são carregados
    const onMetadataLoaded = () => {
      setDuration(audioEl.duration);
    };

    // Função para atualizar o tempo e a barra de progresso
    const onTimeUpdate = () => {
      setCurrentTime(audioEl.currentTime);
      if (progressBar.current) {
        progressBar.current.style.setProperty(
          "--_progress",
          `${(audioEl.currentTime / audioEl.duration) * 100}%`
        );
      }
    };

    // Adiciona os "ouvintes" de eventos
    audioEl.addEventListener("loadedmetadata", onMetadataLoaded);
    audioEl.addEventListener("timeupdate", onTimeUpdate);

    // Tenta dar play automaticamente
    audioEl
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    // Função de limpeza: remove os "ouvintes" quando o componente é desmontado ou o áudio muda
    return () => {
      audioEl.removeEventListener("loadedmetadata", onMetadataLoaded);
      audioEl.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [audio]); // Este efeito roda toda vez que a URL do áudio muda

  const playPause = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={randomIdFromArtist ? `/song/${randomIdFromArtist}` : "#"}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />
        <Link to={randomId2FromArtist ? `/song/${randomId2FromArtist}` : "#"}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{formatTime(currentTime)}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{formatTime(duration)}</p>
      </div>

      <audio ref={audioPlayer} src={audio} preload="metadata"></audio>
    </div>
  );
};

export default Player;
