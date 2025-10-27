import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

export default function Colors() {
  const questions = [
    {
      id: 1,
      question: "What color is this?",
      options: [
        { text: "Blue", icon: "/src/assets/icons/blue.png" },
        { text: "Green", icon: "/src/assets/icons/green.png" },
        { text: "Red", icon: "/src/assets/icons/red.png" },
        { text: "Yellow", icon: "/src/assets/icons/yellow.png" },
      ],
      answer: "Blue",
      img: "/src/assets/bluee.webp",
    },
    {
      id: 2,
      question: "What color is this?",
      options: [
        { text: "Red", icon: "/src/assets/icons/red.png" },
        { text: "Pink", icon: "/src/assets/icons/pink.png" },
        { text: "Purple", icon: "/src/assets/icons/purple.png" },
        { text: "Black", icon: "/src/assets/icons/black.png" },
      ],
      answer: "Pink",
      img: "/src/assets/pink.jpg",
    },
    {
      id: 3,
      question: "What color is this?",
      options: [
        { text: "Blue", icon: "/src/assets/icons/blue.png" },
        { text: "Red", icon: "/src/assets/icons/red.png" },
        { text: "Orange", icon: "/src/assets/icons/orangeee.webp" },
        { text: "Pink", icon: "/src/assets/icons/pink.png" },
      ],
      answer: "Red",
      img: "/src/assets/red.webp",
    },
    {
      id: 4,
      question: "What color is this?",
      options: [
        { text: "Green", icon: "/src/assets/icons/green.png" },
        { text: "Brown", icon: "/src/assets/icons/brown.png" },
        { text: "Purple", icon: "/src/assets/icons/purple.png" },
        { text: "White", icon: "/src/assets/icons/white.png" },
      ],
      answer: "Green",
      img: "/src/assets/green.jpg",
    },
    {
      id: 5,
      question: "What color is this?",
      options: [
        { text: "Pink", icon: "/src/assets/icons/pink.png" },
        { text: "Blue", icon: "/src/assets/icons/blue.png" },
        { text: "Orange", icon: "/src/assets/icons/orangeee.webp" },
        { text: "Yellow", icon: "/src/assets/icons/yellow.png" },
      ],
      answer: "Orange",
      img: "/src/assets/orange.jpg",
    },
    {
      id: 6,
      question: "What is color this?",
      options: [
        { text: "White", icon: "/src/assets/icons/white.png" },
        { text: "Yellow", icon: "/src/assets/icons/yellow.png" },
        { text: "Black", icon: "/src/assets/icons/black.png" },
        { text: "Grey", icon: "/src/assets/icons/grey.png" },
      ],
      answer: "Grey",
      img: "/src/assets/grey.png",
    },
    {
      id: 7,
      question: "What color is this?",
      options: [
        { text: "Purple", icon: "/src/assets/icons/purple.png" },
        { text: "Red", icon: "/src/assets/icons/red.png" },
        { text: "Yellow", icon: "/src/assets/icons/yellow.png" },
        { text: "Green", icon: "/src/assets/icons/green.png" },
      ],
      answer: "Purple",
      img: "/src/assets/purple.webp",
    },
    {
      id: 8,
      question: "What color is this?",
      options: [
        { text: "Brown", icon: "/src/assets/icons/brown.png" },
        { text: "Black", icon: "/src/assets/icons/black.png" },
        { text: "Yellow", icon: "/src/assets/icons/yellow.png" },
        { text: "Pink", icon: "/src/assets/icons/pink.png" },
      ],
      answer: "Brown",
      img: "/src/assets/brown.png",
    },
    {
      id: 9,
      question: "What color is this?",
      options: [
        { text: "Blue", icon: "/src/assets/icons/blue.png" },
        { text: "White", icon: "/src/assets/icons/white.png" },
        { text: "Red", icon: "/src/assets/icons/red.png" },
        { text: "Black", icon: "/src/assets/icons/black.png" },
      ],
      answer: "Black",
      img: "/src/assets/black.jpg",
    },
    {
      id: 10,
      question: "What color is this?",
      options: [
        { text: "Green", icon: "/src/assets/icons/green.png" },
        { text: "Yellow", icon: "/src/assets/icons/yellow.png" },
        { text: "Orange", icon: "/src/assets/icons/orangeee.webp" },
        { text: "Red", icon: "/src/assets/icons/red.png" },
      ],
      answer: "Yellow",
      img: "/src/assets/yellow.jpg",
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
