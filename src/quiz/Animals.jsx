import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";

export default function Animals() {
   const questions = [
  {
    id: 1,
    question: "Which animal is this?",
    options: [
      { text: "Elephant", icon: "/src/assets/icons/elephant.png" },
      { text: "Lion", icon: "/src/assets/icons/lion.png" },
      { text: "Tiger", icon: "/src/assets/icons/tiger.png" },
      { text: "Bear", icon: "/src/assets/icons/bear.png" },
    ],
    answer: "Lion",
    img: "/src/assets/lion.jpg",
  },
  {
    id: 2,
    question: "Which animal is this?",
    options: [
      { text: "Dog", icon: "/src/assets/icons/dog.png" },
      { text: "Cat", icon: "/src/assets/icons/cat.png" },
      { text: "Cow", icon: "/src/assets/icons/cow.png" },
      { text: "Horse", icon: "/src/assets/icons/horse.png" },
    ],
    answer: "Cow",
    img: "/src/assets/cow.webp",
  },
  {
    id: 3,
    question: "Which animal is this?",
    options: [
      { text: "Elephant", icon: "/src/assets/icons/elephant.png" },
      { text: "Giraffe", icon: "/src/assets/icons/giraffe.png" },
      { text: "Horse", icon: "/src/assets/icons/horse.png" },
      { text: "Camel", icon: "/src/assets/icons/camel.png" },
    ],
    answer: "Elephant",
    img: "/src/assets/elephantt.avif",
  },
  {
    id: 4,
    question: "Which animal is this?",
    options: [
      { text: "Dog", icon: "/src/assets/icons/dog.png" },
      { text: "Cheetah", icon: "/src/assets/icons/cheetah.png" },
      { text: "Lion", icon: "/src/assets/icons/lion.png" },
      { text: "Horse", icon: "/src/assets/icons/horse.png" },
    ],
    answer: "Cheetah",
    img: "/src/assets/cheetah.jpg",
  },
  {
    id: 5,
    question: "Which animal id this?",
    options: [
      { text: "Elephant", icon: "/src/assets/icons/elephant.png" },
      { text: "Giraffe", icon: "/src/assets/icons/giraffe.png" },
      { text: "Camel", icon: "/src/assets/icons/camel.png" },
      { text: "Kangaroo", icon: "/src/assets/icons/kangaroo.png" },
    ],
    answer: "Giraffe",
    img: "/src/assets/giraffe.jpg",
  },
  {
    id: 6,
    question: "Which animal is this?",
    options: [
      { text: "Dog", icon: "/src/assets/icons/dog.png" },
      { text: "Cat", icon: "/src/assets/icons/cat.png" },
      { text: "Goat", icon: "/src/assets/icons/goat.png" },
      { text: "Sheep", icon: "/src/assets/icons/sheep.png" },
    ],
    answer: "Dog",
    img: "/src/assets/dog.jpg",
  },
  {
    id: 7,
    question: "Which animal is this?",
    options: [
      { text: "Lion", icon: "/src/assets/icons/lion.png" },
      { text: "Kangaroo", icon: "/src/assets/icons/kangaroo.png" },
      { text: "Cat", icon: "/src/assets/icons/cat.png" },
      { text: "Goat", icon: "/src/assets/icons/goat.png" },
    ],
    answer: "Cat",
    img: "/src/assets/cat.jpg",
  },
  {
    id: 8,
    question: "Which animal is this",
    options: [
      { text: "Kangaroo", icon: "/src/assets/icons/kangaroo.png" },
      { text: "Monkey", icon: "/src/assets/icons/monkey.png" },
      { text: "Rabbit", icon: "/src/assets/icons/rabbit.png" },
      { text: "Panda", icon: "/src/assets/icons/panda.png" },
    ],
    answer: "Kangaroo",
    img: "/src/assets/kangaroo.jpg",
  },
  {
    id: 9,
    question: "Which animal is this?",
    options: [
      { text: "Panda", icon: "/src/assets/icons/panda.png" },
      { text: "Zebra", icon: "/src/assets/icons/zebra.png" },
      { text: "Cow", icon: "/src/assets/icons/cow.png" },
      { text: "Horse", icon: "/src/assets/icons/horse.png" },
    ],
    answer: "Panda",
    img: "/src/assets/panda.webp",
  },
  {
    id: 10,
    question: "Which animal is this?",
    options: [
      { text: "Tiger", icon: "/src/assets/icons/tiger.png" },
      { text: "Zebra", icon: "/src/assets/icons/zebra.png" },
      { text: "Panda", icon: "/src/assets/icons/panda.png" },
      { text: "Horse", icon: "/src/assets/icons/horse.png" },
    ],
    answer: "Zebra",
    img: "/src/assets/zebra.webp",
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