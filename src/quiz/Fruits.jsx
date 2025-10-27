import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

export default function Fruits() {
 const questions = [
  {
    id: 1,
    question: "Which fruit is this?",
    options: [
      { text: "Apple", icon: "/src/assets/icons/apple.png" },
      { text: "Mango", icon: "/src/assets/icons/mango.png" },
      { text: "Banana", icon: "/src/assets/icons/bananas.png" },
      { text: "Peach", icon: "/src/assets/icons/peach.png" },
    ],
    answer: "Apple",
    img: "/src/assets/Apple.jpeg",
  },
  {
    id: 2,
    question: "Which fruit is this?",
    options: [
      { text: "Orange", icon: "/src/assets/icons/orangee.png" },
      { text: "Grapes", icon: "/src/assets/icons/grape.png" },
      { text: "Kiwi", icon: "/src/assets/icons/kiwi.png" },
      { text: "Banana", icon: "/src/assets/icons/bananas.png" },
    ],
    answer: "Banana",
    img: "/src/assets/ban.webp",
  },
  {
    id: 3,
    question: "Which fruit is this?",
    options: [
      { text: "Mango", icon: "/src/assets/icons/mango.png" },
      { text: "Peach", icon: "/src/assets/icons/peach.png" },
      { text: "Guava", icon: "/src/assets/icons/guava.png" },
      { text: "Pineapple", icon: "/src/assets/icons/pineapple.png" },
    ],
    answer: "Mango",
    img: "/src/assets/mango.jpeg",
  },
  {
    id: 4,
    question: "Which fruit is this?",
    options: [
      
      { text: "Cherry", icon: "/src/assets/icons/cherry.png" },
      { text: "Strawberry", icon: "/src/assets/icons/strawberry.png" },
      { text: "Apple", icon: "/src/assets/icons/apple.png" },
      { text: "Mango", icon: "/src/assets/icons/mango.png" },
    ],
    answer: "Strawberry",
    img: "/src/assets/strawberry.jpeg",
  },
  {
    id: 5,
    question: "Which fruit is this?",
    options: [
      
      { text: "Papaya", icon: "/src/assets/icons/papaya.png" },
      { text: "Peach", icon: "/src/assets/icons/peach.png" },
      { text: "Pineapple", icon: "/src/assets/icons/pineapple.png" },
      { text: "Orange", icon: "/src/assets/icons/orangee.png" },
    ],
    answer: "Pineapple",
    img: "/src/assets/pineapple.webp",
  },
  {
    id: 6,
    question: "Which fruit is this?",
    options: [
      { text: "Watermelon", icon: "/src/assets/icons/watermelon.png" },
      { text: "Mango", icon: "/src/assets/icons/mango.png" },
      { text: "Apple", icon: "/src/assets/icons/apple.png" },
      { text: "Grapes", icon: "/src/assets/icons/grape.png" },
    ],
    answer: "Grapes",
    img: "/src/assets/grap.jpeg",
  },
  {
    id: 7,
    question: "Which fruit is this?",
    options: [
      { text: "Orange", icon: "/src/assets/icons/orangee.png" },
      { text: "Lemon", icon: "/src/assets/icons/lemon.png" },
      { text: "Peach", icon: "/src/assets/icons/peach.png" },
      { text: "Guava", icon: "/src/assets/icons/guava.png" },
    ],
    answer: "Orange",
    img: "/src/assets/orangeee.jpeg",
  },
  {
    id: 8,
    question: "Which fruit is this?",
    options: [
      
      { text: "Cherry", icon: "/src/assets/icons/cherry.png" },
      { text: "Guava", icon: "/src/assets/icons/guava.png" },
      { text: "Mango", icon: "/src/assets/icons/mango.png" },
      { text: "Banana", icon: "/src/assets/icons/bananas.png" },
    ],
    answer: "Guava",
    img: "/src/assets/guava.jpeg",
  },
  {
    id: 9,
    question: "Which fruit is this?",
    options: [
      { text: "Papaya", icon: "/src/assets/icons/papaya.png" },
      { text: "Apple", icon: "/src/assets/icons/apple.png" },
      { text: "Peach", icon: "/src/assets/icons/peach.png" },
      { text: "Mango", icon: "/src/assets/icons/mango.png" },
    ],
    answer: "Peach",
    img: "/src/assets/peach.jpg",
  },
  {
    id: 10,
    question: "Which fruit is this?",
    options: [
      
      { text: "Guava", icon: "/src/assets/icons/guava.png" },
      { text: "Mango", icon: "/src/assets/icons/mango.png" },
      { text: "Pine", icon: "/src/assets/icons/pineapple.png" },
      { text: "Litchi", icon: "/src/assets/icons/lychee.png" },
    ],
    answer: "Litchi",
    img: "/src/assets/lyche.webp",
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