import { Link } from "react-router-dom";
import "./Enter.css";


import AdventureImg from "../assets/adventure.jpg";
import ProphetImg from "../assets/action.jpg";
import HorrorImg from "../assets/horror.jpg";

export default function Enter() {
  const card = [
    {
      id: 1,
      title: "Adventure Stories",
      img: AdventureImg,
      path: "/story5/adventure",
    },
    {
      id: 2,
      title: "Prophet Stories",
      img: ProphetImg,
      path: "/story5/islamic",
    },
    {
      id: 3,
      title: "Horror Stories",
      img: HorrorImg,
      path: "/story5/horror",
    },
  ];

  // ✅ Function to speak the story category
  const speakLetter = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel(); // stop previous speech
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="heading3">
        <h2>Entertainment</h2>
      </div>

      <div className="container-cards4">
        {card.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="card-cards4"
            onClick={() => speakLetter(item.title)}
          >
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
