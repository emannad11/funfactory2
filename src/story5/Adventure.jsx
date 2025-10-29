import { useState } from "react";
import "./Adventure.css";


import RabbitImg from "../assets/rabbit.png";
import HonestImg from "../assets/honest.jpg";
import AliImg from "../assets/ali.jpg";
import RedImg from "../assets/reds.jpg";
import WhiteImg from "../assets/white.jpg";
import CinImg from "../assets/cin.jpg";
import MermaidImg from "../assets/the.jpg";
import BeastImg from "../assets/beast.jpg";

export default function Adventure() {
  const experiments = [
    {
      id: 2,
      title: "The Lion & Rabbit",
      img: RabbitImg,
      videoUrl: "https://www.youtube.com/embed/bE3wja0lQM4",
    },
    {
      id: 3,
      title: "The Honest Cow",
      img: HonestImg,
      videoUrl: "https://www.youtube.com/embed/ZpksOoa8OvI",
    },
    {
      id: 4,
      title: "Ali Baba & Forty Thieves",
      img: AliImg,
      videoUrl: "https://www.youtube.com/embed/9UF4KzH3xlg",
    },
    {
      id: 5,
      title: "Red Shoes",
      img: RedImg,
      videoUrl: "https://www.youtube.com/embed/gDiUc0Mz_t4",
    },
    {
      id: 7,
      title: "Snow White",
      img: WhiteImg,
      videoUrl: "https://www.youtube.com/embed/jEFOOsUl_AA",
    },
    {
      id: 8,
      title: "Cinderella",
      img: CinImg,
      videoUrl: "https://www.youtube.com/embed/UlhJwogS6l0",
    },
    {
      id: 9,
      title: "The Little Mermaid",
      img: MermaidImg,
      videoUrl: "https://www.youtube.com/embed/7AG4UCkOXTU",
    },
    {
      id: 10,
      title: "The Beauty & Beast",
      img: BeastImg,
      videoUrl: "https://www.youtube.com/embed/fkCPEujxTho",
    },
  ];

  const [selectedExp, setSelectedExp] = useState(null);

  
  const speakTitle = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const openModal = (exp) => {
    speakTitle(exp.title);
    setSelectedExp(exp);
  };

  const closeModal = () => {
    setSelectedExp(null);
  };

  return (
    <>
      <div className="heading9">
        <h2>Adventure Stories</h2>
      </div>

      <div className="container-adv">
        {experiments.map((exp) => (
          <div key={exp.id} className="card-adv" onClick={() => openModal(exp)}>
            <img src={exp.img} alt={exp.title} />
            <h3>{exp.title}</h3>
          </div>
        ))}
      </div>
{selectedExp && (
  <div className="exp-modal-overlay1">
    <div className="exp-modal-content1">
      <button className="close-modal-btn1" onClick={closeModal}>
        ✖
      </button>

      <div className="modal-video-container1">
        <h2>{selectedExp.title}</h2>
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
)}

    </>
  );
}
