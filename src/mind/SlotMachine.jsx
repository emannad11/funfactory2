import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SlotMachine.css";

export default function SlotMachine() {
  const candies = ["🍭", "🍬", "🍫", "🍡", "🍪", "🍩", "🍧", "🍿"];
  const [reels, setReels] = useState(["❓", "❓", "❓"]);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [gifUrl, setGifUrl] = useState(null);
  const [gifText, setGifText] = useState("");
  const [tryCount, setTryCount] = useState(0);
  const gifTimerRef = useRef(null);

  const winGifs = [
    "https://media0.giphy.com/media/11sBLVxNs7v6WA/giphy.gif",
    "https://media2.giphy.com/media/Oi6tJtKNThC6I/giphy.gif",
    "https://media4.giphy.com/media/10UeedrT5MIfPG/giphy.gif",
    "https://media2.giphy.com/media/znreqlPeGdikLLB2C4/giphy.gif",
  ];

  const loseGifs = [
    "https://media0.giphy.com/media/wlZbYS5GZthOgHhrgf/giphy.gif",
    "https://media4.giphy.com/media/YyECUhkxzUTDI0I5bx/giphy.gif",
    "https://media1.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif",
  ];

  const winTexts = ["Sweet Jackpot!", "Yay! You Won", "Candy Party!", "Sugar Rush Victory"];
  const loseTexts = ["Oopsie!", "Try Again", "Better Luck Next Time", " Nice Try "];

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    if (gifTimerRef.current) clearTimeout(gifTimerRef.current);
    setGifUrl(null);
    setGifText("");

    const spinTimes = [1500, 2000, 2500];
    const finalReels = [null, null, null];

    spinTimes.forEach((time, idx) => {
      const intervalTime = 100;
      let elapsed = 0;

      const interval = setInterval(() => {
        const randomCandy = candies[Math.floor(Math.random() * candies.length)];
        setReels((prev) => {
          const newReels = [...prev];
          newReels[idx] = randomCandy;
          return newReels;
        });

        finalReels[idx] = randomCandy;
        elapsed += intervalTime;

        if (elapsed >= time) {
          clearInterval(interval);

          if (idx === spinTimes.length - 1) {
            let isWin = false;

            if (tryCount >= 2) {
              isWin = true;
              setTryCount(0);
              const luckyCandy = candies[Math.floor(Math.random() * candies.length)];
              finalReels[0] = finalReels[1] = finalReels[2] = luckyCandy;
              setReels([luckyCandy, luckyCandy, luckyCandy]);
            } else {
              isWin = finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2];
            }

            if (isWin) {
              const randomGif = winGifs[Math.floor(Math.random() * winGifs.length)];
              const randomText = winTexts[Math.floor(Math.random() * winTexts.length)];
              setGifUrl(randomGif);
              setGifText(randomText);
              setResult("win");
              toast.success(`Jackpot! You got ${finalReels[0]} x3!`, {
                className: "custom-toast success-toast",
              });
            } else {
              const randomGif = loseGifs[Math.floor(Math.random() * loseGifs.length)];
              const randomText = loseTexts[Math.floor(Math.random() * loseTexts.length)];
              setGifUrl(randomGif);
              setGifText(randomText);
              setResult("lose");
              toast.info("Try again!", {
                className: "custom-toast info-toast",
              });
              setTryCount((prev) => prev + 1);
            }

            setSpinning(false);
          }
        }
      }, intervalTime);
    });
  };

  return (
    <div className="slot-page">
      {result === "lose" && gifUrl && (
        <div className="side-gif fixed-left">
          <img src={gifUrl} alt="Lose" />
          <p>{gifText}</p>
        </div>
      )}

      <div className="slot-container">
        <h2 className="slot-title">Candy Slot Machine 🍭</h2>
<p className="slot-intro">
  Press the "Spin!" button 🎰 to spin the reels.<br />
  Match all three candies to win a sweet jackpot! 🍬🍭🍫
</p>

        <div className="slot-reels">
          {reels.map((candy, idx) => (
            <div key={idx} className={`slot-reel ${spinning ? "spinning" : ""}`}>
              {candy}
            </div>
          ))}
        </div>
        <button className="spin-button" onClick={handleSpin} disabled={spinning}>
          {spinning ? <div className="spinner"></div> : "Spin!"}
        </button>
      </div>

      {result === "win" && gifUrl && (
        <div className="side-gif fixed-right">
          <img src={gifUrl} alt="Win" />
          <p>{gifText}</p>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}
