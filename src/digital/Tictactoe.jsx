import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Tic.css";

import moveSoundFile from "/src/assets/sounds/move.mp3";
import winSoundFile from "/src/assets/sounds/win.mp3";
import drawSoundFile from "/src/assets/sounds/draw.mp3";

const LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function checkWinner(board) {
  for (const [a,b,c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a,b,c] };
    }
  }
  if (board.every(cell => cell)) return { winner: "draw" };
  return null;
}

function getAvailable(board) {
  return board.map((v,i) => v ? null : i).filter(v => v !== null);
}

function computerMove(board, aiSymbol, humanSymbol) {
  for (const i of getAvailable(board)) {
    const copy = board.slice(); copy[i] = aiSymbol;
    if (checkWinner(copy)?.winner === aiSymbol) return i;
  }
  for (const i of getAvailable(board)) {
    const copy = board.slice(); copy[i] = humanSymbol;
    if (checkWinner(copy)?.winner === humanSymbol) return i;
  }
  if (board[4] === null) return 4;
  const corners = [0,2,6,8].filter(i => board[i]===null);
  if (corners.length) return corners[Math.floor(Math.random()*corners.length)];
  const avail = getAvailable(board);
  return avail[Math.floor(Math.random()*avail.length)];
}

export default function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [mode, setMode] = useState("pvp");
  const [scores, setScores] = useState({ X:0, O:0, draws:0 });
  const [winningLine, setWinningLine] = useState([]);
  const [confettiBurst, setConfettiBurst] = useState(false);

  const moveSound = typeof Audio !== "undefined" ? new Audio(moveSoundFile) : null;
  const winSound = typeof Audio !== "undefined" ? new Audio(winSoundFile) : null;
  const drawSound = typeof Audio !== "undefined" ? new Audio(drawSoundFile) : null;

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      if (result.winner === "draw") {
        toast.info("It's a draw 🤝");
        setScores(s => ({...s, draws: s.draws + 1}));
        setWinningLine([]);
        drawSound?.play();
      } else {
        toast.success(`${result.winner} wins! 🎉`);
        setScores(s => ({...s, [result.winner]: s[result.winner] + 1}));
        setWinningLine(result.line);
        setConfettiBurst(true);
        winSound?.play();
        setTimeout(() => setConfettiBurst(false), 2200);
      }
    }
  }, [board]);

  useEffect(() => {
    const result = checkWinner(board);
    if (mode === "cpu" && !xIsNext && !result) {
      const timer = setTimeout(() => {
        const idx = computerMove(board, "O", "X");
        setBoard(prev => {
          if (prev[idx]) return prev;
          const next = prev.slice(); next[idx] = "O"; return next;
        });
        setXIsNext(true);
        moveSound?.play();
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [board, xIsNext, mode]);

  const handleClick = (i) => {
    const result = checkWinner(board);
    if (board[i] || result) return;
    if (mode === "cpu" && !xIsNext) return;
    const next = board.slice();
    next[i] = xIsNext ? "X" : "O";
    setBoard(next);
    setXIsNext(!xIsNext);
    moveSound?.play();
  };

  const handleRestart = (resetScores=false) => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinningLine([]);
    setConfettiBurst(false);
    toast.info("New game started ✨");
    if (resetScores) setScores({ X:0, O:0, draws:0 });
  };

  const toggleMode = (m) => {
    setMode(m);
    handleRestart();
  };

  const cellClass = (i) => {
    let cls = "tt-cell";
    cls += board[i] ? " filled" : " empty";
    if (winningLine.includes(i)) cls += " win";
    return cls;
  };

  const confettiParticles = confettiBurst ? Array.from({length: 24}) : [];

  return (
    <div className="playful-root">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="playful-card">
        <div className="playful-top">
          <div className="title-block-left">
            <div>
              <h2 className="title">🎲 Tic Tac Toe</h2>
              <p className="instructions">Take turns placing Xs and Os on the grid.</p>
            </div>
          </div>

          <div className="controls-right">
            <div className="modes">
              <button
                className={mode === "pvp" ? "mode-btn active" : "mode-btn"}
                onClick={() => toggleMode("pvp")}
              >2 Player</button>
              <button
                className={mode === "cpu" ? "mode-btn active" : "mode-btn"}
                onClick={() => toggleMode("cpu")}
              >Vs Computer</button>
            </div>
            <div className="btn-row">
              <button className="small-btn" onClick={() => handleRestart(false)}>Restart</button>
              <button className="small-btn ghost" onClick={() => handleRestart(true)}>Reset All</button>
            </div>
          </div>
        </div>

        <div className="scoreboard">
          <div>X: <span className="score-pill">{scores.X}</span></div>
          <div>O: <span className="score-pill">{scores.O}</span></div>
          <div>Draws: <span className="score-pill">{scores.draws}</span></div>
        </div>

        <div className="board-grid">
          {board.map((v,i) => (
            <button key={i} className={cellClass(i)} onClick={() => handleClick(i)}>
              <span className={`mark ${v ? v.toLowerCase() : ""}`}>
                {v === "X" ? "❌" : v === "O" ? "⭕" : ""}
              </span>
            </button>
          ))}
        </div>
        {confettiBurst && (
          <div className="confetti-wrap">
            {confettiParticles.map((_, idx) => {
              const left = Math.random() * 90 + 2;
              const delay = Math.random() * 0.6;
              const dur = 1.6 + Math.random() * 0.9;
              const size = 6 + Math.random() * 14;
              const rotate = Math.random() * 360;
              const colorPool = ["#ff7f50","#3a7bd5","#ffd580","#79d28e","#ff99cc","#8ec5ff"];
              const bg = colorPool[Math.floor(Math.random()*colorPool.length)];
              return (
                <span
                  key={idx}
                  className="confetti"
                  style={{
                    left:`${left}%`,
                    animationDelay:`${delay}s`,
                    animationDuration:`${dur}s`,
                    width:`${size}px`,
                    height:`${size}px`,
                    background:bg,
                    transform:`rotate(${rotate}deg)`
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
