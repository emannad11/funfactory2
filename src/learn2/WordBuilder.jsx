import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./WordBuilder.css";

// ✅ Import all images
import CatImg from "../assets/Cat2.jpg";
import DogImg from "../assets/Dog3.webp";
import SunImg from "../assets/sunn.png";
import HenImg from "../assets/hen5.jpg";
import BeeImg from "../assets/beee.jpeg";
import CarImg from "../assets/car.jpg";
import BoxImg from "../assets/box.jpg";
import HatImg from "../assets/hat.jpg";
import BagImg from "../assets/bag.webp";
import FoxImg from "../assets/fox.jpg";
import JarImg from "../assets/jar.avif";
import PenImg from "../assets/pen.webp";

// ✅ Import sounds
import CorrectSound from "../assets/sounds/correct.mp3";
import WrongSound from "../assets/sounds/no.mp3";

export default function WordBuilder() {
  const words = [
    { word: "CAT", options: ["C", "B", "T", "A", "D"], img: CatImg },
    { word: "DOG", options: ["D", "I", "G", "H", "O"], img: DogImg },
    { word: "SUN", options: ["S", "M", "N", "U", "P"], img: SunImg },
    { word: "HEN", options: ["H", "N", "E", "L", "K"], img: HenImg },
    { word: "BEE", options: ["E", "E", "B", "C", "D"], img: BeeImg },
    { word: "CAR", options: ["C", "A", "B", "D", "R"], img: CarImg },
    { word: "BOX", options: ["B", "O", "X", "C", "D"], img: BoxImg },
    { word: "HAT", options: ["H", "C", "T", "A", "I"], img: HatImg },
    { word: "BAG", options: ["B", "A", "G", "C", "D"], img: BagImg },
    { word: "FOX", options: ["F", "J", "X", "O", "H"], img: FoxImg },
    { word: "JAR", options: ["J", "A", "R", "K", "L"], img: JarImg },
    { word: "PEN", options: ["P", "E", "N", "C", "D"], img: PenImg },
  ];

  const correctSound = new Audio(CorrectSound);
  const wrongSound = new Audio(WrongSound);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [builtWord, setBuiltWord] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentWord = words[currentWordIndex];

  const handleLetter = (letter) => {
    const letterUtterance = new SpeechSynthesisUtterance(letter);
    speechSynthesis.speak(letterUtterance);

    const nextWord = builtWord + letter;
    setBuiltWord(nextWord);

    if (nextWord.length === currentWord.word.length) {
      setTimeout(() => {
        if (nextWord === currentWord.word) {
          correctSound.currentTime = 0;
          correctSound.play().catch(() => {});
          toast.success("Correct! 🎉", { autoClose: 1200 });
          setScore((prev) => prev + 1);
          if (currentWordIndex + 1 < words.length) {
            setTimeout(() => {
              setBuiltWord("");
              setCurrentWordIndex((prev) => prev + 1);
            }, 1000);
          } else {
            setFinished(true);
          }
        } else {
          wrongSound.currentTime = 0;
          wrongSound.play().catch(() => {});
          toast.error("Try Again ❌", { autoClose: 1200 });
          setBuiltWord("");
        }
      }, 300);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key.toUpperCase();
      if (!finished && currentWord.options.includes(key)) handleLetter(key);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [builtWord, currentWordIndex, finished]);

  const restartGame = () => {
    setCurrentWordIndex(0);
    setBuiltWord("");
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="word-builder-container">
        <h2>Well Done! 🎉</h2>
        <p className="score-text">
          Your score: {score} / {words.length}
        </p>
        <div className="button-row">
          <button className="back-btnnn" onClick={restartGame}>
            🔄 Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="word-builder-container">
      <div className="header-row">
        <h2>Build the Word!</h2>
        <div className="button-row">
          <button className="back-btnnn" onClick={restartGame}>
            🔄 Restart
          </button>
        </div>
      </div>

      <p className="instructionss">
        Click the letters to build the word according to the image.
      </p>

      <div className="word-image">
        <img src={currentWord.img} alt={currentWord.word} />
      </div>

      <div className="built-word">
        {builtWord.split("").map((letter, index) => (
          <span key={index} className="letter">
            {letter}
          </span>
        ))}
      </div>

      <div className="options">
        {currentWord.options.map((letter, index) => (
          <button key={index} onClick={() => handleLetter(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}
