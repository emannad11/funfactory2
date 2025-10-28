import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Alphabets.css";


import lionImg from "../assets/lion.jpg";
import cowImg from "../assets/cow.webp";
import elephantImg from "../assets/elephantt.avif";
import cheetahImg from "../assets/cheetah.jpg";
import giraffeImg from "../assets/giraffe.jpg";
import dogImg from "../assets/dog.jpg";
import catImg from "../assets/cat.jpg";
import kangarooImg from "../assets/kangaroo.jpg";
import pandaImg from "../assets/panda.webp";
import zebraImg from "../assets/zebra.webp";


import elephantIcon from "../assets/icons/elephant.png";
import lionIcon from "../assets/icons/lion.png";
import tigerIcon from "../assets/icons/tiger.png";
import bearIcon from "../assets/icons/bear.png";
import dogIcon from "../assets/icons/dog.png";
import catIcon from "../assets/icons/cat.png";
import cowIcon from "../assets/icons/cow.png";
import horseIcon from "../assets/icons/horse.png";
import giraffeIcon from "../assets/icons/giraffe.png";
import camelIcon from "../assets/icons/camel.png";
import cheetahIcon from "../assets/icons/cheetah.png";
import kangarooIcon from "../assets/icons/kangaroo.png";
import monkeyIcon from "../assets/icons/monkey.png";
import rabbitIcon from "../assets/icons/rabbit.png";
import pandaIcon from "../assets/icons/panda.png";
import zebraIcon from "../assets/icons/zebra.png";
import goatIcon from "../assets/icons/goat.png";
import sheepIcon from "../assets/icons/sheep.png";


import correctSoundFile from "../assets/sounds/correct.mp3";
import wrongSoundFile from "../assets/sounds/no.mp3";
import nextSoundFile from "../assets/sounds/next.mp3";

export default function Animals() {
  const questions = [
    {
      id: 1,
      question: "Which animal is this?",
      options: [
        { text: "Elephant", icon: elephantIcon },
        { text: "Lion", icon: lionIcon },
        { text: "Tiger", icon: tigerIcon },
        { text: "Bear", icon: bearIcon },
      ],
      answer: "Lion",
      img: lionImg,
    },
    {
      id: 2,
      question: "Which animal is this?",
      options: [
        { text: "Dog", icon: dogIcon },
        { text: "Cat", icon: catIcon },
        { text: "Cow", icon: cowIcon },
        { text: "Horse", icon: horseIcon },
      ],
      answer: "Cow",
      img: cowImg,
    },
    {
      id: 3,
      question: "Which animal is this?",
      options: [
        { text: "Elephant", icon: elephantIcon },
        { text: "Giraffe", icon: giraffeIcon },
        { text: "Horse", icon: horseIcon },
        { text: "Camel", icon: camelIcon },
      ],
      answer: "Elephant",
      img: elephantImg,
    },
    {
      id: 4,
      question: "Which animal is this?",
      options: [
        { text: "Dog", icon: dogIcon },
        { text: "Cheetah", icon: cheetahIcon },
        { text: "Lion", icon: lionIcon },
        { text: "Horse", icon: horseIcon },
      ],
      answer: "Cheetah",
      img: cheetahImg,
    },
    {
      id: 5,
      question: "Which animal is this?",
      options: [
        { text: "Elephant", icon: elephantIcon },
        { text: "Giraffe", icon: giraffeIcon },
        { text: "Camel", icon: camelIcon },
        { text: "Kangaroo", icon: kangarooIcon },
      ],
      answer: "Giraffe",
      img: giraffeImg,
    },
    {
      id: 6,
      question: "Which animal is this?",
      options: [
        { text: "Dog", icon: dogIcon },
        { text: "Cat", icon: catIcon },
        { text: "Goat", icon: goatIcon },
        { text: "Sheep", icon: sheepIcon },
      ],
      answer: "Dog",
      img: dogImg,
    },
    {
      id: 7,
      question: "Which animal is this?",
      options: [
        { text: "Lion", icon: lionIcon },
        { text: "Kangaroo", icon: kangarooIcon },
        { text: "Cat", icon: catIcon },
        { text: "Goat", icon: goatIcon },
      ],
      answer: "Cat",
      img: catImg,
    },
    {
      id: 8,
      question: "Which animal is this?",
      options: [
        { text: "Kangaroo", icon: kangarooIcon },
        { text: "Monkey", icon: monkeyIcon },
        { text: "Rabbit", icon: rabbitIcon },
        { text: "Panda", icon: pandaIcon },
      ],
      answer: "Kangaroo",
      img: kangarooImg,
    },
    {
      id: 9,
      question: "Which animal is this?",
      options: [
        { text: "Panda", icon: pandaIcon },
        { text: "Zebra", icon: zebraIcon },
        { text: "Cow", icon: cowIcon },
        { text: "Horse", icon: horseIcon },
      ],
      answer: "Panda",
      img: pandaImg,
    },
    {
      id: 10,
      question: "Which animal is this?",
      options: [
        { text: "Tiger", icon: tigerIcon },
        { text: "Zebra", icon: zebraIcon },
        { text: "Panda", icon: pandaIcon },
        { text: "Horse", icon: horseIcon },
      ],
      answer: "Zebra",
      img: zebraImg,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

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

          <img src={questions[current].img} alt="question" className="quiz-img-alp" />

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
                  {opt.icon && <img src={opt.icon} alt="icon" className="icon" />}
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
