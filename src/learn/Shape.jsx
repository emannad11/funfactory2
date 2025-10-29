import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Shape.css";
import SoundButton from "./SoundButton";

import circleCard from "../assets/circle.jpg";
import circleFixed from "../assets/circlee.jpg";
import C1 from "../assets/C1.jpg";
import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";
import C4 from "../assets/C4.jpg";
import C5 from "../assets/C5.jpg";

import squareCard from "../assets/square.jpg";
import squareFixed from "../assets/sq.jpg";
import S1 from "../assets/S1.jpg";
import S2 from "../assets/S2.jpg";
import S3 from "../assets/S3.jpg";
import S4 from "../assets/S4.jpg";
import S5 from "../assets/S5.jpg";

import rectangleCard from "../assets/rectangle.jpeg";
import rectangleFixed from "../assets/rec.jpg";
import R1 from "../assets/R1.png";
import R2 from "../assets/R2.jpg";
import R3 from "../assets/R3.jpg";
import R4 from "../assets/R4.jpg";
import R5 from "../assets/R5.jpg";

import ovalCard from "../assets/oval.jpg";
import ovalFixed from "../assets/ova.jpg";
import Ov1 from "../assets/Ov1.jpeg";
import Ov2 from "../assets/Ov2.jpg";
import Ov3 from "../assets/Ov3.jpeg";
import Ov4 from "../assets/Ov4.webp";
import Ov5 from "../assets/Ov5.webp";

import starCard from "../assets/star.jpg";
import starFixed from "../assets/sta.jpg";
import St1 from "../assets/St1.png";
import St2 from "../assets/St2.jpg";
import St3 from "../assets/St3.jpg";
import St4 from "../assets/st4.jpg";
import St5 from "../assets/st5.jpg";

import triangleCard from "../assets/triangle.jpeg";
import triangleFixed from "../assets/tri.jpg";
import T1 from "../assets/t1.jpg";
import T2 from "../assets/t2.jpg";
import T3 from "../assets/t3.png";
import T4 from "../assets/t4.jpg";
import T5 from "../assets/t5.jpg";

import heartCard from "../assets/heart.jpg";
import heartFixed from "../assets/hea.jpg";
import H1 from "../assets/h1.jpg";
import H2 from "../assets/h2.jpeg";
import H3 from "../assets/h3..webp";
import H4 from "../assets/h4.jpg";
import H5 from "../assets/h5.png";

import rhombusCard from "../assets/rhombus.jpg";
import rhombusFixed from "../assets/rom.jpg";
import Rh1 from "../assets/rh1.webp";
import Rh2 from "../assets/rh2.webp";
import Rh3 from "../assets/rh3.jpeg";
import Rh4 from "../assets/rh4.jpg";
import Rh5 from "../assets/rh5.webp";

import hexagonCard from "../assets/hexagon.jpg";
import hexagonFixed from "../assets/hex.jpg";
import He1 from "../assets/he1.jpeg";
import He2 from "../assets/he2.jpg";
import He3 from "../assets/he3.webp";
import He4 from "../assets/he4.webp";
import He5 from "../assets/he5.jpeg";

import pentagonCard from "../assets/pentagon.jpg";
import pentagonFixed from "../assets/pent.jpg";
import Pe1 from "../assets/pe1.webp";
import Pe2 from "../assets/pe2.jpeg";
import Pe3 from "../assets/pe3.webp";
import Pe4 from "../assets/pe4.jpg";
import Pe5 from "../assets/pe5.webp";

export default function Shape() {
  const shapes = [
    { id: 1, title: "Circle", cardImg: circleCard, fixedImg: circleFixed, images: [C1,C2,C3,C4,C5], paragraph: `A circle is a round shape. It has no corners and no sides. A wheel is in the shape of a circle. The sun and moon look like circles. Circles are fun to draw and play with.` },
    { id: 2, title: "Square", cardImg: squareCard, fixedImg: squareFixed, images: [S1,S2,S3,S4,S5], paragraph: `A square has four sides. All the sides are equal. It also has four corners. A box and a chessboard are square shapes. Squares are fun and easy to draw.` },
    { id: 3, title: "Rectangle", cardImg: rectangleCard, fixedImg: rectangleFixed, images: [R1,R2,R3,R4,R5], paragraph: `A rectangle has four sides. The opposite sides are equal. It also has four corners. A door and a book are rectangle shapes. Rectangles are longer than they are tall.` },
    { id: 4, title: "Oval", cardImg: ovalCard, fixedImg: ovalFixed, images: [Ov1,Ov2,Ov3,Ov4,Ov5], paragraph: `An oval looks like an egg. It is round but a little long. An oval has no corners. We see ovals in eggs and watermelons. Ovals are fun shapes to find around us.` },
    { id: 5, title: "Star", cardImg: starCard, fixedImg: starFixed, images: [St1,St2,St3,St4,St5], paragraph: `A star has five points. It shines bright in the night sky. Stars look small but are very far away. We also draw stars on paper for fun. Stars make the sky look beautiful.` },
    { id: 6, title: "Triangle", cardImg: triangleCard, fixedImg: triangleFixed, images: [T1,T2,T3,T4,T5], paragraph: `A triangle has three sides. It also has three corners. Triangles can be small or large. We see triangles in pyramids, signs, and art. Triangles are fun to learn and draw.` },
    { id: 7, title: "Heart", cardImg: heartCard, fixedImg: heartFixed, images: [H1,H2,H3,H4,H5], paragraph: `A heart is a special shape. It shows love and care. Hearts are red or pink in color. We draw hearts on cards and gifts. Hearts make people happy.` },
    { id: 8, title: "Rhombus", cardImg: rhombusCard, fixedImg: rhombusFixed, images: [Rh1,Rh2,Rh3,Rh4,Rh5], paragraph: `A rhombus has four sides. All sides are equal in length. It looks like a slanted square. We can see rhombus shapes in kites. Rhombus shapes are fun to draw.` },
    { id: 9, title: "Hexagon", cardImg: hexagonCard, fixedImg: hexagonFixed, images: [He1,He2,He3,He4,He5], paragraph: `A hexagon has six sides. It also has six corners. Honeycombs made by bees are hexagons. Some tiles and nuts are hexagon-shaped. Hexagons are very interesting shapes.` },
    { id: 10, title: "Pentagon", cardImg: pentagonCard, fixedImg: pentagonFixed, images: [Pe1,Pe2,Pe3,Pe4,Pe5], paragraph: `A pentagon has five sides. It also has five corners. Some houses have pentagon-shaped roofs. We can see pentagons in drawings and patterns. Pentagons are fun shapes to learn.` },
  ];

    const [selectedShape, setSelectedShape] = useState(null);

  const openModal = (shape) => {
    window.speechSynthesis.cancel();
    setSelectedShape(shape);
    const utterance = new SpeechSynthesisUtterance(shape.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedShape(null);
  };

  return (
    <>
      <div className="heading7"><h2>Shapes</h2></div>
      <div className="container1">
        {shapes.map((shape) => (
          <div key={shape.id} className="card1" onClick={() => openModal(shape)}>
            <img src={shape.cardImg} alt={shape.title} />
            <h3>{shape.title}</h3>
          </div>
        ))}
      </div>

     {selectedShape && (
  <div className="shape-modal-overlay">
    <div className="shape-modal-content">
      <button className="close-modal-btn" onClick={closeModal}>✖</button>

      <div className="shape-flex-section">
        <div className="fixed-image-section">
          <img
            src={selectedShape.fixedImg}
            alt={selectedShape.title}
            className="fixed-img"
          />
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          speed={800}
          spaceBetween={20}
          slidesPerView={1}
          className="shape-swiper"
        >
          {selectedShape.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${selectedShape.title} ${i + 1}`}
                className="shape-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="shape-card">
        <div className="shape-header">
          <h2>{selectedShape.title}</h2>
          <SoundButton text={selectedShape.paragraph} />
        </div>
        <p>{selectedShape.paragraph}</p>
      </div>
    </div>
  </div>
)}
    </>
  );
}