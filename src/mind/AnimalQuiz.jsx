import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AnimalQuiz.css";


import CowImg from "../assets/coweating.webp";
import DogImg from "../assets/Dog3.webp";
import DuckImg from "../assets/duck.avif";
import CatImg from "../assets/cat.jpg";
import SheepImg from "../assets/sheepp.webp";
import HorseImg from "../assets/horse.jpeg";
import LionImg from "../assets/lion.jpg";
import ElephantImg from "../assets/elephantt.avif";
import MonkeyImg from "../assets/Brown4.jpg";
import CrowImg from "../assets/croww.jpeg";


import CowSound from "../assets/sounds/cow.mp3";
import DogSound from "../assets/sounds/dog.mp3";
import DuckSound from "../assets/sounds/duck.mp3";
import CatSound from "../assets/sounds/cat.mp3";
import SheepSound from "../assets/sounds/sheep.mp3";
import HorseSound from "../assets/sounds/horse.mp3";
import LionSound from "../assets/sounds/lion.mp3";
import ElephantSound from "../assets/sounds/elephant.mp3";
import MonkeySound from "../assets/sounds/monkey.mp3";
import CrowSound from "../assets/sounds/crow.mp3";
import CorrectSound from "../assets/sounds/correct.mp3";
import NoSound from "../assets/sounds/no.mp3";

const questionsData = [
  { id: 1, name: "Cow", img: CowImg, sound: CowSound, options: ["Cow", "Dog", "Cat", "Sheep"], icons: ["🐄", "🐶", "🐱", "🐑"] },
  { id: 2, name: "Dog", img: DogImg, sound: DogSound, options: ["Lion", "Elephant", "Dog", "Horse"], icons: ["🦁", "🐘", "🐶", "🐴"] },
  { id: 3, name: "Duck", img: DuckImg, sound: DuckSound, options: ["Cow", "Sheep", "Pig", "Duck"], icons: ["🐄", "🐑", "🐷", "🦆"] },
  { id: 4, name: "Cat", img: CatImg, sound: CatSound, options: ["Cat", "Dog", "Cow", "Duck"], icons: ["🐱", "🐶", "🐄", "🦆"] },
  { id: 5, name: "Sheep", img: SheepImg, sound: SheepSound, options: ["Duck", "Dog", "Cat", "Sheep"], icons: ["🦆", "🐶", "🐱", "🐑"] },
  { id: 6, name: "Horse", img: HorseImg, sound: HorseSound, options: ["Horse", "Dog", "Cow", "Monkey"], icons: ["🐴", "🐶", "🐄", "🐒"] },
  { id: 7, name: "Lion", img: LionImg, sound: LionSound, options: ["Lion", "Elephant", "Tiger", "Dog"], icons: ["🦁", "🐘", "🐅", "🐶"] },
  { id: 8, name: "Elephant", img: ElephantImg, sound: ElephantSound, options: ["Elephant", "Lion", "Cow", "Pig"], icons: ["🐘", "🦁", "🐄", "🐷"] },
  { id: 9, name: "Monkey", img: MonkeyImg, sound: MonkeySound, options: ["Monkey", "Cat", "Dog", "Parrot"], icons: ["🐒", "🐱", "🐶", "🦜"] },
  { id: 10, name: "Crow", img: CrowImg, sound: CrowSound, options: ["Crow", "Duck", "Sheep", "Cat"], icons: ["🐦", "🦆", "🐑", "🐱"] },
];

export default function AnimalQuiz({ autoAdvanceDelay = 2000 }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const audioRef = useRef(null);
  const successRef = useRef(null);
  const failRef = useRef(null);
  const q = questionsData[index];

  
  const playSound = (url) => {
    if (!url) return;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(url);
    audioRef.current.play().catch(() => {});
    setSoundPlayed(true);
  };


  const choose = (opt) => {
    if (selected) return;
    setSelected(opt);
    const isCorrect = opt === q.name;

    if (isCorrect) {
      setStatus("correct");
      setScore((s) => s + 1);
      toast.success("🎉 Correct Answer!", {
        position: "top-right",
        autoClose: 1200,
        style: { background: "white", color: "green", fontWeight: "bold" },
      });
      successRef.current?.play().catch(() => {});
      setTimeout(() => goNext(), autoAdvanceDelay);
    } else {
      setStatus("wrong");
      toast.error("❌ Wrong Answer!", {
        position: "top-right",
        autoClose: 1200,
        style: { background: "white", color: "red", fontWeight: "bold" },
      });
      failRef.current?.play().catch(() => {});
      setTimeout(() => {
        setSelected(null);
        setStatus(null);
      }, 900);
    }
  };

  
  const goNext = () => {
    setSelected(null);
    setStatus(null);
    setSoundPlayed(false);
    const next = index + 1;
    if (next >= questionsData.length) {
      toast.success("🏆 Quiz Finished! Great Job!", {
        position: "top-right",
        autoClose: 2000,
        style: { background: "white", color: "green", fontWeight: "bold" },
      });
      setTimeout(() => setFinished(true), 1000);
    } else {
      setIndex(next);
    }
  };

  
  const restart = () => {
    toast.info("🔁 Quiz Restarted!", {
      position: "top-right",
      autoClose: 1200,
      style: { background: "white", color: "black", fontWeight: "bold" },
    });
    setTimeout(() => {
      setIndex(0);
      setScore(0);
      setFinished(false);
      setSelected(null);
      setStatus(null);
      setSoundPlayed(false);
    }, 800);
  };

  
  if (finished) {
    return (
      <div className="aq-page">
        <h2 className="aq-title">Animal Sound Quiz 🐾</h2>
        <div className="aq-container finished">
          <h3>🎉 Quiz Finished! 🎉</h3>
          <p>Your Score: {score} / {questionsData.length}</p>
          <button className="aq-reset" onClick={restart}>Restart Quiz 🔄</button>
        </div>
        <ToastContainer />
      </div>
    );
  }

  
  return (
    <div className="aq-page">
      <h2 className="aq-title">Animal Sound Quiz 🐾</h2>
      <p className="aq-intro">Tap on the animal picture to hear its sound 🎧. Then choose the correct animal name from the options below!</p>

      <div className="aq-container">
        <div
          className={`aq-image-box ${status === "correct" ? "cleared" : ""} ${status === "wrong" ? "shake" : ""}`}
          onClick={() => playSound(q.sound)}
          role="button"
        >
          <img src={q.img} alt={q.name} className="aq-image" />
          {!soundPlayed && <div className="aq-overlay">Tap image to hear sound ▶️</div>}
          {status === "correct" && <div className="aq-ok-badge">✓</div>}
        </div>

        <div className="aq-options-a">
          {q.options.map((opt, i) => {
            const isSelected = selected === opt;
            const wrong = isSelected && status === "wrong";
            const right = isSelected && status === "correct";
            return (
              <button
                key={opt}
                className={`aq-option-a ${wrong ? "wrong" : ""} ${right ? "right" : ""}`}
                onClick={() => choose(opt)}
                disabled={status === "correct"}
              >
                <span className="aq-icon">{q.icons[i]}</span>
                <span className="aq-label">{opt}</span>
              </button>
            );
          })}
        </div>

        <div className="aq-footer-a">
          <div>Score: {score}</div>
        </div>
      </div>

    
      <audio ref={successRef} src={CorrectSound} preload="auto" />
      <audio ref={failRef} src={NoSound} preload="auto" />
      <ToastContainer position="top-right" />
    </div>
  );
}
