import { useState } from "react";
import "./Gk.css";
import SB from "./SB";

import englishImg from "/src/assets/english.jpg";
import AImg from "/src/assets/A.jpg";
import CImg from "/src/assets/catt.jpg";
import DImg from "/src/assets/dogg.webp";
import ZImg from "/src/assets/zeb.png";
import BImg from "/src/assets/ball.jpg";

import mathImg from "/src/assets/math.jpg";
import handImg from "/src/assets/hand.jpg";
import footballImg from "/src/assets/ba.jpg";
import triImg from "/src/assets/tri.jpg";
import balloonsImg from "/src/assets/3.jpg";
import catImg from "/src/assets/cat.jpg";

import sciImg from "/src/assets/sci.jpg";
import airImg from "/src/assets/air.jpg";
import plantImg from "/src/assets/plant.jpg";
import rainImg from "/src/assets/rainn.jpg";
import sunImg from "/src/assets/sunn.png";
import cowImg from "/src/assets/cow.webp";

import compImg from "/src/assets/comp.jpg";
import computerImg from "/src/assets/computer.jpg";
import mouseImg from "/src/assets/mouse.jpg";
import screenImg from "/src/assets/screen.jpg";
import keyboardImg from "/src/assets/keyboard.jpg";
import tabletImg from "/src/assets/tablet.jpg";

import socialImg from "/src/assets/so.jpg";
import familyImg from "/src/assets/familyy.jpg";
import schoolImg from "/src/assets/school.jpg";
import policeImg from "/src/assets/police.jpg";
import postmanImg from "/src/assets/postman.jpg";
import thankImg from "/src/assets/thankyou.jpg";

import geoImg from "/src/assets/geo.jpg";
import earthImg from "/src/assets/earth.jpg";
import desertImg from "/src/assets/desert.jpg";
import fishImg from "/src/assets/fishwater.jpg";
import forestImg from "/src/assets/forest.jpg";
import moonImg from "/src/assets/moon.jpg";

import ethicsImg from "/src/assets/isl.jpg";
import allahImg from "/src/assets/allah.jpg";
import rasoolImg from "/src/assets/rasool.jpg";
import quranImg from "/src/assets/quran.jpg";
import mosqueImg from "/src/assets/mosque.jpg";
import salamImg from "/src/assets/salam.jpg";

import artImg from "/src/assets/art.jpeg";
import grassImg from "/src/assets/grass.jpg";
import crayonImg from "/src/assets/crayon.jpg";
import sunYellowImg from "/src/assets/sunn.png";
import paintbrushImg from "/src/assets/paintbrush.jpg";
import skyImg from "/src/assets/sky.jpg";

export default function Knowledge() {
  const subjects = [
    {
      id: 1,
      title: "English",
      img: englishImg,
      questions: [
        { question: "Which letter starts the word 'Apple'?", answer: "The letter A starts the word Apple.", image: AImg },
        { question: "What letter comes after B?", answer: "The letter C comes after B.", image: CImg },
        { question: "Which letter makes the 'Duh' sound?", answer: "The letter D makes the 'Duh' sound.", image: DImg },
        { question: "What is the last letter of the alphabet?", answer: "The last letter is Z.", image: ZImg },
        { question: "Which letter starts the word 'Ball'?", answer: "The letter B starts the word Ball.", image: BImg },
      ]
    },
    {
      id: 2,
      title: "Math",
      img: mathImg,
      questions: [
        { question: "How many fingers are there in one hand?", answer: "There are five fingers in one hand.", image: handImg },
        { question: "Can you count the footballs in the picture?", answer: "There are three footballs!", image: footballImg },
        { question: "Which shape has three sides?", answer: "A triangle has three sides.", image: triImg },
        { question: "Can you count the balloons in the picture?", answer: "There are three colorful balloons!", image: balloonsImg },
        { question: "How many legs does a cat have?", answer: "A cat has four legs.", image: catImg },
      ]
    },
    {
      id: 3,
      title: "Science",
      img: sciImg,
      questions: [
        { question: "What do we need to breathe?", answer: "We need air to breathe.", image: airImg },
        { question: "What do plants need to grow?", answer: "Plants need water and sunlight to grow.", image: plantImg },
        { question: "Where does rain come from?", answer: "Rain comes from the clouds.", image: rainImg },
        { question: "What shines in the sky during the day?", answer: "The sun shines in the sky during the day.", image: sunImg },
        { question: "What animal gives us milk?", answer: "A cow gives us milk.", image: cowImg },
      ]
    },
    {
      id: 4,
      title: "Computer Science",
      img: compImg,
      questions: [
        { question: "What is a computer?", answer: "A computer is a machine that helps us work and play.", image: computerImg },
        { question: "What do we use to move things on a computer?", answer: "We use a mouse to move things on a computer.", image: mouseImg },
        { question: "What do we see on a computer screen?", answer: "We see pictures and words on a computer screen.", image: screenImg },
        { question: "Which key do we press to type letters?", answer: "We press keys on the keyboard to type letters.", image: keyboardImg },
        { question: "Is a tablet like a computer?", answer: "Yes, a tablet is like a small computer.", image: tabletImg },
      ]
    },
    {
      id: 5,
      title: "Social Studies",
      img: socialImg,
      questions: [
        { question: "Who takes care of you at home?", answer: "My family takes care of me at home.", image: familyImg },
        { question: "Where do you go to learn and play?", answer: "I go to school to learn and play.", image: schoolImg },
        { question: "Who helps you cross the road safely?", answer: "A traffic police officer helps us cross the road safely.", image: policeImg },
        { question: "Who brings our letters and parcels?", answer: "A postman brings our letters and parcels.", image: postmanImg },
        { question: "What should we say when someone helps us?", answer: "We should say Thank you!", image: thankImg },
      ]
    },
    {
      id: 6,
      title: "Geography",
      img: geoImg,
      questions: [
        { question: "What do we live on?", answer: "We live on planet Earth.", image: earthImg },
        { question: "What do we call a big area covered with sand?", answer: "It is called a desert.", image: desertImg },
        { question: "Where do fishes live?", answer: "Fishes live in water.", image: fishImg },
        { question: "What is full of trees and animals?", answer: "A forest is full of trees and animals.", image: forestImg },
        { question: "What do we see shining in the sky at night?", answer: "We see stars shining in the night sky.", image: moonImg },
      ]
    },
    {
      id: 7,
      title: "Ethics",
      img: ethicsImg,
      questions: [
        { question: "Who made us all?", answer: "Allah made us all.", image: allahImg },
        { question: "Who is our last Prophet (PBUH)?", answer: "Our last Prophet is Prophet Muhammad (PBUH).", image: rasoolImg },
        { question: "What is the holy book of Muslims?", answer: "The holy book is the Quran.", image: quranImg },
        { question: "Where do Muslims go to pray?", answer: "Muslims go to the mosque to pray.", image: mosqueImg },
        { question: "What do we say to greet each other?", answer: "We say Assalamu Alaikum.", image: salamImg },
      ]
    },
    {
      id: 8,
      title: "Art",
      img: artImg,
      questions: [
        { question: "What color is the grass?", answer: "The grass is green.", image: grassImg },
        { question: "What do we use to draw?", answer: "We use crayons to draw.", image: crayonImg },
        { question: "What color is the sun?", answer: "The sun is yellow.", image: sunYellowImg },
        { question: "What do we use to paint?", answer: "We use a paintbrush to paint.", image: paintbrushImg },
        { question: "What color is the sky?", answer: "The sky is blue.", image: skyImg },
      ]
    },
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const openModal = (subject) => {
    window.speechSynthesis.cancel();
    setSelectedSubject(subject);
    const titleUtter = new SpeechSynthesisUtterance(subject.title);
    titleUtter.lang = "en-US";
    titleUtter.rate = 0.8;
    window.speechSynthesis.speak(titleUtter);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedSubject(null);
  };

  return (
    <>
      <div className="heading9"><h2>General Knowledge</h2></div>
      <div className="container1">
        {subjects.map((subject) => (
          <div key={subject.id} className="card1" onClick={() => openModal(subject)}>
            <img src={subject.img} alt={subject.title} />
            <h3>{subject.title}</h3>
          </div>
        ))}
      </div>

  {selectedSubject && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="close-modal-btn" onClick={closeModal}>✖</button>
      <div className="modal-header">
        <h2>{selectedSubject.title}</h2>
      </div>
      <div className="questions-list1">
        {selectedSubject.questions.map((q, index) => (
          <div className="question-card1" key={index}>
            <div className="question-left1">
              <div className="question-line1">
                <strong>{q.question}</strong>
                <SB text={`${q.question} ${q.answer}`} />
              </div>
              <p>{q.answer}</p>
            </div>
            <img src={q.image} alt="related" className="question-image1" />
          </div>
        ))}
      </div>
    </div>
  </div>
)}
    </>
  );
}
