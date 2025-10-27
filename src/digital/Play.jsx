import { Link } from "react-router-dom";
import ticTacToeImg from "/src/assets/craft.jpg";
import wordSearchImg from "/src/assets/paint.jpg";
import "./Play.css";

export default function Play() {
  const card = [
    {
      id: 1,
      title: "Tic-Tac-Toe",
      img: ticTacToeImg,
      path: "/digital/tictactoe",
    },
    {
      id: 2,
      title: "Word Search",
      img: wordSearchImg,
      path: "/digital/wordsearch",
    },
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
        <h2>Grid & Find</h2>
      </div>
      <div className="container-cards3">
        {card.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            className="card-cards3"
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
