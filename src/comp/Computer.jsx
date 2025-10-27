import { Link } from "react-router-dom";
import "./Comp.css";
import fallingImg from "/src/assets/falling1.jpg";
import typingImg from "/src/assets/typing.jpg";
import codingImg from "/src/assets/coding.jpeg";

export default function Computer() {
  const card = [
    { id: 1, title: "Falling Letters Game", img: fallingImg, path: "/comp/fallingletters" },
    { id: 2, title: "Typing Speed Game", img: typingImg, path: "/comp/typing" },
    { id: 3, title: "Move Turtle Game", img: codingImg, path: "/comp/coding" },
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
      <div className="heading3">
        <h2>Fun Focus</h2>
      </div>

      <div className="container-cards5">
        {card.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            className="card-cards5"
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
