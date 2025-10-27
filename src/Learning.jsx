import "./Style.css";
import { Link } from "react-router-dom";

import abcImg from "/src/assets/abc.webp";
import animalImg from "/src/assets/animal.jpg";
import birdImg from "/src/assets/birds.avif";
import colorImg from "/src/assets/color.jpg";
import countingImg from "/src/assets/counting.webp";
import fruitsImg from "/src/assets/fruits.jpg";
import shapeImg from "/src/assets/shape.png";
import vegetableImg from "/src/assets/vegetable.jpg";

export default function Learning() {
  const cards = [
    { id: 1, title: "Alphabets", img: abcImg, path: "/learn/alphabet" },
    { id: 2, title: "Animals", img: animalImg, path: "/learn/animal" },
    { id: 3, title: "Birds", img: birdImg, path: "/learn/bird" },
    { id: 4, title: "Colors", img: colorImg, path: "/learn/color" },
    { id: 5, title: "Counting", img: countingImg, path: "/learn/count" },
    { id: 6, title: "Fruits", img: fruitsImg, path: "/learn/fruit" },
    { id: 7, title: "Shapes", img: shapeImg, path: "/learn/shape" },
    { id: 8, title: "Vegetables", img: vegetableImg, path: "/learn/vegetable" },
  ];

  const speakLetter = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="heading9">
        <h2>Learning</h2>
      </div>
      <div className="containerlearn">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            className="cardlearn"
            onClick={() => speakLetter(card.title)}
          >
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
