import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Coding.css";

import hitSound from "/src/assets/sounds/no.mp3";
import moveSound from "/src/assets/sounds/move.mp3";

export default function Coding() {
  const GRID_SIZE = 8;
  const CELL_SIZE = 50;

  const start = { x: 50, y: 350 };
  const end = { x: 350, y: 50 };

  const [x, setX] = useState(start.x);
  const [y, setY] = useState(start.y);
  const [obstacles, setObstacles] = useState([]);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    const newObstacles = [];
    while (newObstacles.length < 12) {
      const left = Math.floor(Math.random() * GRID_SIZE) * CELL_SIZE;
      const top = Math.floor(Math.random() * GRID_SIZE) * CELL_SIZE;
      if (
        (left === start.x && top === start.y) ||
        (left === end.x && top === end.y)
      )
        continue;
      if (!newObstacles.some((o) => o.left === left && o.top === top)) {
        newObstacles.push({ left, top });
      }
    }
    setObstacles(newObstacles);
  }, []);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const showToast = (msg, type = "info") => {
    if (msg === lastMessage) return;
    setLastMessage(msg);

    if (type === "success") {
      toast.success(msg, {
        className: "white-toast",
        style: { backgroundColor: "white", color: "black", fontWeight: "bold" },
        iconTheme: { primary: "green", secondary: "white" },
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
      });
    } else if (type === "error") {
      toast.error(msg, {
        style: { backgroundColor: "red", color: "white", fontWeight: "bold" },
        iconTheme: { primary: "white", secondary: "red" },
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
      });
    } else {
      toast.warn(msg, {
        style: { backgroundColor: "white", color: "black", fontWeight: "bold" },
        iconTheme: { primary: "goldenrod", secondary: "white" },
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
      });
    }
  };

  const checkObstacle = (nx, ny) =>
    obstacles.some(
      (o) => Math.abs(o.left - nx) < 40 && Math.abs(o.top - ny) < 40
    );

  const handleKeyPress = (e) => {
    let newX = x;
    let newY = y;

    if (e.key === "ArrowUp") newY -= CELL_SIZE;
    else if (e.key === "ArrowDown") newY += CELL_SIZE;
    else if (e.key === "ArrowLeft") newX -= CELL_SIZE;
    else if (e.key === "ArrowRight") newX += CELL_SIZE;
    else return;

    if (newX < 0 || newY < 0 || newX > 400 || newY > 400) return;

    if (checkObstacle(newX, newY)) {
      showToast("Oops! You hit a stone!", "error");
      playSound(hitSound);
      return;
    }

    setX(newX);
    setY(newY);
    playSound(moveSound);

    if (newX === end.x && newY === end.y) {
      showToast("You reached the goal!", "success");
    } else {
      showToast("Good move!", "success");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  });

  const resetTurtle = () => {
    setX(start.x);
    setY(start.y);
    setLastMessage("");
    showToast("Back to Start!", "info");
  };

  return (
    <div className="turtle-container">
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
      <div className="heading-row">
        <h2 className="game-title">Turtle Maze Game</h2>
        <button className="reset-btn-t" onClick={resetTurtle}>
          🔄 Restart
        </button>
      </div>
      <p className="game-title-p">
        Use Arrow keys to reach the goal without hitting stones!
      </p>

      <div className="play-area">
        <div className="start">Start</div>
        <div className="end">🏁</div>
        {obstacles.map((o, i) => (
          <div key={i} className="obstacle" style={{ left: o.left, top: o.top }}>
            🪨
          </div>
        ))}
        <div className="turtle" style={{ left: `${x}px`, top: `${y}px` }}>
          🐢
        </div>
      </div>
    </div>
  );
}
