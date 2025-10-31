import { useState } from "react";
import "./Experiment.css";
import SoundButton2 from "./SoundButton2";

import floatingImg from "../assets/floating.jpg";
import dryImg from "../assets/dry.jpg";
import waterImg from "../assets/water.jpg";
import volcanoImg from "../assets/volcano.jpg";
import sandImg from "../assets/sand.jpg";
import chocImg from "../assets/choc.jpg";
import ballonImg from "../assets/ballon.jpg";
import saltImg from "../assets/salt.jpeg";
import rainbowImg from "../assets/rainbow1.jpg";
import lemonImg from "../assets/lemon.jpg";

export default function Experiment() {
  
  const experiments = [
    {
      id: 1,
      title: "Floating Egg",
      img: floatingImg,
      videoUrl: "https://www.youtube.com/embed/iMyW2nbpmmQ",
      content: (
        <>
          <h2>Make an Egg Float in Salt Water</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - 1 egg<br />
            - Water<br />
            - Salt<br />
            - A tall glass
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Fill glass half with water, stir in lots of salt.<br />
            Pour plain water on top carefully.<br />
            Lower the egg gently into the glass.
          </p>
          <p>
            <strong>What happens:</strong><br />
            The egg sinks in plain water but floats in salty water because salt water is denser.
          </p>
        </>
      ),
      text: `Make an Egg Float in Salt Water. You'll need: 1 egg, Water, Salt, A tall glass. Instructions: Fill the glass half with water and stir in lots of salt. Carefully pour plain water on top until the glass is almost full. Gently lower the egg into the glass. What happens: The egg sinks through the plain water but floats on the salty water. Salt water is denser, so it helps objects float.`,
    },
    {
      id: 2,
      title: "Dry Ice Bubble",
      img: dryImg,
      videoUrl: "https://www.youtube.com/embed/hSizkoEFImc",
      content: (
        <>
          <h2>Make a Big Dry Ice Bubble</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Water<br />
            - A large bowl (or smaller bowl/cup)<br />
            - A strip of cloth or material<br />
            - Soapy water (water + dish soap)<br />
            - Dry ice (handle with gloves)
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Put dry ice in bowl, add water.<br />
            Dip cloth in soapy water, run around bowl edge.<br />
            Step back and watch bubble grow!
          </p>
          <p>
            <strong>What happens:</strong><br />
            Dry ice sublimates creating fog, gas fills bubble until it bursts.
          </p>
        </>
      ),
      text: `Make a Big Dry Ice Bubble. You'll need: Water, A large bowl, A strip of cloth, Soapy water, Dry ice. Instructions: Put dry ice in bowl and add water. Dip cloth in soapy water, run around bowl edge. Step back and watch bubble grow! What happens: Dry ice sublimates into gas, creating fog. Gas fills bubble until it bursts.`,
    },
    {
      id: 3,
      title: "Oil and Water",
      img: waterImg,
      videoUrl: "https://www.youtube.com/embed/sV0SxwaVKN8",
      content: (
        <>
          <h2>Mixing Oil and Water</h2>
          <p>
            <strong>What you'll need:</strong><br />
            - Small soft drink bottle<br />
            - Water<br />
            - Food colouring<br />
            - 2 tablespoons cooking oil<br />
            - Dish washing liquid or detergent
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Add food colouring to water.<br />
            Pour coloured water and oil into bottle.<br />
            Shake well and watch.<br />
            Add detergent and shake again.
          </p>
          <p>
            <strong>What's happening?</strong><br />
            Oil and water don't mix; oil floats. Detergent helps mix them by forming an emulsion.
          </p>
        </>
      ),
      text: `Mixing Oil and Water. You'll need a bottle, water, food colouring, cooking oil, detergent. Instructions: Add colouring to water, pour water and oil into bottle, shake and watch, add detergent and shake again. What's happening: Oil floats on water. Detergent helps mix them by forming an emulsion.`,
    },
    {
      id: 4,
      title: "Vinegar Volcano",
      img: volcanoImg,
      videoUrl: "https://www.youtube.com/embed/dIvXnqQaSwM",
      content: (
        <>
          <h2>Vinegar Volcano</h2>
          <p>
            <strong>What you'll need:</strong><br />
            - Baking soda<br />
            - Vinegar<br />
            - A container<br />
            - Paper towels
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Put baking soda in the container.<br />
            Pour vinegar on top.<br />
            Watch the fizzing reaction!
          </p>
          <p>
            <strong>What's happening?</strong><br />
            Baking soda (a base) reacts with vinegar (an acid) to form carbon dioxide gas, causing fizzing.
          </p>
        </>
      ),
      text: `Baking Soda & Vinegar Volcano. You'll need baking soda, vinegar, a container, and paper towels. Instructions: Put baking soda in the container, pour vinegar on top, and watch the fizzing reaction. What's happening: Baking soda reacts with vinegar to produce carbon dioxide gas, creating fizz.`
    },
    {
      id: 5,
      title: "Quick Sand",
      img: sandImg,
      videoUrl: "https://www.youtube.com/embed/PLKN3X5JgbM",
      content: (
        <>
          <h2>Make Your Own Quick Sand</h2>
          <p>
            <strong>What you'll need:</strong><br />
            - 1 cup maize cornflour<br />
            - Half a cup water<br />
            - Large plastic container<br />
            - Spoon
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Mix cornflour and water in the container.<br />
            Stir slowly to show liquid properties.<br />
            Stir quickly to make it hard.<br />
            Play outside and stir before use.
          </p>
          <p>
            <strong>What's happening?</strong><br />
            Cornflour grains lock when stirred fast, making it thick and hard. Stirring slowly lets water flow, making it runny.
          </p>
        </>
      ),
      text: `Make Your Own Quick Sand. You'll need 1 cup maize cornflour, half a cup water, a large plastic container, and a spoon. Instructions: Mix cornflour and water, stir slowly to show liquid, stir quickly to make hard. What's happening: Stirring fast locks cornflour grains, making it thick; stirring slow lets it flow.`,
    },
    {
      id: 6,
      title: "Melting Chocolate",
      img: chocImg,
      videoUrl: "https://www.youtube.com/embed/xo1dVkwjpH8",
      content: (
        <>
          <h2>Melting Chocolate</h2>
          <p>
            <strong>What you'll need:</strong><br />
            - Small chocolate pieces<br />
            - Paper plates<br />
            - Pen and paper
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Put one chocolate piece on a plate in the shade. Wait 10 minutes and check softness.<br />
            Repeat in the sun and record changes.<br />
            Try other spots like your bag or mouth. Compare results.
          </p>
          <p>
            <strong>What's happening?</strong><br />
            Chocolate melts when it heats up — from solid to liquid. In the mouth, body heat melts it faster!
          </p>
        </>
      ),
      text: `Melting Chocolate. You'll need chocolate pieces, paper plates, pen and paper. Instructions: Place chocolate in shade and sun, wait 10 mins, compare softness or melting. Try places like your bag or mouth. What's happening: Heat melts chocolate into liquid. Mouth heat melts it fast!`,
    },
    {
      id: 7,
      title: "Blowing Up Balloons",
      img: ballonImg,
      videoUrl: "https://www.youtube.com/embed/JK5-2X_GqP8",
      content: (
        <>
          <h2>Blowing Up Balloons With CO₂</h2>
          <p>
            <strong>What you'll need:</strong><br />
            - Balloon<br />
            - 40ml water<br />
            - Soft drink bottle<br />
            - Drinking straw<br />
            - Lemon juice (or vinegar)<br />
            - 1 tsp baking soda
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Stretch the balloon. Pour water into bottle, add baking soda and stir.<br />
            Add lemon juice and quickly place balloon over bottle opening.
          </p>
          <p>
            <strong>What's happening?</strong><br />
            The reaction creates carbon dioxide gas, which fills the balloon!
          </p>
        </>
      ),
      text: `Balloon with CO₂. You'll need: balloon, water, bottle, straw, lemon juice, baking soda. Instructions: Pour water in bottle, add baking soda and stir. Add lemon juice and cover with balloon. What's happening: CO₂ gas forms and inflates the balloon.`,
    },
    {
      id: 8,
      title: "Lung Capacity",
      img: saltImg,
      videoUrl: "https://www.youtube.com/embed/UlhJwogS6l0",
      content: (
        <>
          <h2>What Is Your Lung Volume?</h2>
          <p>
            <strong>What you'll need:</strong><br />
            - Plastic tubing<br />
            - Large plastic bottle<br />
            - Water<br />
            - Sink or large bowl
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Fill the bottle with water, turn it upside down in a sink of water, and insert the tube.<br /> Take a deep breath and blow out through the tube into the bottle.
          </p>
          <p>
            <strong>What's happening?</strong><br />
            The air from your lungs replaces the water in the bottle. The amount of water displaced shows your lung capacity!
          </p>
        </>
      ),
      text: `Lung Volume Test. You'll need: tubing, bottle, water, sink. Instructions: Fill the bottle with water and turn it upside down in a sink of water. Blow through a tube into the bottle after a deep breath. What's happening: Your breath pushes out water, showing your lung capacity.`,
    },
    {
      id: 9,
      title: "Creating Rainbow",
      img: rainbowImg,
      videoUrl: "https://www.youtube.com/embed/lma6xLE4tPI",
      content: (
        <>
          <h2>Make Your Own Rainbow</h2>
          <p>
            <strong>What you'll need:</strong><br />
            - A glass of water<br />
            - White paper<br />
            - A sunny day
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Hold a glass of water near a sunny window and place white paper underneath.<br />
            Watch a rainbow appear as sunlight passes through the water.<br />
            Try different angles!
          </p>
          <p>
            <strong>What's happening?</strong><br />
            Sunlight bends as it moves through water, separating into colors. This is called refraction — just like when rainbows form in the sky!
          </p>
        </>
      ),
      text: `Make Your Own Rainbow. You'll need: a glass of water, white paper, and sunlight. Instructions: Hold the water glass near a window above the paper. Sunlight bends through the water and makes a rainbow. What's happening: Sunlight refracts in water, separating into colors like a real rainbow.`,
    },
    {
      id: 10,
      title: "Invisible Ink",
      img: lemonImg,
      videoUrl: "https://www.youtube.com/embed/poCnU_crpjQ?si",
      content: (
        <>
          <h2>Invisible Ink with Lemon Juice</h2>
          <p>
            <strong>What you'll need:</strong><br />
            - Half a lemon<br />
            - Water<br />
            - Spoon & bowl<br />
            - Cotton bud<br />
            - White paper<br />
            - Light bulb or lamp
          </p>
          <p>
            <strong>Instructions:</strong><br />
            Mix lemon juice with water.<br />
            Use a cotton bud to write a message on paper.<br />
            Let it dry.<br />
            To reveal, heat the paper under a lamp.
          </p>
          <p>
            <strong>What's happening?</strong><br />
            Lemon juice turns brown when heated due to oxidation, revealing your secret message!
          </p>
        </>
      ),
      text: `Invisible Ink with Lemon Juice. You'll need: lemon juice, water, spoon, cotton bud, paper, and a lamp. Instructions: Mix lemon juice and water. Write with a cotton bud. Let dry. Heat under a lamp to reveal the message. What's happening: The lemon juice oxidizes and turns brown when heated, exposing your writing!`,
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
              <SoundButton2 text={selectedExp.text} />
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
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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