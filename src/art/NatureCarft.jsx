import { useState } from "react";
import "./NCraft.css";
import Sound1 from "./Sound1";

import sandImg from "/src/assets/sandd.jpg";
import shellImg from "/src/assets/shell.webp";
import featherImg from "/src/assets/feather.jpg";
import pineImg from "/src/assets/pine.jpg";
import leafImg from "/src/assets/leaf.jpg";
import rockImg from "/src/assets/rock.jpg";
import seedImg from "/src/assets/seed.jpg";
import twigImg from "/src/assets/collage.jpg";

export default function NatureCraft() {
  const experiments = [
    {
      id: 1,
      title: "Sand Art",
      img: sandImg,
      videoUrl: "https://www.youtube.com/embed/6W1lE0q4GxY",
      content: (
        <>
          <h2>Make a Sand Art Picture</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Colored sand<br />
            - Glue<br />
            - A white sheet of paper
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Draw a simple picture on paper.<br />
            2. Apply glue inside one area of the drawing.<br />
            3. Sprinkle colored sand on the glue.<br />
            4. Shake off extra sand.<br />
            5. Repeat with other colors — your sand art is ready!
          </p>
        </>
      ),
      text: `Let's make a Sand Art Picture. You’ll need colored sand, glue, and a white sheet of paper.
First, draw a simple picture on the paper. Apply glue inside one part of your drawing.
Then sprinkle colored sand on the glue and shake off the extra sand.
Repeat with other colors to fill your picture. Your beautiful sand art is ready!`,
    },
    {
      id: 2,
      title: "Sea Shell Frame",
      img: shellImg,
      videoUrl: "https://www.youtube.com/embed/eUZeBYO40NM",
      content: (
        <>
          <h2>Make a Sea Shell Frame</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Sea shells<br />
            - Glue<br />
            - A cardboard photo frame
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Take a plain cardboard frame.<br />
            2. Apply glue around the edges.<br />
            3. Stick the sea shells one by one.<br />
            4. Let it dry for a few hours.<br />
            5. Your beautiful sea shell frame is ready!
          </p>
        </>
      ),
      text: `Let's make a Sea Shell Frame. You’ll need sea shells, glue, and a cardboard photo frame.
First, take a plain cardboard frame. Apply glue around the edges. Then, stick the sea shells one by one carefully. Let it dry for a few hours. Your beautiful sea shell frame is ready!`,
    },
    {
      id: 3,
      title: "Feather Hangings",
      img: featherImg,
      videoUrl: "https://www.youtube.com/embed/MiZrTn_xtBQ",
      content: (
        <>
          <h2>Make a Feather Hanging</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Colorful feathers<br />
            - A stick or straw<br />
            - Thread or string<br />
            - Glue and tape
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Cut 3–4 pieces of string of different lengths.<br />
            2. Tie one feather to the end of each string.<br />
            3. Tape or tie the other end of each string to the stick or straw.<br />
            4. Add more decorations if you like.<br />
            5. Hang it near a window — your feather hanging is ready!
          </p>
        </>
      ),
      text: `Let's make a Feather Hanging. You’ll need colorful feathers, a stick or straw, some string, glue, and tape. Cut three or four pieces of string of different lengths. Tie one feather to the end of each string. Then attach the other end of each string to the stick or straw using tape or glue. You can decorate it with more colors or beads if you like. Now hang it near a window — your feather hanging is ready!`,
    },
    {
      id: 4,
      title: "Pine Cone Flowers",
      img: pineImg,
      videoUrl: "https://www.youtube.com/embed/hgju1g7ZErA",
      content: (
        <>
          <h2>Make a Pine Cone Flower</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - A pine cone<br />
            - Paint and brush<br />
            - Glue<br />
            - Green paper or pipe cleaners
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Turn the pine cone upside down — the wider part will be the flower.<br />
            2. Paint the scales with bright colors like red, yellow, or pink.<br />
            3. Cut a green stem from paper or use a pipe cleaner.<br />
            4. Glue the stem to the bottom of the pine cone.<br />
            5. Let it dry — your pretty pine cone flower is ready!
          </p>
        </>
      ),
      text: `Let's make a Pine Cone Flower. You’ll need a pine cone, paint and a brush, glue, and green paper or pipe cleaners. Turn the pine cone upside down — the wider part will be the flower. Paint the scales with bright colors like red, yellow, or pink. Then cut a green stem from paper or use a pipe cleaner and glue it to the bottom of the pine cone. Let it dry — your beautiful pine cone flower is ready!`,
    },
    {
      id: 5,
      title: "Leaf Printing",
      img: leafImg,
      videoUrl: "https://www.youtube.com/embed/5v73yqm7SQ8",
      content: (
        <>
          <h2>Leaf Printing</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Leaves of different shapes and sizes<br />
            - Paint<br />
            - Paper<br />
            - A brush or sponge
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Collect leaves from outside and clean them.<br />
            2. Apply paint to the leaf using a brush or sponge.<br />
            3. Press the painted side of the leaf onto your paper.<br />
            4. Gently lift the leaf to reveal the print.<br />
            5. Repeat with different leaves and colors to make patterns.<br />
            6. Let the paper dry completely.<br />
            7. Display your beautiful leaf prints!
          </p>
        </>
      ),
      text: `Leaf Printing. You’ll need: Leaves of different shapes and sizes, Paint, Paper, A brush or sponge. Instructions: Collect leaves from outside and clean them. Apply paint to the leaf using a brush or sponge. Press the painted side of the leaf onto your paper. Gently lift the leaf to reveal the print. Repeat with different leaves and colors to make patterns. Let the paper dry completely. Display your beautiful leaf prints!`,
    },
    {
      id: 6,
      title: "Rock Painting",
      img: rockImg,
      videoUrl: "https://www.youtube.com/embed/D1iUm-mz-ko",
      content: (
        <>
          <h2>Rock Painting</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Smooth rocks<br />
            - Acrylic paints<br />
            - Paintbrushes<br />
            - A cup of water<br />
            - Newspaper or old cloth
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Clean the rocks to remove dirt and dust.<br />
            2. Lay down newspaper or cloth to protect your work surface.<br />
            3. Paint your designs or patterns on the rocks using acrylic paints.<br />
            4. Let the paint dry completely.<br />
            5. Add additional layers or details if desired.<br />
            6. Display your colorful rocks or use them as decorations!
          </p>
        </>
      ),
      text: `Rock Painting. You’ll need: Smooth rocks, Acrylic paints, Paintbrushes, A cup of water, Newspaper or old cloth. Instructions: Clean the rocks to remove dirt and dust. Lay down newspaper or cloth to protect your work surface. Paint your designs or patterns on the rocks using acrylic paints. Let the paint dry completely. Add additional layers or details if desired. Display your colorful rocks or use them as decorations!`,
    },
    {
      id: 7,
      title: "Seed Art",
      img: seedImg,
      videoUrl: "https://www.youtube.com/embed/JZWgzNvKdPY",
      content: (
        <>
          <h2>Seed Art</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Various seeds (sunflower, lentils, beans, rice)<br />
            - Cardboard or thick paper<br />
            - Glue<br />
            - Pencil
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Sketch a simple design or pattern on the cardboard with a pencil.<br />
            2. Apply glue to one section of your design.<br />
            3. Carefully place seeds on the glued area according to your pattern.<br />
            4. Press gently to make sure the seeds stick.<br />
            5. Continue gluing and placing seeds until your design is complete.<br />
            6. Let it dry completely before displaying your artwork.
          </p>
        </>
      ),
      text: `Seed Art. You’ll need: Various seeds (sunflower, lentils, beans, rice), Cardboard or thick paper, Glue, Pencil. Instructions: Sketch a simple design or pattern on the cardboard with a pencil. Apply glue to one section of your design. Carefully place seeds on the glued area according to your pattern. Press gently to make sure the seeds stick. Continue gluing and placing seeds until your design is complete. Let it dry completely before displaying your artwork.`,
    },
    {
      id: 8,
      title: "Twig Frames",
      img: twigImg,
      videoUrl: "https://www.youtube.com/embed/M3GZr1ilG0s",
      content: (
        <>
          <h2>Twig Frames</h2>
          <p>
            <strong>You’ll need:</strong><br />
            - Small twigs or sticks<br />
            - Cardboard or photo frame base<br />
            - Glue (hot glue works best)<br />
            - Scissors or pruning shears
          </p>
          <p>
            <strong>Instructions:</strong><br />
            1. Collect twigs of similar thickness and length.<br />
            2. Arrange twigs around the edges of your cardboard or frame base.<br />
            3. Cut twigs to fit the sides neatly if necessary.<br />
            4. Glue the twigs securely onto the base.<br />
            5. Layer twigs for a more textured and rustic look.<br />
            6. Let the glue dry completely before placing a photo or artwork inside.
          </p>
        </>
      ),
      text: `Twig Frames. You’ll need: Small twigs or sticks, Cardboard or photo frame base, Glue (hot glue works best), Scissors or pruning shears. Instructions: Collect twigs of similar thickness and length. Arrange twigs around the edges of your cardboard or frame base. Cut twigs to fit the sides neatly if necessary. Glue the twigs securely onto the base. Layer twigs for a more textured and rustic look. Let the glue dry completely before placing a photo or artwork inside.`,
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
      <div className="heading2"><h2>Nature Crafts</h2></div>
      <div className="container-nat">
        {experiments.map((exp) => (
          <div key={exp.id} className="card-nat" onClick={() => openModal(exp)}>
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
