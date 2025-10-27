import { Link } from "react-router-dom";
import "./Share.css";

export default function Share() {
  const card = [
    {
      id: 1,
      title: "Guess What I Am ?",
      img: "/src/assets/speakk.jpg",
      path: "/speak/guess",
    },
    {
      id: 2,
      title: "Two Truth & One Lie",
      img: "/src/assets/speakkk.jpg",
      path: "/speak/twister",
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
    <div className="heading"> <h2>Speak & Share</h2></div>
    <div className="container-cards1">
      {card.map((card) => (
        <Link
          key={card.id}
          to={card.path}
          className="card-cards1"
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
