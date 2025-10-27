import { Link } from "react-router-dom";
import memoryImg from "/src/assets/memory.jpg";
import seqImg from "/src/assets/seq.jpg";
import "./Cards.css";

export default function Cards() {
  const cards = [
    {
      id: 1,
      title: "Matching Cards",
      img: memoryImg,
      path: "/cards/matching",
    },
    {
      id: 2,
      title: "Arrange the Sequence",
      img: seqImg,
      path: "/cards/mission",
    },
  ];

  const speakTitle = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="heading">
        <h2>Brain Teasers</h2>
      </div>
      <div className="container-cards">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            className="card-cards"
            onClick={() => speakTitle(card.title)}
          >
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
