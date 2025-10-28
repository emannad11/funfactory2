import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./Poem.css";
import SoundButton0 from "./SoundButton0";


import TwinkleImg from "../assets/twinkle.jpeg";
import RainImg from "../assets/rain.jpeg";
import SheepImg from "../assets/sheep.jpg";
import JackImg from "../assets/jack.jpg";
import HumptyImg from "../assets/humpty.jpg";
import BeeImg from "../assets/frogg.png";
import RainbowImg from "../assets/rainbow.jpg";
import ButterflyImg from "../assets/butterfly.jpg";
import FishImg from "../assets/fish.jpg";
import BunnyImg from "../assets/bunny.jpg";


import Twinkle1 from "../assets/twinkle1.jpg";
import Twinkle2 from "../assets/twinkle2.jpg";
import Twinkle3 from "../assets/twinkle3.jpg";
import Twinkle4 from "../assets/twinkle4.jpg";
import Twinkle5 from "../assets/twinkle5.jpg";

import Rain1 from "../assets/rain1.jpg";
import Rain2 from "../assets/rain2.jpg";
import Rain3 from "../assets/rain3.jpg";
import Rain4 from "../assets/rain4.jpg";
import Rain5 from "../assets/rain5.jpg";

import Sheep1 from "../assets/sheep1.jpg";
import Sheep2 from "../assets/sheep2.jpg";
import Sheep3 from "../assets/sheep3.jpg";
import Sheep4 from "../assets/sheep4.jpeg";
import Sheep5 from "../assets/sheep5.jpg";

import Jack1 from "../assets/jack1.png";
import Jack2 from "../assets/jack2.jpeg";
import Jack3 from "../assets/jack3.jpg";
import Jack4 from "../assets/jack4.jpg";
import Jack5 from "../assets/jack5.jpg";

import Humpty1 from "../assets/humpty1.jpg";
import Humpty2 from "../assets/humpty2.jpg";
import Humpty3 from "../assets/humpty3.jpg";
import Humpty4 from "../assets/humpty4.jpg";
import Humpty5 from "../assets/humpty5.jpg";

import Bee1 from "../assets/bee1.jpg";
import Bee2 from "../assets/bee2.webp";
import Bee3 from "../assets/bee3.png";
import Bee4 from "../assets/bee4.webp";
import Bee5 from "../assets/bee5.jpg";

import Rainbow1 from "../assets/rainbow1.jpg";
import Rainbow2 from "../assets/rainbow2.jpg";
import Rainbow3 from "../assets/rainbow3.jpg";
import Rainbow4 from "../assets/rainbow4.jpg";
import Rainbow5 from "../assets/rainbow5.jpg";

import Butter1 from "../assets/butter1.jpg";
import Butter2 from "../assets/butter2.jpg";
import Butter3 from "../assets/butter3.webp";
import Butter4 from "../assets/butter4.webp";
import Butter5 from "../assets/butter5.jpg";

import Fish1 from "../assets/fish1.png";
import Fish2 from "../assets/fish2.png";
import Fish3 from "../assets/fish3.jpg";
import Fish4 from "../assets/fish4.jpg";
import Fish5 from "../assets/fish5.jpeg";

import Bunny1 from "../assets/bunny1.jpg";
import Bunny2 from "../assets/bunny2.jpg";
import Bunny3 from "../assets/bunny3.jpg";
import Bunny4 from "../assets/bunny4.jpg";
import Bunny5 from "../assets/bunny5.jpg";

export default function Poem() {
  const poems = [
    {
      id: 1,
      title: "Twinkle Twinkle",
      img: TwinkleImg,
      images: [Twinkle1, Twinkle2, Twinkle3, Twinkle4, Twinkle5],
      poem: `Twinkle, twinkle, little star,<br/>
How I wonder what you are!<br/>
Up above the world so high,<br/>
Like a diamond in the sky.`,
    },
    {
      id: 2,
      title: "Rain Rain",
      img: RainImg,
      images: [Rain1, Rain2, Rain3, Rain4, Rain5],
      poem: `Rain, rain, go away,<br/>
Come again another day,<br/>
Little Johnny wants to play,<br/>
Rain, rain, go away.`,
    },
    {
      id: 3,
      title: "Black Sheep",
      img: SheepImg,
      images: [Sheep1, Sheep2, Sheep3, Sheep4, Sheep5],
      poem: `Baba baba black sheep,<br/>
Have you any wool?<br/>
Yes sir, yes sir,<br/>
Three bags full!`,
    },
    {
      id: 4,
      title: "Jack and Jill",
      img: JackImg,
      images: [Jack1, Jack2, Jack3, Jack4, Jack5],
      poem: `Jack and Jill went up the hill,<br/>
To fetch a pail of water.<br/>
Jack fell down and broke his crown,<br/>
And Jill came tumbling after.`,
    },
    {
      id: 5,
      title: "Humpty Dumpty",
      img: HumptyImg,
      images: [Humpty1, Humpty2, Humpty3, Humpty4, Humpty5],
      poem: `Humpty Dumpty sat on a wall,<br/>
Humpty Dumpty had a great fall;<br/>
All the king's horses and all the king's men<br/>
Couldn't put Humpty together again.`,
    },
    {
      id: 6,
      title: "Busy Little Bee",
      img: BeeImg,
      images: [Bee1, Bee2, Bee3, Bee4, Bee5],
      poem: `Buzz, buzz, buzzing by,<br/>
Zooming fast from flower to sky.<br/>
Making honey, oh so sweet,<br/>
Busy bee is hard to beat!`,
    },
    {
      id: 7,
      title: "Rainbow Colors",
      img: RainbowImg,
      images: [Rainbow1, Rainbow2, Rainbow3, Rainbow4, Rainbow5],
      poem: `Red and orange, yellow too,<br/>
Green and blue and purple hue!<br/>
After rain, the rainbow’s near,<br/>
Smiles and colors fill the air!`,
    },
    {
      id: 8,
      title: "Little Butterfly",
      img: ButterflyImg,
      images: [Butter1, Butter2, Butter3, Butter4, Butter5],
      poem: `Flutter, flutter, in the sky,<br/>
Little wings go flying high.<br/>
Blue and yellow, pink and red,<br/>
Dancing where the flowers spread!`,
    },
    {
      id: 9,
      title: "Tiny Fish",
      img: FishImg,
      images: [Fish1, Fish2, Fish3, Fish4, Fish5],
      poem: `Tiny fish in water blue,<br/>
Swimming fast, what fun to do!<br/>
Up and down and round they go,<br/>
Shiny scales that brightly glow!`,
    },
    {
      id: 10,
      title: "The Bunny Hop",
      img: BunnyImg,
      images: [Bunny1, Bunny2, Bunny3, Bunny4, Bunny5],
      poem: `Little bunny, soft and white,<br/>
Hopping, hopping out of sight.<br/>
Through the garden, here and there,<br/>
Wiggly nose and fluffy hair!`,
    },
  ];

  const [selectedPoem, setSelectedPoem] = useState(null);

  const openModal = (poem) => {
    window.speechSynthesis.cancel();
    setSelectedPoem(poem);
    const utterance = new SpeechSynthesisUtterance(poem.title);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedPoem(null);
  };

  return (
    <>
      <div className="heading9"><h2>Poems</h2></div>
      <div className="container5">
        {poems.map((poem) => (
          <div
            key={poem.id}
            className="card5"
            onClick={() => openModal(poem)}
          >
            <img src={poem.img} alt={poem.title} />
            <h3>{poem.title}</h3>
          </div>
        ))}
      </div>

      {selectedPoem && (
        <div className="poem-modal-overlay" onClick={closeModal}>
          <div
            className="poem-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={closeModal}>
              ✖
            </button>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              speed={800}
              slidesPerView={1}
              className="poem-swiper"
            >
              {selectedPoem.images?.length > 0 ? (
                selectedPoem.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${selectedPoem.title} ${index + 1}`}
                      className="poem-img"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <img
                    src={selectedPoem.img}
                    alt={selectedPoem.title}
                    className="poem-img"
                  />
                </SwiperSlide>
              )}
            </Swiper>

            <div className="poem-card">
              <div className="poem-header">
                <h2>{selectedPoem.title}</h2>
                <div className="sound-right">
                  <span className="sound-text">Click to play 🎵</span>
                  <SoundButton0 text={selectedPoem.poem.replace(/<br\/>/g, " ")} />
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: selectedPoem.poem }}></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
