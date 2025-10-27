import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";
import "./Twister.css";

export default function Twister() {
  const questions = [
    {
      statements: ["Elephants can swim.", "Penguins live in the desert.", "Giraffes have long necks."],
      lieIndex: 1,
    },
    {
      statements: ["The sun is a star.", "Cats can fly.", "Fish live in water."],
      lieIndex: 1,
    },
    {
      statements: ["Bananas are yellow.", "Apples grow underground.", "Carrots are orange."],
      lieIndex: 1,
    },
    {
      statements: ["Birds can lay eggs.", "Dogs can talk like humans.", "Frogs can jump."],
      lieIndex: 1,
    },
    {
      statements: ["Ice is cold.", "Fire is hot.", "Rain is dry."],
      lieIndex: 2,
    },
    {
      statements: ["Cows give milk.", "Stars shine at night.", "Rocks can sing."],
      lieIndex: 2,
    },
    {
      statements: ["Butterflies can fly.", "Fish live in trees.", "Ants are tiny insects."],
      lieIndex: 1,
    },
    {
      statements: ["Snow is white.", "Grass is blue.", "The sky can look blue."],
      lieIndex: 1,
    },
    {
      statements: ["Monkeys can climb trees.", "Bats can fly.", "Turtles can jump very high."],
      lieIndex: 2,
    },
    {
      statements: ["Honey comes from bees.", "Sharks live in forests.", "Birds have feathers."],
      lieIndex: 1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const playSound = (soundFile) => {
    const sound = new Audio(soundFile);
    sound.play();
  };

  const handleClick = (index) => {
    if (answeredCorrectly || gameOver) return;

    if (index === questions[current].lieIndex) {
      toast.success("Correct! You found the lie!");
      playSound(correctSoundFile);
      setScore((prev) => prev + 1);
      setAnsweredCorrectly(true);

      setTimeout(() => {
        if (current + 1 < questions.length) {
          setCurrent((prev) => prev + 1);
          setAnsweredCorrectly(false);
        } else {
          setGameOver(true);
        }
      }, 1500);
    } else {
      toast.error("Nope! Try again!");
      playSound(wrongSoundFile);
    }
  };

  const restartGame = () => {
    setCurrent(0);
    setScore(0);
    setGameOver(false);
    setAnsweredCorrectly(false);
  };

  if (gameOver) {
    return (
      <div className="truth-lie-container">
        <h2>Game Over!</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <button className="restart-btn1" onClick={restartGame}>🔁 Play Again</button>
        <ToastContainer position="top-right" />
      </div>
    );
  }

return (
  <div className="truth-lie-container">
  
    <div className="title-row">
      <h2>🧠 Two Truths and a Lie</h2>
      <button className="restart-btn1" onClick={restartGame}>🔁 Restart</button>
    </div>

    <p className="game-intro">
      Read the three statements carefully! 🧐  
      Two of them are true, and one is a lie — can you spot which one it is? 💡
    </p>

    <p>Question {current + 1} of {questions.length}</p>

    <div className="statements">
      {questions[current].statements.map((text, i) => (
        <button key={i} onClick={() => handleClick(i)}>
          {text}
        </button>
      ))}
    </div>

    <p className="score">Score: {score}</p>
    <ToastContainer position="top-right" />
  </div>
);

}
