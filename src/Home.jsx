import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import clickSoundFile from "/src/assets/sounds/click.mp3";

import poemImg from "/src/assets/poem.jpg";
import quizImg from "/src/assets/quiz.png";
import learningImg from "/src/assets/learning.webp";
import experimentImg from "/src/assets/Experiment.jpeg";
import gkImg from "/src/assets/GK.jpg";
import drawingImg from "/src/assets/drawing.jpg";
import habbitImg from "/src/assets/habbit.jpg";
import funfactImg from "/src/assets/f1.jpg";

export default function Home() {
  const handleClick = () => {
    const sound = new Audio(clickSoundFile);
    sound.currentTime = 0;
    sound.play();
  };

  const cards = [
    {
      title: "Learning",
      img: poemImg,
      path: "/learning",
      description: "Explore fun lessons for kids",
    },
    {
      title: "Quiz",
      img: quizImg,
      path: "/quiz",
      description: "Smart kids love fun quizzes",
    },
    {
      title: "Poems",
      img: learningImg,
      path: "/poem",
      description: "Sing along to happy rhymes",
    },
    {
      title: "Experiments",
      img: experimentImg,
      path: "/experiment",
      description: "Science is fun to try",
    },
    {
      title: "General Knowledge",
      img: gkImg,
      path: "/knowledge",
      description: "Explore the world of knowledge",
    },
    {
      title: "Drawing",
      img: drawingImg,
      path: "/drawing",
      description: "Draw, paint, and have fun",
    },
    {
      title: "Habbits",
      img: habbitImg,
      path: "/habbits",
      description: "Be kind, clean, and happy",
    },
    {
      title: "Leadership principles",
      img: funfactImg,
      path: "/funfact",
      description: "Lead with vision and heart",
    },
  ];

  return (
    <>
      <div className="heading9">
        <h2>PlayGroup - Prep</h2>
      </div>

      <div className="home-container1">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.path}
            className="home-card"
            onClick={handleClick}
          >
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
