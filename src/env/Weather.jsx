import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UmbrellaImg from "/src/assets/umb.avif";
import RaincoatImg from "/src/assets/coat.jpeg";
import BootsImg from "/src/assets/boots.jpg";
import PuddleImg from "/src/assets/puddle.jpeg";
import BoatImg from "/src/assets/boat.jpg";
import GlassesImg from "/src/assets/sunglasses.jpg";
import ShortsImg from "/src/assets/shorts.jpeg";
import HatImg from "/src/assets/hat.jpg";
import JuiceImg from "/src/assets/ice.jpg";
import SunscreenImg from "/src/assets/sunscreen.jpg";
import "./DragDrop.css";

const weatherItems = [
  { name: "Umbrella", type: "Rainy", img: UmbrellaImg },
  { name: "Raincoat", type: "Rainy", img: RaincoatImg },
  { name: "Boots", type: "Rainy", img: BootsImg },
  { name: "Puddle", type: "Rainy", img: PuddleImg },
  { name: "Boat", type: "Rainy", img: BoatImg },
  { name: "Glasses", type: "Sunny", img: GlassesImg },
  { name: "Shorts", type: "Sunny", img: ShortsImg },
  { name: "Hat", type: "Sunny", img: HatImg },
  { name: "Juice", type: "Sunny", img: JuiceImg },
  { name: "Sunscreen", type: "Sunny", img: SunscreenImg },
];

export default function Weather() {
  const [sunnyBin, setSunnyBin] = useState([]);
  const [rainyBin, setRainyBin] = useState([]);
  const [items, setItems] = useState([...weatherItems]);
  const [dragItem, setDragItem] = useState(null);

  const handleDragStart = (item) => setDragItem(item);

  const handleTouchStart = (e, item) => {
    setDragItem(item);
    e.currentTarget.classList.add("dragging-touch");
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const dragged = document.querySelector(".dragging-touch");
    if (dragged) {
      dragged.style.position = "fixed";
      dragged.style.left = `${touch.clientX - dragged.offsetWidth / 2}px`;
      dragged.style.top = `${touch.clientY - dragged.offsetHeight / 2}px`;
      dragged.style.zIndex = 1000;
      dragged.style.transition = "none";
      dragged.style.pointerEvents = "none";
      dragged.style.opacity = 0.8;
    }
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dragged = document.querySelector(".dragging-touch");
    if (dragged) dragged.style.display = "none";

    let element = document.elementFromPoint(touch.clientX, touch.clientY);
    while (element && !element.classList.contains("sunny-bin") && !element.classList.contains("rainy-bin")) {
      element = element.parentElement;
    }

    if (element) {
      if (element.classList.contains("sunny-bin")) handleDrop("Sunny");
      else if (element.classList.contains("rainy-bin")) handleDrop("Rainy");
    }

    if (dragged) {
      dragged.style.display = "";
      dragged.style.position = "";
      dragged.style.left = "";
      dragged.style.top = "";
      dragged.style.zIndex = "";
      dragged.style.transition = "";
      dragged.style.pointerEvents = "";
      dragged.style.opacity = "";
      dragged.classList.remove("dragging-touch");
    }
    setDragItem(null);
  };

  const handleDrop = (binType) => {
    if (!dragItem) return;

    const correctType = dragItem.type.trim().toLowerCase();
    const droppedType = binType.trim().toLowerCase();

    if (correctType === droppedType) {
      if (binType === "Sunny") setSunnyBin([...sunnyBin, dragItem]);
      else if (binType === "Rainy") setRainyBin([...rainyBin, dragItem]);

      setItems(items.filter((i) => i.name !== dragItem.name));

      toast.success(`✅ ${dragItem.name} placed correctly!`, {
        className: "white-toast",
        autoClose: 1500,
      });

      if (items.length - 1 === 0) {
        toast.success("🎉 All items sorted correctly!", {
          className: "white-toast",
          autoClose: 2500,
        });
      }
    } else {
      toast.error(`❌ ${dragItem.name} doesn’t belong here.`, {
        className: "white-toast",
        autoClose: 1500,
      });
    }
    setDragItem(null);
  };

  const handleRestart = () => {
    setSunnyBin([]);
    setRainyBin([]);
    setItems([...weatherItems]);
    toast.info("🌦️ Game restarted!", { className: "white-toast", autoClose: 1500 });
  };

  return (
    <div className="drag-drop-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="title-row1">
        <h2 className="drag-title1">🌦️ Weather Match Game</h2>
        <button className="restart-btn-l" onClick={handleRestart}>🔁 Restart</button>
      </div>
      <p className="instructions1">
        Drag or tap each item into the correct weather bin — ☀️ <b>Sunny</b> for hot days, 🌧️ <b>Rainy</b> for wet days.
      </p>

      <div className="items-container-row">
        {items.map((item) => (
          <div
            key={item.name}
            draggable
            onDragStart={() => handleDragStart(item)}
            onTouchStart={(e) => handleTouchStart(e, item)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="draggable-item"
          >
            <img src={item.img} alt={item.name} className="item-image small" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="bins-container">
        <div className="bin sunny-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Sunny")}>
          <h3>☀️ Sunny</h3>
          <div className="bin-items">{sunnyBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>

        <div className="bin rainy-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Rainy")}>
          <h3>🌧️ Rainy</h3>
          <div className="bin-items">{rainyBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>
      </div>
    </div>
  );
}
