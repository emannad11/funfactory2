
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

export default function Alphabets() {
   const questions = [
    {
      id: 1,
      question: "Which letter is this?",
      img: "/src/assets/A.jpg",
      options: [
        { text: "A", icon: "/src/assets/icons/apple.png" },
        { text: "C", icon: "/src/assets/icons/cat.png" },
        { text: "D", icon: "/src/assets/icons/dog.png" },
        { text: "E", icon: "/src/assets/icons/egg.png" },
      ],
      answer: "A",
    },
    {
      id: 2,
      question: "Which letter is this?",
      img: "/src/assets/frog.webp",
      options: [
        { text: "Z", icon: "/src/assets/icons/zoo.png" },
        { text: "Y", icon: "/src/assets/icons/yoyo.png" },
        { text: "F", icon: "/src/assets/icons/frog.png" },
        { text: "V", icon: "/src/assets/icons/delivery.png" },
      ],
      answer: "F",
    },
    {
      id: 3,
      question: "Which letter is this?",
      img: "/src/assets/catt.jpg",
      options: [
        { text: "Z", icon: "/src/assets/icons/zoo.png" },
        { text: "C", icon: "/src/assets/icons/cat.png" },
        { text: "A", icon: "/src/assets/icons/apple.png" },
        { text: "B", icon: "/src/assets/icons/bananas.png" },
      ],
      answer: "C",
    },
    {
      id: 4,
      question: "Which letter is this?",
      img: "/src/assets/dogg.webp",
      options: [
        { text: "D", icon: "/src/assets/icons/dog.png" },
        { text: "L", icon: "/src/assets/icons/lemon.png" },
        { text: "E", icon: "/src/assets/icons/egg.png" },
        { text: "K", icon: "/src/assets/icons/key-chain.png" },
      ],
      answer: "D",
    },
    {
      id: 5,
      question: "Which letter is this?",
      img: "/src/assets/monkey.webp",
      options: [
        { text: "M", icon: "/src/assets/icons/monkey.png" },
        { text: "Y", icon: "/src/assets/icons/yoyo.png" },
        { text: "Z", icon: "/src/assets/icons/zoo.png" },
        { text: "W", icon: "/src/assets/icons/watermelon.png" },
      ],
      answer: "M",
    },
    {
      id: 6,
      question: "Which letter is this?",
      img: "/src/assets/eggg.png",
      options: [
        { text: "C", icon: "/src/assets/icons/cat.png" },
        { text: "A", icon: "/src/assets/icons/apple.png" },
        { text: "D", icon: "/src/assets/icons/dog.png" },
        { text: "E", icon: "/src/assets/icons/egg.png" },
      ],
      answer: "E",
    },
    {
      id: 7,
      question: "Which letter is this?",
      img: "/src/assets/nose.png",
      options: [
        { text: "N", icon: "/src/assets/icons/nose.png" },
        { text: "H", icon: "/src/assets/icons/hen.png" },
        { text: "G", icon: "/src/assets/icons/grape.png" },
        { text: "K", icon: "/src/assets/icons/key-chain.png" },
      ],
      answer: "N",
    },
    {
      id: 8,
      question: "Which letter is this?",
      img: "/src/assets/grapess.jpg",
      options: [
        { text: "T", icon: "/src/assets/icons/tomato.png" },
        { text: "J", icon: "/src/assets/icons/jug.png" },
        { text: "G", icon: "/src/assets/icons/grape.png" },
        { text: "F", icon: "/src/assets/icons/fish.png" },
      ],
      answer: "G",
    },
    {
      id: 9,
      question: "Which letter is this?",
      img: "/src/assets/icecream.png",
      options: [
        { text: "A", icon: "/src/assets/icons/apple.png" },
        { text: "B", icon: "/src/assets/icons/bananas.png" },
        { text: "E", icon: "/src/assets/icons/egg.png" },
        { text: "I", icon: "/src/assets/icons/ice-cream.png" },
      ],
      answer: "I",
    },
    {
      id: 10,
      question: "Which letter is this?",
      img: "/src/assets/sun..png",
      options: [
        { text: "S", icon: "/src/assets/icons/sunny.png" },
        { text: "W", icon: "/src/assets/icons/watermelon.png" },
        { text: "V", icon: "/src/assets/icons/delivery.png" },
        { text: "A", icon: "/src/assets/icons/apple.png" },
      ],
      answer: "S",
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
