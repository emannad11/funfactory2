import { Link } from "react-router-dom";
import "./Enter.css";

export default function Enter() {
  const card = [
    {
      id: 1,
      title: "Adventure Stories",
      img: "/src/assets/adventure.jpg",
      path: "/story5/adventure",
    },
    {
      id: 2,
      title: "Prophet Stories",
      img: "/src/assets/action.jpg",
      path: "/story5/islamic",
    },
    {
      id: 3,
      title: "Horror Stories",
      img: "/src/assets/horror.jpg",
      path: "/story5/horror",
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
    <div className="heading3"> <h2>Entertainment</h2></div>
    <div className="container-cards4">
      {card.map((card) => (
        <Link
          key={card.id}
          to={card.path}
          className="card-cards4"
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
