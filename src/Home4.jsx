import { Link } from "react-router-dom";
import { useRef } from "react";
import "./App.css";
import "./Style3.css";

import clickSoundFile from "/src/assets/sounds/click.mp3";

import brainImg from "/src/assets/braint.jpg";
import speakImg from "/src/assets/speak.jpg";
import entertainmentImg from "/src/assets/enter.jpg";
import cultureImg from "/src/assets/culture.jpg";
import treasureImg from "/src/assets/treasure.jpg";
import digitalImg from "/src/assets/digital.jpg";

export default function Home4() {
  const clickSoundRef = useRef(new Audio(clickSoundFile));

  const handleCardClick = () => {
    const sound = clickSoundRef.current;
    sound.currentTime = 0;
    sound.play();
  };

  const cards = [
    { title: "Brain Teasers", img: brainImg, path: "/cards", description: "Test your brain." },
    { title: "Speak & Share", img: speakImg, path: "/speak", description: "Speak and Share" },
    { title: "Entertainment", img: entertainmentImg, path: "/story5/entertainment", description: "Imagination blooms here" },
    { title: "World of Cultures", img: cultureImg, path: "/world/culture", description: "Let's learn about our culture." },
    { title: "Seedling Society", img: treasureImg, path: "/maze/exp4", description: "Let's plant for the Planet" },
    { title: "Grid & Find", img: digitalImg, path: "/digital/play", description: "Play, laugh, and win" },
  ];

  return (
    <>
      <div className="heading9">
        <h2>Grade 5 - 6</h2>
      </div>

      <div className="home-container3">
        {cards.map((card, index) => (
          <Link key={index} to={card.path} className="home-card3" onClick={handleCardClick}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
