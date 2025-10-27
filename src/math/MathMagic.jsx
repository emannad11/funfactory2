import { useState } from "react";
import "./Math.css";
import SB4 from "./SB4";

export default function MathMagic() {
  const subjects = [
    {
      id: 1,
      title: "Addition",
      img: "/src/assets/add.webp",
      questions: [
        { question: "What is 2 + 2?", answer: "2 plus 2 equals 4." },
        { question: "What is 3 + 1?", answer: "3 plus 1 equals 4." },
        { question: "What is 5 + 0?", answer: "5 plus 0 equals 5." },
        { question: "What is 1 + 6?", answer: "1 plus 6 equals 7." },
        { question: "What is 4 + 3?", answer: "4 plus 3 equals 7." },
      ],
    },
    {
      id: 2,
      title: "Subtraction",
      img: "/src/assets/sub.png",
      questions: [
        { question: "What is 5 - 2?", answer: "5 minus 2 equals 3." },
        { question: "What is 8 - 3?", answer: "8 minus 3 equals 5." },
        { question: "What is 4 - 4?", answer: "4 minus 4 equals 0." },
        { question: "What is 9 - 1?", answer: "9 minus 1 equals 8." },
        { question: "What is 7 - 5?", answer: "7 minus 5 equals 2." },
      ],
    },
    {
      id: 3,
      title: "Multiplication",
      img: "/src/assets/mul.jpg",
      questions: [
        { question: "What is 2 × 3?", answer: "2 times 3 equals 6." },
        { question: "What is 4 × 2?", answer: "4 times 2 equals 8." },
        { question: "What is 3 × 3?", answer: "3 times 3 equals 9." },
        { question: "What is 5 × 1?", answer: "5 times 1 equals 5." },
        { question: "What is 2 × 5?", answer: "2 times 5 equals 10." },
      ],
    },
    {
      id: 4,
      title: "Division",
      img: "/src/assets/div.jpg",
      questions: [
        { question: "What is 6 ÷ 2?", answer: "6 divided by 2 equals 3." },
        { question: "What is 8 ÷ 4?", answer: "8 divided by 4 equals 2." },
        { question: "What is 9 ÷ 3?", answer: "9 divided by 3 equals 3." },
        { question: "What is 10 ÷ 5?", answer: "10 divided by 5 equals 2." },
        { question: "What is 12 ÷ 6?", answer: "12 divided by 6 equals 2." },
      ],
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
    <div className="heading9"><h2>Math Magic</h2></div>
      <div className="container11">
        {subjects.map((subject) => (
          <div key={subject.id} className="card11" onClick={() => openModal(subject)}>
            <img src={subject.img} alt={subject.title} />
            <h3>{subject.title}</h3>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              ✖
            </button>

            <div className="modal-header4">
              <h2>{selectedSubject.title}</h2>
            </div>

            <div className="questions-list4">
              {selectedSubject.questions.map((q, index) => (
                <div className="question-card4" key={index}>
                  <div className="question-line4">
                    <strong>{q.question}</strong>
                    <div className="sound-btn-right4">
                      <SB4 text={`${q.question} ${q.answer}`} />
                    </div>
                  </div>
                  <p>{q.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
