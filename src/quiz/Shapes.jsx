import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

export default function Fruits() {
const questions = [
  {
    id: 1,
    question: "Which shape is this?",
    options: [
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
      { text: "Square", icon: "/src/assets/icons/square.png" },
      { text: "Triangle", icon: "/src/assets/icons/triangle.png" },
      { text: "Rectangle", icon: "/src/assets/icons/rectangle.png" },
    ],
    answer: "Circle",
    img: "/src/assets/circle.jpg",
  },
  {
    id: 2,
    question: "Which shape is this?",
    options: [
      
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
      { text: "Star", icon: "/src/assets/icons/star.png" },
      { text: "Square", icon: "/src/assets/icons/square.png" },
      { text: "Oval", icon: "/src/assets/icons/oval.png" },
    ],
    answer: "Square",
    img: "/src/assets/square.jpg",
  },
  {
    id: 3,
    question: "Which shape is this?",
    options: [
      
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
      { text: "Rectangle", icon: "/src/assets/icons/rectangle.png" },
      { text: "Heart", icon: "/src/assets/icons/heart.png" },
      { text: "Hexagon", icon: "/src/assets/icons/hexagon.png" },
    ],
    answer: "Rectangle",
    img: "/src/assets/rectangle.jpeg",
  },
  {
    id: 4,
    question: "Which shape is this?",
    options: [
      
      { text: "Star", icon: "/src/assets/icons/star.png" },
      { text: "Square", icon: "/src/assets/icons/square.png" },
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
      { text: "Oval", icon: "/src/assets/icons/oval.png" },
    ],
    answer: "Oval",
    img: "/src/assets/oval.jpg",
  },
  {
    id: 5,
    question: "Which shape is this?",
    options: [
      { text: "Star", icon: "/src/assets/icons/star.png" },
      { text: "Triangle", icon: "/src/assets/icons/triangle.png" },
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
      { text: "Rectangle", icon: "/src/assets/icons/rectangle.png" },
    ],
    answer: "Star",
    img: "/src/assets/star.jpg",
  },
  {
    id: 6,
    question: "Which shape is this?",
    options: [
     
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
      { text: "Rhombus", icon: "/src/assets/icons/rhombus.png" },
      { text: "Oval", icon: "/src/assets/icons/oval.png" },
       { text: "Triangle", icon: "/src/assets/icons/triangle.png" },
    ],
    answer: "Triangle",
    img: "/src/assets/triangle.jpeg",
  },
  {
    id: 7,
    question: "Which shape is this?",
    options: [
      
      { text: "Square", icon: "/src/assets/icons/square.png" },
      { text: "Heart", icon: "/src/assets/icons/heart.png" },
      { text: "Star", icon: "/src/assets/icons/star.png" },
      { text: "Pentagon", icon: "/src/assets/icons/pentagon.png" },
    ],
    answer: "Heart",
    img: "/src/assets/heart.jpg",
  },
  {
    id: 8,
    question: "Which shape is this?",
    options: [
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
      { text: "Hexagon", icon: "/src/assets/icons/hexagon.png" },
      { text: "Rhombus", icon: "/src/assets/icons/rhombus.png" },
      { text: "Triangle", icon: "/src/assets/icons/triangle.png" },
    ],
    answer: "Rhombus",
    img: "/src/assets/rhombus.jpg",
  },
  {
    id: 9,
    question: "Which shape is this?",
    options: [
      { text: "Star", icon: "/src/assets/icons/star.png" },
      { text: "Rectangle", icon: "/src/assets/icons/rectangle.png" },
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
      { text: "Hexagon", icon: "/src/assets/icons/hexagon.png" },
      
    ],
    answer: "Hexagon",
    img: "/src/assets/hexagon.jpg",
  },
  {
    id: 10,
    question: "Which shape is this?",
    options: [
      { text: "Pentagon", icon: "/src/assets/icons/pentagon.png" },
      { text: "Heart", icon: "/src/assets/icons/heart.png" },
      { text: "Triangle", icon: "/src/assets/icons/triangle.png" },
      { text: "Circle", icon: "/src/assets/icons/circle.png" },
    ],
    answer: "Pentagon",
    img: "/src/assets/pentagon.jpg",
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