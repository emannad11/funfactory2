import { useState } from "react";
import "./Experiment3.css";
import Soundexp from "./Soundexp";


import cokeImg from "../assets/coke.jpg";
import tornadoImg from "../assets/torando.jpg";
import lavaImg from "../assets/lava.jpg";
import ballonImg from "../assets/ballon.jpg";
import rawEggImg from "../assets/raw.webp";
import stabImg from "../assets/stab.jpg";
import floatImg from "../assets/float.jpg";
import crazyImg from "../assets/crazy.jpg";

export default function Experiment3() {
  const experiments = [
    {
      id: 1,
      title: "Coke & Mentos Eruption",
      img: cokeImg,
      videoUrl: "https://www.youtube.com/embed/MKhFojFycb0",
      content: (
        <>
          <h2>Diet Coke & Mentos Geyser</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - 1 bottle of Diet Coke<br />
            - 5–10 Mentos<br />
            - Outdoor space
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Place the bottle on a flat surface outside.<br />
            2. Quickly drop Mentos into the bottle.<br />
            3. Step back and watch the soda geyser.<br />
            4. Clean up after the experiment.
          </p>
        </>
      ),
      text: `Diet Coke & Mentos Geyser. You’ll need: 1 bottle of Diet Coke, 5–10 Mentos, Outdoor space. Instructions: Place the bottle on a flat surface outside. Quickly drop Mentos into the bottle. Step back and watch the soda geyser. Clean up after the experiment.`,
    },
    {
      id: 2,
      title: "Tornado in a Bottle",
      img: tornadoImg,
      videoUrl: "https://www.youtube.com/embed/sBr9ZTHTZSQ",
      content: (
        <>
          <h2>Tornado in a Bottle</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - 2 clear plastic bottles<br />
            - Water<br />
            - Duct tape or connector<br />
            - Optional: Glitter or food coloring
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Fill one bottle 3/4 with water and add glitter/color.<br />
            2. Attach the empty bottle on top, neck to neck.<br />
            3. Flip and swirl to make a tornado.<br />
            4. Observe the spinning water vortex.
          </p>
        </>
      ),
      text: `Tornado in a Bottle. You’ll need: 2 clear plastic bottles, Water, Duct tape or connector, Optional: Glitter or food coloring. Instructions: Fill one bottle 3/4 with water and add glitter/color. Attach the empty bottle on top, neck to neck. Flip and swirl to make a tornado. Observe the spinning water vortex.`,
    },
    {
      id: 3,
      title: "Lava Lamp",
      img: lavaImg,
      videoUrl: "https://www.youtube.com/embed/tZMLnYmgwXQ",
      content: (
        <>
          <h2>Lava Lamp</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Clear bottle<br />
            - Vegetable oil<br />
            - Water<br />
            - Food coloring<br />
            - Effervescent tablet
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Fill bottle 3/4 with oil, then add water.<br />
            2. Add a few drops of food coloring.<br />
            3. Drop in tablet and watch colorful blobs rise and fall.<br />
            4. Repeat to keep the lava lamp effect.
          </p>
        </>
      ),
      text: `Lava Lamp. You’ll need: Clear bottle, Vegetable oil, Water, Food coloring, Effervescent tablet. Instructions: Fill bottle 3/4 with oil, then add water. Add a few drops of food coloring. Drop in tablet and watch colorful blobs rise and fall. Repeat to keep the lava lamp effect.`,
    },
    {
      id: 4,
      title: "Heating Up Balloon",
      img: ballonImg,
      videoUrl: "https://www.youtube.com/embed/tzjHwwFTaBI",
      content: (
        <>
          <h2>Heating Up Balloon</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - A balloon<br />
            - Warm water<br />
            - A bowl
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Fill a bowl with warm water.<br />
            2. Hold the balloon over the water (or dip it gently).<br />
            3. Observe the balloon expanding as it heats.<br />
            4. Discuss why air expands when heated.
          </p>
        </>
      ),
      text: `Heating Up a Balloon. You’ll need: A balloon, Warm water, A bowl. Instructions: Fill a bowl with warm water. Hold the balloon over the water (or dip it gently). Observe the balloon expanding as it heats. Discuss why air expands when heated.`,
    },
    {
      id: 5,
      title: "Raw Or Boiled Egg",
      img: rawEggImg,
      videoUrl: "https://www.youtube.com/embed/Y4JyV94y2_A",
      content: (
        <>
          <h2>Raw and Boiled Egg Experiment</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - One raw egg<br />
            - One boiled egg<br />
            - A flat surface or table
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Place both eggs on a flat surface.<br />
            2. Spin each egg gently one by one.<br />
            3. Watch carefully — the boiled egg spins smoothly, but the raw egg wobbles!<br />
            4. Touch the spinning eggs to stop them — the raw one may start spinning again because of the liquid inside.<br />
            5. This shows that a boiled egg is solid inside, while a raw egg has moving liquid.
          </p>
        </>
      ),
      text: `Let's do the Raw and Boiled Egg Experiment. You’ll need one raw egg, one boiled egg, and a flat surface or table.Place both eggs on the table and spin them one by one.
Watch closely — the boiled egg spins smoothly, but the raw egg wobbles because of the liquid inside.
If you stop both eggs with your hand, the raw egg may start spinning again, showing that it’s still liquid inside.This experiment shows the difference between a raw and a boiled egg!`,
    },
    {
      id: 6,
      title: "Stab Potato with Straw",
      img: stabImg,
      videoUrl: "https://www.youtube.com/embed/R8wPIiVDiw8",
      content: (
        <>
          <h2>Stab a Potato with a Straw</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - A raw potato<br />
            - A plastic drinking straw
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Hold the potato firmly on a table.<br />
            2. Try to push the straw straight into the potato — it may bend or not go in.<br />
            3. Now, cover the top of the straw with your thumb and push it quickly into the potato.<br />
            4. The straw goes in easily!<br />
            5. This happens because covering the top traps air inside the straw, making it strong enough to pierce the potato.
          </p>
        </>
      ),
      text: `Let's try the Stab a Potato with a Straw experiment. You’ll need a raw potato and a plastic drinking straw.First, hold the potato firmly on the table and try to push the straw straight in. It will probably bend or not go in.Now, cover the top of the straw with your thumb and push it quickly into the potato.The straw goes in easily! This happens because covering the top traps air inside the straw, making it strong enough to pierce the potato.`,
    },
    {
      id: 7,
      title: "Orange Float Or Sink",
      img: floatImg,
      videoUrl: "https://www.youtube.com/embed/m3_6zbeV0nU",
      content: (
        <>
          <h2>Does an Orange Float or Sink?</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - A large bowl of water<br />
            - One orange (with peel)<br />
            - One peeled orange
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Fill a bowl with water.<br />
            2. Place the orange with its peel in the water — it floats!<br />
            3. Now peel the orange and place it in the water — it sinks!<br />
            4. The peel has tiny air pockets that help the orange float, but when you remove it, the orange becomes heavier and sinks.
          </p>
        </>
      ),
      text: `Let's find out if an orange floats or sinks. You’ll need a bowl of water, one orange with its peel, and one peeled orange.First, fill the bowl with water. Place the orange with its peel in the water. It floats!Now peel the orange and put it in the water. It sinks!This happens because the peel has tiny air pockets that make the orange float, but when you remove it, the orange becomes heavier and sinks.`,
    },
    {
      id: 8,
      title: "Crazy Putty",
      img: crazyImg,
      videoUrl: "https://www.youtube.com/embed/aE5ZO3wma2Q",
      content: (
        <>
          <h2>Make Your Own Crazy Putty</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - White glue<br />
            - Water<br />
            - Food coloring (optional)<br />
            - Liquid starch or borax solution
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Mix equal parts of glue and water in a bowl.<br />
            2. Add a few drops of food coloring if you want color.<br />
            3. Slowly add liquid starch or borax solution while stirring.<br />
            4. Keep mixing until it becomes stretchy and rubbery.<br />
            5. Knead it with your hands — your crazy putty is ready to play with!
          </p>
        </>
      ),
      text: `Let's make your own crazy putty. You’ll need white glue, water, food coloring, and liquid starch or borax solution.Mix equal parts of glue and water in a bowl. Add a few drops of food coloring if you want.Now slowly add liquid starch or borax solution while stirring. Keep mixing until it becomes stretchy and rubbery.Knead it with your hands and your crazy putty is ready to play with!`,
    },
  ];

  const [selectedExp, setSelectedExp] = useState(null);

  const openModal = (exp) => {
    window.speechSynthesis.cancel();
    setSelectedExp(exp);
    const utterance = new SpeechSynthesisUtterance(exp.title);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedExp(null);
  };

  return (
    <>
      <div className="heading5"><h2>Experiments</h2></div>
      <div className="container-e">
        {experiments.map((exp) => (
          <div key={exp.id} className="card-e" onClick={() => openModal(exp)}>
            <img src={exp.img} alt={exp.title} />
            <h3>{exp.title}</h3>
          </div>
        ))}
      </div>
{selectedExp && (
  <div className="exp-modal-overlay">
    <div className="exp-modal-content">
      <button className="close-modal-btn" onClick={closeModal}>✖</button>

      <div className="modal1-body">
        <div className="modal1-content">
          <div className="modal1-header">
            <h2>{selectedExp.title}</h2>
            <Soundexp text={selectedExp.text} />
          </div>
          {selectedExp.content}
        </div>

        <div className="modal1-video">
          <div className="video-frame">
            <iframe
              src={selectedExp.videoUrl}
              title={selectedExp.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}
