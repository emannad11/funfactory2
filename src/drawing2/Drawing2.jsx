import { useNavigate } from "react-router-dom";
import { useState } from "react";
import outline1 from "/src/assets/outline1.jpg";
import outline2 from "/src/assets/outline2.jpg";
import outline3 from "/src/assets/outline3.jpg";
import outline4 from "/src/assets/outline4.jpg";
import outline5 from "/src/assets/outline5.jpg";
import outline6 from "/src/assets/outline6.jpg";
import outline7 from "/src/assets/outline7.jpg";
import outline8 from "/src/assets/outline8.jpg";
import "./Drawing2.css";

export default function Drawing2() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const drawings = [
    { name: "Apple", img: outline1 },
    { name: "Cat", img: outline2 },
    { name: "House", img: outline3 },
    { name: "Car", img: outline4 },
    { name: "Fish", img: outline5 },
    { name: "Bird", img: outline6 },
    { name: "Balloon", img: outline7 },
    { name: "Icecream", img: outline8 },
  ];

  const handleSelect = (item, index) => {
    setSelectedIndex(index); 
    navigate(`/drawing2/${item.name.toLowerCase()}`, { state: item });
  };

  return (
    <div className="drawing-selection">
      <h2>🎨 Select a Drawing</h2>
      <div className="drawing-grid">
        {drawings.map((item, i) => (
          <div
            key={i}
            className={`drawing-card ${selectedIndex === i ? "selected" : ""}`}
            onClick={() => handleSelect(item, i)}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
