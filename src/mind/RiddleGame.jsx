import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";
import "./RiddleGame.css";

export default function RiddleGame() {
  const riddles = [
    {
      question: "I have keys but no locks. What am I?",
      options: [
        { text: "Door", icon: "🚪" },
        { text: "Keyboard", icon: "⌨️" },
        { text: "Piano", icon: "🎹" },
        { text: "Box", icon: "📦" },
      ],
      answer: "Keyboard",
    },
    {
      question: "What has to be broken before you can use it?",
      options: [
        { text: "Egg", icon: "🥚" },
        { text: "Stick", icon: "🪵" },
        { text: "Glass", icon: "🪟" },
        { text: "Nut", icon: "🌰" },
      ],
      answer: "Egg",
    },
    {
      question: "I’m tall when I’m young and short when I’m old. What am I?",
      options: [
        { text: "Tree", icon: "🌳" },
        { text: "Candle", icon: "🕯️" },
        { text: "Pencil", icon: "✏️" },
        { text: "Boy", icon: "👦" },
      ],
      answer: "Candle",
    },
    {
      question: "What runs but never walks?",
      options: [
        { text: "Water", icon: "💧" },
        { text: "Clock", icon: "⏰" },
        { text: "Car", icon: "🚗" },
        { text: "Train", icon: "🚆" },
      ],
      answer: "Water",
    },
    {
      question: "I have a face and two hands but no arms or legs.",
      options: [
        { text: "Robot", icon: "🤖" },
        { text: "Clock", icon: "🕒" },
        { text: "Mirror", icon: "🪞" },
        { text: "Toy", icon: "🧸" },
      ],
      answer: "Clock",
    },
    {
      question: "What gets wetter the more it dries?",
      options: [
        { text: "Towel", icon: "🧻" },
        { text: "Rain", icon: "🌧️" },
        { text: "Sun", icon: "☀️" },
        { text: "Cloth", icon: "🧺" },
      ],
      answer: "Towel",
    },
    {
      question: "What has four legs but can’t walk?",
      options: [
        { text: "Chair", icon: "🪑" },
        { text: "Table", icon: "🍽️" },
        { text: "Dog", icon: "🐶" },
        { text: "Bed", icon: "🛏️" },
      ],
      answer: "Table",
    },
    {
      question: "I fly without wings, I cry without eyes. What am I?",
      options: [
        { text: "Cloud", icon: "☁️" },
        { text: "Wind", icon: "🌬️" },
        { text: "Rain", icon: "🌧️" },
        { text: "Bird", icon: "🐦" },
      ],
      answer: "Cloud",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const playSound = (isCorrect) => {
    const sound = new Audio(isCorrect ? correctSoundFile : wrongSoundFile);
    sound.play();
  };

  const handleSelect = (option) => {
    if (isLocked || gameOver) return;

    const isCorrect = option.text === riddles[current].answer;
    playSound(isCorrect);
    setSelected(option.text);
    setIsLocked(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      toast.success("Correct! Great job!", {
        className: "white-toast success-toast",
        position: "top-right",
        autoClose: 1200,
      });

      setTimeout(() => {
        if (current === riddles.length - 1) {
          setGameOver(true);
        } else {
          setSelected(null);
          setIsLocked(false);
          setCurrent((prev) => prev + 1);
        }
      }, 1300);
    } else {
      toast.warn("Oops! Try again!", {
        className: "white-toast warn-toast",
        position: "top-right",
        autoClose: 1000,
      });
      setTimeout(() => setIsLocked(false), 1000);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setIsLocked(false);
    setGameOver(false);
  };

 return (
  <div className="riddle-container">
    <h2 style={{ color: "var(--nav-dark)" }}>🧠 Fun Riddle Game</h2>

    <p className="riddle-intro">
      Read each riddle carefully 🤔<br />
      Tap the correct answer from the options below and see if you can guess them all! 🎉
    </p>


      {!gameOver ? (
        <>
          <p className="riddle-question">{riddles[current].question}</p>

          <div className="riddle-options">
            {riddles[current].options.map((opt) => (
              <button
                key={opt.text}
                className={`riddle-btn ${
                  selected === opt.text
                    ? opt.text === riddles[current].answer
                      ? "correct"
                      : "wrong"
                    : ""
                }`}
                onClick={() => handleSelect(opt)}
                disabled={isLocked && selected === opt.text}
              >
                <span className="option-text">{opt.text}</span>
                <span className="option-icon">{opt.icon}</span>
              </button>
            ))}
          </div>

          <p style={{ marginTop: "15px", fontWeight: "bold" }}>
            Score: {score} / {riddles.length}
          </p>
        </>
      ) : (
        <div className="game-over">
          <h3 style={{ color: "var(--nav-dark)" }}>🎯 Great job!</h3>
          <p>
            You solved {score} out of {riddles.length} riddles!
          </p>
          <button className="riddle-btn" onClick={handleRestart}>
            🔁 Restart Game
          </button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
