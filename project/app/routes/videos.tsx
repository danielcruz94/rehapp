import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router";
import styles from "../componentes/styles/videoplayer.css?url";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

interface VideoPlayerProps {
  src: string;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  title = "Recupera tu vitalidad" 
}) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setVideoEnded(true);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setVideoEnded(false); // Reset ended state when playing again
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleSkipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
    }
  };

  const handleSkipForward = () => {
    if (videoRef.current && duration) {
      videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 10);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const seekPosition = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = seekPosition * duration;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleFullScreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error(`Error al activar pantalla completa: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navega a la ruta anterior
  };

  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="video-page-container">
      {/* Título del video */}
      <div className="video-header">
        <h1 className="video-title">{title}</h1>
        <p className="video-subtitle">Extensión de la espalda alta</p>
      </div>

      {/* Contenedor principal del reproductor */}
      <div 
        className="video-container"
        ref={containerRef}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Overlay cuando termina el video */}
        {videoEnded && (
          <div className="video-ended-overlay">
            <div className="video-ended-content">
              <div className="success-icon">✅</div>
              <h2 className="ended-title">¡Video completado!</h2>
              <p className="ended-subtitle">Has terminado este ejercicio exitosamente</p>
              
              <div className="ended-actions">
                <button onClick={handleGoBack} className="back-button">
                  <BackIcon />
                  <span>Volver</span>
                </button>
                <button 
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      setVideoEnded(false);
                      setProgress(0);
                      setCurrentTime(0);
                    }
                  }} 
                  className="replay-button"
                >
                  <ReplayIcon />
                  <span>Ver de nuevo</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Overlay de play inicial */}
        {!isPlaying && (
          <div className="play-overlay">
            <div className="play-overlay-content">
              <button onClick={togglePlayPause} className="play-button-large">
                <PlayIcon />
              </button>
              <p className="play-text">Haz clic para reproducir</p>
              <p className="duration-text">Duración: {formatTime(duration)}</p>
            </div>
          </div>
        )}
        
        {/* Elemento de video */}
        <video
          ref={videoRef}
          className="video-element"
          onClick={togglePlayPause}
          onDoubleClick={toggleFullScreen}
        >
          <source src={'https://freevideos-reapp.s3.us-east-2.amazonaws.com/Back_Excersises+/IMG_2184.MOV'} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>

        {/* Controles del reproductor */}
        <div className={`controls-overlay ${showControls || !isPlaying ? 'visible' : 'hidden'}`}>
          {/* Barra de progreso */}
          <div className="progress-section">
            <div className="progress-bar-container" onClick={handleSeek}>
              <div 
                className="progress-bar-filled" 
                style={{ width: `${progress}%` }}
              />
              <div 
                className="progress-handle" 
                style={{ left: `${progress}%` }}
              />
            </div>
          </div>

          {/* Controles principales */}
          <div className="controls-main">
            <div className="controls-left">
              {/* Play/Pause */}
              <button onClick={togglePlayPause} className="control-button primary">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              {/* Skip backward */}
              <button onClick={handleSkipBackward} className="control-button">
                <SkipBackwardIcon />
              </button>

              {/* Skip forward */}
              <button onClick={handleSkipForward} className="control-button">
                <SkipForwardIcon />
              </button>

              {/* Tiempo */}
              <span className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="controls-right">
              {/* Control de volumen */}
              <div className="volume-control">
                <VolumeIcon />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                />
              </div>

              {/* Pantalla completa */}
              <button onClick={toggleFullScreen} className="control-button">
                <FullScreenIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="video-info">
        <div className="warning-box">
          <div className="warning-header">
            <span className="warning-icon">⚠️</span>
            <span className="warning-title">Importante</span>
          </div>
          <p className="warning-text">
            Realiza los ejercicios a tu propio ritmo. Si experimentas dolor o molestias, 
            detén el ejercicio y consulta con un profesional de la salud.
          </p>
        </div>
      </div>
    </div>
  );
};

// Componentes de iconos SVG
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const SkipBackwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
  </svg>
);

const SkipForwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M12.33 20.13l1.77 1.77L24 12l-9.9-9.9-1.77 1.77L20.46 12z"/>
  </svg>
);

const FullScreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
);

const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>
);

const ReplayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
  </svg>
);

export default VideoPlayer;