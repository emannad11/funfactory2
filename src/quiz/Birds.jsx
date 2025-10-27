import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

export default function Birds() {
const questions = [
  {
    id: 1,
    question: "Which bird is this?",
    options: [
      { text: "Fish", icon: "/src/assets/icons/fish.png" },
      { text: "Dog", icon: "/src/assets/icons/dog.png" },
      { text: "Parrot", icon: "/src/assets/icons/parrot.png" },
      { text: "Cat", icon: "/src/assets/icons/cat.png" },
    ],
    answer: "Parrot",
    img: "/src/assets/parrot.jpg",
  },
  {
    id: 2,
    question: "Which bird is this?",
    options: [
      { text: "Parrot", icon: "/src/assets/icons/parrot.png" },
      { text: "Sparrow", icon: "/src/assets/icons/sparrow.png" },
      { text: "Owl", icon: "/src/assets/icons/owl.png" },
      { text: "Duck", icon: "/src/assets/icons/duck.png" },
    ],
    answer: "Sparrow",
    img: "/src/assets/sparrow.jpeg",
  },
  {
    id: 3,
    question: "Which bird is this?",
    options: [
      { text: "Crow", icon: "/src/assets/icons/crow.png" },
      { text: "Peacock", icon: "/src/assets/icons/peacock.png" },
      { text: "Penguin", icon: "/src/assets/icons/penguin.png" },
      { text: "Hen", icon: "/src/assets/icons/hen.png" },
    ],
    answer: "Peacock",
    img: "/src/assets/peacock.webp",
  },
  {
    id: 4,
    question: "Which bird is this?",
    options: [
      { text: "Hen", icon: "/src/assets/icons/hen.png" },
      { text: "Crow", icon: "/src/assets/icons/crow.png" },
      { text: "Owl", icon: "/src/assets/icons/owl.png" },
      { text: "Peacock", icon: "/src/assets/icons/peacock.png" },
    ],
    answer: "Hen",
    img: "/src/assets/hen.webp",
  },
  {
    id: 5,
    question: "Which bird is this?",
    options: [
      { text: "Penguin", icon: "/src/assets/icons/penguin.png" },
      { text: "Parrot", icon: "/src/assets/icons/parrot.png" },
      { text: "Sparrow", icon: "/src/assets/icons/sparrow.png" },
      { text: "Crow", icon: "/src/assets/icons/crow.png" },
    ],
    answer: "Penguin",
    img: "/src/assets/p.jpeg",
  },
  {
    id: 6,
    question: "Which bird is this?",
    options: [
      { text: "Duck", icon: "/src/assets/icons/duck.png" },
      { text: "Ostrich", icon: "/src/assets/icons/ostrich.png" },
      { text: "Crow", icon: "/src/assets/icons/crow.png" },
      { text: "Pigeon", icon: "/src/assets/icons/pigeon.png" },
    ],
    answer: "Ostrich",
    img: "/src/assets/ostrich.avif",
  },
  {
    id: 7,
    question: "Which bird is this?",
    options: [
      { text: "Crow", icon: "/src/assets/icons/crow.png" },
      { text: "Dove", icon: "/src/assets/icons/dove.png" },
      { text: "Duck", icon: "/src/assets/icons/duck.png" },
      { text: "Parrot", icon: "/src/assets/icons/parrot.png" },
    ],
    answer: "Dove",
    img: "/src/assets/dove.jpg",
  },
  {
    id: 8,
    question: "Which bird is this?",
    options: [
      { text: "Duck", icon: "/src/assets/icons/duck.png" },
      { text: "Crow", icon: "/src/assets/icons/crow.png" },
      { text: "Owl", icon: "/src/assets/icons/owl.png" },
      { text: "Pigeon", icon: "/src/assets/icons/pigeon.png" },
    ],
    answer: "Duck",
    img: "/src/assets/duck.avif",
  },
  {
    id: 9,
    question: "Which bird is this?",
    options: [
      { text: "Parrot", icon: "/src/assets/icons/parrot.png" },
      { text: "Owl", icon: "/src/assets/icons/owl.png" },
      { text: "Hen", icon: "/src/assets/icons/hen.png" },
      { text: "Sparrow", icon: "/src/assets/icons/sparrow.png" },
    ],
    answer: "Owl",
    img: "/src/assets/owl.jpeg",
  },
  {
    id: 10,
    question: "Which bird is this?",
    options: [
      { text: "Sparrow", icon: "/src/assets/icons/sparrow.png" },
      { text: "Eagle", icon: "/src/assets/icons/eagle.png" },
      { text: "Parrot", icon: "/src/assets/icons/parrot.png" },
      { text: "Duck", icon: "/src/assets/icons/duck.png" },
    ],
    answer: "Eagle",
    img: "/src/assets/eagle.jpg",
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
