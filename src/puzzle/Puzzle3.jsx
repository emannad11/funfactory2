import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Puzzle.css";


import PuzzleImg1 from "../assets/puzzle.jpg";
import PuzzleImg2 from "../assets/puzzle2.jpg";
import PuzzleImg3 from "../assets/puzzle3.jpg";
import PuzzleImg4 from "../assets/puzzle4.jpg";

export default function Puzzle() {
  
  const imageOptions = [PuzzleImg1, PuzzleImg2, PuzzleImg3, PuzzleImg4];

  const gridSize = 3;
  const [selectedImage, setSelectedImage] = useState(null);
  const [pieces, setPieces] = useState([]);
  const [dragging, setDragging] = useState(null);
  const [completed, setCompleted] = useState(false);
  const toastShown = useRef(false);

  useEffect(() => {
    if (!selectedImage) return;
    const initialPieces = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      initialPieces.push(i);
    }
    setPieces(initialPieces.sort(() => Math.random() - 0.5));
    setCompleted(false);

    toast.info("🧩 Puzzle loaded! Start arranging the pieces.", {
      className: "white-toast info-toast",
      position: "top-right",
      autoClose: 1500,
    });
  }, [selectedImage]);

  const handleDragStart = (index) => {
    setDragging(index);
  };

  const handleDrop = (index) => {
    if (dragging === null) return;

    const newPieces = [...pieces];
    [newPieces[index], newPieces[dragging]] = [
      newPieces[dragging],
      newPieces[index],
    ];
    setPieces(newPieces);
    setDragging(null);

    if (newPieces.every((v, i) => v === i)) {
      setCompleted(true);
      toast.success("🎉 Congratulations! You completed the puzzle!", {
        className: "white-toast success-toast",
        position: "top-right",
        autoClose: 2500,
      });
    } else {
      toast.warn("Nice move! Keep going!", {
        className: "white-toast warn-toast",
        position: "top-right",
        autoClose: 800,
      });
    }
  };

  const restartPuzzle = () => {
    if (!selectedImage) return;
    const resetPieces = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      resetPieces.push(i);
    }
    setPieces(resetPieces.sort(() => Math.random() - 0.5));
    setCompleted(false);
    toast.info("🔄 Puzzle restarted!", {
      className: "white-toast info-toast",
      position: "top-right",
      autoClose: 1000,
    });
  };

  return (
    <div className="puzzle-container">
      <ToastContainer />

      {/* Header */}
      <div className="puzzle-header">
        <h2>🧩 Jigsaw Puzzle Game</h2>
        <button className="restart-btn" onClick={restartPuzzle}>
          🔄 Restart
        </button>
      </div>

      <p className="para">Select an image on the right and complete the puzzle!</p>

      <div className="puzzle-layout">
        {selectedImage && (
          <div
            className="puzzle-grid"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 120px)`,
              gridTemplateRows: `repeat(${gridSize}, 120px)`,
            }}
          >
            {pieces.map((piece, i) => (
              <div
                key={i}
                className="puzzle-piece"
                draggable
                onDragStart={() => handleDragStart(i)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(i)}
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: `${gridSize * 120}px ${gridSize * 120}px`,
                  backgroundPosition: `${-(piece % gridSize) * 120}px ${
                    -Math.floor(piece / gridSize) * 120
                  }px`,
                }}
              ></div>
            ))}
          </div>
        )}

        <div className="image-options">
          {imageOptions.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Option ${idx + 1}`}
              className={`option-img ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
