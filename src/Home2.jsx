import { Link } from "react-router-dom";
import { useRef } from "react";
import "./App.css";


import clickSoundFile from "/src/assets/sounds/click.mp3";


import gr1Img from "/src/assets/GR1.jpg";
import gr2Img from "/src/assets/GR2.jpg";
import gr3Img from "/src/assets/GR3.jpg";
import gr4Img from "/src/assets/GR4.jpg";
import gr6Img from "/src/assets/GR6.jpg";
import gr7Img from "/src/assets/GR7.jpg";
import gr8Img from "/src/assets/GR8.jpg";
import mannersImg from "/src/assets/manners.jpg";

export default function Home2() {
  const clickSound = useRef(new Audio(clickSoundFile));

  const handleCardClick = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  const cards = [
    { title: "Learning", img: gr3Img, path: "/learning1-2", description: "Explore fun lessons for kids" },
    { title: "Phonics-(accent)", img: gr6Img, path: "/phonics/Phonics", description: "Smart kids love to learn" },
    { title: "Short Stories", img: gr2Img, path: "/shortstories/ShortStories", description: "Stories teach manners" },
    { title: "Experiments", img: gr7Img, path: "/exp2/Experiment2", description: "Science is fun to try" },
    { title: "Math Magic", img: gr8Img, path: "/math/mathmagic", description: "Explore the world of Math" },
    { title: "Drawing", img: gr1Img, path: "/drawing2/draw2", description: "Draw, paint, and have fun" },
    { title: "Manners", img: mannersImg, path: "/manner/manners", description: "Be kind, clean, and happy" },
    { title: "Fun Puzzle", img: gr4Img, path: "/game/puzzle", description: "Play and Learn" },
  ];

  return (
    <>
      <div className="heading9"><h2>Grade 1 - 2</h2></div>
      <div className="home-container">
        {cards.map((card, index) => (
          <Link key={index} to={card.path} className="home-card" onClick={handleCardClick}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
