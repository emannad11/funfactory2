import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./WordSearch.css";
import foundSoundFile from "/src/assets/sounds/correct.mp3";
import clickSoundFile from "/src/assets/sounds/click.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";

export default function WordSearch() {
  const gridSize = 10;
  const wordsToFind = ["CAT", "DOG", "RAIN", "BOOK", "TREE", "SUN", "BIRD", "MOON", "STAR", "CAR"];

  const [grid, setGrid] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [foundCells, setFoundCells] = useState([]);
  const [wrongCells, setWrongCells] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [timer, setTimer] = useState(180);
  const [isRunning, setIsRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverShown, setGameOverShown] = useState(false);

  const foundSound = new Audio(foundSoundFile);
  const clickSound = new Audio(clickSoundFile);
  const wrongSound = new Audio(wrongSoundFile);

  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  useEffect(() => {
    if (isRunning && timer > 0 && foundWords.length < wordsToFind.length) {
      const t = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(t);
    }

    if (!gameOverShown) {
      if (timer === 0) {
        setIsRunning(false);
        setGameOver(true);
        setGameOverShown(true);
        toast.error("⏰ Time's up! Restart to play again.", { position: "top-right", autoClose: 2000 });
      } else if (foundWords.length === wordsToFind.length) {
        setIsRunning(false);
        setGameOver(true);
        setGameOverShown(true);
        toast.success("🏆 You found all the words!", { position: "top-right", autoClose: 2000 });
      }
    }
  }, [timer, isRunning, foundWords, gameOverShown]);

  const generateGrid = () => {
    let grid = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(""));
    const directions = [
      [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1],
      [0, -1], [-1, -1], [-1, 0],
    ];

    const placeWord = (word) => {
      for (let attempt = 0; attempt < 200; attempt++) {
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const r = row + dir[0] * i;
          const c = col + dir[1] * i;
          if (r < 0 || r >= gridSize || c < 0 || c >= gridSize || (grid[r][c] && grid[r][c] !== word[i])) {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            const r = row + dir[0] * i;
            const c = col + dir[1] * i;
            grid[r][c] = word[i];
          }
          return true;
        }
      }
      return false;
    };

    wordsToFind.forEach(placeWord);

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (!grid[r][c]) grid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
    return grid;
  };

  const isStraightLine = (cells) => {
    if (cells.length < 2) return true;
    const [r0, c0] = cells[0];
    const [r1, c1] = cells[1];
    const dr = r1 - r0;
    const dc = c1 - c0;
    return cells.every(([r, c], i, arr) => {
      if (i === 0) return true;
      const [pr, pc] = arr[i - 1];
      return r - pr === dr && c - pc === dc;
    });
  };

  const selectCell = (r, c) => {
    if (!isRunning || gameOver) return;
    setSelectedCells((prev) => {
      const newCells = [...prev, [r, c]];
      if (!isStraightLine(newCells)) return prev;
      if (!prev.some(([rr, cc]) => rr === r && cc === c)) {
        try {
          clickSound.play();
        } catch {}
        return newCells;
      }
      return prev;
    });
  };

  const handleSelectionEnd = () => {
    setIsSelecting(false);
    if (selectedCells.length < 2 || !isRunning || gameOver) return;

    const word = selectedCells.map(([r, c]) => grid[r][c]).join("");
    const reversed = word.split("").reverse().join("");
    const match = wordsToFind.find((w) => w === word || w === reversed);

    if (match && !foundWords.includes(match)) {
      setFoundWords((prev) => [...prev, match]);
      setFoundCells((prev) => [...prev, ...selectedCells]);
      toast.success(`✅ Found "${match}"!`, { autoClose: 1200 });
      try {
        foundSound.play();
      } catch {}
    } else {
      setWrongCells(selectedCells);
      try {
        wrongSound.play();
      } catch {}
      setTimeout(() => setWrongCells([]), 700);
    }
    setSelectedCells([]);
  };

  const restartGame = () => {
    setFoundWords([]);
    setFoundCells([]);
    setSelectedCells([]);
    setWrongCells([]);
    setTimer(180);
    setGrid(generateGrid());
    setGameOver(false);
    setGameOverShown(false);
    setIsRunning(true);
    toast.info("🔄 Game Restarted!", { position: "top-right", autoClose: 1200 });
  };

  const startGame = () => {
    if (isRunning) {
      toast.info("🕹️ Game already running!", { position: "top-right", autoClose: 1000 });
      return;
    }

    if (gameOver) {
      setFoundWords([]);
      setFoundCells([]);
      setSelectedCells([]);
      setWrongCells([]);
      setTimer(180);
      setGrid(generateGrid());
      setGameOver(false);
      setGameOverShown(false);
      toast.success("🚀 New Game Started!", { position: "top-right", autoClose: 1000 });
      setIsRunning(true);
      return;
    }

    setIsRunning(true);
    toast.success("🚀 Game Started! Find the words!", { position: "top-right", autoClose: 1000 });
  };

  const handleCellStart = (r, c) => {
    if (!isRunning || gameOver) return;
    setIsSelecting(true);
    setSelectedCells([[r, c]]);
  };

  const handleCellMove = (r, c) => {
    if (isSelecting && isRunning && !gameOver) selectCell(r, c);
  };

  return (
    <div className="wordsearch-container" onMouseUp={handleSelectionEnd} onTouchEnd={handleSelectionEnd}>
      <div className="header">
        <div className="header-top">
          <h2>Word Search Adventure</h2>
          <div className="header-buttons">
            <button className="start-btn" onClick={startGame}>▶️ Start</button>
            <button className="restart-btnnn1" onClick={restartGame}>🔄 Restart</button>
          </div>
        </div>

        <div className="header-info">
          <p>🧩 Find all the words before time runs out!</p>
          <div className="stats-inline">
            <p>⏰ Time: {timer}s</p>
            <p>💎 Found: {foundWords.length}/{wordsToFind.length}</p>
          </div>
        </div>
      </div>

      <div className="word-list-row">
        <h3>Find These Words:</h3>
        <div className="word-items">
          {wordsToFind.map((word) => (
            <span key={word} className={`word-tag ${foundWords.includes(word) ? "found-word" : ""}`}>
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="game-area">
        <div className="grid">
          {grid.map((row, rIndex) => (
            <div key={rIndex} className="row">
              {row.map((letter, cIndex) => {
                const isSelected = selectedCells.some(([sr, sc]) => sr === rIndex && sc === cIndex);
                const isFound = foundCells.some(([fr, fc]) => fr === rIndex && fc === cIndex);
                const isWrong = wrongCells.some(([wr, wc]) => wr === rIndex && wc === cIndex);
                return (
                  <div
                    key={cIndex}
                    className={`cell ${isSelected ? "selected" : ""} ${isFound ? "found" : ""} ${isWrong ? "wrong" : ""}`}
                    onMouseDown={() => handleCellStart(rIndex, cIndex)}
                    onMouseEnter={() => handleCellMove(rIndex, cIndex)}
                    onTouchStart={() => handleCellStart(rIndex, cIndex)}
                    onTouchMove={(e) => {
                      e.preventDefault();
                      const touch = e.touches[0];
                      const target = document.elementFromPoint(touch.clientX, touch.clientY);
                      if (target && target.dataset.row && target.dataset.col) {
                        const r = parseInt(target.dataset.row);
                        const c = parseInt(target.dataset.col);
                        handleCellMove(r, c);
                      }
                    }}
                    data-row={rIndex}
                    data-col={cIndex}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}
