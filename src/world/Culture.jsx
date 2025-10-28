import { Link } from "react-router-dom";
import "./Culture.css";


import FoodImg from "../assets/foood.jpg";
import LangImg from "../assets/lang.jpg";
import BuildImg from "../assets/build.jpg";

export default function Culture() {
  const card = [
    {
      id: 1,
      title: "Famous Food Of Countries",
      img: FoodImg,
      path: "/world/food",
    },
    {
      id: 2,
      title: "Different Languages of Countries",
      img: LangImg,
      path: "/world/language",
    },
    {
      id: 3,
      title: "Famous Buildings of Countries",
      img: BuildImg,
      path: "/world/building",
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
      <div className="heading3">
        <h2>World of Culture</h2>
      </div>

      <div className="container-cards2">
        {card.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            className="card-cards2"
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
