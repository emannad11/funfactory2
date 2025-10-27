import { useState } from "react";
import "./Adventure.css";

export default function Islamic() {
  const experiments = [
    {
      id: 2,
      title: "The Life of Prophet Musa (A.S.)",
      img: "/src/assets/pr1.jpg",
      videoUrl: "https://www.youtube.com/embed/s3dvuMlsuy8?",
    },
    {
      id: 3,
      title: "The Life of Prophet Adam (A.S.)",
      img: "/src/assets/pr2.jpg",
      videoUrl: "https://www.youtube.com/embed/uvhAUB2VxMg",
    },
    {
      id: 4,
      title: "The Life of Prophet Nuh (A.S.)",
      img: "/src/assets/pr3.jpg",
      videoUrl: "https://www.youtube.com/embed/NgBkdtrrKLg",
    },
    {
      id: 5,
      title: "The Life of Prophet Dawud (A.S.)",
      img: "/src/assets/pr4.jpg",
      videoUrl: "https://www.youtube.com/embed/J-pYkfUXkVg",
    },
    {
      id: 7,
      title: "The Life of Prophet Yahya (A.S.)",
      img: "/src/assets/pr5.jpg",
      videoUrl: "https://www.youtube.com/embed/_jkZPYXIn4s",
    },
    {
      id: 8,
      title: "The Life of Prophet Ayub (A.S.)",
      img: "/src/assets/pr6.jpg",
      videoUrl: "https://www.youtube.com/embed/9ZIYQhfSe6s",
    },
    {
      id: 9,
      title: "The Life of Prophet Isa (A.S.)",
      img: "/src/assets/pr7.jpg",
      videoUrl: "https://www.youtube.com/embed/guocukTc9zQ?",
    },
    {
      id: 10,
      title: "The Life of Prophet Muhammad (A.S.)",
      img: "/src/assets/pr8.jpg",
      videoUrl: "https://www.youtube.com/embed/yKk9-8VoJKM",
    },
  ];

  const [selectedExp, setSelectedExp] = useState(null);

  
  const clickSound = new Audio("/src/assets/sounds/click.mp3");

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
        <h2>Prophet Stories</h2>
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
        <div className="exp-modal-overlay1" onClick={closeModal}>
          <div
            className="exp-modal-content1"
            onClick={(e) => e.stopPropagation()}
          >
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
