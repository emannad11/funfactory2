import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";


import ParrotImg from "../assets/parrot.jpg";
import SparrowImg from "../assets/sparrow.jpeg";
import PeacockImg from "../assets/peacock.webp";
import HenImg from "../assets/hen.webp";
import PenguinImg from "../assets/p.jpeg";
import OstrichImg from "../assets/ostrich.avif";
import DoveImg from "../assets/dove.jpg";
import DuckImg from "../assets/duck.avif";
import OwlImg from "../assets/owl.jpeg";
import EagleImg from "../assets/eagle.jpg";


import ParrotIcon from "../assets/icons/parrot.png";
import SparrowIcon from "../assets/icons/sparrow.png";
import OwlIcon from "../assets/icons/owl.png";
import DuckIcon from "../assets/icons/duck.png";
import CrowIcon from "../assets/icons/crow.png";
import HenIcon from "../assets/icons/hen.png";
import PeacockIcon from "../assets/icons/peacock.png";
import PenguinIcon from "../assets/icons/penguin.png";
import DoveIcon from "../assets/icons/dove.png";
import PigeonIcon from "../assets/icons/pigeon.png";
import OstrichIcon from "../assets/icons/ostrich.png";
import EagleIcon from "../assets/icons/eagle.png";


import CorrectSound from "../assets/sounds/correct.mp3";
import WrongSound from "../assets/sounds/no.mp3";
import NextSound from "../assets/sounds/next.mp3";

export default function Birds() {
  const questions = [
    {
      id: 1,
      question: "Which bird is this?",
      options: [
        { text: "Fish", icon: CrowIcon },
        { text: "Dog", icon: DuckIcon },
        { text: "Parrot", icon: ParrotIcon },
        { text: "Cat", icon: HenIcon },
      ],
      answer: "Parrot",
      img: ParrotImg,
    },
    {
      id: 2,
      question: "Which bird is this?",
      options: [
        { text: "Parrot", icon: ParrotIcon },
        { text: "Sparrow", icon: SparrowIcon },
        { text: "Owl", icon: OwlIcon },
        { text: "Duck", icon: DuckIcon },
      ],
      answer: "Sparrow",
      img: SparrowImg,
    },
    {
      id: 3,
      question: "Which bird is this?",
      options: [
        { text: "Crow", icon: CrowIcon },
        { text: "Peacock", icon: PeacockIcon },
        { text: "Penguin", icon: PenguinIcon },
        { text: "Hen", icon: HenIcon },
      ],
      answer: "Peacock",
      img: PeacockImg,
    },
    {
      id: 4,
      question: "Which bird is this?",
      options: [
        { text: "Hen", icon: HenIcon },
        { text: "Crow", icon: CrowIcon },
        { text: "Owl", icon: OwlIcon },
        { text: "Peacock", icon: PeacockIcon },
      ],
      answer: "Hen",
      img: HenImg,
    },
    {
      id: 5,
      question: "Which bird is this?",
      options: [
        { text: "Penguin", icon: PenguinIcon },
        { text: "Parrot", icon: ParrotIcon },
        { text: "Sparrow", icon: SparrowIcon },
        { text: "Crow", icon: CrowIcon },
      ],
      answer: "Penguin",
      img: PenguinImg,
    },
    {
      id: 6,
      question: "Which bird is this?",
      options: [
        { text: "Duck", icon: DuckIcon },
        { text: "Ostrich", icon: OstrichIcon },
        { text: "Crow", icon: CrowIcon },
        { text: "Pigeon", icon: PigeonIcon },
      ],
      answer: "Ostrich",
      img: OstrichImg,
    },
    {
      id: 7,
      question: "Which bird is this?",
      options: [
        { text: "Crow", icon: CrowIcon },
        { text: "Dove", icon: DoveIcon },
        { text: "Duck", icon: DuckIcon },
        { text: "Parrot", icon: ParrotIcon },
      ],
      answer: "Dove",
      img: DoveImg,
    },
    {
      id: 8,
      question: "Which bird is this?",
      options: [
        { text: "Duck", icon: DuckIcon },
        { text: "Crow", icon: CrowIcon },
        { text: "Owl", icon: OwlIcon },
        { text: "Pigeon", icon: PigeonIcon },
      ],
      answer: "Duck",
      img: DuckImg,
    },
    {
      id: 9,
      question: "Which bird is this?",
      options: [
        { text: "Parrot", icon: ParrotIcon },
        { text: "Owl", icon: OwlIcon },
        { text: "Hen", icon: HenIcon },
        { text: "Sparrow", icon: SparrowIcon },
      ],
      answer: "Owl",
      img: OwlImg,
    },
    {
      id: 10,
      question: "Which bird is this?",
      options: [
        { text: "Sparrow", icon: SparrowIcon },
        { text: "Eagle", icon: EagleIcon },
        { text: "Parrot", icon: ParrotIcon },
        { text: "Duck", icon: DuckIcon },
      ],
      answer: "Eagle",
      img: EagleImg,
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
