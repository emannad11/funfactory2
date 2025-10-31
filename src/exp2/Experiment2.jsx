import { useState } from "react";
import "./Experiment2.css";
import Sound from "./Sound";

import dryImg from "../assets/dry1.jpg";
import waterImg from "../assets/dance.jpg";
import volcanoImg from "../assets/water1.jpg";
import sandImg from "../assets/coin.jpg";
import ballonImg from "../assets/rocket.jpg";
import saltImg from "../assets/icee.jpg";
import rainbowImg from "../assets/bubble.jpg";
import lemonImg from "../assets/bottle1.jpg";

export default function Experiment2() {
  const experiments = [
    {
      id: 2,
      title: "Magic Milk Colors",
      img: dryImg,
      videoUrl: "https://www.youtube.com/embed/Bq1_fVcji4g",
  content: (
    <>
      <h2>Magic Milk Colors</h2>
      <p>
        <strong>You’ll need:</strong><br />
        - Milk (whole milk works best)<br />
        - Food coloring (different colors)<br />
        - Dish soap<br />
        - Shallow plate
      </p>
      <p>
        <strong>Instructions:</strong><br />
        Pour milk into a shallow plate.<br />
        Add drops of different food coloring.<br />
        Dip a cotton swab in dish soap and touch the milk surface.<br />
        Watch colors swirl and move magically!
      </p>
      <p>
        <strong>What happens:</strong><br />
        Soap breaks the surface tension of the milk, making the colors swirl and mix in fascinating patterns.
      </p>
    </>
  ),
  text: `Magic Milk Colors. You'll need: Milk, Food coloring, Dish soap, Shallow plate. Instructions: Pour milk into a shallow plate, add food coloring drops. Dip cotton swab in dish soap and touch milk. Watch colors swirl magically! What happens: Soap breaks the milk's surface tension, making colors swirl and mix.`
},
    {
      id: 3,
      title: "Dancing Raisins",
      img: waterImg,
      videoUrl: "https://www.youtube.com/embed/ctWsPa0DCoA",
     content: (
    <>
      <h2>Dancing Raisins</h2>
      <p>
        <strong>You’ll need:</strong><br />
        - Clear soda (like Sprite or 7Up)<br />
        - Raisins<br />
        - A glass
      </p>
      <p>
        <strong>Instructions:</strong><br />
        Pour soda into a glass.<br />
        Drop a few raisins into the soda.<br />
        Watch as the raisins move up and down like they are dancing!
      </p>
      <p>
        <strong>What happens:</strong><br />
        Carbon dioxide bubbles in the soda attach to the raisins and lift them to the surface. When the bubbles pop, the raisins sink again, creating a dancing motion.
      </p>
    </>
  ),
  text: `Dancing Raisins. You'll need: Clear soda, Raisins, Glass. Instructions: Pour soda into a glass, drop raisins in, watch them move up and down like dancing! What happens: Carbon dioxide bubbles attach to raisins and lift them. When bubbles pop, raisins sink, creating a dancing effect.`
},
    {
      id: 4,
      title: "Walking Water",
      img: volcanoImg,
      videoUrl: "https://www.youtube.com/embed/MQGFQFdA6i0",
content: (
    <>
      <h2>Walking Water</h2>
      <p>
        <strong>You’ll need:</strong><br />
        - 3 clear cups<br />
        - Water<br />
        - Food coloring (different colors)<br />
        - Paper towels
      </p>
      <p>
        <strong>Instructions:</strong><br />
        Fill the first and third cups with colored water.<br />
        Leave the middle cup empty.<br />
        Fold paper towels into strips and place one end in a filled cup and the other in the empty cup.<br />
        Watch the water “walk” along the paper towel and mix in the middle cup!
      </p>
      <p>
        <strong>What happens:</strong><br />
        Water moves up the paper towel by capillary action, carrying the color to the empty cup and mixing colors.
      </p>
    </>
  ),
  text: `Walking Water. You'll need: 3 clear cups, Water, Food coloring, Paper towels. Instructions: Fill first and third cups with colored water, leave middle cup empty. Place folded paper towels connecting cups. Watch water walk and colors mix! What happens: Water moves via capillary action, carrying color to the empty cup and mixing colors.`
},
    {
      id: 5,
      title: "Paper Bridge Challenge",
      img: sandImg,
      videoUrl: "https://www.youtube.com/embed/gdQO3mlGJA8",
        content: (
    <>
      <h2>Paper Bridge Challenge</h2>
      <p>
        <strong>You’ll need:</strong><br />
        - Sheets of paper<br />
        - Small coins or objects<br />
        - Table or flat surface
      </p>
      <p>
        <strong>Instructions:</strong><br />
        Place two books or boxes a short distance apart.<br />
        Fold or stack paper to make a bridge between them.<br />
        Carefully place coins or small objects on the bridge.<br />
        See how much weight your paper bridge can hold!
      </p>
      <p>
        <strong>What happens:</strong><br />
        Folding and layering paper makes it stronger. Kids learn how shapes and layers can support weight.
      </p>
    </>
  ),
  text: `Paper Bridge Challenge. You'll need: Sheets of paper, Small coins, Table or flat surface. Instructions: Place two books or boxes apart. Fold or stack paper to make a bridge. Place coins carefully and see how much it holds! What happens: Folding/layering paper makes it stronger. Kids learn how shapes and layers support weight.`
},
    {
      id: 7,
      title: "Bottle Rocket",
      img: ballonImg,
      videoUrl: "https://www.youtube.com/embed/ff8EjjW1_2o",
   content: (
    <>
      <h2>Bottle Rocket</h2>
      <p>
        <strong>You’ll need:</strong><br />
        - Small plastic bottle<br />
        - Vinegar<br />
        - Baking soda<br />
        - Cork or stopper<br />
        - Measuring spoon
      </p>
      <p>
        <strong>Instructions:</strong><br />
        Pour vinegar into the bottle (about 1/4 full).<br />
        Wrap baking soda in a small piece of tissue.<br />
        Quickly drop the baking soda into the bottle and seal with the cork.<br />
        Place the bottle upside down outside and step back.<br />
        Watch the bottle shoot up like a rocket!
      </p>
      <p>
        <strong>What happens:</strong><br />
        Vinegar reacts with baking soda to produce carbon dioxide gas. The gas builds up pressure and propels the bottle into the air.
      </p>
    </>
  ),
  text: `Bottle Rocket. You'll need: Small plastic bottle, Vinegar, Baking soda, Cork, Measuring spoon. Instructions: Pour vinegar into bottle, wrap baking soda in tissue, drop it in, seal bottle, place upside down, step back, watch rocket! What happens: Vinegar reacts with baking soda to create CO₂ gas. Pressure builds up and launches the bottle into the air.`
},
    {
      id: 8,
      title: "Ice Fishing",
      img: saltImg,
      videoUrl: "https://www.youtube.com/embed/5Xwq8CusPjE",
      content: (
    <>
      <h2>Ice Fishing</h2>
      <p>
        <strong>You’ll need:</strong><br />
        - Ice cube<br />
        - String<br />
        - Salt<br />
        - Bowl of water
      </p>
      <p>
        <strong>Instructions:</strong><br />
        Place the ice cube in a bowl of water.<br />
        Lay a string across the ice cube.<br />
        Sprinkle a little salt on the string and ice.<br />
        Wait a few seconds, then gently lift the string — the ice sticks to it!
      </p>
      <p>
        <strong>What happens:</strong><br />
        Salt lowers the melting point of ice, causing the surface to melt slightly and then refreeze around the string, allowing you to “pick up” the ice.
      </p>
    </>
  ),
  text: `Ice Fishing. You'll need: Ice cube, String, Salt, Bowl of water. Instructions: Place ice in water, lay string across it, sprinkle salt, wait a few seconds, lift string. What happens: Salt melts and refreezes the ice around the string, letting you pick it up.`
},
    {
      id: 9,
      title: "Bubble Painting",
      img: rainbowImg,
      videoUrl: "https://www.youtube.com/embed/LGfx_ks-deI?",
      content: (
    <>
      <h2>Bubble Painting</h2>
      <p>
        <strong>You’ll need:</strong><br />
        - Bubble solution (or soapy water)<br />
        - Straws<br />
        - Paper<br />
        - Food coloring
      </p>
      <p>
        <strong>Instructions:</strong><br />
        Add a few drops of food coloring to the bubble solution.<br />
        Use a straw to blow bubbles onto a sheet of paper.<br />
        Watch the bubbles pop and leave colorful patterns on the paper.<br />
        Repeat with different colors to make art!
      </p>
      <p>
        <strong>What happens:</strong><br />
        Bubbles trap the colored solution, and when they pop, they leave unique patterns on the paper.
      </p>
    </>
  ),
  text: `Bubble Painting. You'll need: Bubble solution, Straws, Paper, Food coloring. Instructions: Add food coloring to bubble solution, blow bubbles onto paper, watch colors create patterns. Repeat with different colors. What happens: Bubbles trap colored solution and leave unique patterns when they pop.`
},
    {
      id: 10,
      title: "Balloon in a Bottle",
      img: lemonImg,
      videoUrl: "https://www.youtube.com/embed/yaDVnQOvjfU",
     content: (
    <>
      <h2>Balloon in a Bottle</h2>
      <p>
        <strong>You’ll need:</strong><br />
        - Small balloon<br />
        - Empty plastic bottle<br />
        - Hands
      </p>
      <p>
        <strong>Instructions:</strong><br />
        Stretch the balloon a little with your hands.<br />
        Try to put the balloon inside the bottle without inflating it — it won’t fit easily.<br />
        Now, place the balloon’s opening over the bottle mouth and blow into it.<br />
        Watch the balloon inflate inside the bottle!
      </p>
      <p>
        <strong>What happens:</strong><br />
        Air you blow into the bottle inflates the balloon. The tight bottle shows how air pressure works inside a closed space.
      </p>
    </>
  ),
  text: `Balloon in a Bottle. You'll need: Small balloon, Empty plastic bottle, Hands. Instructions: Stretch balloon, try to put it in bottle, then place opening over bottle mouth and blow. Watch it inflate inside! What happens: Air inflates balloon inside bottle. Air pressure demonstrates how a closed space affects inflation.`
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
      <div className="heading9"><h2>Experiments</h2></div>
      <div className="container7">
        {experiments.map((exp) => (
          <div key={exp.id} className="card7" onClick={() => openModal(exp)}>
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
          
            window.speechSynthesis.cancel();

          
            const utterance = new SpeechSynthesisUtterance(selectedExp.text);
            utterance.lang = "en-US";
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
          }}
        >
          <div className="modal1-header">
            <h2>{selectedExp.title}</h2>
           
            <div onClick={(e) => e.stopPropagation()}>
              <Sound text={selectedExp.text} />
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
