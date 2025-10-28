import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";


import AImg from "../assets/A.jpg";
import FrogImg from "../assets/frog.webp";
import CatImg from "../assets/catt.jpg";
import DogImg from "../assets/dogg.webp";
import MonkeyImg from "../assets/monkey.webp";
import EggImg from "../assets/eggg.png";
import NoseImg from "../assets/nose.png";
import GrapesImg from "../assets/grapess.jpg";
import IcecreamImg from "../assets/icecream.png";
import SunImg from "../assets/sun..png";


import AppleIcon from "../assets/icons/apple.png";
import CatIcon from "../assets/icons/cat.png";
import DogIcon from "../assets/icons/dog.png";
import EggIcon from "../assets/icons/egg.png";
import ZooIcon from "../assets/icons/zoo.png";
import YoyoIcon from "../assets/icons/yoyo.png";
import DeliveryIcon from "../assets/icons/delivery.png";
import BananaIcon from "../assets/icons/bananas.png";
import LemonIcon from "../assets/icons/lemon.png";
import KeyIcon from "../assets/icons/key-chain.png";
import MonkeyIcon from "../assets/icons/monkey.png";
import HenIcon from "../assets/icons/hen.png";
import GrapeIcon from "../assets/icons/grape.png";
import TomatoIcon from "../assets/icons/tomato.png";
import JugIcon from "../assets/icons/jug.png";
import FishIcon from "../assets/icons/fish.png";
import SunnyIcon from "../assets/icons/sunny.png";
import WatermelonIcon from "../assets/icons/watermelon.png";
import IceIcon from "../assets/icons/ice-cream.png";

import CorrectSound from "../assets/sounds/correct.mp3";
import WrongSound from "../assets/sounds/no.mp3";
import NextSound from "../assets/sounds/next.mp3";

export default function Alphabets() {
  const questions = [
    {
      id: 1,
      question: "Which letter is this?",
      img: AImg,
      options: [
        { text: "A", icon: AppleIcon },
        { text: "C", icon: CatIcon },
        { text: "D", icon: DogIcon },
        { text: "E", icon: EggIcon },
      ],
      answer: "A",
    },
    {
      id: 2,
      question: "Which letter is this?",
      img: FrogImg,
      options: [
        { text: "Z", icon: ZooIcon },
        { text: "Y", icon: YoyoIcon },
        { text: "F", icon: GrapeIcon },
        { text: "V", icon: DeliveryIcon },
      ],
      answer: "F",
    },
    {
      id: 3,
      question: "Which letter is this?",
      img: CatImg,
      options: [
        { text: "Z", icon: ZooIcon },
        { text: "C", icon: CatIcon },
        { text: "A", icon: AppleIcon },
        { text: "B", icon: BananaIcon },
      ],
      answer: "C",
    },
    {
      id: 4,
      question: "Which letter is this?",
      img: DogImg,
      options: [
        { text: "D", icon: DogIcon },
        { text: "L", icon: LemonIcon },
        { text: "E", icon: EggIcon },
        { text: "K", icon: KeyIcon },
      ],
      answer: "D",
    },
    {
      id: 5,
      question: "Which letter is this?",
      img: MonkeyImg,
      options: [
        { text: "M", icon: MonkeyIcon },
        { text: "Y", icon: YoyoIcon },
        { text: "Z", icon: ZooIcon },
        { text: "W", icon: WatermelonIcon },
      ],
      answer: "M",
    },
    {
      id: 6,
      question: "Which letter is this?",
      img: EggImg,
      options: [
        { text: "C", icon: CatIcon },
        { text: "A", icon: AppleIcon },
        { text: "D", icon: DogIcon },
        { text: "E", icon: EggIcon },
      ],
      answer: "E",
    },
    {
      id: 7,
      question: "Which letter is this?",
      img: NoseImg,
      options: [
        { text: "N", icon: NoseImg },
        { text: "H", icon: HenIcon },
        { text: "G", icon: GrapeIcon },
        { text: "K", icon: KeyIcon },
      ],
      answer: "N",
    },
    {
      id: 8,
      question: "Which letter is this?",
      img: GrapesImg,
      options: [
        { text: "T", icon: TomatoIcon },
        { text: "J", icon: JugIcon },
        { text: "G", icon: GrapeIcon },
        { text: "F", icon: FishIcon },
      ],
      answer: "G",
    },
    {
      id: 9,
      question: "Which letter is this?",
      img: IcecreamImg,
      options: [
        { text: "A", icon: AppleIcon },
        { text: "B", icon: BananaIcon },
        { text: "E", icon: EggIcon },
        { text: "I", icon: IceIcon },
      ],
      answer: "I",
    },
    {
      id: 10,
      question: "Which letter is this?",
      img: SunImg,
      options: [
        { text: "S", icon: SunnyIcon },
        { text: "W", icon: WatermelonIcon },
        { text: "V", icon: DeliveryIcon },
        { text: "A", icon: AppleIcon },
      ],
      answer: "S",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const correctSound = new Audio(CorrectSound);
  const wrongSound = new Audio(WrongSound);
  const nextSound = new Audio(NextSound);

  const handleAnswer = (option) => {
    if (answers[current] !== undefined) return;
    setAnswers({ ...answers, [current]: option });

    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
      correctSound.play();
    } else {
      wrongSound.play();
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setAnswers({});
    setScore(0);
    setFinished(false);
  };

  const goNext = () => {
    if (answers[current] === undefined) {
      toast.info("Please select an option 😊", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
    nextSound.play();
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
  };

  const handleBack = () => {
    if (current === 0) {
      toast.warn("Back to Home Page 🏠", {
        position: "top-left",
        autoClose: 1000,
        theme: "colored",
        onClose: () => (window.location.href = "/"),
      });
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="quiz-container-alp">
      <ToastContainer />

      {!finished ? (
        <div key={current} className="question-card-alp animate-question-alp">
          <h2>
            Question {current + 1} of {questions.length}
          </h2>
          <p className="question-text-alp">{questions[current].question}</p>

          <img src={questions[current].img} alt="question" className="quiz-img-alp" />

          <div className="options-alp">
            {questions[current].options.map((opt, index) => {
              const isCorrect = opt.text === questions[current].answer;
              const isSelected = answers[current] === opt.text;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(opt.text)}
                  className={`option-btn-alp ${
                    answers[current] !== undefined
                      ? isCorrect
                        ? "correct"
                        : isSelected
                        ? "wrong"
                        : ""
                      : ""
                  }`}
                >
                  <span className="option-text-alp">{opt.text}</span>
                  {opt.icon && <img src={opt.icon} alt="icon" className="icon" />}
                </button>
              );
            })}
          </div>

          <div className="nav-buttons-alp">
            <button onClick={handleBack} className="back-btn-alp">
              ⬅ Back
            </button>
            <button onClick={goNext} className="next-btn-alp">
              Next ➡
            </button>
          </div>
        </div>
      ) : (
        <div className="result-alp animate-question-alp">
          <h2>Quiz Finished 🎉</h2>
          <p>
            Your Score: <b>{score}</b> / {questions.length}
          </p>
          <div className="result-buttons-alp">
            <button className="restart-btn-alp" onClick={restartQuiz}>
              🔄 Restart Quiz
            </button>
            <Link to="/" className="home-btn-alp">
              🏠 Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
