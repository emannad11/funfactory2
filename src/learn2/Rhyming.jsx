import { useState } from "react";
import "./Rhyme.css";


import CatImg from "../assets/Cat4.webp";
import HatImg from "../assets/hat.jpg";
import SunImg from "../assets/sunn.png";
import RunImg from "../assets/run.jpg";
import DogImg from "../assets/Dog5.jpg";
import FrogImg from "../assets/frog.jpg";
import TreeImg from "../assets/treee.jpg";
import BeeImg from "../assets/beee.jpeg";
import CarImg from "../assets/car.jpg";
import StarImg from "../assets/St3.jpg";
import BoatImg from "../assets/boat.jpg";
import GoatImg from "../assets/goat.jpg";
import FoxImg from "../assets/fox.jpg";
import BoxImg from "../assets/box.jpg";
import MouseImg from "../assets/mousee.jpeg";
import HouseImg from "../assets/house.jpg";
import RainImg from "../assets/rainn.jpg";
import TrainImg from "../assets/train.jpg";
import ChairImg from "../assets/chair.webp";
import BearImg from "../assets/Brown2.jpg";

export default function Rhyming() {
  const rhymingData = [
    { word1: "Cat", word2: "Hat", img1: CatImg, img2: HatImg },
    { word1: "Sun", word2: "Run", img1: SunImg, img2: RunImg },
    { word1: "Dog", word2: "Frog", img1: DogImg, img2: FrogImg },
    { word1: "Tree", word2: "Bee", img1: TreeImg, img2: BeeImg },
    { word1: "Car", word2: "Star", img1: CarImg, img2: StarImg },
    { word1: "Boat", word2: "Goat", img1: BoatImg, img2: GoatImg },
    { word1: "Fox", word2: "Box", img1: FoxImg, img2: BoxImg },
    { word1: "Mouse", word2: "House", img1: MouseImg, img2: HouseImg },
    { word1: "Rain", word2: "Train", img1: RainImg, img2: TrainImg },
    { word1: "Chair", word2: "Bear", img1: ChairImg, img2: BearImg },
  ];

  const [index, setIndex] = useState(0);
  const current = rhymingData[index];

  const nextWord = () => setIndex((index + 1) % rhymingData.length);
  const prevWord = () => setIndex((index - 1 + rhymingData.length) % rhymingData.length);

  const speakWords = () => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      `${current.word1} rhymes with ${current.word2}`
    );
    utterance.lang = "en-US";
    utterance.rate = 0.6;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="rhyming-container">
      <div className="header-row">
        <h2>🎵 Rhyming Words</h2>
        <button className="play-button" onClick={speakWords}>
          🔊 Say It
        </button>
      </div>

      <div className="rhyming-card">
        <div className="images">
          <div className="image-item">
            <img src={current.img1} alt={current.word1} />
            <p>{current.word1}</p>
          </div>
          <span className="rhymes-with">rhymes with</span>
          <div className="image-item">
            <img src={current.img2} alt={current.word2} />
            <p>{current.word2}</p>
          </div>
        </div>

        <div className="navigation">
          <button onClick={prevWord}>⟵ Previous</button>
          <button onClick={nextWord}>Next ⟶</button>
        </div>
      </div>
    </div>
  );
}
