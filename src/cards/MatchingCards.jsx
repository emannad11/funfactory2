import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MatchingCards.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";

const cardsArray = [
  { id: 1, emoji: "🍎" },
  { id: 2, emoji: "🍌" },
  { id: 3, emoji: "🍇" },
  { id: 4, emoji: "🍉" },
  { id: 5, emoji: "🍓" },
  { id: 6, emoji: "🍒" },
  { id: 7, emoji: "🥝" },
  { id: 8, emoji: "🍍" },
];

export default function MatchingCards() {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);

  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);

  const shuffleCards = () => {
    return [...cardsArray, ...cardsArray]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
  };

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      correctSound.play();
      toast.success(`You Won! Score: ${score}`, {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  }, [matched, cards, score]);

  const handleClick = (card) => {
    if (
      selected.length === 2 ||
      selected.includes(card.uniqueId) ||
      matched.includes(card.uniqueId)
    )
      return;

    const newSelected = [...selected, card.uniqueId];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const firstCard = cards.find((c) => c.uniqueId === newSelected[0]);
      const secondCard = cards.find((c) => c.uniqueId === newSelected[1]);

      if (firstCard.id === secondCard.id) {
        correctSound.play();
        setMatched([...matched, firstCard.uniqueId, secondCard.uniqueId]);
        setScore((prev) => prev + 1);
        toast.success("Matched!", {
          position: "top-right",
          autoClose: 800,
          theme: "light",
        });
        setTimeout(() => setSelected([]), 500);
      } else {
        wrongSound.play();
        toast.error("Try Again!", {
          position: "top-right",
          autoClose: 800,
          theme: "light",
        });
        setTimeout(() => setSelected([]), 1000);
      }
    }
  };

  const handleRestart = () => {
    setCards(shuffleCards());
    setSelected([]);
    setMatched([]);
    setScore(0);
  };

  return (
    <div className="game-container">
      <div className="heading-row">
        <h2>Matching Cards</h2>
        <button className="restart-btn" onClick={handleRestart}>🔄 Restart</button>
      </div>

      <p className="game-intro">
        Look carefully and remember the fruit emojis! 🍎🍌🍇  
        Tap two cards to find matching pairs — match them all to win! 🌟
      </p>

      <div className="cards-grid">
        {cards.map((card) => (
          <div
            key={card.uniqueId}
            className={`card ${
              selected.includes(card.uniqueId) || matched.includes(card.uniqueId)
                ? "flipped"
                : ""
            }`}
            onClick={() => handleClick(card)}
          >
            <div className="front">?</div>
            <div className="back">{card.emoji}</div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}
