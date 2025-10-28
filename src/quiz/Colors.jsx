import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";


import BlueImg from "../assets/bluee.webp";
import PinkImg from "../assets/pink.jpg";
import RedImg from "../assets/red.webp";
import GreenImg from "../assets/green.jpg";
import OrangeImg from "../assets/orange.jpg";
import GreyImg from "../assets/grey.png";
import PurpleImg from "../assets/purple.webp";
import BrownImg from "../assets/brown.png";
import BlackImg from "../assets/black.jpg";
import YellowImg from "../assets/yellow.jpg";


import BlueIcon from "../assets/icons/blue.png";
import GreenIcon from "../assets/icons/green.png";
import RedIcon from "../assets/icons/red.png";
import YellowIcon from "../assets/icons/yellow.png";
import PinkIcon from "../assets/icons/pink.png";
import PurpleIcon from "../assets/icons/purple.png";
import BlackIcon from "../assets/icons/black.png";
import WhiteIcon from "../assets/icons/white.png";
import BrownIcon from "../assets/icons/brown.png";
import GreyIcon from "../assets/icons/grey.png";
import OrangeIcon from "../assets/icons/orangeee.webp";


import CorrectSoundFile from "../assets/sounds/correct.mp3";
import WrongSoundFile from "../assets/sounds/no.mp3";
import NextSoundFile from "../assets/sounds/next.mp3";

export default function Colors() {
  const questions = [
    {
      id: 1,
      question: "What color is this?",
      options: [
        { text: "Blue", icon: BlueIcon },
        { text: "Green", icon: GreenIcon },
        { text: "Red", icon: RedIcon },
        { text: "Yellow", icon: YellowIcon },
      ],
      answer: "Blue",
      img: BlueImg,
    },
    {
      id: 2,
      question: "What color is this?",
      options: [
        { text: "Red", icon: RedIcon },
        { text: "Pink", icon: PinkIcon },
        { text: "Purple", icon: PurpleIcon },
        { text: "Black", icon: BlackIcon },
      ],
      answer: "Pink",
      img: PinkImg,
    },
    {
      id: 3,
      question: "What color is this?",
      options: [
        { text: "Blue", icon: BlueIcon },
        { text: "Red", icon: RedIcon },
        { text: "Orange", icon: OrangeIcon },
        { text: "Pink", icon: PinkIcon },
      ],
      answer: "Red",
      img: RedImg,
    },
    {
      id: 4,
      question: "What color is this?",
      options: [
        { text: "Green", icon: GreenIcon },
        { text: "Brown", icon: BrownIcon },
        { text: "Purple", icon: PurpleIcon },
        { text: "White", icon: WhiteIcon },
      ],
      answer: "Green",
      img: GreenImg,
    },
    {
      id: 5,
      question: "What color is this?",
      options: [
        { text: "Pink", icon: PinkIcon },
        { text: "Blue", icon: BlueIcon },
        { text: "Orange", icon: OrangeIcon },
        { text: "Yellow", icon: YellowIcon },
      ],
      answer: "Orange",
      img: OrangeImg,
    },
    {
      id: 6,
      question: "What color is this?",
      options: [
        { text: "White", icon: WhiteIcon },
        { text: "Yellow", icon: YellowIcon },
        { text: "Black", icon: BlackIcon },
        { text: "Grey", icon: GreyIcon },
      ],
      answer: "Grey",
      img: GreyImg,
    },
    {
      id: 7,
      question: "What color is this?",
      options: [
        { text: "Purple", icon: PurpleIcon },
        { text: "Red", icon: RedIcon },
        { text: "Yellow", icon: YellowIcon },
        { text: "Green", icon: GreenIcon },
      ],
      answer: "Purple",
      img: PurpleImg,
    },
    {
      id: 8,
      question: "What color is this?",
      options: [
        { text: "Brown", icon: BrownIcon },
        { text: "Black", icon: BlackIcon },
        { text: "Yellow", icon: YellowIcon },
        { text: "Pink", icon: PinkIcon },
      ],
      answer: "Brown",
      img: BrownImg,
    },
    {
      id: 9,
      question: "What color is this?",
      options: [
        { text: "Blue", icon: BlueIcon },
        { text: "White", icon: WhiteIcon },
        { text: "Red", icon: RedIcon },
        { text: "Black", icon: BlackIcon },
      ],
      answer: "Black",
      img: BlackImg,
    },
    {
      id: 10,
      question: "What color is this?",
      options: [
        { text: "Green", icon: GreenIcon },
        { text: "Yellow", icon: YellowIcon },
        { text: "Orange", icon: OrangeIcon },
        { text: "Red", icon: RedIcon },
      ],
      answer: "Yellow",
      img: YellowImg,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const correctSound = new Audio(CorrectSoundFile);
  const wrongSound = new Audio(WrongSoundFile);
  const nextSound = new Audio(NextSoundFile);

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
