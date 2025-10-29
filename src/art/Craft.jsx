import { useState } from "react";
import "./Craft.css";
import Sound1 from "./Sound1";


import paperCraneImg from "/src/assets/paper crane.jpg";
import lilyImg from "/src/assets/lily.jpg";
import swanImg from "/src/assets/swannn.jpeg";
import elephantImg from "/src/assets/el.jpg";
import butterflyImg from "/src/assets/paper.jpg";
import boatImg from "/src/assets/ship.jpg";
import fishImg from "/src/assets/paper2.jpg";
import swordImg from "/src/assets/sword.jpg";

export default function Craft() {
  const experiments = [
    {
      id: 2,
      title: "Paper Crane",
      img: paperCraneImg,
      videoUrl: "https://www.youtube.com/embed/5AtvzGUe9no",
      content: (
        <>
          <h2>Make a Paper Crane</h2>
          <p><strong>You’ll need:</strong><br />- A square sheet of paper</p>
          <p><strong>Instructions:</strong><br />
            1. Fold the paper diagonally both ways, then unfold.<br />
            2. Fold it in half up–down and side–side, then unfold.<br />
            3. Bring corners together to make a small square.<br />
            4. Fold both sides to the middle, then flatten into a diamond.<br />
            5. Fold long sides to the middle again.<br />
            6. Fold down wings on both sides.<br />
            7. Fold one tip down for the head.<br />
            8. Gently pull wings apart — your paper crane is ready!
          </p>
        </>
      ),
      text: `Make a Paper Crane. You’ll need: A square sheet of paper. Instructions: Fold the paper diagonally both ways, then unfold...`
    },
    {
      id: 3,
      title: "Paper Lily",
      img: lilyImg,
      videoUrl: "https://www.youtube.com/embed/yCn-YTti1M0",
      content: (
        <>
          <h2>Make a Paper Lily</h2>
          <p><strong>You’ll need:</strong><br />- A square sheet of paper</p>
          <p><strong>Instructions:</strong><br />
            1. Fold the paper diagonally both ways, then unfold.<br />
            2. Fold it in half up–down and side–side, then unfold.<br />
            3. Bring corners together to make a small square.<br />
            4. Fold triangle flaps to the center line on both sides.<br />
            5. Fold top corners down, then unfold to form creases.<br />
            6. Open the flaps and fold them upward to make petals.<br />
            7. Gently curl each petal outward using a pencil.<br />
            8. Your paper lily is complete!
          </p>
        </>
      ),
      text: `Make a Paper Lily. You'll need: A square sheet of paper...`
    },
    // Add other experiments similarly
    {
      id: 4,
      title: "Paper Swan",
      img: swanImg,
      videoUrl: "https://www.youtube.com/embed/Miv0WDkM4Zo",
      content: (
        <>
          <h2>Make a Paper Swan</h2>
          <p><strong>You’ll need:</strong><br />- A square sheet of paper</p>
          <p><strong>Instructions:</strong><br />
            1. Fold the paper diagonally to make a triangle.<br />
            2. Fold it again to make a smaller triangle, then unfold.<br />
            3. Fold both sides to the center line to make a kite shape.<br />
            4. Fold the bottom point up to form the neck.<br />
            5. Fold the tip down for the head.<br />
            6. Gently pull wings out and flatten the base.<br />
            7. Your elegant paper swan is ready!
          </p>
        </>
      ),
      text: `Make a Paper Swan. You'll need: A square sheet of paper...`
    },
    {
      id: 5,
      title: "Paper Elephant",
      img: elephantImg,
      videoUrl: "https://www.youtube.com/embed/d6hG7ha3bD4",
      content: (
        <>
          <h2>Make a Paper Elephant</h2>
          <p><strong>You’ll need:</strong><br />- A square sheet of paper</p>
          <p><strong>Instructions:</strong><br />
            1. Fold the paper diagonally and unfold.<br />
            2. Fold both sides to the center line.<br />
            3. Fold down the top corner to form the head.<br />
            4. Fold the tip of the head up slightly for the trunk.<br />
            5. Fold back corners for ears.<br />
            6. Shape the body and legs with small folds.<br />
            7. Your cute paper elephant is ready!
          </p>
        </>
      ),
      text: `Make a Paper Elephant. You'll need: A square sheet of paper...`
    },
    {
      id: 7,
      title: "Paper Butterfly",
      img: butterflyImg,
      videoUrl: "https://www.youtube.com/embed/mfI3MIbbkgM",
      content: (
        <>
          <h2>Make a Paper Butterfly</h2>
          <p><strong>You’ll need:</strong><br />- A square sheet of colorful paper</p>
          <p><strong>Instructions:</strong><br />
            1. Fold the paper diagonally both ways and unfold.<br />
            2. Fold it in half horizontally and vertically, then unfold again.<br />
            3. Bring two sides together to form a triangle.<br />
            4. Fold the top corners of the triangle down to meet the bottom point.<br />
            5. Flip and fold the top tip down slightly for the butterfly’s head.<br />
            6. Gently fold the body in half to make the wings pop out.<br />
            7. Your pretty butterfly is ready!
          </p>
        </>
      ),
      text: `Make a Paper Butterfly. You'll need: A square sheet of colorful paper...`
    },
    {
      id: 8,
      title: "Paper Boat",
      img: boatImg,
      videoUrl: "https://www.youtube.com/embed/QVW0njTV65I",
      content: (
        <>
          <h2>Make a Paper Boat</h2>
          <p><strong>You’ll need:</strong><br />- One rectangular sheet of paper</p>
          <p><strong>Instructions:</strong><br />
            1. Fold the paper in half from top to bottom.<br />
            2. Fold it again side to side, then unfold to see the center line.<br />
            3. Fold the top corners down to the center to make a triangle.<br />
            4. Fold the bottom edge of the paper up on both sides.<br />
            5. Pull the two corners apart to form a square.<br />
            6. Fold the bottom corners up again, then pull open to make the boat shape.<br />
            7. Flatten the bottom — your paper boat is ready to float!
          </p>
        </>
      ),
      text: `Make a Paper Boat. You'll need: One rectangular sheet of paper...`
    },
    {
      id: 9,
      title: "Paper Fish",
      img: fishImg,
      videoUrl: "https://www.youtube.com/embed/D2WPnHEK_Kk",
      content: (
        <>
          <h2>Make a Paper Fish</h2>
          <p><strong>You’ll need:</strong><br />- Colored paper, Scissors, Glue, Marker or crayons</p>
          <p><strong>Instructions:</strong><br />
            1. Fold the paper in half.<br />
            2. Cut slits along the fold (not to the edge).<br />
            3. Open the paper and curve it to form a fish shape.<br />
            4. Glue the ends and draw eyes and scales.
          </p>
        </>
      ),
      text: `Make a Paper Fish. You'll need: Colored paper, Scissors, Glue, Marker or crayons...`
    },
    {
      id: 10,
      title: "Paper Sword",
      img: swordImg,
      videoUrl: "https://www.youtube.com/embed/Xfnky_yZjkg",
      content: (
        <>
          <h2>Make a Paper Sword</h2>
          <p><strong>You’ll need:</strong><br />- Two sheets of paper, Tape or glue, Markers for design</p>
          <p><strong>Instructions:</strong><br />
            1. Fold one paper into a long stick shape for the blade.<br />
            2. Fold the second paper into a small rectangle for the handle.<br />
            3. Attach them with tape or glue.<br />
            4. Decorate with colors or patterns.
          </p>
        </>
      ),
      text: `Make a Paper Sword. You'll need: Two sheets of paper, Tape or glue, Markers for design...`
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
      <div className="heading1"><h2>Paper Crafts</h2></div>
      <div className="container77">
        {experiments.map((exp) => (
          <div key={exp.id} className="card77" onClick={() => openModal(exp)}>
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
            <Sound1 text={selectedExp.text} />
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
