import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";


import PizzaImg from "../assets/pizza.jpg";
import BalloonsImg from "../assets/5.jpg";
import FlowersImg from "../assets/car.jpg";
import CandiesImg from "../assets/7.webp";
import BallsImg from "../assets/ball.jpg";
import PencilImg from "../assets/pencil.jpeg";
import CatsImg from "../assets/cats.jpg";
import BananaImg from "../assets/banana.webp";
import BottleImg from "../assets/bottle.jpg";
import TeddyImg from "../assets/teddy.webp";


import CorrectSoundFile from "../assets/sounds/correct.mp3";
import WrongSoundFile from "../assets/sounds/no.mp3";
import NextSoundFile from "../assets/sounds/next.mp3";

export default function Counting() {
  const questions = [
    {
      id: 1,
      question: "How many pizza slices are there?",
      options: ["3", "1", "5", "6"],
      answer: "1",
      img: PizzaImg,
    },
    {
      id: 2,
      question: "How many balloons are there?",
      options: ["2", "3", "4", "5"],
      answer: "5",
      img: BalloonsImg,
    },
    {
      id: 3,
      question: "How many flowers are there?",
      options: ["1", "2", "10", "4"],
      answer: "10",
      img: FlowersImg,
    },
    {
      id: 4,
      question: "How many candies are there?",
      options: ["1", "2", "3", "7"],
      answer: "7",
      img: CandiesImg,
    },
    {
      id: 5,
      question: "How many balls are there?",
      options: ["5", "2", "7", "8"],
      answer: "2",
      img: BallsImg,
    },
    {
      id: 6,
      question: "How many pencils are there?",
      options: ["10", "3", "12", "13"],
      answer: "3",
      img: PencilImg,
    },
    {
      id: 7,
      question: "How many cats are there?",
      options: ["4", "6", "7", "8"],
      answer: "4",
      img: CatsImg,
    },
    {
      id: 8,
      question: "How many bananas are there?",
      options: ["6", "4", "10", "12"],
      answer: "6",
      img: BananaImg,
    },
    {
      id: 9,
      question: "How many bottles are there?",
      options: ["8", "4", "2", "7"],
      answer: "4",
      img: BottleImg,
    },
    {
      id: 10,
      question: "How many teddy bears are there?",
      options: ["3", "8", "5", "12"],
      answer: "5",
      img: TeddyImg,
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
      nextSound.play();
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
              const isCorrect = opt === questions[current].answer;
              const isSelected = answers[current] === opt;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(opt)}
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
                  {opt}
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
