import { Link } from "react-router-dom";
import "./Art.css";


import craftImg from "/src/assets/craft.jpg";
import paintImg from "/src/assets/paint.jpg";

export default function ArtActivities() {
  const cards = [
    { id: 1, title: "Paper Craft", img: craftImg, path: "/art/craft" },
    { id: 2, title: "Nature Craft", img: paintImg, path: "/art/nature" },
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
      <div className="heading">
        <h2>Creative Activities</h2>
      </div>
      <div className="container-cards">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            className="card-cards"
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
