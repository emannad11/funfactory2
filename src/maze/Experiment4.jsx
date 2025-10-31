import { useState } from "react";
import "./Experiment4.css";
import SBplant from "./SBplant";

import seeddImg from "../assets/seedd.jpg";
import plaantImg from "../assets/plaant.jpg";
import bombImg from "../assets/bomb.jpg";
import detectiveImg from "../assets/detective.jpg";
import pbImg from "../assets/pb.jpg";
import sortingImg from "../assets/sorting.jpg";
import waterrImg from "../assets/waterr.jpg";
import planterImg from "../assets/planter.jpg";

export default function Experiment4() {
  const experiments = [
    {
      id: 1,
      title: "Seed Germination",
      img: seeddImg,
      videoUrl: "https://www.youtube.com/embed/8z9mQycA4Og",
      content: (
        <>
          <h2>Seed Germination Experiment</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Some bean or pea seeds<br />
            - Transparent cup or jar<br />
            - Tissue paper or cotton<br />
            - Water
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Place tissue or cotton inside the cup.<br />
            2. Put 2–3 seeds on it.<br />
            3. Add a little water to keep it moist.<br />
            4. Watch the seeds sprout in a few days!
          </p>
        </>
      ),
      text: `Seed Germination Experiment. You’ll need: Some bean or pea seeds, Transparent cup or jar, Tissue paper or cotton, Water. Instructions: Place tissue or cotton inside the cup. Put 2–3 seeds on it. Add a little water to keep it moist. Watch the seeds sprout in a few days!`,
    },
    {
      id: 2,
      title: "How Plants Grow?",
      img: plaantImg,
      videoUrl: "https://www.youtube.com/embed/CBjrdMlZlfE",
      content: (
        <>
          <h2>Plant Growth Comparison</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Two small pots<br />
            - Same type of seeds<br />
            - Soil and water<br />
            - Sunny spot and shaded spot
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Fill both pots with soil and plant the same seeds.<br />
            2. Place one pot in sunlight and the other in shade.<br />
            3. Water both equally each day.<br />
            4. Observe which plant grows faster and healthier.
          </p>
        </>
      ),
      text: `Plant Growth Comparison. You’ll need: Two small pots, Same type of seeds, Soil and water, Sunny spot and shaded spot. Instructions: Fill both pots with soil and plant the same seeds. Place one pot in sunlight and the other in shade. Water both equally each day. Observe which plant grows faster and healthier.`,
    },
    {
      id: 3,
      title: "Build a Seed Bomb",
      img: bombImg,
      videoUrl: "https://www.youtube.com/embed/N3tbZguBzG8",
      content: (
        <>
          <h2>Build a Seed Bomb</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Wildflower seeds<br />
            - Clay powder or clay soil<br />
            - Potting soil or compost<br />
            - Water
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Mix 2 parts potting soil, 1 part clay, and seeds together.<br />
            2. Add a little water until mixture holds shape.<br />
            3. Roll into small balls (seed bombs) and let dry 24–48 hours.<br />
            4. Toss in a garden or empty lot and watch flowers grow.
          </p>
        </>
      ),
      text: `Build a Seed Bomb. You’ll need: Wildflower seeds, Clay powder or clay soil, Potting soil or compost, Water. Instructions: Mix 2 parts potting soil, 1 part clay, and seeds together. Add a little water until mixture holds shape. Roll into small balls (seed bombs) and let dry 24–48 hours. Toss in a garden or empty lot and watch flowers grow.`,
    },
    {
      id: 4,
      title: "Plant Detective",
      img: detectiveImg,
      videoUrl: "https://www.youtube.com/embed/kVZXWin5_E4",
      content: (
        <>
          <h2>Plant Detective</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Notebook and pencil<br />
            - Magnifying glass (optional)<br />
            - Different leaves or plants<br />
            - Labels or sticky notes
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Go outside and look for different kinds of plants.<br />
            2. Observe leaf shapes, colors, and sizes carefully.<br />
            3. Write or draw what you find in your notebook.<br />
            4. Try to identify or name the plants yourself!
          </p>
        </>
      ),
      text: `Plant Detective. You’ll need: Notebook and pencil, Magnifying glass (optional), Different leaves or plants, Labels or sticky notes. Instructions: Go outside and look for different kinds of plants. Observe leaf shapes, colors, and sizes carefully. Write or draw what you find in your notebook. Try to identify or name the plants yourself!`,
    },
    {
      id: 5,
      title: "Hydroponic Growing Jar",
      img: pbImg,
      videoUrl: "https://www.youtube.com/embed/H2QLmDrOOkE",
      content: (
        <>
          <h2>Hydroponic Growing Jar</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Glass jar or clear cup<br />
            - Water<br />
            - Small plant cutting or seed<br />
            - Cotton or sponge
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Fill the jar halfway with water.<br />
            2. Place cotton or sponge on top to hold the plant.<br />
            3. Add the plant cutting or seed so roots touch the water.<br />
            4. Keep it in sunlight and watch roots grow without soil!
          </p>
        </>
      ),
      text: `Hydroponic Growing Jar. You’ll need: Glass jar or clear cup, Water, Small plant cutting or seed, Cotton or sponge. Instructions: Fill the jar halfway with water. Place cotton or sponge on top to hold the plant. Add the plant cutting or seed so roots touch the water. Keep it in sunlight and watch roots grow without soil!`,
    },
    {
      id: 6,
      title: "Seed Sorting",
      img: sortingImg,
      videoUrl: "https://www.youtube.com/embed/gYmd52lvGN0",
      content: (
        <>
          <h2>Seed Sorting & Classification</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Different types of seeds (beans, corn, sunflower, etc.)<br />
            - Trays or bowls<br />
            - Magnifying glass (optional)
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Collect and spread different seeds on the table.<br />
            2. Observe their shapes, colors, and sizes.<br />
            3. Sort them into groups.<br />
            4. Discuss how each seed grows into a plant.
          </p>
        </>
      ),
      text: `Seed Sorting & Classification. You’ll need: Different types of seeds, Trays or bowls, Magnifying glass (optional). Instructions: Collect and spread different seeds on the table. Observe their shapes, colors, and sizes. Sort them into groups. Discuss how each seed grows into a plant.`,
    },
    {
      id: 7,
      title: "Water Absorption Test",
      img: waterrImg,
      videoUrl: "https://www.youtube.com/embed/akt8mjmOalI",
      content: (
        <>
          <h2>Water Absorption Test</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - White flowers or celery stalks<br />
            - Cups of water<br />
            - Food coloring
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Add different food colors to cups of water.<br />
            2. Place a white flower or celery in each cup.<br />
            3. Leave overnight and observe color changes.<br />
            4. See how plants absorb water through stems!
          </p>
        </>
      ),
      text: `Water Absorption Test. You’ll need: White flowers or celery stalks, Cups of water, Food coloring. Instructions: Add different food colors to cups of water. Place a white flower or celery in each cup. Leave overnight and observe color changes. See how plants absorb water through stems!`,
    },
    {
      id: 8,
      title: "Recycled Planter Craft",
      img: planterImg,
      videoUrl: "https://www.youtube.com/embed/MOQcQDHIjFs",
      content: (
        <>
          <h2>Recycled Planter Craft</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Empty plastic bottles or cans<br />
            - Soil and seeds<br />
            - Paints, markers, and scissors
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Cut bottles or cans in half carefully.<br />
            2. Decorate them using paints or stickers.<br />
            3. Add soil and plant seeds.<br />
            4. Water regularly and watch them grow!
          </p>
        </>
      ),
      text: `Recycled Planter Craft. You’ll need: Empty plastic bottles or cans, Soil and seeds, Paints, markers, and scissors. Instructions: Cut bottles or cans in half carefully. Decorate them using paints or stickers. Add soil and plant seeds. Water regularly and watch them grow!`,
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
      <div className="heading5"><h2>Seedling Society</h2></div>
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
        <div
          className="modal1-content"
          onClick={() => {
            // Stop any existing speech
            window.speechSynthesis.cancel();

            // Speak the experiment text
            const utterance = new SpeechSynthesisUtterance(selectedExp.text);
            utterance.lang = "en-US";
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
          }}
        >
          <div className="modal1-header">
            <h2>{selectedExp.title}</h2>
            {/* Prevent sound button click from triggering card speech */}
            <div onClick={(e) => e.stopPropagation()}>
              <SBplant text={selectedExp.text} />
            </div>
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
