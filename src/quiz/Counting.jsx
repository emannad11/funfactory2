import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

export default function Counting() {
  const questions = [
    {
      id: 1,
      question: "How many pizza slices are there?",
      options: ["3", "1", "5", "6"],
      answer: "1",
      img: "/src/assets/pizza.jpg",
    },
    {
      id: 2,
      question: "How many balloons are there?",
      options: ["2", "3", "4", "5"],
      answer: "5",
      img: "/src/assets/5.jpg",
    },
    {
      id: 3,
      question: "How many flowers are there?",
      options: ["1", "2", "10", "4"],
      answer: "10",
      img: "/src/assets/car.jpg",
    },
    {
      id: 4,
      question: "How many candies are there?",
      options: ["1", "2", "3", "7"],
      answer: "7",
      img: "/src/assets/7.webp",
    },
    {
      id: 5,
      question: "How many balls are there?",
      options: ["5", "2", "7", "8"],
      answer: "2",
      img: "/src/assets/ball.jpg",
    },
    {
      id: 6,
      question: "How many pencils are there?",
      options: ["10", "3", "12", "13"],
      answer: "3",
      img: "/src/assets/pencil.jpeg",
    },
    {
      id: 7,
      question: "How many cats are there?",
      options: ["4", "6", "7", "8"],
      answer: "4",
      img: "/src/assets/cats.jpg",
    },
    {
      id: 8,
      question: "How many bananas are there?",
      options: ["6", "4", "10", "12"],
      answer: "6",
      img: "/src/assets/banana.webp",
    },
    {
      id: 9,
      question: "How many bottles are there?",
      options: ["8", "4", "2", "7"],
      answer: "4",
      img: "/src/assets/bottle.jpg",
    },
    {
      id: 10,
      question: "How many teddy bear are there?",
      options: ["3", "8", "5", "12"],
      answer: "5",
      img: "/src/assets/teddy.webp",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const correctSound = new Audio("/src/assets/sounds/correct.mp3");
  const wrongSound = new Audio("/src/assets/sounds/no.mp3");
  const nextSound = new Audio("/src/assets/sounds/next.mp3");

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

  function goBack() {
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