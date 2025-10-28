import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

import AppleImg from "../assets/Apple.jpeg";
import BanImg from "../assets/ban.webp";
import MangoImg from "../assets/mango.jpeg";
import StrawberryImg from "../assets/strawberry.jpeg";
import PineappleImg from "../assets/pineapple.webp";
import GrapesImg from "../assets/grap.jpeg";
import OrangeImg from "../assets/orangeee.jpeg";
import GuavaImg from "../assets/guava.jpeg";
import PeachImg from "../assets/peach.jpg";
import LycheeImg from "../assets/lyche.webp";


import AppleIcon from "../assets/icons/apple.png";
import MangoIcon from "../assets/icons/mango.png";
import BananaIcon from "../assets/icons/bananas.png";
import PeachIcon from "../assets/icons/peach.png";
import OrangeIcon from "../assets/icons/orangee.png";
import GrapeIcon from "../assets/icons/grape.png";
import KiwiIcon from "../assets/icons/kiwi.png";
import PineappleIcon from "../assets/icons/pineapple.png";
import CherryIcon from "../assets/icons/cherry.png";
import StrawberryIcon from "../assets/icons/strawberry.png";
import PapayaIcon from "../assets/icons/papaya.png";
import LemonIcon from "../assets/icons/lemon.png";
import GuavaIcon from "../assets/icons/guava.png";
import LycheeIcon from "../assets/icons/lychee.png";
import WatermelonIcon from "../assets/icons/watermelon.png";


import CorrectSound from "../assets/sounds/correct.mp3";
import WrongSound from "../assets/sounds/no.mp3";
import NextSound from "../assets/sounds/next.mp3";

export default function Fruits() {
  const questions = [
    {
      id: 1,
      question: "Which fruit is this?",
      options: [
        { text: "Apple", icon: AppleIcon },
        { text: "Mango", icon: MangoIcon },
        { text: "Banana", icon: BananaIcon },
        { text: "Peach", icon: PeachIcon },
      ],
      answer: "Apple",
      img: AppleImg,
    },
    {
      id: 2,
      question: "Which fruit is this?",
      options: [
        { text: "Orange", icon: OrangeIcon },
        { text: "Grapes", icon: GrapeIcon },
        { text: "Kiwi", icon: KiwiIcon },
        { text: "Banana", icon: BananaIcon },
      ],
      answer: "Banana",
      img: BanImg,
    },
    {
      id: 3,
      question: "Which fruit is this?",
      options: [
        { text: "Mango", icon: MangoIcon },
        { text: "Peach", icon: PeachIcon },
        { text: "Guava", icon: GuavaIcon },
        { text: "Pineapple", icon: PineappleIcon },
      ],
      answer: "Mango",
      img: MangoImg,
    },
    {
      id: 4,
      question: "Which fruit is this?",
      options: [
        { text: "Cherry", icon: CherryIcon },
        { text: "Strawberry", icon: StrawberryIcon },
        { text: "Apple", icon: AppleIcon },
        { text: "Mango", icon: MangoIcon },
      ],
      answer: "Strawberry",
      img: StrawberryImg,
    },
    {
      id: 5,
      question: "Which fruit is this?",
      options: [
        { text: "Papaya", icon: PapayaIcon },
        { text: "Peach", icon: PeachIcon },
        { text: "Pineapple", icon: PineappleIcon },
        { text: "Orange", icon: OrangeIcon },
      ],
      answer: "Pineapple",
      img: PineappleImg,
    },
    {
      id: 6,
      question: "Which fruit is this?",
      options: [
        { text: "Watermelon", icon: WatermelonIcon },
        { text: "Mango", icon: MangoIcon },
        { text: "Apple", icon: AppleIcon },
        { text: "Grapes", icon: GrapeIcon },
      ],
      answer: "Grapes",
      img: GrapesImg,
    },
    {
      id: 7,
      question: "Which fruit is this?",
      options: [
        { text: "Orange", icon: OrangeIcon },
        { text: "Lemon", icon: LemonIcon },
        { text: "Peach", icon: PeachIcon },
        { text: "Guava", icon: GuavaIcon },
      ],
      answer: "Orange",
      img: OrangeImg,
    },
    {
      id: 8,
      question: "Which fruit is this?",
      options: [
        { text: "Cherry", icon: CherryIcon },
        { text: "Guava", icon: GuavaIcon },
        { text: "Mango", icon: MangoIcon },
        { text: "Banana", icon: BananaIcon },
      ],
      answer: "Guava",
      img: GuavaImg,
    },
    {
      id: 9,
      question: "Which fruit is this?",
      options: [
        { text: "Papaya", icon: PapayaIcon },
        { text: "Apple", icon: AppleIcon },
        { text: "Peach", icon: PeachIcon },
        { text: "Mango", icon: MangoIcon },
      ],
      answer: "Peach",
      img: PeachImg,
    },
    {
      id: 10,
      question: "Which fruit is this?",
      options: [
        { text: "Guava", icon: GuavaIcon },
        { text: "Mango", icon: MangoIcon },
        { text: "Pine", icon: PineappleIcon },
        { text: "Litchi", icon: LycheeIcon },
      ],
      answer: "Litchi",
      img: LycheeImg,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const correctSound = new Audio(CorrectSound);
  const wrongSound = new Audio(WrongSound);
  const nextSound = new Audio(NextSound);

  function handleAnswer(option) {
    if (answers[current] !== undefined) return;
    setAnswers({ ...answers, [current]: option });

    if (option === questions[current].answer) {
      setScore(score + 1);
      correctSound.play();
    } else {
      wrongSound.play();
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setAnswers({});
    setScore(0);
    setFinished(false);
  }

  function goNext() {
    if (answers[current] === undefined) {
      toast.info("Please select an option 😊", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }
    nextSound.play();

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }

  function handleBack() {
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
  }

  return (
    <div className="quiz-container-alp">
      <ToastContainer />
      {!finished ? (
        <div key={current} className="question-card-alp animate-question-alp">
          <h2>
            Question {current + 1} of {questions.length}
          </h2>
          <p className="question-text-alp">{questions[current].question}</p>

          {questions[current].img && (
            <img
              src={questions[current].img}
              alt="question"
              className="quiz-img-alp"
            />
          )}

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