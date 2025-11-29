import React, { useState, useRef } from 'react';

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 MindCare - Student Mental Health Support Platform</p>
        <button onClick={toggleMusic} className="music-btn">
          {isPlaying ? '🔇 Pause Music' : '🎵 Play Relaxing Music'}
        </button>
        <audio ref={audioRef} loop>
          <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        </audio>
      </div>
    </footer>
  );
};

export default Footer;