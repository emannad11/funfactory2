import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Building.css";


import correctSoundFile from "../assets/sounds/correct.mp3";
import wrongSoundFile from "../assets/sounds/no.mp3";

import FranceFlag from "../assets/icons/france.png";
import IndiaFlag from "../assets/icons/india.png";
import UKFlag from "../assets/icons/uk.png";
import DubaiFlag from "../assets/icons/dubai.png";
import USAFlag from "../assets/icons/usa.png";
import ChinaFlag from "../assets/icons/china.png";
import ItalyFlag from "../assets/icons/italy.png";
import PakistanFlag from "../assets/icons/pakistan.png";


import EiffelImg from "../assets/icons/eiffel.png";
import TajImg from "../assets/icons/taj.png";
import BigBenImg from "../assets/icons/bigben.png";
import BurjImg from "../assets/icons/burj.png";
import StatueImg from "../assets/icons/statue.png";
import WallImg from "../assets/icons/wall.png";
import ColosseumImg from "../assets/icons/Colosseum.png";
import MinarImg from "../assets/icons/minar.png";

export default function Building() {
  const buildingsOriginal = [
    { name: "Eiffel Tower", country: "France", flag: FranceFlag, image: EiffelImg },
    { name: "Taj Mahal", country: "India", flag: IndiaFlag, image: TajImg },
    { name: "Big Ben", country: "UK", flag: UKFlag, image: BigBenImg },
    { name: "Burj Khalifa", country: "UAE", flag: DubaiFlag, image: BurjImg },
    { name: "Statue of Liberty", country: "USA", flag: USAFlag, image: StatueImg },
    { name: "Great Wall", country: "China", flag: ChinaFlag, image: WallImg },
    { name: "Colosseum", country: "Italy", flag: ItalyFlag, image: ColosseumImg },
    { name: "Minar-e-Pakistan", country: "Pakistan", flag: PakistanFlag, image: MinarImg },
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
    const buildingObj = buildingsOriginal.find((b) => b.name === selectedBuilding);

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
          <p className="instructions0">
            Click on a building, then click the country you think it belongs to. Match all pairs to win!
          </p>
        </div>

        <div className="right-section">
          <p className="score-text">
            Score: {score} / {buildings.length}
          </p>
          <button className="restart-btn0" onClick={handleRestart}>
            🔄 Restart
          </button>
        </div>
      </div>

      <div className="buildings-grid">
        <div className="countries">
          {countries.map((b) => (
            <div key={b.country} className="country-card" onClick={() => handleCountryClick(b.country)}>
              <img src={b.flag} alt={`${b.country} flag`} />
              <span>{b.country}</span>
              {matched.includes(b.name) && <span className="matched-building">✔️ {b.name}</span>}
            </div>
          ))}
        </div>

        <div className="buildings">
          {buildings.map((b) => {
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
