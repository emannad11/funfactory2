import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Food.css";


import correctSoundFile from "../assets/sounds/correct.mp3";
import wrongSoundFile from "../assets/sounds/no.mp3";


import biryaniImg from "../assets/biryani.webp";
import sushiImg from "../assets/sushi.webp";
import pastaImg from "../assets/pasta.jpg";
import tacosImg from "../assets/tacos.jpg";
import croissantImg from "../assets/croissant.jpeg";
import samosaImg from "../assets/samosa.jpeg";
import hamburgerImg from "../assets/hamburger.jpg";
import dumplingsImg from "../assets/dumplings.avif";
import kebabImg from "../assets/kebab.jpg";
import fishandchipsImg from "../assets/fishandchips.webp";
import kimchiImg from "../assets/kimchi.jpeg";
import churrosImg from "../assets/churros.webp";

import pakistanFlag from "../assets/icons/pakistan.png";
import indiaFlag from "../assets/icons/india.png";
import japanFlag from "../assets/icons/japan.png";
import italyFlag from "../assets/icons/italy.png";
import chinaFlag from "../assets/icons/china.png";
import franceFlag from "../assets/icons/france.png";
import usaFlag from "../assets/icons/usa.png";
import ukFlag from "../assets/icons/uk.png";
import koreaFlag from "../assets/icons/korea.png";
import spainFlag from "../assets/icons/spain.png";
import turkeyFlag from "../assets/icons/turkey.png";
import mexicoFlag from "../assets/icons/mexico.png";
import egyptFlag from "../assets/icons/egypt.png";
import canadaFlag from "../assets/icons/canada.png";
import brazilFlag from "../assets/icons/brazil.png";
import thailandFlag from "../assets/icons/thailand.png";
import iranFlag from "../assets/icons/iran.png";
import greeceFlag from "../assets/icons/greece.png";
import portugalFlag from "../assets/icons/portugal.png";
import lebanonFlag from "../assets/icons/lebanon.png";
import syriaFlag from "../assets/icons/syria.png";
import australiaFlag from "../assets/icons/australia.png";
import nepalFlag from "../assets/icons/nepal.png";
import bangladeshFlag from "../assets/icons/bangladesh.png";
import germanyFlag from "../assets/icons/germany.png";
import irelandFlag from "../assets/icons/ireland.png";
import indonesiaFlag from "../assets/icons/indonesia.png";

export default function Food() {
  const questions = [
    { image: biryaniImg, correct: "Pakistan", options: ["Pakistan", "India", "Japan", "Italy"] },
    { image: sushiImg, correct: "Japan", options: ["China", "Japan", "Thailand", "Korea"] },
    { image: pastaImg, correct: "Italy", options: ["France", "Italy", "Spain", "Germany"] },
    { image: tacosImg, correct: "Mexico", options: ["Brazil", "USA", "Mexico", "Canada"] },
    { image: croissantImg, correct: "France", options: ["France", "Italy", "UK", "Germany"] },
    { image: samosaImg, correct: "India", options: ["Pakistan", "India", "Nepal", "Bangladesh"] },
    { image: hamburgerImg, correct: "USA", options: ["USA", "UK", "Canada", "Australia"] },
    { image: dumplingsImg, correct: "China", options: ["Japan", "Thailand", "China", "Indonesia"] },
    { image: kebabImg, correct: "Turkey", options: ["Iran", "Turkey", "Lebanon", "Syria"] },
    { image: fishandchipsImg, correct: "UK", options: ["Ireland", "USA", "UK", "Canada"] },
    { image: kimchiImg, correct: "Korea", options: ["Japan", "China", "Korea", "Thailand"] },
    { image: churrosImg, correct: "Spain", options: ["Brazil", "Spain", "Portugal", "Italy"] },
  ];

  const flags = {
    Pakistan: pakistanFlag,
    India: indiaFlag,
    Japan: japanFlag,
    Italy: italyFlag,
    China: chinaFlag,
    France: franceFlag,
    USA: usaFlag,
    UK: ukFlag,
    Korea: koreaFlag,
    Spain: spainFlag,
    Turkey: turkeyFlag,
    Mexico: mexicoFlag,
    Egypt: egyptFlag,
    Canada: canadaFlag,
    Brazil: brazilFlag,
    Thailand: thailandFlag,
    Iran: iranFlag,
    Greece: greeceFlag,
    Portugal: portugalFlag,
    Lebanon: lebanonFlag,
    Syria: syriaFlag,
    Australia: australiaFlag,
    Nepal: nepalFlag,
    Bangladesh: bangladeshFlag,
    Germany: germanyFlag,
    Ireland: irelandFlag,
    Indonesia: indonesiaFlag,
  };

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (option) => {
    const correctSound = new Audio(correctSoundFile);
    const wrongSound = new Audio(wrongSoundFile);

    if (option === questions[current].correct) {
      toast.success("Yummy! Correct!", { autoClose: 1000 });
      correctSound.play();
      setScore(score + 1);
      setTimeout(() => {
        if (current + 1 < questions.length) {
          setCurrent(current + 1);
        } else {
          setQuizFinished(true);
          toast.info(`Quiz Complete! You got ${score + 1}/${questions.length}`, { autoClose: 2500 });
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
        <button className="foodquiz-restart" onClick={restartQuiz}>
          🔄 Restart
        </button>
      </div>

      <p className="foodquiz-intro">
        Guess which country this delicious food belongs to! Choose carefully and learn world cuisines 🍽️
      </p>

      {quizFinished ? (
        <p className="foodquiz-score">
          Quiz Complete! You scored {score}/{questions.length}
        </p>
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
