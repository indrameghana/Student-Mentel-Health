import React, { useState } from 'react';

const Entertainment = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [breathingActive, setBreathingActive] = useState(false);

  const quotes = [
    "You are stronger than you think 💪",
    "Every small step counts 🌟",
    "It's okay to not be okay sometimes 🤗",
    "You matter and you are loved 💙",
    "Tomorrow is a new day with new possibilities 🌅"
  ];

  const sounds = [
    { name: "Rain Sounds", emoji: "🌧️", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
    { name: "Ocean Waves", emoji: "🌊", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
    { name: "Forest Birds", emoji: "🐦", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
    { name: "Meditation Bell", emoji: "🔔", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const toggleBreathing = () => {
    setBreathingActive(!breathingActive);
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Wellness & Entertainment</h1>
          <p>Relax, unwind, and boost your mood with these interactive features</p>
        </div>
      </section>

      <section className="entertainment">
        <div className="container">
          <div className="entertainment-grid">
            
            <div className="feature-card">
              <h3>🎵 Relaxing Sounds</h3>
              <p>Choose calming sounds to help you focus and relax</p>
              <div className="sounds-grid">
                {sounds.map((sound, index) => (
                  <button key={index} className="sound-btn">
                    {sound.emoji} {sound.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="feature-card">
              <h3>💭 Daily Motivation</h3>
              <div className="quote-display">
                <p className="quote-text">"{quotes[currentQuote]}"</p>
                <button onClick={nextQuote} className="btn btn-primary">
                  Next Quote ✨
                </button>
              </div>
            </div>

            <div className="feature-card">
              <h3>🫁 Breathing Exercise</h3>
              <div className="breathing-exercise">
                <div className={`breathing-circle ${breathingActive ? 'active' : ''}`}>
                  {breathingActive ? 'Breathe...' : 'Click to Start'}
                </div>
                <button onClick={toggleBreathing} className="btn btn-secondary">
                  {breathingActive ? 'Stop' : 'Start'} Breathing
                </button>
              </div>
            </div>

            <div className="feature-card">
              <h3>🎮 Mini Games</h3>
              <p>Simple games to distract and entertain your mind</p>
              <div className="games-list">
                <button className="game-btn">🧩 Memory Match</button>
                <button className="game-btn">🎯 Focus Game</button>
                <button className="game-btn">🌈 Color Therapy</button>
              </div>
            </div>

            <div className="feature-card">
              <h3>📺 Wellness Videos</h3>
              <p>Short videos for relaxation and mental wellness</p>
              <div className="video-list">
                <div className="video-item">🧘 5-Min Meditation</div>
                <div className="video-item">🤸 Quick Stretches</div>
                <div className="video-item">😊 Mood Boosters</div>
              </div>
            </div>

            <div className="feature-card">
              <h3>🎨 Creative Corner</h3>
              <p>Express yourself through creative activities</p>
              <div className="creative-tools">
                <button className="creative-btn">✏️ Digital Doodle</button>
                <button className="creative-btn">📝 Mood Journal</button>
                <button className="creative-btn">🎭 Emotion Tracker</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Entertainment;