import { Link } from "react-router-dom";
import { useRef } from "react";
import "./App.css";
import "./Style3.css";


import clickSoundFile from "/src/assets/sounds/click.mp3";


import artImg from "/src/assets/class3.jpg";
import envImg from "/src/assets/env.jpg";
import compImg from "/src/assets/falling.jpg";
import expImg from "/src/assets/exp.jpg";
import puzzleImg from "/src/assets/puzz.jpg";
import mindImg from "/src/assets/money.jpg";

export default function Home3() {
  const clickSoundRef = useRef(new Audio(clickSoundFile));

  const handleCardClick = () => {
    const sound = clickSoundRef.current;
    sound.currentTime = 0;
    sound.play();
  };

  const cards = [
    { title: "Creative Activities", img: artImg, path: "/art/artactivities", description: "Draw, paint, and have fun." },
    { title: "Science & Environment", img: envImg, path: "/env/enviornment", description: "Nature, Trees, Clean, Green, Earth." },
    { title: "Fun Focus", img: compImg, path: "/comp/computer", description: "Let’s play and learn" },
    { title: "Experiments", img: expImg, path: "/exp3/Experiment3", description: "Science is fun to try." },
    { title: "Puzzle", img: puzzleImg, path: "/puzzle/puzzle", description: "Solve, think, match, and win." },
    { title: "Mind Games", img: mindImg, path: "/mind/games", description: "Play, learn, laugh, and win" },
  ];

  return (
    <>
      <div className="heading9">
        <h2>Grade 3 - 4</h2>
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
