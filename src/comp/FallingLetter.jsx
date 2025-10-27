import { useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";
import "./FallingLetter.css";

export default function FallingLetter() {
  const [letter, setLetter] = useState(randomLetter());
  const [position, setPosition] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const toastShown = useRef(false);
  const livesRef = useRef(lives);
  const missedRef = useRef(false);

  const successSound = useRef(new Audio(correctSoundFile));
  const wrongSound = useRef(new Audio(wrongSoundFile));

  function randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
  }

  useEffect(() => {
    livesRef.current = lives;
  }, [lives]);

  useEffect(() => {
    if (!gameStarted || livesRef.current <= 0 || gameOver) return;

    const fall = setInterval(() => {
      setPosition((p) => {
        if (p >= 90) {
          if (!missedRef.current) {
            missedRef.current = true;

            const newLives = Math.max(livesRef.current - 1, 0);
            setLives(newLives);
            livesRef.current = newLives;

            wrongSound.current.currentTime = 0;
            wrongSound.current.play();

            if (!toastShown.current) {
              toastShown.current = true;
              if (newLives > 0) {
                toast.warn(`Missed! Lives left: ${newLives}`, {
                  style: { backgroundColor: "white", color: "black", fontWeight: "bold" },
                  iconTheme: { primary: "orange", secondary: "white" },
                  position: "top-right",
                  autoClose: 800,
                  onClose: () => (toastShown.current = false),
                });
              } else {
                toast.error("Game Over!", {
                  style: { backgroundColor: "white", color: "black", fontWeight: "bold" },
                  iconTheme: { primary: "red", secondary: "white" },
                  position: "top-right",
                  autoClose: 1500,
                  onClose: () => (toastShown.current = false),
                });
                setGameOver(true);
              }
            }

            setLetter(randomLetter());
            setTimeout(() => {
              missedRef.current = false;
            }, 300);
          }
          return 0;
        }
        return p + 4;
      });
    }, 150);

    return () => clearInterval(fall);
  }, [gameOver, gameStarted]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!gameStarted || gameOver) return;
      if (e.key.toUpperCase() === letter) {
        successSound.current.currentTime = 0;
        successSound.current.play();

        toast.success("Correct! Great job!", {
          style: { background: "white", color: "black", fontWeight: "bold" },
          iconTheme: { primary: "green", secondary: "white" },
          position: "top-right",
          autoClose: 1000,
          onClose: () => (toastShown.current = false),
        });

        setScore((s) => s + 1);
        setLetter(randomLetter());
        setPosition(0);
        missedRef.current = false;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [letter, gameOver, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setLives(5);
    livesRef.current = 5;
    setLetter(randomLetter());
    setPosition(0);
    toastShown.current = false;
    missedRef.current = false;
  };

  const restartGame = () => {
    setScore(0);
    setLives(5);
    livesRef.current = 5;
    setLetter(randomLetter());
    setPosition(0);
    setGameOver(false);
    toastShown.current = false;
    missedRef.current = false;
    setGameStarted(false);
  };

  return (
    <div className="falling-container">
      <div className="header-section">
        <h2>🎯 Falling Letter Game</h2>
        <div className="btn-group">
          {!gameStarted && !gameOver && (
            <button onClick={startGame} className="restart-btn-f top-btn">
              ▶️ Start
            </button>
          )}
          <button onClick={restartGame} className="restart-btn-f top-btn">
            🔄 Restart
          </button>
        </div>
      </div>

      <p className="game-instructions">
        Type the falling letter before it hits the ground! Stay quick and focused.
      </p>

      <div className="game-box">
        {gameStarted ? (
          <div className="falling-letter" style={{ top: `${position}%` }}>
            {letter}
          </div>
        ) : (
          <div className="waiting-text">Press ▶️ Start to Begin!</div>
        )}
      </div>

      <div className="stats">
        <p>Score: {score}</p>
        <p>Lives: {lives}</p>
      </div>

      <ToastContainer />
    </div>
  );
}
