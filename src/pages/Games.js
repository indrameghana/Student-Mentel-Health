import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(checkWinner(newBoard));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe">
      <div className="game-status">
        {winner ? `Winner: ${winner}!` : `Next: ${isXNext ? 'X' : 'O'}`}
      </div>
      <div className="tic-board">
        {board.map((cell, index) => (
          <button key={index} className="tic-cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      <button onClick={resetGame} className="btn btn-secondary">New Game</button>
    </div>
  );
};

const Games = () => {
  const [memoryCards, setMemoryCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [currentColor, setCurrentColor] = useState('#3b82f6');

  // Memory Game
  const initMemoryGame = () => {
    const symbols = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼'];
    const cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    setMemoryCards(cards.map((symbol, index) => ({ id: index, symbol, flipped: false, matched: false })));
    setFlippedCards([]);
    setScore(0);
  };

  const flipCard = (id) => {
    if (flippedCards.length === 2) return;
    
    const newCards = memoryCards.map(card => 
      card.id === id ? { ...card, flipped: true } : card
    );
    setMemoryCards(newCards);
    setFlippedCards([...flippedCards, id]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = memoryCards.find(card => card.id === first);
      const secondCard = memoryCards.find(card => card.id === second);
      
      setTimeout(() => {
        if (firstCard.symbol === secondCard.symbol) {
          setMemoryCards(prev => prev.map(card => 
            card.id === first || card.id === second ? { ...card, matched: true } : card
          ));
          setScore(score + 1);
        } else {
          setMemoryCards(prev => prev.map(card => 
            card.id === first || card.id === second ? { ...card, flipped: false } : card
          ));
        }
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards, memoryCards, score]);

  // Click Counter Game
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  // Color Therapy
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Wellness Games</h1>
          <p>Fun and relaxing games to boost your mood and reduce stress</p>
        </div>
      </section>

      <section className="games">
        <div className="container">
          <div className="games-grid">
            
            {/* Memory Match Game */}
            <div className="game-card">
              <h3>🧩 Memory Match</h3>
              <p>Match the flower pairs to improve focus and memory</p>
              <div className="game-controls">
                <button onClick={initMemoryGame} className="btn btn-primary">New Game</button>
                <span className="score">Matches: {score}</span>
              </div>
              <div className="memory-grid">
                {memoryCards.map(card => (
                  <div
                    key={card.id}
                    className={`memory-card ${card.flipped || card.matched ? 'flipped' : ''}`}
                    onClick={() => !card.flipped && !card.matched && flipCard(card.id)}
                  >
                    {card.flipped || card.matched ? card.symbol : '?'}
                  </div>
                ))}
              </div>
            </div>

            {/* Click Counter Game */}
            <div className="game-card">
              <h3>🎯 Focus Clicker</h3>
              <p>Click to release stress and improve concentration</p>
              <div className="click-game">
                <div className="click-counter">{clickCount}</div>
                <button onClick={handleClick} className="click-btn">
                  Click Me! 🎯
                </button>
                <button onClick={() => setClickCount(0)} className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </div>

            {/* Color Therapy */}
            <div className="game-card">
              <h3>🌈 Color Therapy</h3>
              <p>Change colors to stimulate positive emotions</p>
              <div className="color-therapy">
                <div 
                  className="color-circle" 
                  style={{ backgroundColor: currentColor }}
                  onClick={changeColor}
                >
                  Click for calm
                </div>
                <button onClick={changeColor} className="btn btn-primary">
                  Change Color
                </button>
              </div>
            </div>

            {/* Breathing Game */}
            <div className="game-card">
              <h3>🫁 Breathing Rhythm</h3>
              <p>Follow the circle to practice deep breathing</p>
              <div className="breathing-game">
                <div className="breathing-circle-game">
                  Breathe In... Out...
                </div>
                <p>Inhale for 4 seconds, hold for 4, exhale for 4</p>
              </div>
            </div>

            {/* Simple Puzzle */}
            <div className="game-card">
              <h3>🧠 Mind Puzzle</h3>
              <p>Simple riddles to engage your mind positively</p>
              <div className="puzzle-game">
                <div className="puzzle-question">
                  What gets wetter the more it dries?
                </div>
                <button className="btn btn-secondary" onClick={() => alert('A towel! 🏖️')}>
                  Show Answer
                </button>
              </div>
            </div>

            {/* Tic Tac Toe */}
            <div className="game-card">
              <h3>⭕ Tic Tac Toe</h3>
              <p>Classic game to relax and have fun</p>
              <TicTacToe />
            </div>

            {/* Mood Tracker */}
            <div className="game-card">
              <h3>😊 Mood Tracker</h3>
              <p>Track your daily mood with emojis</p>
              <div className="mood-tracker">
                <div className="mood-options">
                  {['😢', '😐', '🙂', '😊', '😄'].map((emoji, index) => (
                    <button key={index} className="mood-btn" onClick={() => alert(`Mood saved: ${emoji}`)}>
                      {emoji}
                    </button>
                  ))}
                </div>
                <p>How are you feeling today?</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Games;