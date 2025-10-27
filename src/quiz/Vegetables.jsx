import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

export default function Fruits() {
const questions = [
  {
    id: 1,
    question: "Which vegetable is this?",
    options: [
      { text: "Potato", icon: "/src/assets/icons/potato.png" },
      { text: "Tomato", icon: "/src/assets/icons/tomato.png" },
      { text: "Carrot", icon: "/src/assets/icons/carrot.png" },
      { text: "Onion", icon: "/src/assets/icons/onion.png" },
    ],
    answer: "Potato",
    img: "/src/assets/potato.jpg",
  },
  {
    id: 2,
    question: "Which vegetable is this?",
    options: [
      { text: "Potato", icon: "/src/assets/icons/potato.png" },
       { text: "Tomato", icon: "/src/assets/icons/tomato.png" },
      { text: "Cabbage", icon: "/src/assets/icons/cabbage.png" },
      { text: "Spinach", icon: "/src/assets/icons/spinach.png" },
    ],
    answer: "Tomato",
    img: "/src/assets/tomato.jpeg",
  },
  {
    id: 3,
    question: "Which vegetable is this?",
    options: [
      { text: "Onion", icon: "/src/assets/icons/onion.png" },
      { text: "Broccoli", icon: "/src/assets/icons/broccoli.png" },
      { text: "Carrot", icon: "/src/assets/icons/carrot.png" },
      { text: "Peas", icon: "/src/assets/icons/peas.png" },
    ],
    answer: "Carrot",
    img: "/src/assets/carrot.jpeg",
  },
  {
    id: 4,
    question: "Which vegetable is this?",
    options: [
      { text: "Cabbage", icon: "/src/assets/icons/cabbage.png" },
      { text: "Potato", icon: "/src/assets/icons/potato.png" },
      { text: "Tomato", icon: "/src/assets/icons/tomato.png" },
      { text: "Onion", icon: "/src/assets/icons/onion.png" },
    ],
    answer: "Onion",
    img: "/src/assets/onion.webp",
  },
  {
    id: 5,
    question: "Which vegetable is this?",
    options: [
      { text: "Carrot", icon: "/src/assets/icons/carrot.png" },
      { text: "Potato", icon: "/src/assets/icons/potato.png" },
      { text: "Onion", icon: "/src/assets/icons/onion.png" },
       { text: "Cabbage", icon: "/src/assets/icons/cabbage.png" },
    ],
    answer: "Cabbage",
    img: "/src/assets/cabbage.webp",
  },
  {
    id: 6,
    question: "Which vegetable is this?",
    options: [
      
      { text: "Potato", icon: "/src/assets/icons/potato.png" },
      { text: "Carrot", icon: "/src/assets/icons/carrot.png" },
      { text: "Spinach", icon: "/src/assets/icons/spinach.png" },
      { text: "Onion", icon: "/src/assets/icons/onion.png" },
    ],
    answer: "Spinach",
    img: "/src/assets/spinach.jpg",
  },
  {
    id: 7,
    question: "Which vegetable is this?",
    options: [
      { text: "Tomato", icon: "/src/assets/icons/tomato.png" },
      { text: "Broccoli", icon: "/src/assets/icons/broccoli.png" },
      { text: "Carrot", icon: "/src/assets/icons/carrot.png" },
      { text: "Potato", icon: "/src/assets/icons/potato.png" },
    ],
    answer: "Broccoli",
    img: "/src/assets/broccoli.jpeg",
  },
  {
    id: 8,
    question: "Which vegetable is this?",
    options: [
      { text: "Cabbage", icon: "/src/assets/icons/cabbage.png" },
      { text: "Spinach", icon: "/src/assets/icons/spinach.png" },
      { text: "Onion", icon: "/src/assets/icons/onion.png" },
      { text: "Peas", icon: "/src/assets/icons/peas.png" },
    ],
    answer: "Peas",
    img: "/src/assets/peas.jpg",
  },
  {
    id: 9,
    question: "Which vegetable is this?",
    options: [
      { text: "Cauliflower", icon: "/src/assets/icons/cauliflower.png" },
      { text: "Tomato", icon: "/src/assets/icons/tomato.png" },
      { text: "Carrot", icon: "/src/assets/icons/carrot.png" },
      { text: "Peas", icon: "/src/assets/icons/peas.png" },
    ],
    answer: "Cauliflower",
    img: "/src/assets/cauliflower.webp",
  },
  {
    id: 10,
    question: "Which vegetable is this?",
    options: [
      { text: "Brinjal", icon: "/src/assets/icons/brinjal.png" },
      { text: "Potato", icon: "/src/assets/icons/potato.png" },
      { text: "Onion", icon: "/src/assets/icons/onion.png" },
      { text: "Carrot", icon: "/src/assets/icons/carrot.png" },
    ],
    answer: "Brinjal",
    img: "/src/assets/brinjal.jpeg",
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