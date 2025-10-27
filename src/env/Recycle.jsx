import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecycleImg from "/src/assets/bottlee.jpg";
import PeelImg from "/src/assets/peel.avif";
import PaperImg from "/src/assets/paper3.webp";
import JarImg from "/src/assets/jarr.jpg";
import ScrapsImg from "/src/assets/scraps.jpg";
import ShirtImg from "/src/assets/old.avif";
import NewspaperImg from "/src/assets/newspaper.jpg";
import AppleCoreImg from "/src/assets/apple-core.jpg";
import BrokenToyImg from "/src/assets/brokentoy.webp";
import CardboardImg from "/src/assets/cardboard.jpg";
import "./DragDrop.css";

const recycleItems = [
  { name: "Plastic Bottle", bin: "Recycle", img: RecycleImg },
  { name: "Banana Peel", bin: "Compost", img: PeelImg },
  { name: "Paper", bin: "Recycle", img: PaperImg },
  { name: "Glass Jar", bin: "Recycle", img: JarImg },
  { name: "Food Scraps", bin: "Compost", img: ScrapsImg },
  { name: "Old Shirt", bin: "Reuse", img: ShirtImg },
  { name: "Newspaper", bin: "Recycle", img: NewspaperImg },
  { name: "Apple Core", bin: "Compost", img: AppleCoreImg },
  { name: "Broken Toy", bin: "Reuse", img: BrokenToyImg },
  { name: "Cardboard Box", bin: "Recycle", img: CardboardImg },
];

export default function Recycle() {
  const [RecycleBin, setRecycleBin] = useState([]);
  const [ReuseBin, setReuseBin] = useState([]);
  const [CompostBin, setCompostBin] = useState([]);
  const [dragItem, setDragItem] = useState(null);
  const [items, setItems] = useState([...recycleItems]);

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
    while (element && !element.classList.contains("recycle-bin") && !element.classList.contains("reuse-bin") && !element.classList.contains("compost-bin")) {
      element = element.parentElement;
    }

    if (element) {
      if (element.classList.contains("recycle-bin")) handleDrop("Recycle");
      else if (element.classList.contains("reuse-bin")) handleDrop("Reuse");
      else if (element.classList.contains("compost-bin")) handleDrop("Compost");
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
    const correctBin = dragItem.bin.trim().toLowerCase();
    const droppedBin = binType.trim().toLowerCase();
    if (correctBin === droppedBin) {
      if (binType === "Recycle") setRecycleBin([...RecycleBin, dragItem]);
      else if (binType === "Reuse") setReuseBin([...ReuseBin, dragItem]);
      else if (binType === "Compost") setCompostBin([...CompostBin, dragItem]);

      setItems(items.filter((i) => i.name !== dragItem.name));
      toast.success(`✅ ${dragItem.name} sorted correctly!`, { className: "white-toast", autoClose: 1500 });
    } else {
      toast.error(`❌ ${dragItem.name} does not belong here.`, { className: "white-toast", autoClose: 1500 });
    }
    setDragItem(null);
  };

  const handleRestart = () => {
    setRecycleBin([]);
    setReuseBin([]);
    setCompostBin([]);
    setItems([...recycleItems]);
    toast.info("♻️ Game restarted!", { className: "white-toast", autoClose: 1500 });
  };

  return (
    <div className="drag-drop-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="title-row1">
        <h2 className="drag-title1">♻️ Recycle Sorting Game</h2>
        <button className="restart-btn-l" onClick={handleRestart}>🔁 Restart</button>
      </div>
      <p className="instructions1">
        Drag or tap each item into the correct bin: ♻️ <b>Recycle</b>, 🔄 <b>Reuse</b>, 🌱 <b>Compost</b>
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
        <div className="bin recycle-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Recycle")}>
          <h3>Recycle</h3>
          <div className="bin-items">{RecycleBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>
        <div className="bin reuse-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Reuse")}>
          <h3>Reuse</h3>
          <div className="bin-items">{ReuseBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>
        <div className="bin compost-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Compost")}>
          <h3>Compost</h3>
          <div className="bin-items">{CompostBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>
      </div>
    </div>
  );
}
