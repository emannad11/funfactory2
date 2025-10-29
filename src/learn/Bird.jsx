import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Bird.css";
import SoundButton from "./SoundButton";

import parrotMain from "../assets/parrot.jpg";
import parrot1 from "../assets/Parrot3.jpg";
import parrot2 from "../assets/Parrot1.webp";
import parrot3 from "../assets/Parrot2.jpg";
import parrot4 from "../assets/Parrot4.webp";
import parrot5 from "../assets/Parrot5.jpg";

import sparrowMain from "../assets/sparrow.jpeg";
import sparrow1 from "../assets/Sparrow1.jpeg";
import sparrow2 from "../assets/Sparrow2.jpeg";
import sparrow3 from "../assets/Sparrow3.webp";
import sparrow4 from "../assets/nest.jpg";
import sparrow5 from "../assets/Sparrow4.webp";

import peacockMain from "../assets/peacock.webp";
import peacock1 from "../assets/peacock1.jpg";
import peacock2 from "../assets/peacock2.jpeg";
import peacock3 from "../assets/peacock3.jpeg";
import peacock4 from "../assets/peacock4.webp";
import peacock5 from "../assets/peacock5.webp";

import henMain from "../assets/hen.webp";
import hen1 from "../assets/hen2.webp";
import hen2 from "../assets/hen1.webp";
import hen3 from "../assets/hen3.webp";
import hen4 from "../assets/hen4.jpeg";
import hen5 from "../assets/hen5.jpg";

import penguinMain from "../assets/p.jpeg";
import penguin1 from "../assets/penguin1.webp";
import penguin2 from "../assets/penguin2.jpg";
import penguin3 from "../assets/penguin3.jpg";
import penguin4 from "../assets/penguin3.jpg";
import penguin5 from "../assets/penguin5.jpg";

import ostrichMain from "../assets/ostrich.avif";
import ostrich1 from "../assets/ostrich1.avif";
import ostrich2 from "../assets/ostrich5.webp";
import ostrich3 from "../assets/ostrich2.jpeg";
import ostrich4 from "../assets/ostrich3.jpg";
import ostrich5 from "../assets/ostrich4.jpg";

import doveMain from "../assets/dove.jpg";
import dove1 from "../assets/dove1.jpeg";
import dove2 from "../assets/dove2.webp";
import dove3 from "../assets/dove3.jpg";
import dove4 from "../assets/dove4.jpg";
import dove5 from "../assets/dove5.jpg";

import owlMain from "../assets/owl.jpeg";
import owl1 from "../assets/owl1.jpg";
import owl2 from "../assets/owl4.jpg";
import owl3 from "../assets/owl2.jpg";
import owl4 from "../assets/owl5.jpg";
import owl5 from "../assets/owl3.jpeg";

import duckMain from "../assets/duck.avif";
import duck1 from "../assets/duck1.jpg";
import duck2 from "../assets/duck5.webp";
import duck3 from "../assets/duck2.jpg";
import duck4 from "../assets/duck3.jpg";
import duck5 from "../assets/duck4.jpg";

import eagleMain from "../assets/eagle.jpg";
import eagle1 from "../assets/eagle1.jpeg";
import eagle2 from "../assets/eagle3.webp";
import eagle3 from "../assets/eagle2.jpg";
import eagle4 from "../assets/eagle5.jpg";
import eagle5 from "../assets/eagle4.jpg";

export default function Bird() {
  const birds = [
    {
      id: 1,
      title: "Parrot",
      img: parrotMain,
      images: [parrot1, parrot2, parrot3, parrot4, parrot5],
      paragraph: `A parrot is a colorful bird.  
      Parrots eat fruits, seeds, and nuts.  
    They live in trees and forests.  
    Parrots can talk, whistle, and mimic sounds.  
    They are playful and love to be around people.`,
    },
    {
      id: 2,
      title: "Sparrow",
      img: sparrowMain,
      images: [sparrow1, sparrow2, sparrow3, sparrow4, sparrow5],
      paragraph: `A sparrow is a small brown bird.  
    Sparrows eat seeds, grains, and insects.  
    They live in trees, gardens, and near houses.  
    Sparrows can chirp and fly very fast.  
    They are friendly and often stay in flocks.`,
    },
    {
      id: 3,
      title: "Peacock",
      img: peacockMain,
      images: [peacock1, peacock2, peacock3, peacock4, peacock5],
      paragraph: `A peacock is a beautiful bird with colorful feathers.  
    Peacocks eat grains, insects, and plants.  
    They live in forests.  
    Male peacocks have long, shiny tail feathers that they fan out.  
    Peacocks can make loud calls and are very proud birds.`,
    },
    {
      id: 4,
      title: "Hen",
      img: henMain,
      images: [hen1, hen2, hen3, hen4, hen5],
      paragraph: `A hen is a farm bird.  
    Hens eat grains, seeds, and small insects.  
    They live on farms.  
    Hens lay eggs for people to eat.  
    They cluck and scratch the ground to find food.`,
    },
    {
      id: 5,
      title: "Penguin",
      img: penguinMain,
      images: [penguin1, penguin2, penguin3, penguin4, penguin5],
      paragraph: `A penguin is a flightless bird that lives in cold places.  
    Penguins eat fish and small sea animals.   
    Penguins can swim very fast in the water.  
    They waddle when they walk on land and are very cute.`,
    },
    {
      id: 6,
      title: "Ostrich",
      img: ostrichMain,
      images: [ostrich1, ostrich2, ostrich3, ostrich4, ostrich5],
      paragraph: `An ostrich is the largest bird on land.  
    Ostriches eat plants, seeds, and insects.  
    They live in open grasslands and deserts.  
    Ostriches cannot fly but run very fast on their strong legs.  
    They have long necks and big eyes to see far away.`,
    },
    {
      id: 7,
      title: "Dove",
      img: doveMain,
      images: [dove1, dove2, dove3, dove4, dove5],
      paragraph: `A dove is a small and gentle bird.  
    Doves eat seeds, grains, and fruits.  
    They live in trees, gardens, and near houses.  
    Doves can coo and fly gracefully in the sky.  
    They are symbols of peace and love.`,
    },
    {
      id: 8,
      title: "Owl",
      img: owlMain,
      images: [owl1, owl2, owl3, owl4, owl5],
      paragraph: `An owl is a bird that comes out at night.  
    Owls eat mice, insects, and small animals.  
    They live in trees, forests, and barns.  
    Owls can turn their heads all the way around.  
    They have big eyes and can see very well in the dark.`,
    },
    {
      id: 9,
      title: "Duck",
      img: duckMain,
      images: [duck1, duck2, duck3, duck4, duck5],
      paragraph: `A duck is a water bird.  
    Ducks eat plants, insects, and small fish.  
    They live in ponds, lakes, and rivers.  
    Ducks can swim very well and also fly.  
    They quack and waddle when they walk on land.`,
    },
    {
      id: 10,
      title: "Eagle",
      img: eagleMain,
      images: [eagle1, eagle2, eagle3, eagle4, eagle5],
      paragraph: `An eagle is a big and strong bird.  
    Eagles eat fish, small animals, and birds.  
    They live in mountains, forests, and near rivers.  
    Eagles can fly very high and have sharp eyes to see far.  
    They are powerful and brave birds.`,
    },
  ];

  const [selectedBird, setSelectedBird] = useState(null);

  const openModal = (bird) => {
    window.speechSynthesis.cancel();
    setSelectedBird(bird);
    const utterance = new SpeechSynthesisUtterance(bird.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedBird(null);
  };

  return (
    <>
      <div className="heading7"><h2>Birds</h2></div>
      <div className="container1">
        {birds.map((bird) => (
          <div
            key={bird.id}
            className="card1"
            onClick={() => openModal(bird)}
          >
            <img src={bird.img} alt={bird.title} />
            <h3>{bird.title}</h3>
          </div>
        ))}
      </div>
    {selectedBird && (
  <div className="bird-modal-overlay">
    <div className="bird-modal-content">
      <button className="close-modal-btn" onClick={closeModal}>✖</button>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        spaceBetween={15}
        slidesPerView={1}
        className="bird-swiper"
      >
        {selectedBird.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`${selectedBird.title} ${i + 1}`}
              className="bird-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bird-card">
        <div className="bird-header">
          <h2>{selectedBird.title}</h2>
          <SoundButton text={selectedBird.paragraph} />
        </div>
        <p>{selectedBird.paragraph}</p>
      </div>
    </div>
  </div>
)}
    </>
  );
}
