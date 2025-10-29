import { useState } from "react";
import "./Adventure.css";


import Horror1 from "../assets/horror1.png";
import Horror2 from "../assets/horror2.png";
import Horror3 from "../assets/horror3.png";
import Horror4 from "../assets/horror4.png";
import Horror5 from "../assets/horror5.png";
import Horror6 from "../assets/horror6.png";
import Horror7 from "../assets/horror7.png";
import Horror8 from "../assets/horror8.png";

import clickSoundFile from "../assets/sounds/click.mp3";

export default function Horror() {
  const experiments = [
    {
      id: 2,
      title: "Shaitaan Ki Nani",
      img: Horror1,
      videoUrl: "https://www.youtube.com/embed/z8lyPPRW0Ik",
    },
    {
      id: 3,
      title: "Labubu Ka Saaya",
      img: Horror2,
      videoUrl: "https://www.youtube.com/embed/79neoh2e1L0",
    },
    {
      id: 4,
      title: "Bhootni Ka Dupatta",
      img: Horror3,
      videoUrl: "https://www.youtube.com/embed/18TzZazeHlg",
    },
    {
      id: 5,
      title: "Shaitani Khilona",
      img: Horror4,
      videoUrl: "https://www.youtube.com/embed/H5tfz_5tJM8",
    },
    {
      id: 7,
      title: "Laal Pari Ka Fitnah",
      img: Horror5,
      videoUrl: "https://www.youtube.com/embed/c8yduR_xYxs",
    },
    {
      id: 8,
      title: "Shaitan Ki Chaal",
      img: Horror6,
      videoUrl: "https://www.youtube.com/embed/zegAzpZu5R0",
    },
    {
      id: 9,
      title: "Khoofnaak Rani",
      img: Horror7,
      videoUrl: "https://www.youtube.com/embed/7A4vKFOYJi0",
    },
    {
      id: 10,
      title: "Shaitaan Ka War",
      img: Horror8,
      videoUrl: "https://www.youtube.com/embed/4z0OYJ_vZYM",
    },
  ];

  const [selectedExp, setSelectedExp] = useState(null);

  // ✅ Create audio object once
  const clickSound = new Audio(clickSoundFile);

  const openModal = (exp) => {
    clickSound.currentTime = 0;
    clickSound.play();
    setSelectedExp(exp);
  };

  const closeModal = () => {
    setSelectedExp(null);
  };

  return (
    <>
      <div className="heading9">
        <h2>Horror Stories</h2>
      </div>

      <div className="container-adv">
        {experiments.map((exp) => (
          <div
            key={exp.id}
            className="card-adv"
            onClick={() => openModal(exp)}
          >
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
