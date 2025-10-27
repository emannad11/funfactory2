import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style/Count.css";

export default function Count() {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const itemsPerPage = 25;
  const totalPages = Math.ceil(numbers.length / itemsPerPage);
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNumbers = numbers.slice(startIndex, endIndex);

  const speakNumber = (num) => {
    if (!num) return;
    const utterance = new SpeechSynthesisUtterance(num.toString());
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const pressedDigits = useRef("");
  const timerRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      if (isNaN(key) || key === " ") return;

      pressedDigits.current += key;

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        const num = parseInt(pressedDigits.current);
        if (num >= 1 && num <= 100) {
          speakNumber(num);
        }
        pressedDigits.current = ""; 
      }, 1000);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="counting-container">   
      <h2>Counting</h2>
      <div className="numbers-grid">
        {currentNumbers.map((num) => (
          <div
            key={num}
            className="number-card"
            onClick={() => speakNumber(num)}
          >
            {num}
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="nav-btn"
        >
          ⬅ Back
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="nav-btn"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
