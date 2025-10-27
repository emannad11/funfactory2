import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Puzzle.css";

export default function Puzzle() {
  const [numbers, setNumbers] = useState(shuffleArray([1,2,3,4,5,6,7,8,9]));
  const [nextNumber, setNextNumber] = useState(1);

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const handleNumberSelect = (num) => {
    if (num === nextNumber) {
      setNextNumber(nextNumber + 1);
      setNumbers(prev => prev.filter(n => n !== num));

      if (num === 9) {
        toast.success("✅ Congratulations! You completed the puzzle!", { autoClose: 2000 });
      }
    } else {
      toast.error("❌ Try the correct number!", { autoClose: 1500 });
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([1,2,3,4,5,6,7,8,9]));
    setNextNumber(1);
    toast.info("🔄 Puzzle restarted!", { autoClose: 1500 });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyNum = parseInt(event.key);
      if (!isNaN(keyNum) && keyNum >= 1 && keyNum <= 9) {
        handleNumberSelect(keyNum);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextNumber, numbers]);

  return (
    <div className="puzzle-container">
      <div className="puzzle-header-row">
        <h1 className="puzzle-heading">Fun Puzzle</h1>
        <button className="restart-btn" onClick={handleRestart}>🔄 Restart</button>
      </div>

      <p className="puzzle-instruction">
        Select the numbers in sequence (1 to 9) or press them on your keyboard!
      </p>

      <div className="puzzle-grid">
        {numbers.map(num => (
          <button 
            key={num} 
            onClick={() => handleNumberSelect(num)} 
            className="number-btn"
          >
            {num}
          </button>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}
