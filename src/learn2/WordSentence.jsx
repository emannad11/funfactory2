import { useState } from "react";
import "./WordSentence.css";


import CatImg from "../assets/Cat3.jpg";
import DogImg from "../assets/Dog2.jpg";
import BallImg from "../assets/redball.webp";
import SunImg from "../assets/sunn.png";
import AppleImg from "../assets/Apple.jpeg";
import FishImg from "../assets/fish.jpg";
import BirdImg from "../assets/birds1.webp";
import LionImg from "../assets/lion.jpg";
import TreeImg from "../assets/treee.jpg";
import CarImg from "../assets/carr.jpg";

export default function WordSentence() {
  const sentencesData = [
    { word: "Cat", sentence: "The cat is sleeping.", img: CatImg },
    { word: "Dog", sentence: "The dog runs fast.", img: DogImg },
    { word: "Ball", sentence: "I have a red ball.", img: BallImg },
    { word: "Sun", sentence: "The sun is shining.", img: SunImg },
    { word: "Apple", sentence: "An apple is red.", img: AppleImg },
    { word: "Fish", sentence: "The fish swims in water.", img: FishImg },
    { word: "Bird", sentence: "The bird can fly.", img: BirdImg },
    { word: "Lion", sentence: "The lion is the king of the jungle.", img: LionImg },
    { word: "Tree", sentence: "A tree gives us shade.", img: TreeImg },
    { word: "Car", sentence: "The car is very fast.", img: CarImg },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = sentencesData[currentIndex];

  const playSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="sentences-container">
      <h2>Word Sentences</h2>

      <div className="sentences-card">
        <div className="image">
          <img src={current.img} alt={current.word} />
        </div>

        <div className="text-section">
          <div className="word">{current.word}</div>
          <div className="sentence">"{current.sentence}"</div>

          <button className="play-button" onClick={() => playSentence(current.sentence)}>
            🔊 Hear Sentence
          </button>

          <div className="navigation">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + sentencesData.length) % sentencesData.length
                )
              }
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % sentencesData.length)
              }
            >
              Next → 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
