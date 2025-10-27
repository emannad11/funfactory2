import { Link } from "react-router-dom";
import "./Games.css";

export default function Games() {
  const card = [
    {
      id: 1,
      title: "Animal Sound Quiz",
      img: "/src/assets/bingo.jpg",
      path: "/mind/animalquiz",
    },
    {
      id: 2,
      title: "Fun Riddles",
      img: "/src/assets/candy.jpg",
      path: "/mind/riddlegame",
    },
    {
      id: 3,
      title: "Slot Machine",
      img: "/src/assets/slot.jpg",
      path: "/mind/slotmachine",
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
    <div className="heading6"> <h2>Mind Games</h2></div>
    <div className="container-cards6">
      {card.map((card) => (
        <Link
          key={card.id}
          to={card.path}
          className="card-cards6"
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
