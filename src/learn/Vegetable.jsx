import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Vegetable.css";
import SoundButton from "./SoundButton";

import potato from "../assets/potato.jpg";
import pp1 from "../assets/pp1.webp";
import pp2 from "../assets/pp2.jpg";
import pp3 from "../assets/pp3.jpg";
import pp4 from "../assets/pp4.jpg";
import pp5 from "../assets/pp5.jpg";

import tomato from "../assets/tomato.jpeg";
import to1 from "../assets/to.webp";
import to2 from "../assets/to2.jpg";
import to3 from "../assets/to3.jpg";
import to4 from "../assets/to4.jpg";
import to5 from "../assets/to5.jpg";

import carrot from "../assets/carrot.jpeg";
import co1 from "../assets/co1.jpg";
import co2 from "../assets/co2.jpg";
import co3 from "../assets/co3.webp";
import co4 from "../assets/co4.webp";
import co5 from "../assets/co5.webp";

import onion from "../assets/onion.webp";
import on1 from "../assets/on1.webp";
import on2 from "../assets/on2.webp";
import on3 from "../assets/on3.jpg";
import on4 from "../assets/on4.jpg";
import on5 from "../assets/on5.jpg";

import cabbage from "../assets/cabbage.webp";
import ca1 from "../assets/ca1.webp";
import ca2 from "../assets/ca2.jpeg";
import ca3 from "../assets/ca3.avif";
import ca4 from "../assets/ca4.jpg";
import ca5 from "../assets/ca5.jpg";

import spinach from "../assets/spinach.jpg";
import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.webp";
import sp3 from "../assets/sp3.jpeg";
import sp4 from "../assets/sp4.jpg";
import sp5 from "../assets/sp5.jpeg";

import broccoli from "../assets/broccoli.jpeg";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.webp";
import b4 from "../assets/b4.jpeg";
import b5 from "../assets/b5.jpg";

import peas from "../assets/peas.jpg";
import pea1 from "../assets/pea1.webp";
import pea2 from "../assets/pea2.jpeg";
import pea3 from "../assets/pea3.webp";
import pea4 from "../assets/pea4.webp";
import pea5 from "../assets/pea5.jpg";

import cauliflower from "../assets/cauliflower.webp";
import c11 from "../assets/c11.webp";
import c22 from "../assets/c22.webp";
import c33 from "../assets/c33.avif";
import c44 from "../assets/c44.jpg";
import c55 from "../assets/c55.webp";

import brinjal from "../assets/brinjal.jpeg";
import br1 from "../assets/br1.webp";
import br2 from "../assets/br2.jpg";
import br3 from "../assets/br3.webp";
import br4 from "../assets/br4.jpg";
import br5 from "../assets/br5.avif";

export default function Vegetable() {
  const vegetables = [
    { id: 1, title: "Potato", img: potato, images: [pp1, pp2, pp3, pp4, pp5], paragraph: "A potato is a tasty vegetable. It grows under the ground. Potatoes are used to make chips and fries. They are brown outside and white inside. Kids love to eat potatoes in many dishes." },
    { id: 2, title: "Tomato", img: tomato, images: [to1, to2, to3, to5, to4], paragraph: "A tomato is a red vegetable. It is soft and juicy inside. Tomatoes are used in salads and sauces. They grow on green plants. Tomatoes make our food tasty and healthy." },
    { id: 3, title: "Carrot", img: carrot, images: [co1, co2, co3, co4, co5], paragraph: "A carrot is an orange vegetable. It grows under the ground. Carrots are crunchy and sweet. Rabbits love to eat carrots. Carrots help us stay healthy and strong." },
    { id: 4, title: "Onion", img: onion, images: [on1, on3, on2, on5, on4], paragraph: "An onion is a round vegetable. It has many thin layers inside. Onions can be red, white, or yellow. People use onions in many foods. Onions make our food tasty and healthy." },
    { id: 5, title: "Cabbage", img: cabbage, images: [ca1, ca2, ca5, ca3, ca4], paragraph: "Cabbage is a green leafy vegetable. It looks like a round ball. The leaves are soft and crunchy. People eat cabbage in salads and curries. It keeps us strong and healthy." },
    { id: 6, title: "Spinach", img: spinach, images: [sp1, sp2, sp3, sp5, sp4], paragraph: "Spinach is a green leafy vegetable. It has soft and thin leaves. People eat spinach cooked or in salads. Spinach makes us strong and healthy. It is full of vitamins and iron." },
    { id: 7, title: "Broccoli", img: broccoli, images: [b1, b4, b2, b3, b5], paragraph: "Broccoli is a green vegetable. It looks like a small tree. People eat broccoli boiled, cooked, or raw. It keeps us strong and healthy. Broccoli is full of vitamins and minerals." },
    { id: 8, title: "Peas", img: peas, images: [pea1, pea2, pea4, pea3, pea5], paragraph: "Peas are small round green vegetables. They grow inside a pod. Peas are sweet and tasty to eat. People use peas in rice, curry, and soup. Peas make our body healthy and strong." },
    { id: 9, title: "Cauliflower", img: cauliflower, images: [c11, c44, c22, c55, c33], paragraph: "Cauliflower is a white vegetable. It looks like a big white flower. People cook it in curry and fry it. Cauliflower is full of vitamins. It keeps us strong and healthy." },
    { id: 10, title: "Brinjal", img: brinjal, images: [br1, br2, br3, br4, br5], paragraph: "Brinjal is a purple vegetable. It is also called eggplant. People cook brinjal in many tasty dishes. It has small seeds inside. Brinjal makes our body strong and healthy." },
  ];

  const [selectedVegetable, setSelectedVegetable] = useState(null);

  const openModal = (vegetable) => {
    window.speechSynthesis.cancel();
    setSelectedVegetable(vegetable);
    const utterance = new SpeechSynthesisUtterance(vegetable.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedVegetable(null);
  };

  return (
    <>
      <div className="heading7"><h2>Vegetables</h2></div>
      <div className="container1">
        {vegetables.map((vegetable) => (
          <div key={vegetable.id} className="card1" onClick={() => openModal(vegetable)}>
            <img src={vegetable.img} alt={vegetable.title} />
            <h3>{vegetable.title}</h3>
          </div>
        ))}
      </div>
      {selectedVegetable && (
        <div className="vegetable-modal-overlay" onClick={closeModal}>
          <div className="vegetable-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>✖</button>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              speed={800}
              spaceBetween={15}
              slidesPerView={1}
              className="vegetable-swiper"
            >
              {selectedVegetable.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`${selectedVegetable.title} ${i + 1}`} className="vegetable-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="vegetable-card">
              <div className="vegetable-header">
                <h2>{selectedVegetable.title}</h2>
                <SoundButton text={selectedVegetable.paragraph} />
              </div>
              <p>{selectedVegetable.paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
