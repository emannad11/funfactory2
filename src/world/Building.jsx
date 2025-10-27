import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Building.css";
import correctSoundFile from "/src/assets/sounds/correct.mp3";
import wrongSoundFile from "/src/assets/sounds/no.mp3";

export default function Building() {
  const buildingsOriginal = [
    { name: "Eiffel Tower", country: "France", flag: "/src/assets/icons/france.png", image: "/src/assets/icons/eiffel.png" },
    { name: "Taj Mahal", country: "India", flag: "/src/assets/icons/india.png", image: "/src/assets/icons/taj.png" },
    { name: "Big Ben", country: "UK", flag: "/src/assets/icons/uk.png", image: "/src/assets/icons/bigben.png" },
    { name: "Burj Khalifa", country: "UAE", flag: "/src/assets/icons/dubai.png", image: "/src/assets/icons/burj.png" },
    { name: "Statue of Liberty", country: "USA", flag: "/src/assets/icons/usa.png", image: "/src/assets/icons/statue.png" },
    { name: "Great Wall", country: "China", flag: "/src/assets/icons/china.png", image: "/src/assets/icons/wall.png" },
    { name: "Colosseum", country: "Italy", flag: "/src/assets/icons/italy.png", image: "/src/assets/icons/Colosseum.png" },
    { name: "Minar-e-Pakistan", country: "Pakistan", flag: "/src/assets/icons/pakistan.png", image: "/src/assets/icons/minar.png" },
  ];

  const [countries, setCountries] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [matched, setMatched] = useState([]);

  const correctSound = new Audio(correctSoundFile);
  const wrongSound = new Audio(wrongSoundFile);

  useEffect(() => {
    const shuffledBuildings = [...buildingsOriginal].sort(() => Math.random() - 0.5);
    const shuffledCountries = [...buildingsOriginal].sort(() => Math.random() - 0.5);
    setBuildings(shuffledBuildings);
    setCountries(shuffledCountries);
  }, []);

  const handleBuildingClick = (buildingName) => {
    if (!matched.includes(buildingName)) setSelectedBuilding(buildingName);
  };

  const handleCountryClick = (countryName) => {
    if (!selectedBuilding) return;
    const buildingObj = buildingsOriginal.find(b => b.name === selectedBuilding);

    if (buildingObj.country === countryName && !matched.includes(selectedBuilding)) {
      setMatched([...matched, selectedBuilding]);
      setScore(score + 1);
      correctSound.play();
      toast.success(`✅ Correct! ${selectedBuilding} is in ${countryName}`, { autoClose: 1500 });
    } else {
      wrongSound.play();
      toast.error(`❌ ${selectedBuilding} is not in ${countryName}`, { autoClose: 1500 });
    }

    setSelectedBuilding(null);
  };

  const handleRestart = () => {
    setScore(0);
    setMatched([]);
    setSelectedBuilding(null);
    const shuffledBuildings = [...buildingsOriginal].sort(() => Math.random() - 0.5);
    const shuffledCountries = [...buildingsOriginal].sort(() => Math.random() - 0.5);
    setBuildings(shuffledBuildings);
    setCountries(shuffledCountries);
    toast.info("🔄 Game Restarted!", { autoClose: 1500 });
  };

  return (
   <div className="buildings-container">
  <div className="header-row">
    <div className="title-section">
      <h2>🏛️ Match the Building with its Country!</h2>
      <p className="instructions">
        Click on a building, then click the country you think it belongs to. Match all pairs to win!
      </p>
    </div>

    <div className="right-section">
      <p className="score-text">Score: {score} / {buildings.length}</p>
      <button className="restart-btn0" onClick={handleRestart}>🔄 Restart</button>
    </div>
  </div>

      <div className="buildings-grid">
        <div className="countries">
          {countries.map(b => (
            <div
              key={b.country}
              className="country-card"
              onClick={() => handleCountryClick(b.country)}
            >
              <img src={b.flag} alt={`${b.country} flag`} />
              <span>{b.country}</span>
              {matched.includes(b.name) && <span className="matched-building">✔️ {b.name}</span>}
            </div>
          ))}
        </div>

        <div className="buildings">
          {buildings.map(b => {
            const isMatched = matched.includes(b.name);
            const isSelected = selectedBuilding === b.name;
            return (
              <div
                key={b.name}
                className={`building-card ${isMatched ? "matched" : ""} ${isSelected ? "selected" : ""}`}
                onClick={() => handleBuildingClick(b.name)}
              >
                <img src={b.image} alt={b.name} className="building-image" />
                <span>{b.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}
