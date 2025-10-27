import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";
import "./Typing.css";

export default function TypingGame() {
  const words = [
    "cat", "dog", "ball", "tree", "sun", "car", "apple", "milk", "rain", "fish",
    "bird", "cake", "book", "duck", "star", "chair", "house", "water", "banana", "pencil"
  ];

  const [word, setWord] = useState(randomWord());
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const toastShown = useRef(false);
  const successSound = useRef(new Audio(correctSoundFile));
  const wrongSound = useRef(new Audio(wrongSoundFile));
  const inputRef = useRef(null);

  function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  useEffect(() => {
    if (time > 0 && !gameOver && gameStarted) {
      const timer = setInterval(() => setTime((t) => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (time === 0 && gameStarted && !toastShown.current) {
      toastShown.current = true;
      setGameOver(true);
      setGameStarted(false);
      wrongSound.current.play();
      toast.error("Time’s up!", {
        position: "top-right",
        autoClose: 2000,
        style: { background: "white", color: "black", fontWeight: "bold" },
        iconTheme: { primary: "red", secondary: "white" },
        onClose: () => (toastShown.current = false),
      });
    }
  }, [time, gameOver, gameStarted]);

  const handleChange = (e) => {
    const val = e.target.value;
    const currentChar = val[val.length - 1];
    setInput(val);

    if (!gameStarted || gameOver) return;

    if (
      val.length > 0 &&
      word[val.length - 1] &&
      currentChar.toLowerCase() !== word[val.length - 1].toLowerCase() &&
      !toastShown.current
    ) {
      toastShown.current = true;
      wrongSound.current.play();
      toast.warn("Wrong letter!", {
        position: "top-right",
        autoClose: 800,
        style: { background: "white", color: "black", fontWeight: "bold" },
        iconTheme: { primary: "goldenrod", secondary: "white" },
        onClose: () => (toastShown.current = false),
      });
    }

    if (val.toLowerCase() === word.toLowerCase()) {
      toastShown.current = true;
      successSound.current.play();
      toast.success("Correct! Great job!", {
        position: "top-right",
        autoClose: 1000,
        style: { background: "white", color: "black", fontWeight: "bold" },
        iconTheme: { primary: "green", secondary: "white" },
        onClose: () => (toastShown.current = false),
      });
      setScore((s) => s + 1);
      setWord(randomWord());
      setInput("");
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTime(60);
    setInput("");
    setWord(randomWord());
    toastShown.current = false;

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const restartGame = () => {
    setScore(0);
    setTime(60);
    setInput("");
    setWord(randomWord());
    setGameOver(false);
    toastShown.current = false;
    setGameStarted(false);
  };

  return (
    <div className="typing-container">
      <ToastContainer />

      <div className="header-section">
        <h2>Typing Speed Game</h2>
        <div className="button-row">
          <button className="restart-btn-t" onClick={startGame}>▶️ Start</button>
          <button className="restart-btn-t" onClick={restartGame}>🔄 Restart</button>
        </div>
      </div>

      <p className="game-description">
        Type the word shown as fast and accurately as you can before time runs out!
      </p>

      <h3 className="word">{word}</h3>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type the word..."
        className="typing-input"
      />
      <div className="info">
        <p>Score: {score}</p>
        <p>Time: {time}s</p>
      </div>

      {gameOver && (
        <div className="game-over">
          <h3>🎮 Game Over!</h3>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
}
