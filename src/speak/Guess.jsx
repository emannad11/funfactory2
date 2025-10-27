import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";
import "./Guess.css";

const QUESTIONS = [
  {
    clue: "I orbit the Sun and have life on me.",
    answer: "Earth 🌍",
    choices: ["Mars 🔴", "Venus 🟡", "Earth 🌍", "Jupiter 🟠"],
  },
  {
    clue: "I’m a device that lets you talk to people far away.",
    answer: "Mobile Phone 📱",
    choices: ["Laptop 💻", "Mobile Phone 📱", "Television 📺", "Camera 📷"],
  },
  {
    clue: "I help you see things that are very far away.",
    answer: "Telescope 🔭",
    choices: ["Microscope 🔬", "Telescope 🔭", "Camera 📸", "Glasses 👓"],
  },
  {
    clue: "I fly high in the sky but have no wings or engine.",
    answer: "Balloon 🎈",
    choices: ["Kite 🪁", "Balloon 🎈", "Airplane ✈️", "Rocket 🚀"],
  },
  {
    clue: "I have pages and give you knowledge.",
    answer: "Book 📖",
    choices: ["Newspaper 🗞️", "Book 📖", "Notebook 📒", "Tablet 💻"],
  },
  {
    clue: "I’m made of metal and help you travel on roads.",
    answer: "Car 🚗",
    choices: ["Bus 🚌", "Bicycle 🚲", "Car 🚗", "Train 🚆"],
  },
  {
    clue: "I melt when it’s hot but people love me cold.",
    answer: "Ice Cream 🍦",
    choices: ["Chocolate 🍫", "Ice Cream 🍦", "Candy 🍬", "Cake 🎂"],
  },
  {
    clue: "I help plants grow and fall from the sky.",
    answer: "Rain 🌧️",
    choices: ["Snow ❄️", "Rain 🌧️", "Wind 💨", "Sun ☀️"],
  },
  {
    clue: "I protect your head when you ride a bike.",
    answer: "Helmet 🪖",
    choices: ["Hat 🎩", "Cap 🧢", "Helmet 🪖", "Hoodie 🧥"],
  },
  {
    clue: "I am a big cat known as the king of the jungle.",
    answer: "Lion 🦁",
    choices: ["Tiger 🐯", "Lion 🦁", "Leopard 🐆", "Cheetah 🐈‍⬛"],
  },
];

export default function Guess() {
  const [index, setIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);
  const currentQ = QUESTIONS[index];

  const handleChoice = (choice) => {
    if (showNext) return;
    if (choice === currentQ.answer) {
      correctSound.play();
      toast.success("✅ Great job!");
      setScore(score + 1);
      setShowNext(true);
    } else {
      wrongSound.play();
      toast.error("❌ Oops! Try again!");
    }
  };

  const handleNext = () => {
    if (index < QUESTIONS.length - 1) {
      setIndex(index + 1);
      setShowNext(false);
    } else {
      setIsOver(true);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setScore(0);
    setIsOver(false);
    setShowNext(false);
  };

  if (isOver) {
    return (
      <div className="gwam-container">
        <h2 className="gwam-title">🎉 Quiz Complete!</h2>
        <p className="gwam-score">
          Your Score: {score} / {QUESTIONS.length}
        </p>
        <button className="gwam-restart-btn" onClick={handleRestart}>
          🔁 Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="gwam-container">
   
   <div className="gwam-container">
 <div className="gwam-header">
  <h2 className="gwam-title">🧠 Guess What I Am?</h2>
  <button className="gwam-restart-btn" onClick={handleRestart}>🔁 Restart</button>
</div>
      </div>

    
      <p className="gwam-intro">
        Read the clue carefully and choose the correct answer from the options below!  
        Think smart and have fun guessing what it is. 🎯✨
      </p>

      <div className="gwam-info">
        <p>Question {index + 1} / {QUESTIONS.length}</p>
        <p>Score: {score}</p>
      </div>

      <div className="gwam-clue-box">
        <p className="gwam-clue">{currentQ.clue}</p>
      </div>

      <div className="gwam-options1">
        {currentQ.choices.map((choice, i) => (
          <button
            key={i}
            className="gwam-option1"
            onClick={() => handleChoice(choice)}
            disabled={showNext}
          >
            {choice}
          </button>
        ))}
      </div>

      {showNext && (
        <button className="gwam-next-btn" onClick={handleNext}>
          Next ▶
        </button>
      )}

      <ToastContainer position="top-right" />
    </div>
  );
}
