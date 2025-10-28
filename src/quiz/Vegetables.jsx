import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";


import potatoImg from "../assets/potato.jpg";
import tomatoImg from "../assets/tomato.jpeg";
import carrotImg from "../assets/carrot.jpeg";
import onionImg from "../assets/onion.webp";
import cabbageImg from "../assets/cabbage.webp";
import spinachImg from "../assets/spinach.jpg";
import broccoliImg from "../assets/broccoli.jpeg";
import peasImg from "../assets/peas.jpg";
import cauliflowerImg from "../assets/cauliflower.webp";
import brinjalImg from "../assets/brinjal.jpeg";


import potatoIcon from "../assets/icons/potato.png";
import tomatoIcon from "../assets/icons/tomato.png";
import carrotIcon from "../assets/icons/carrot.png";
import onionIcon from "../assets/icons/onion.png";
import cabbageIcon from "../assets/icons/cabbage.png";
import spinachIcon from "../assets/icons/spinach.png";
import broccoliIcon from "../assets/icons/broccoli.png";
import peasIcon from "../assets/icons/peas.png";
import cauliflowerIcon from "../assets/icons/cauliflower.png";
import brinjalIcon from "../assets/icons/brinjal.png";

import correctSoundFile from "../assets/sounds/correct.mp3";
import wrongSoundFile from "../assets/sounds/no.mp3";
import nextSoundFile from "../assets/sounds/next.mp3";

export default function VegetablesQuiz() {
  const questions = [
    {
      id: 1,
      question: "Which vegetable is this?",
      options: [
        { text: "Potato", icon: potatoIcon },
        { text: "Tomato", icon: tomatoIcon },
        { text: "Carrot", icon: carrotIcon },
        { text: "Onion", icon: onionIcon },
      ],
      answer: "Potato",
      img: potatoImg,
    },
    {
      id: 2,
      question: "Which vegetable is this?",
      options: [
        { text: "Potato", icon: potatoIcon },
        { text: "Tomato", icon: tomatoIcon },
        { text: "Cabbage", icon: cabbageIcon },
        { text: "Spinach", icon: spinachIcon },
      ],
      answer: "Tomato",
      img: tomatoImg,
    },
    {
      id: 3,
      question: "Which vegetable is this?",
      options: [
        { text: "Onion", icon: onionIcon },
        { text: "Broccoli", icon: broccoliIcon },
        { text: "Carrot", icon: carrotIcon },
        { text: "Peas", icon: peasIcon },
      ],
      answer: "Carrot",
      img: carrotImg,
    },
    {
      id: 4,
      question: "Which vegetable is this?",
      options: [
        { text: "Cabbage", icon: cabbageIcon },
        { text: "Potato", icon: potatoIcon },
        { text: "Tomato", icon: tomatoIcon },
        { text: "Onion", icon: onionIcon },
      ],
      answer: "Onion",
      img: onionImg,
    },
    {
      id: 5,
      question: "Which vegetable is this?",
      options: [
        { text: "Carrot", icon: carrotIcon },
        { text: "Potato", icon: potatoIcon },
        { text: "Onion", icon: onionIcon },
        { text: "Cabbage", icon: cabbageIcon },
      ],
      answer: "Cabbage",
      img: cabbageImg,
    },
    {
      id: 6,
      question: "Which vegetable is this?",
      options: [
        { text: "Potato", icon: potatoIcon },
        { text: "Carrot", icon: carrotIcon },
        { text: "Spinach", icon: spinachIcon },
        { text: "Onion", icon: onionIcon },
      ],
      answer: "Spinach",
      img: spinachImg,
    },
    {
      id: 7,
      question: "Which vegetable is this?",
      options: [
        { text: "Tomato", icon: tomatoIcon },
        { text: "Broccoli", icon: broccoliIcon },
        { text: "Carrot", icon: carrotIcon },
        { text: "Potato", icon: potatoIcon },
      ],
      answer: "Broccoli",
      img: broccoliImg,
    },
    {
      id: 8,
      question: "Which vegetable is this?",
      options: [
        { text: "Cabbage", icon: cabbageIcon },
        { text: "Spinach", icon: spinachIcon },
        { text: "Onion", icon: onionIcon },
        { text: "Peas", icon: peasIcon },
      ],
      answer: "Peas",
      img: peasImg,
    },
    {
      id: 9,
      question: "Which vegetable is this?",
      options: [
        { text: "Cauliflower", icon: cauliflowerIcon },
        { text: "Tomato", icon: tomatoIcon },
        { text: "Carrot", icon: carrotIcon },
        { text: "Peas", icon: peasIcon },
      ],
      answer: "Cauliflower",
      img: cauliflowerImg,
    },
    {
      id: 10,
      question: "Which vegetable is this?",
      options: [
        { text: "Brinjal", icon: brinjalIcon },
        { text: "Potato", icon: potatoIcon },
        { text: "Onion", icon: onionIcon },
        { text: "Carrot", icon: carrotIcon },
      ],
      answer: "Brinjal",
      img: brinjalImg,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);
  const nextSound = new Audio(nextSoundFile);

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
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
    nextSound.play();
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
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
                  {opt.icon && (
                    <img src={opt.icon} alt="icon" className="icon" />
                  )}
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
