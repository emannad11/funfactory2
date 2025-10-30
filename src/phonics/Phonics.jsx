import { useState, useEffect } from "react";
import "./Phonics.css";

import AImg from "../assets/aa.png";
import BImg from "../assets/bb.png";
import CImg from "../assets/cc.png";
import DImg from "../assets/dd.png";
import EImg from "../assets/ee.png";
import FImg from "../assets/ff.png";
import GImg from "../assets/gg.png";
import HImg from "../assets/hh.png";
import IImg from "../assets/ii.png";
import JImg from "../assets/jj.png";
import KImg from "../assets/kk.png";
import LImg from "../assets/ll.png";
import MImg from "../assets/mm.png";
import NImg from "../assets/nn.png";
import OImg from "../assets/oo.png";
import PImg from "../assets/pp.png";
import QImg from "../assets/qq.png";
import RImg from "../assets/rr.png";
import SImg from "../assets/ss.png";
import TImg from "../assets/tt.png";
import UImg from "../assets/uu.png";
import VImg from "../assets/vv.png";
import WImg from "../assets/ww.png";
import XImg from "../assets/xx.png";
import YImg from "../assets/yy.png";
import ZImg from "../assets/zz.png";

export default function Phonics() {
  const phonicsData = [
    { letter: "A", word: "Apple", img: AImg },
    { letter: "B", word: "Ball", img: BImg },
    { letter: "C", word: "Cat", img: CImg },
    { letter: "D", word: "Dog", img: DImg },
    { letter: "E", word: "Elephant", img: EImg },
    { letter: "F", word: "Fish", img: FImg },
    { letter: "G", word: "Grapes", img: GImg },
    { letter: "H", word: "Hat", img: HImg },
    { letter: "I", word: "Ice", img: IImg },
    { letter: "J", word: "Jar", img: JImg },
    { letter: "K", word: "Kite", img: KImg },
    { letter: "L", word: "Lion", img: LImg },
    { letter: "M", word: "Monkey", img: MImg },
    { letter: "N", word: "Nest", img: NImg },
    { letter: "O", word: "Orange", img: OImg },
    { letter: "P", word: "Pen", img: PImg },
    { letter: "Q", word: "Queen", img: QImg },
    { letter: "R", word: "Rabbit", img: RImg },
    { letter: "S", word: "Sun", img: SImg },
    { letter: "T", word: "Tiger", img: TImg },
    { letter: "U", word: "Umbrella", img: UImg },
    { letter: "V", word: "Van", img: VImg },
    { letter: "W", word: "Watch", img: WImg },
    { letter: "X", word: "Xylophone", img: XImg },
    { letter: "Y", word: "Yak", img: YImg },
    { letter: "Z", word: "Zebra", img: ZImg },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const current = phonicsData[currentIndex];

  const playSound = (letter, word) => {
    if (isSpeaking) return;
    speechSynthesis.cancel();

    const letterUtterance = new SpeechSynthesisUtterance(letter);
    letterUtterance.lang = "en-US";
    letterUtterance.rate = 0.6;

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
