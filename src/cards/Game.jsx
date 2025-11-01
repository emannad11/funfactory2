import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Game.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";

const sequencesData = [
  ["🍎", "🍌", "🍇", "🍒", "🍉"],
  ["⬛", "⬜", "🟥", "🟦", "🟩", "🟨"],
  ["😀", "😂", "😍", "😎", "🤩", "😜", "🥳"],
  ["🔴", "🟢", "🔵", "🟡", "🟣"],
  ["1️⃣", "3️⃣", "4️⃣", "6️⃣", "7️⃣", "8️⃣"],
  ["🍉", "😄", "🍓", "🤩", "🍇", "🍍", "😍"],
];

export default function Game() {
  const [level, setLevel] = useState(0);
  const [sequence, setSequence] = useState(sequencesData[0]);
  const [shuffled, setShuffled] = useState([]);
  const [selected, setSelected] = useState([]);
  const [showSequence, setShowSequence] = useState(true);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(90);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  const speakSequence = (seq) => {
    const utterance = new SpeechSynthesisUtterance(seq.join(" "));
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (!gameStarted || showSequence || gameOver) return;
    if (timer === 0) {
      toast.error("⏰ Time's up! Game Over!");
      setGameOver(true);
      return;
    }
    const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(countdown);
  }, [showSequence, timer, gameOver, gameStarted]);

  const showSequenceFor9s = (seq) => {
    setSequence(seq);
    setShowSequence(true);
    setSelected([]);
    speakSequence(seq);
    setTimeout(() => {
      setShowSequence(false);
      setShuffled(shuffleArray([...seq]));
    }, 9000);
  };

  const handleStart = () => {
    toast.info("🎮 Game Started!");
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimer(90);
    setLevel(0);
    showSequenceFor9s(sequencesData[0]);
  };

  const handleRestart = () => {
    toast.info("🔁 Restarting...");
    setGameOver(false);
    setScore(0);
    setTimer(90);
    setLevel(0);
    setGameStarted(true);
    showSequenceFor9s(sequencesData[0]);
  };

  const handleSelect = (item) => {
    if (selected.includes(item)) return;
    const newSelected = [...selected, item];
    setSelected(newSelected);

    if (newSelected.length === sequence.length) {
      const isCorrect = newSelected.join("") === sequence.join("");
      if (isCorrect) {
        correctSound.play();
        toast.success("🎉 Correct! Next sequence!");
        setScore((s) => s + 10);
        if (level < sequencesData.length - 1) {
          const next = level + 1;
          setTimeout(() => {
            setLevel(next);
            showSequenceFor9s(sequencesData[next]);
          }, 1000);
        } else {
          toast.success("🏆 You completed all sequences!");
          setTimeout(() => setGameOver(true), 1500);
        }
      } else {
        wrongSound.play();
        toast.error("❌ Wrong order! Try again.");
        setTimeout(() => setSelected([]), 800);
      }
    }
  };

  const progressWidth = (timer / 90) * 100;

  return (
    <div className="arrange-container">
      <div className="top-controls">
        <h2>Arrange the Sequence</h2>
        <div className="btn-row">
          <button className="start-btn" onClick={handleStart}>▶️ Start</button>
          <button className="restart-btn1" onClick={handleRestart}>🔄 Restart</button>
        </div>
      </div>

      <p className="game-intro">
        First start the game then Look carefully and remember the order of the emojis! 👀
        <br />
        When the sequence disappears, tap them in the <b>same order</b>! 🌟
      </p>

      {showSequence && (
        <div className="sequence-box">
          <div className="sequence-show">{sequence.join(" ")}</div>
        </div>
      )}

      {gameStarted && !gameOver && (
        <>
          <h3>Level {level + 1} / {sequencesData.length}</h3>
          <h4>⭐ Score: {score}</h4>
          <div className="timer-container">
            <div className={`timer-bar ${timer <= 10 ? "low-time" : ""}`} style={{ width: `${progressWidth}%` }}></div>
          </div>
          <p>⏱️ Time Left: {timer}s</p>

          {!showSequence && (
            <>
              <div className="options-container">
                {shuffled.map((item, i) => (
                  <button
                    key={i}
                    className={`option-btn ${selected.includes(item) ? "selected" : ""}`}
                    onClick={() => handleSelect(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="selected-display">
                {selected.map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </>
          )}
        </>
      )}

      {gameOver && (
        <div className="game-over">
          <h2>🏁 Game Over!</h2>
          <p>🎯 Final Score: {score}</p>
          
        </div>
      )}

      <ToastContainer position="top-right" />
    </div>
  );
}
