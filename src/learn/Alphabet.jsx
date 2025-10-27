import "./style/Alphabet.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Alphabets() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const speakLetter = (letter) => {
    if (!letter) return;
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.lang = "en-US";
    utterance.rate = 0.6;
    window.speechSynthesis.cancel(); 
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (letters.includes(key)) {
        speakLetter(key);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="alphabet-wrapper">
      <h2>Alphabets</h2>
      <div className="alphabets-container">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="alphabet-card"
            onClick={() => speakLetter(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
