import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";
import "./Food.css";

export default function Food() {
  const questions = [
    { image: "/src/assets/biryani.webp", correct: "Pakistan", options: ["Pakistan", "India", "Japan", "Italy"] },
    { image: "/src/assets/sushi.webp", correct: "Japan", options: ["China", "Japan", "Thailand", "Korea"] },
    { image: "/src/assets/pasta.jpg", correct: "Italy", options: ["France", "Italy", "Spain", "Germany"] },
    { image: "/src/assets/tacos.jpg", correct: "Mexico", options: ["Brazil", "USA", "Mexico", "Canada"] },
    { image: "/src/assets/croissant.jpeg", correct: "France", options: ["France", "Italy", "UK", "Germany"] },
    { image: "/src/assets/samosa.jpeg", correct: "India", options: ["Pakistan", "India", "Nepal", "Bangladesh"] },
    { image: "/src/assets/hamburger.jpg", correct: "USA", options: ["USA", "UK", "Canada", "Australia"] },
    { image: "/src/assets/dumplings.avif", correct: "China", options: ["Japan", "Thailand", "China", "Indonesia"] },
    { image: "/src/assets/kebab.jpg", correct: "Turkey", options: ["Iran", "Turkey", "Lebanon", "Syria"] },
    { image: "/src/assets/fishandchips.webp", correct: "UK", options: ["Ireland", "USA", "UK", "Canada"] },
    { image: "/src/assets/kimchi.jpeg", correct: "Korea", options: ["Japan", "China", "Korea", "Thailand"] },
    { image: "/src/assets/churros.webp", correct: "Spain", options: ["Brazil", "Spain", "Portugal", "Italy"] },
  ];

  const flags = {
    Pakistan: "/src/assets/icons/pakistan.png",
    India: "/src/assets/icons/india.png",
    Japan: "/src/assets/icons/japan.png",
    Italy: "/src/assets/icons/italy.png",
    China: "/src/assets/icons/china.png",
    France: "/src/assets/icons/france.png",
    USA: "/src/assets/icons/usa.png",
    UK: "/src/assets/icons/uk.png",
    Korea: "/src/assets/icons/korea.png",
    Spain: "/src/assets/icons/spain.png",
    Turkey: "/src/assets/icons/turkey.png",
    Mexico: "/src/assets/icons/mexico.png",
    Egypt: "/src/assets/icons/egypt.png",
    Canada: "/src/assets/icons/canada.png",
    Brazil: "/src/assets/icons/brazil.png",
    Thailand: "/src/assets/icons/thailand.png",
    Iran: "/src/assets/icons/iran.png",
    Greece: "/src/assets/icons/greece.png",
    Portugal: "/src/assets/icons/portugal.png",
    Lebanon: "/src/assets/icons/lebanon.png",
    Syria: "/src/assets/icons/syria.png",
    Australia: "/src/assets/icons/australia.png",
    Nepal: "/src/assets/icons/nepal.png",
    Bangladesh: "/src/assets/icons/bangladesh.png",
    Germany: "/src/assets/icons/germany.png",
    Ireland: "/src/assets/icons/ireland.png",
    Indonesia: "/src/assets/icons/indonesia.png",
  };

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);

  const handleAnswer = (option) => {
    if (option === questions[current].correct) {
      toast.success("Yummy! Correct!", { autoClose: 1000 });
      correctSound.play();
      setScore(score + 1);
      setTimeout(() => {
        if (current + 1 < questions.length) {
          setCurrent(current + 1);
        } else {
          setQuizFinished(true);
          toast.info(` Quiz Complete! You got ${score + 1}/${questions.length}`, { autoClose: 2500 });
        }
      }, 1200);
    } else {
      toast.error("Oops! Try Again!", { autoClose: 1000 });
      wrongSound.play();
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setQuizFinished(false);
  };

 return (
  <div className="foodquiz-container">
    <div className="foodquiz-header">
      <h2 className="foodquiz-title">🍱 Food Fun!</h2>
      <button className="foodquiz-restart" onClick={restartQuiz}>🔄 Restart</button>
    </div>

    <p className="foodquiz-intro">
      Guess which country this delicious food belongs to! Choose carefully and learn world cuisines 🍽️
    </p>

    {quizFinished ? (
      <>
        <p className="foodquiz-score">Quiz Complete! You scored {score}/{questions.length}</p>
      </>
    ) : (
      <>
       <div className="foodquiz-toprow">
  <p className="foodquiz-qno">Question {current + 1} of {questions.length}</p>
  <p className="foodquiz-score">Score: {score}</p>
</div>
        <p className="foodquiz-question">Which country's food is this?</p>
        <div className="foodquiz-image">
          <img src={questions[current].image} alt="food" />
        </div>
        <div className="foodquiz-options">
          {questions[current].options.map((option, i) => (
            <button key={i} className="foodquiz-option" onClick={() => handleAnswer(option)}>
              <img src={flags[option]} alt={`${option} flag`} className="flag-img" />
              {option}
            </button>
          ))}
        </div>
      </>
    )}

    <ToastContainer position="top-right" />
  </div>
);

}
