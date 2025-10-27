import { useState } from "react";
import "./Manners.css";
import SB6 from "./SB6";

export default function Manners() {
 const subjects = [
  {
    id: 1,
    title: "Good Manners",
    img: "/src/assets/good.jpg",
    questions: [
      { question: "What should you say when asking for something?", answer: "You should say 'Please'." },
      { question: "What should you say after receiving something?", answer: "You should say 'Thank you'." },
      { question: "How do you greet your teacher in the morning?", answer: "Say 'Good morning'." },
      { question: "What should you say if you accidentally bump someone?", answer: "Say 'Sorry'." },
      { question: "How do you show respect to elders?", answer: "By greeting them politely and listening carefully." },
    ],
  },
  {
    id: 2,
    title: "Table Manners",
    img: "/src/assets/table.jpg",
    questions: [
      { question: "What should you do before eating?", answer: "Wash your hands." },
      { question: "What should you use to wipe your mouth?", answer: "Use a napkin." },
      { question: "How should you sit at the table?", answer: "Sit properly with a straight back." },
      { question: "Should you talk with food in your mouth?", answer: "No, do not talk while chewing." },
      { question: "What should you do if you need something on the table?", answer: "Ask politely, 'Please pass me…'." },
    ],
  },
  {
    id: 3,
    title: "School Manners",
    img: "/src/assets/school.jpg",
    questions: [
      { question: "What should you do before speaking in class?", answer: "Raise your hand and wait for your turn." },
      { question: "How should you listen to your teacher?", answer: "Listen carefully and do not interrupt." },
      { question: "What should you do with your books and pencils?", answer: "Keep them neat and organized." },
      { question: "How should you treat your classmates?", answer: "Be kind, share, and respect them." },
      { question: "What should you do if you need help?", answer: "Ask the teacher politely." },
    ],
  },
  {
    id: 4,
    title: "Home Manners",
    img: "/src/assets/home.jpg",
    questions: [
      { question: "How can you help your parents at home?", answer: "By cleaning, arranging things, or helping with small tasks." },
      { question: "What should you do with your toys after playing?", answer: "Keep them tidy in their place." },
      { question: "How do you greet family members?", answer: "Say 'Hello', 'Good morning', or 'Good night'." },
      { question: "What should you say if you make a mistake at home?", answer: "Say 'Sorry' and try to correct it." },
      { question: "How should you behave at home?", answer: "Be polite, helpful, and follow family rules." },
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
    <div className="heading9"><h2>Manners</h2></div>
      <div className="container11">
        {subjects.map((subject) => (
          <div key={subject.id} className="card11" onClick={() => openModal(subject)}>
            <img src={subject.img} alt={subject.title} />
            <h3>{subject.title}</h3>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="modal-overlay5" onClick={closeModal}>
          <div className="modal-content5" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn5" onClick={closeModal}>
              ✖
            </button>

            <div className="modal-header5">
              <h2>{selectedSubject.title}</h2>
            </div>

            <div className="questions-list5">
              {selectedSubject.questions.map((q, index) => (
                <div className="question-card5" key={index}>
                  <div className="question-line5">
                    <strong>{q.question}</strong>
                    <div className="sound-btn-right5">
                      <SB6 text={`${q.question} ${q.answer}`} />
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
