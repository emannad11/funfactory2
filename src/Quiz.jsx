import { Link } from "react-router-dom";

import alphaImg from "/src/assets/alpha1.jpg";
import animalImg from "/src/assets/animal1.jpg";
import birdImg from "/src/assets/birds2.jpg";
import colorsImg from "/src/assets/colors.png";
import countingImg from "/src/assets/count.jpg";
import fruitsImg from "/src/assets/fruitss.png";
import shapesImg from "/src/assets/shapes.jpg";
import vegetablesImg from "/src/assets/vege.jpg";

export default function Quiz() {
  const cards = [
    { id: 1, title: "Alphabets", img: alphaImg, path: "/quiz/alphabets" },
    { id: 2, title: "Animals", img: animalImg, path: "/quiz/animals" },
    { id: 3, title: "Birds", img: birdImg, path: "/quiz/birds" },
    { id: 4, title: "Colors", img: colorsImg, path: "/quiz/colors" },
    { id: 5, title: "Counting", img: countingImg, path: "/quiz/counting" },
    { id: 6, title: "Fruits", img: fruitsImg, path: "/quiz/fruits" },
    { id: 7, title: "Shapes", img: shapesImg, path: "/quiz/shapes" },
    { id: 8, title: "Vegetables", img: vegetablesImg, path: "/quiz/vegetables" },
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
        <h2>Quiz</h2>
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
