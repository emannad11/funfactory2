import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Color.css";
import SoundButton from "./SoundButton";

import blueMain from "../assets/bluee.webp";
import blue1 from "../assets/Blue2.jpg";
import blue2 from "../assets/Blue1.jpg";
import blue3 from "../assets/Blue3.jpg";
import blue4 from "../assets/Blue5.jpg";
import blue5 from "../assets/Blue4.jpg";

import pinkMain from "../assets/pink.jpg";
import pink1 from "../assets/Pink1.jpg";
import pink2 from "../assets/Pink2.jpg";
import pink3 from "../assets/Pink3.jpg";
import pink4 from "../assets/Pink4.webp";
import pink5 from "../assets/Pink5.jpg";

import redMain from "../assets/red.webp";
import red1 from "../assets/Red1.jpg";
import red2 from "../assets/Red2.jpg";
import red3 from "../assets/Red3.jpg";
import red4 from "../assets/Red4.jpg";
import red5 from "../assets/Red5.webp";

import greenMain from "../assets/green.jpg";
import green1 from "../assets/Green1.jpg";
import green2 from "../assets/Green2.jpeg";
import green3 from "../assets/Green4.jpg";
import green4 from "../assets/Green3.jpg";
import green5 from "../assets/Green5.png";

import orangeMain from "../assets/orange.jpg";
import orange1 from "../assets/Orange1.jpg";
import orange2 from "../assets/Orange2.jpg";
import orange3 from "../assets/Orange3.jpg";
import orange4 from "../assets/Orange4.jpg";
import orange5 from "../assets/Orange5.jpg";

import greyMain from "../assets/grey.png";
import grey1 from "../assets/Grey1.webp";
import grey2 from "../assets/Grey2.jpg";
import grey3 from "../assets/Grey4.avif";
import grey4 from "../assets/Grey3.webp";
import grey5 from "../assets/eat.jpg";

import purpleMain from "../assets/purple.webp";
import purple1 from "../assets/Purple1.jpg";
import purple2 from "../assets/Purple2.jpeg";
import purple3 from "../assets/Purple3.jpg";
import purple4 from "../assets/Purple4.webp";
import purple5 from "../assets/Purple5.jpg";

import brownMain from "../assets/brown.png";
import brown1 from "../assets/Brown1.jpg";
import brown2 from "../assets/Brown2.jpg";
import brown3 from "../assets/Brown3.jpg";
import brown4 from "../assets/Brown4.jpg";
import brown5 from "../assets/Brown5.jpg";

import blackMain from "../assets/black.jpg";
import black1 from "../assets/Black2.jpg";
import black2 from "../assets/Black1.jpeg";
import black3 from "../assets/Black3.avif";
import black4 from "../assets/Black5.webp";
import black5 from "../assets/Black4.jpg";

import yellowMain from "../assets/yellow.jpg";
import yellow1 from "../assets/Yellow1.avif";
import yellow2 from "../assets/Yellow2.jpg";
import yellow3 from "../assets/Yellow3.jpg";
import yellow4 from "../assets/Yellow4.jpg";
import yellow5 from "../assets/Yellow5.webp";

export default function Color() {
  const colors = [
    { id: 1, title: "Blue", fixedImg: blueMain, images: [blue1, blue2, blue3, blue4, blue5], paragraph: `Blue is the color of the sky.  
It is also the color of the sea and rivers.  
Blue makes us feel calm and peaceful.  
Many birds, flowers, and clothes are blue.  
Blue is a cool and beautiful color.` },
    { id: 2, title: "Pink", fixedImg: pinkMain, images: [pink1, pink2, pink3, pink4, pink5], paragraph: `Pink is the color of flowers.  
It is also the color of candy and toys.  
Pink is bright, soft, and pretty.  
Many dresses and balloons are pink.  
Pink is a sweet and happy color.` },
    { id: 3, title: "Red", fixedImg: redMain, images: [red1, red2, red3, red4, red5], paragraph: `Red is the color of apples.  
It is also the color of roses and cherries.  
Red is bright, bold, and strong.  
Many cars, toys, and clothes are red.  
Red is a happy and exciting color.` },
    { id: 4, title: "Green", fixedImg: greenMain, images: [green1, green2, green3, green4, green5], paragraph: `Green is the color of grass.  
It is also the color of trees and leaves.  
Green makes us feel fresh and calm.  
Many fruits and vegetables are green.  
Green is the color of nature.` },
    { id: 5, title: "Orange", fixedImg: orangeMain, images: [orange1, orange2, orange3, orange4, orange5], paragraph: `Orange is the color of oranges.  
It is also the color of carrots and pumpkins.  
Orange is bright, warm, and cheerful.  
Many flowers, fruits, and toys are orange.  
Orange is a fun and happy color.` },
    { id: 6, title: "Grey", fixedImg: greyMain, images: [grey1, grey2, grey3, grey4, grey5], paragraph: `Grey is the color of clouds.  
It is also the color of stones and rocks.  
Grey is calm and quiet like the evening sky.  
Many animals like elephants and wolves are grey.  
Grey is a soft and gentle color.` },
    { id: 7, title: "Purple", fixedImg: purpleMain, images: [purple1, purple2, purple3, purple4, purple5], paragraph: `Purple is the color of grapes.  
It is also the color of lavender flowers.  
Purple looks bright and royal.  
Many toys, dresses, and balloons are purple.  
Purple is a magical and pretty color.` },
    { id: 8, title: "Brown", fixedImg: brownMain, images: [brown1, brown2, brown3, brown4, brown5], paragraph: `Brown is the color of the earth.  
It is also the color of tree trunks and wood.  
Brown looks warm and natural.  
Many animals like bears and monkeys are brown.  
Brown is a strong and steady color.` },
    { id: 9, title: "Black", fixedImg: blackMain, images: [black1, black2, black3, black4, black5], paragraph: `Black is the color of the night sky.  
It is also the color of coal and shadows.  
Black looks dark but also strong.  
Many animals like cats and crows are black.  
Black is a bold and powerful color.` },
    { id: 10, title: "Yellow", fixedImg: yellowMain, images: [yellow1, yellow2, yellow3, yellow4, yellow5], paragraph: `Yellow is the color of the sun.  
It is also the color of bananas and corn.  
Yellow is bright, warm, and happy.  
Many flowers, toys, and clothes are yellow.  
Yellow is a cheerful and sunny color.` },
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const openModal = (color) => {
    window.speechSynthesis.cancel();
    setSelectedColor(color);
    const utterance = new SpeechSynthesisUtterance(color.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedColor(null);
  };

  return (
    <>
      <div className="heading7"><h2>Colors</h2></div>
      <div className="container1">
        {colors.map((color) => (
          <div key={color.id} className="card1" onClick={() => openModal(color)}>
            <img src={color.fixedImg} alt={color.title} />
            <h3>{color.title}</h3>
          </div>
        ))}
      </div>
{selectedColor && (
  <div className="color-modal-overlay">
    <div className="color-modal-content">
      <button className="close-modal-btn" onClick={closeModal}>✖</button>

      <div className="color-flex-section">
        <div className="fixed-image-section">
          <img
            src={selectedColor.fixedImg}
            alt={selectedColor.title}
            className="fixed-img"
          />
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          spaceBetween={20}
          slidesPerView={1}
          className="color-swiper"
        >
          {selectedColor.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${selectedColor.title} ${i + 1}`}
                className="color-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="color-card">
        <div className="color-header">
          <h2>{selectedColor.title}</h2>
          <SoundButton text={selectedColor.paragraph} />
        </div>
        <p>{selectedColor.paragraph}</p>
      </div>
    </div>
  </div>
)}

    </>
  );
}
