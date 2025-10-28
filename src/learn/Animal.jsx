import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Animal.css";
import SoundButton from "./SoundButton";

import lionMain from "../assets/lion.jpg";
import lion1 from "../assets/liooon.jpg";
import lion2 from "../assets/roar.avif";
import lion3 from "../assets/eating.jpeg";
import lion4 from "../assets/sleeping.jpg";
import lion5 from "../assets/family.jpg";

import cowMain from "../assets/cow.webp";
import cow1 from "../assets/co.jpg";
import cow2 from "../assets/coweating.webp";
import cow3 from "../assets/pi.jpg";
import cow4 from "../assets/sle.jpeg";
import cow5 from "../assets/eee.webp";

import elephantMain from "../assets/elephantt.avif";
import elephant1 from "../assets/elephant.jpg";
import elephant2 from "../assets/ro.jpg";
import elephant3 from "../assets/eat.jpg";
import elephant4 from "../assets/sl.webp";
import elephant5 from "../assets/ee.jpg";

import cheetahMain from "../assets/cheetah.jpg";
import cheetah1 from "../assets/Cheetah1.webp";
import cheetah2 from "../assets/Cheetah2.jpg";
import cheetah3 from "../assets/Cheetah3.jpg";
import cheetah4 from "../assets/Cheetah4.jpg";
import cheetah5 from "../assets/Cheetah5.jpg";

import giraffeMain from "../assets/giraffe.jpg";
import giraffe1 from "../assets/Giraffe1.jpg";
import giraffe2 from "../assets/Giraffe2.webp";
import giraffe3 from "../assets/Giraffe3.jpg";
import giraffe4 from "../assets/Giraffe4.jpeg";
import giraffe5 from "../assets/Giraffe5.jpg";

import dogMain from "../assets/dog.jpg";
import dog1 from "../assets/Dog2.jpg";
import dog2 from "../assets/Dog1.webp";
import dog3 from "../assets/Dog3.webp";
import dog4 from "../assets/Dog4.avif";
import dog5 from "../assets/Dog5.jpg";

import catMain from "../assets/Cat.jpg";
import cat1 from "../assets/Cat1.jpg";
import cat2 from "../assets/Cat2.jpg";
import cat3 from "../assets/Cat3.jpg";
import cat4 from "../assets/Cat4.webp";
import cat5 from "../assets/Cat5.jpg";

import kangarooMain from "../assets/kangaroo.jpg";
import kangaroo1 from "../assets/Kangaroo1.avif";
import kangaroo2 from "../assets/Kangaroo2.jpg";
import kangaroo3 from "../assets/Kangaroo3.jpg";
import kangaroo4 from "../assets/Kangaroo4.jpeg";
import kangaroo5 from "../assets/Kangaroo5.jpeg";

import pandaMain from "../assets/panda.webp";
import panda1 from "../assets/Panda1.avif";
import panda2 from "../assets/Panda2.jpg";
import panda3 from "../assets/Panda3.webp";
import panda4 from "../assets/Panda4.webp";
import panda5 from "../assets/Panda5.jpg";

import zebraMain from "../assets/zebra.webp";
import zebra1 from "../assets/Zebra1.jpeg";
import zebra2 from "../assets/Zebra2.webp";
import zebra3 from "../assets/Zebra3.webp";
import zebra4 from "../assets/Zebra4.jpeg";
import zebra5 from "../assets/Zebra5.jpg";

export default function Animal() {
  const animals = [
    {
      id: 1,
      title: "Lion",
      img: lionMain,
      images: [lion1, lion2, lion3, lion4, lion5],
      paragraph: `A lion is called the King of the Jungle. It has a golden mane and a loud roar. Lions live in groups called prides. They hunt other animals for food. Lions are brave, strong, and powerful creatures.`,
    },
    {
      id: 2,
      title: "Cow",
      img: cowMain,
      images: [cow1, cow2, cow3, cow4, cow5],
      paragraph: `A cow is a gentle farm animal. It gives us milk to drink every day. Cows eat grass and rest in the fields. Farmers take care of cows on the farm. Cows are calm and kind animals that help people.`,
    },
    {
      id: 3,
      title: "Elephant",
      img: elephantMain,
      images: [elephant1, elephant2, elephant3, elephant4, elephant5],
      paragraph: `An elephant is the biggest land animal. It has a long trunk and big ears. Elephants use their trunks to eat, drink, and play. They live in groups and care for each other. Elephants are smart and friendly giants.`,
    },
    {
      id: 4,
      title: "Cheetah",
      img: cheetahMain,
      images: [cheetah1, cheetah2, cheetah3, cheetah4, cheetah5],
      paragraph: `A cheetah is the fastest land animal. It has spots all over its body. Cheetahs run very fast to catch their prey. They live in grasslands and open spaces. Cheetahs are quick, graceful, and beautiful animals.`,
    },
    {
      id: 5,
      title: "Giraffe",
      img: giraffeMain,
      images: [giraffe1, giraffe2, giraffe3, giraffe4, giraffe5],
      paragraph: `A giraffe is the tallest animal on land. It has a long neck and long legs. Giraffes eat leaves from tall trees. They are calm and gentle animals. Their brown spots make them look very special.`,
    },
    {
      id: 6,
      title: "Dog",
      img: dogMain,
      images: [dog1, dog2, dog3, dog4, dog5],
      paragraph: `A dog is a friendly and loyal animal. It guards our homes and plays with us. Dogs love to run and fetch things. They come in many colors and sizes. Dogs are known as humans’ best friends.`,
    },
    {
      id: 7,
      title: "Cat",
      img: catMain,
      images: [cat1, cat2, cat3, cat4, cat5],
      paragraph: `A cat is a small and cute pet animal. It loves to play and chase mice. Cats have soft fur and sharp claws. They sleep a lot during the day. Cats are clean, clever, and very playful animals.`,
    },
    {
      id: 8,
      title: "Kangaroo",
      img: kangarooMain,
      images: [kangaroo1, kangaroo2, kangaroo3, kangaroo4, kangaroo5],
      paragraph: `A kangaroo is a jumping animal from Australia. It keeps its baby in a pouch. Kangaroos move by hopping on their strong legs. They eat grass and live in open fields. Kangaroos are fast and caring mothers.`,
    },
    {
      id: 9,
      title: "Panda",
      img: pandaMain,
      images: [panda1, panda2, panda3, panda4, panda5],
      paragraph: `A panda is a cute black and white bear. It eats bamboo leaves all day. Pandas live in forests and mountains. They are calm and love to rest and play. Pandas are loved by people all around the world.`,
    },
    {
      id: 10,
      title: "Zebra",
      img: zebraMain,
      images: [zebra1, zebra2, zebra3, zebra4, zebra5],
      paragraph: `A zebra is a striped animal that looks like a horse. Its black and white lines are beautiful. Zebras live together in large groups. They eat grass in open fields. Zebras are peaceful and fast-running animals.`,
    },
  ];

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const openModal = (animal) => {
    window.speechSynthesis.cancel();
    setSelectedAnimal(animal);
    const utterance = new SpeechSynthesisUtterance(animal.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedAnimal(null);
  };

  return (
    <>
      <div className="heading8"><h2>Animals</h2></div>
      <div className="container1">
        {animals.map((animal) => (
          <div key={animal.id} className="card1" onClick={() => openModal(animal)}>
            <img src={animal.img} alt={animal.title} />
            <h3>{animal.title}</h3>
          </div>
        ))}
      </div>
      {selectedAnimal && (
        <div className="animal-modal-overlay" onClick={closeModal}>
          <div className="animal-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>✖</button>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              speed={800}
              spaceBetween={15}
              slidesPerView={1}
              className="animal-swiper"
            >
              {selectedAnimal.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`${selectedAnimal.title} ${i + 1}`} className="animal-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="animal-card">
              <div className="animal-header">
                <h2>{selectedAnimal.title}</h2>
                <SoundButton text={selectedAnimal.paragraph} />
              </div>
              <p>{selectedAnimal.paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
