import { useState, useEffect } from "react";
import "./Phonics.css";

export default function Phonics() {
  const phonicsData = [
    { letter: "A", word: "Apple", img: "/src/assets/aa.png" },
    { letter: "B", word: "Ball", img: "/src/assets/bb.png" },
    { letter: "C", word: "Cat", img: "/src/assets/cc.png" },
    { letter: "D", word: "Dog", img: "/src/assets/dd.png" },
    { letter: "E", word: "Elephant", img: "/src/assets/ee.png" },
    { letter: "F", word: "Fish", img: "/src/assets/ff.png" },
    { letter: "G", word: "Grapes", img: "/src/assets/gg.png" },
    { letter: "H", word: "Hat", img: "/src/assets/hh.png" },
    { letter: "I", word: "Ice", img: "/src/assets/ii.png" },
    { letter: "J", word: "Jar", img: "/src/assets/jj.png" },
    { letter: "K", word: "Kite", img: "/src/assets/kk.png" },
    { letter: "L", word: "Lion", img: "/src/assets/ll.png" },
    { letter: "M", word: "Monkey", img: "/src/assets/mm.png" },
    { letter: "N", word: "Nest", img: "/src/assets/nn.png" },
    { letter: "O", word: "Orange", img: "/src/assets/oo.png" },
    { letter: "P", word: "Pen", img: "/src/assets/pp.png" },
    { letter: "Q", word: "Queen", img: "/src/assets/qq.png" },
    { letter: "R", word: "Rabbit", img: "/src/assets/rr.png" },
    { letter: "S", word: "Sun", img: "/src/assets/ss.png" },
    { letter: "T", word: "Tiger", img: "/src/assets/tt.png" },
    { letter: "U", word: "Umbrella", img: "/src/assets/uu.png" },
    { letter: "V", word: "Van", img: "/src/assets/vv.png" },
    { letter: "W", word: "Watch", img: "/src/assets/ww.png" },
    { letter: "X", word: "Xylophone", img: "/src/assets/xx.png" },
    { letter: "Y", word: "Yak", img: "/src/assets/yy.png" },
    { letter: "Z", word: "Zebra", img: "/src/assets/zz.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const current = phonicsData[currentIndex];

  const playSound = (letter, word) => {
    if (isSpeaking) return;
    speechSynthesis.cancel();
    const letterUtterance = new SpeechSynthesisUtterance(letter);
    letterUtterance.lang = "en-US";
    letterUtterance.rate = 0.8;
    setIsSpeaking(true);
    letterUtterance.onend = () => {
      const wordUtterance = new SpeechSynthesisUtterance(`${letter} as in ${word}`);
      wordUtterance.lang = "en-US";
      wordUtterance.rate = 0.8;
      wordUtterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(wordUtterance);
    };
    speechSynthesis.speak(letterUtterance);
  };

  useEffect(() => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [currentIndex]);

  return (
    <div className="phonics-container">
      <h2>Learn Phonics!</h2>
      <div className="phonics-card">
        <div className="text-section">
          <div className="letter">{current.letter}</div>
          <div className="word">{current.word}</div>
          <button
            className="play-button"
            onClick={() => playSound(current.letter, current.word)}
            disabled={isSpeaking}
          >
            🔊 Hear Pronunciation
          </button>
          <div className="navigation">
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev - 1 + phonicsData.length) % phonicsData.length)
              }
              disabled={isSpeaking}
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % phonicsData.length)}
              disabled={isSpeaking}
            >
              Next →
            </button>
          </div>
        </div>
        <div className="image">
          <img src={current.img} alt={current.word} />
        </div>
      </div>
    </div>
  );
}
