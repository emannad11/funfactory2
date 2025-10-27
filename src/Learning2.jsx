import "./Style2.css";
import { Link } from "react-router-dom";

import learnImg from "/src/assets/learn.jpg";
import wordImg from "/src/assets/word.jpg";
import rhymeImg from "/src/assets/ryhme.jpg";
import sentenceImg from "/src/assets/sentence.jpg";

export default function Learning2() {
  const cards = [
    { id: 1, title: "Missing Letters", img: learnImg, path: "/learn2/missingletter" },
    { id: 2, title: "Word Builder", img: wordImg, path: "/learn2/wordbuilder" },
    { id: 3, title: "Rhyming Words", img: rhymeImg, path: "/learn2/rhymingwords" },
    { id: 4, title: "Word Sentences", img: sentenceImg, path: "/learn2/wordsentence" },
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
        <h2>Learning</h2>
      </div>

      <div className="containerkids">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            className="cardkids"
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
