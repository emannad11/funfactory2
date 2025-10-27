import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Language.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";

export default function Language() {
  const countries = [
    { name: "Pakistan", language: "Urdu", flag: "/src/assets/icons/pakistan.png" },
    { name: "India", language: "Hindi", flag: "/src/assets/icons/india.png" },
    { name: "Japan", language: "Japanese", flag: "/src/assets/icons/japan.png" },
    { name: "France", language: "French", flag: "/src/assets/icons/france.png" },
    { name: "Spain", language: "Spanish", flag: "/src/assets/icons/spain.png" },
    { name: "USA", language: "English", flag: "/src/assets/icons/usa.png" },
    { name: "China", language: "Mandarin", flag: "/src/assets/icons/china.png" },
    { name: "Brazil", language: "Portuguese", flag: "/src/assets/icons/brazil.png" },
  ];

  const [score, setScore] = useState(0);
  const [matched, setMatched] = useState([]);
  const [selectedLang, setSelectedLang] = useState(null);
  const [shuffledLanguages, setShuffledLanguages] = useState([]);

  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);

 
  useEffect(() => {
    const langs = countries.map(c => c.language).sort(() => Math.random() - 0.5);
    setShuffledLanguages(langs);
  }, []);

  const handleLangClick = (lang) => {
    setSelectedLang(lang);
  };

  const handleCountryClick = (country) => {
    if (!selectedLang) return;

    if (selectedLang === country.language && !matched.includes(country.name)) {
      setMatched([...matched, country.name]);
      setScore(score + 1);
      correctSound.play();
      toast.success(`✅ Correct! ${selectedLang} is spoken in ${country.name}`, { autoClose: 1500 });
    } else {
      wrongSound.play();
      toast.error(`❌ ${selectedLang} is not correct for ${country.name}`, { autoClose: 1500 });
    }

    setSelectedLang(null);
  };

  const handleRestart = () => {
    setScore(0);
    setMatched([]);
    setSelectedLang(null);
   
    const newShuffled = countries.map(c => c.language).sort(() => Math.random() - 0.5);
    setShuffledLanguages(newShuffled);
    toast.info("🔄 Quiz Restarted!", { autoClose: 1500 });
  };

  return (
    <div className="languagegame-container">
      <div className="header-row">
        <div className="title-section">
          <h2>🗺️ Match the Country with its Language!</h2>
          <p className="instructions">
            Click a language, then click the country you think it belongs to. Match all pairs to win!
          </p>
        </div>

        <div className="right-section">
          <p className="score-text">Score: {score} / {countries.length}</p>
          <button className="restart-btn9" onClick={handleRestart}>🔄 Restart</button>
        </div>
      </div>

      <div className="languagegame-grid">
      
        <div className="countries">
          {countries.map((c) => (
            <div
              key={c.name}
              className={`country-card`}
              onClick={() => handleCountryClick(c)}
            >
              <img src={c.flag} alt={`${c.name} flag`} />
              <span>{c.name}</span>
              {matched.includes(c.name) && (
                <span className="matched-lang">✔️ {c.language}</span>
              )}
            </div>
          ))}
        </div>

      
        <div className="languages">
          {shuffledLanguages.map((lang) => {
            const countryName = countries.find((c) => c.language === lang).name;
            return (
              <div
                key={lang}
                className={`language-card ${matched.includes(countryName) ? "matched" : ""} ${selectedLang === lang ? "selected" : ""}`}
                onClick={() => handleLangClick(lang)}
              >
                {lang}
              </div>
            );
          })}
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}
