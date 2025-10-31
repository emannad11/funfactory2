import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Animal.css";
import SoundButton from "./SoundButton";

import appleMain from "../assets/Apple.jpeg";
import apple1 from "../assets/Apple1.webp";
import apple2 from "../assets/Apple2.jpeg";
import apple3 from "../assets/Apple3.jpg";
import apple4 from "../assets/Apple4.jpg";
import apple5 from "../assets/Apple5.jpg";

import bananaMain from "../assets/ban.webp";
import banana1 from "../assets/Banana1.webp";
import banana2 from "../assets/Banana2.jpg";
import banana3 from "../assets/Banana3.jpeg";
import banana4 from "../assets/Banana4.jpg";
import banana5 from "../assets/Banana5.jpeg";

import mangoMain from "../assets/mango.jpeg";
import mango1 from "../assets/Mango1.jpg";
import mango2 from "../assets/Mango2.webp";
import mango3 from "../assets/Mango5.jpg";
import mango4 from "../assets/Mango4.jpg";
import mango5 from "../assets/Mango3.webp";

import pineappleMain from "../assets/pineapple.webp";
import pineapple1 from "../assets/pineapple1.avif";
import pineapple2 from "../assets/pineapple3.jpg";
import pineapple3 from "../assets/pineapple5.jpg";
import pineapple4 from "../assets/Pineapple4.jpg";
import pineapple5 from "../assets/pineapple2.webp";

import strawberryMain from "../assets/strawberry.jpeg";
import strawberry1 from "../assets/Strawberry1.webp";
import strawberry2 from "../assets/Strawberry2.jpg";
import strawberry3 from "../assets/Strawberry3.jpg";
import strawberry4 from "../assets/Strawberry4.jpg";
import strawberry5 from "../assets/Strawberry5.jpg";

import grapesMain from "../assets/grap.jpeg";
import grapes1 from "../assets/Grapes1.jpg";
import grapes2 from "../assets/Grapes2.jpeg";
import grapes3 from "../assets/Grapes3.jpg";
import grapes4 from "../assets/Grapes4.jpeg";
import grapes5 from "../assets/Grapes5.webp";

import orangeMain from "../assets/orangeee.jpeg";
import orange1 from "../assets/O1.jpg";
import orange2 from "../assets/O2.jpg";
import orange3 from "../assets/O3.jpg";
import orange4 from "../assets/O4.jpg";
import orange5 from "../assets/O5.webp";

import guavaMain from "../assets/guava.jpeg";
import guava1 from "../assets/G1.webp";
import guava2 from "../assets/G2.jpg";
import guava3 from "../assets/G5.jpg";
import guava4 from "../assets/G4.jpg";
import guava5 from "../assets/G3.webp";

import peachMain from "../assets/peach.jpg";
import peach1 from "../assets/P1.webp";
import peach2 from "../assets/P3.jpg";
import peach3 from "../assets/P5.jpg";
import peach4 from "../assets/P4.jpg";
import peach5 from "../assets/P2.webp";

import litchiMain from "../assets/lyche.webp";
import litchi1 from "../assets/L1.jpg";
import litchi2 from "../assets/L2.jpg";
import litchi3 from "../assets/L3.jpg";
import litchi4 from "../assets/L4.jpg";
import litchi5 from "../assets/L5.jpg";

export default function Fruit() {
  const fruits = [
    { id: 1, title: "Apple", img: appleMain, images: [apple1, apple2, apple3, apple4, apple5], paragraph: `An apple is a round fruit.  
Apples can be red, green, or yellow.  
They are sweet, juicy, and tasty.  
Apples grow on trees in orchards.  
Eating apples keeps us healthy and strong.` },
    { id: 2, title: "Banana", img: bananaMain, images: [banana1, banana2, banana3, banana4, banana5], paragraph: `A banana is a long yellow fruit.  
Bananas are soft, sweet, and tasty.  
They grow in big bunches on banana plants.  
Monkeys and children love to eat bananas.  
Bananas give us energy and make us strong.` },
    { id: 3, title: "Mango", img: mangoMain, images: [mango1, mango2, mango3, mango4, mango5], paragraph: `A mango is a sweet and juicy fruit.  
Mangoes are usually yellow or green when ripe.  
They grow on big trees in summer.  
People call it the "King of Fruits".  
Mangoes are very tasty and healthy.` },
    { id: 4, title: "Pineapple", img: pineappleMain, images: [pineapple1, pineapple2, pineapple3, pineapple4, pineapple5], paragraph: `A pineapple is a big fruit with a rough skin.  
It is yellow inside and very juicy.  
Pineapples taste sweet and a little sour.  
They grow in warm places.  
Kids enjoy pineapple juice and slices.` },
    { id: 5, title: "Strawberry", img: strawberryMain, images: [strawberry1, strawberry2, strawberry3, strawberry4, strawberry5], paragraph: `A strawberry is a small red fruit.  
It has tiny seeds on its skin.  
Strawberries are soft and sweet.  
They grow on small green plants.  
Many kids love to eat strawberries.` },
    { id: 6, title: "Grapes", img: grapesMain, images: [grapes1, grapes2, grapes3, grapes4, grapes5], paragraph: `Grapes are small and round fruits.  
They can be green, purple, or red.  
Grapes taste sweet and juicy.  
They grow in bunches on vines.  
Kids love to eat grapes as a snack.` },
    { id: 7, title: "Orange", img: orangeMain, images: [orange1, orange2, orange3, orange4, orange5], paragraph: `Orange is a round fruit.  
It has a bright orange color.  
Oranges are juicy and sweet.  
They are full of vitamin C.  
Kids love to drink orange juice.` },
    { id: 8, title: "Guava", img: guavaMain, images: [guava1, guava2, guava3, guava4, guava5], paragraph: `Guava is a round green fruit.  
It is soft and tasty to eat.  
Inside, it can be white or pink.  
Guava is full of vitamins and keeps us healthy.  
Kids like to eat it with salt or chat masala.` },
    { id: 9, title: "Peach", img: peachMain, images: [peach1, peach2, peach3, peach4, peach5], paragraph: `A peach is a soft and juicy fruit.  
It is round and has fuzzy skin.  
The color is yellow with a little red.  
Inside, there is one big seed.  
Peaches are sweet and healthy to eat.` },
    { id: 10, title: "Litchi", img: litchiMain, images: [litchi1, litchi2, litchi3, litchi4, litchi5], paragraph: `A litchi is a small, round fruit.  
It has red skin that is rough.  
Inside, the fruit is white and juicy.  
It has one brown seed in the middle.  
Litchis are very sweet and tasty.` },
  ];

  const [selectedFruit, setSelectedFruit] = useState(null);

  const openModal = (fruit) => {
    window.speechSynthesis.cancel();
    setSelectedFruit(fruit);
    const utterance = new SpeechSynthesisUtterance(fruit.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedFruit(null);
  };

  return (
    <>
      <div className="heading7"><h2>Fruits</h2></div>
      <div className="container1">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="card1" onClick={() => openModal(fruit)}>
            <img src={fruit.img} alt={fruit.title} />
            <h3>{fruit.title}</h3>
          </div>
        ))}
      </div>
{selectedFruit && (
  <div className="animal-modal-overlay">
    <div className="animal-modal-content">
      <button className="close-modal-btn" onClick={closeModal}>✖</button>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        speed={800}
        spaceBetween={15}
        slidesPerView={1}
        className="animal-swiper"
      >
        {selectedFruit.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`${selectedFruit.title} ${i + 1}`}
              className="animal-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Updated clickable card area for Text-to-Speech */}
      <div
        className="animal-card"
        onClick={() => {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(selectedFruit.paragraph);
          utterance.lang = "en-US";
          utterance.rate = 0.9;
          window.speechSynthesis.speak(utterance);
        }}
      >
        <div className="animal-header" onClick={(e) => e.stopPropagation()}>
          <h2>{selectedFruit.title}</h2>
          <SoundButton text={selectedFruit.paragraph} />
        </div>
        <p>{selectedFruit.paragraph}</p>
      </div>
    </div>
  </div>
)}

    </>
  );
}
