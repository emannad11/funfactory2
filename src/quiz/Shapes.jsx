import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";


import circleImg from "../assets/circle.jpg";
import squareImg from "../assets/square.jpg";
import rectangleImg from "../assets/rectangle.jpeg";
import ovalImg from "../assets/oval.jpg";
import starImg from "../assets/star.jpg";
import triangleImg from "../assets/triangle.jpeg";
import heartImg from "../assets/heart.jpg";
import rhombusImg from "../assets/rhombus.jpg";
import hexagonImg from "../assets/hexagon.jpg";
import pentagonImg from "../assets/pentagon.jpg";


import circleIcon from "../assets/icons/circle.png";
import squareIcon from "../assets/icons/square.png";
import triangleIcon from "../assets/icons/triangle.png";
import rectangleIcon from "../assets/icons/rectangle.png";
import starIcon from "../assets/icons/star.png";
import ovalIcon from "../assets/icons/oval.png";
import heartIcon from "../assets/icons/heart.png";
import rhombusIcon from "../assets/icons/rhombus.png";
import hexagonIcon from "../assets/icons/hexagon.png";
import pentagonIcon from "../assets/icons/pentagon.png";


import correctSoundFile from "../assets/sounds/correct.mp3";
import wrongSoundFile from "../assets/sounds/no.mp3";
import nextSoundFile from "../assets/sounds/next.mp3";

export default function ShapesQuiz() {
  const questions = [
    {
      id: 1,
      question: "Which shape is this?",
      options: [
        { text: "Circle", icon: circleIcon },
        { text: "Square", icon: squareIcon },
        { text: "Triangle", icon: triangleIcon },
        { text: "Rectangle", icon: rectangleIcon },
      ],
      answer: "Circle",
      img: circleImg,
    },
    {
      id: 2,
      question: "Which shape is this?",
      options: [
        { text: "Circle", icon: circleIcon },
        { text: "Star", icon: starIcon },
        { text: "Square", icon: squareIcon },
        { text: "Oval", icon: ovalIcon },
      ],
      answer: "Square",
      img: squareImg,
    },
    {
      id: 3,
      question: "Which shape is this?",
      options: [
        { text: "Circle", icon: circleIcon },
        { text: "Rectangle", icon: rectangleIcon },
        { text: "Heart", icon: heartIcon },
        { text: "Hexagon", icon: hexagonIcon },
      ],
      answer: "Rectangle",
      img: rectangleImg,
    },
    {
      id: 4,
      question: "Which shape is this?",
      options: [
        { text: "Star", icon: starIcon },
        { text: "Square", icon: squareIcon },
        { text: "Circle", icon: circleIcon },
        { text: "Oval", icon: ovalIcon },
      ],
      answer: "Oval",
      img: ovalImg,
    },
    {
      id: 5,
      question: "Which shape is this?",
      options: [
        { text: "Star", icon: starIcon },
        { text: "Triangle", icon: triangleIcon },
        { text: "Circle", icon: circleIcon },
        { text: "Rectangle", icon: rectangleIcon },
      ],
      answer: "Star",
      img: starImg,
    },
    {
      id: 6,
      question: "Which shape is this?",
      options: [
        { text: "Circle", icon: circleIcon },
        { text: "Rhombus", icon: rhombusIcon },
        { text: "Oval", icon: ovalIcon },
        { text: "Triangle", icon: triangleIcon },
      ],
      answer: "Triangle",
      img: triangleImg,
    },
    {
      id: 7,
      question: "Which shape is this?",
      options: [
        { text: "Square", icon: squareIcon },
        { text: "Heart", icon: heartIcon },
        { text: "Star", icon: starIcon },
        { text: "Pentagon", icon: pentagonIcon },
      ],
      answer: "Heart",
      img: heartImg,
    },
    {
      id: 8,
      question: "Which shape is this?",
      options: [
        { text: "Circle", icon: circleIcon },
        { text: "Hexagon", icon: hexagonIcon },
        { text: "Rhombus", icon: rhombusIcon },
        { text: "Triangle", icon: triangleIcon },
      ],
      answer: "Rhombus",
      img: rhombusImg,
    },
    {
      id: 9,
      question: "Which shape is this?",
      options: [
        { text: "Star", icon: starIcon },
        { text: "Rectangle", icon: rectangleIcon },
        { text: "Circle", icon: circleIcon },
        { text: "Hexagon", icon: hexagonIcon },
      ],
      answer: "Hexagon",
      img: hexagonImg,
    },
    {
      id: 10,
      question: "Which shape is this?",
      options: [
        { text: "Pentagon", icon: pentagonIcon },
        { text: "Heart", icon: heartIcon },
        { text: "Triangle", icon: triangleIcon },
        { text: "Circle", icon: circleIcon },
      ],
      answer: "Pentagon",
      img: pentagonImg,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // ✅ Create audio instances
  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);
  const nextSound = new Audio(nextSoundFile);

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
