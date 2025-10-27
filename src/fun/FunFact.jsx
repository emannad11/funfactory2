import { useState } from "react";
import "./Funfact.css";
import SB2 from "./SB2";

import h11 from "/src/assets/h11.png";
import h12 from "/src/assets/h12.webp";
import h13 from "/src/assets/h13.jpg";
import h14 from "/src/assets/h14.jpg";
import h15 from "/src/assets/h15.jpg";
import h16 from "/src/assets/h16.jpg";
import h17 from "/src/assets/h17.webp";

export default function FunFact() {
  const subjects = [
    {
      id: 1,
      title: "Be Proactive",
      img: h11,
      questions: [
        {
          question: (
            <div>
              <h3><b>Be Proactive – “I’m the Boss of Me!”</b></h3>
              <p><b>Meaning:</b> You choose how you act, even when things are hard.</p>
              <p><b>Example:</b> If you spill your juice, you clean it up instead of blaming someone else.</p>
            </div>
          )
        }
      ],
    },
    {
      id: 2,
      title: "Begin with the End in Mind",
      img: h12,
      questions: [
        {
          question: (
            <div>
              <h3><b>Begin with the End in Mind – “Have a Plan”</b></h3>
              <p><b>Meaning:</b> Think about what you want to happen before you start.</p>
              <p><b>Example:</b> If you want to draw a rainbow, first think of the colors and order before coloring.</p>
            </div>
          )
        }
      ],
    },
    {
      id: 3,
      title: "Put First Things First",
      img: h13,
      questions: [
        {
          question: (
            <div>
              <h3><b>Put First Things First – “Do Important Stuff First”</b></h3>
              <p><b>Meaning:</b> Do your important tasks before fun things.</p>
              <p><b>Example:</b> Finish your homework before playing games.</p>
            </div>
          )
        }
      ],
    },
    {
      id: 4,
      title: "Think Win-Win",
      img: h14,
      questions: [
        {
          question: (
            <div>
              <h3><b>Think Win-Win – “Let’s Both Be Happy”</b></h3>
              <p><b>Meaning:</b> Try to make everyone feel good, not just yourself.</p>
              <p><b>Example:</b> Sharing toys so both friends can play.</p>
            </div>
          )
        }
      ],
    },
    {
      id: 5,
      title: "Seek First to Understand",
      img: h15,
      questions: [
        {
          question: (
            <div>
              <h3><b>Seek First to Understand – “Listen First”</b></h3>
              <p><b>Meaning:</b> Listen carefully before talking.</p>
              <p><b>Example:</b> If a friend is upset, listen to why before giving advice.</p>
            </div>
          )
        }
      ],
    },
    {
      id: 6,
      title: "Synergize",
      img: h16,
      questions: [
        {
          question: (
            <div>
              <h3><b>Synergize – “Teamwork is Awesome”</b></h3>
              <p><b>Meaning:</b> Working together makes things better than doing it alone.</p>
              <p><b>Example:</b> Building a Lego castle with friends is faster and more fun than building alone.</p>
            </div>
          )
        }
      ],
    },
    {
      id: 7,
      title: "Sharpen the Saw",
      img: h17,
      questions: [
        {
          question: (
            <div>
              <h3><b>Sharpen the Saw – “Take Care of Yourself”</b></h3>
              <p><b>Meaning:</b> Keep your body, mind, and heart healthy.</p>
              <p><b>Example:</b> Eat healthy, play, read books, and rest well.</p>
            </div>
          )
        }
      ],
    },
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const openModal = (subject) => setSelectedSubject(subject);

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedSubject(null);
  };

  // Helper to extract plain text from JSX for speech
  const getTextFromJSX = (jsx) => {
    if (typeof jsx === "string") return jsx;
    if (Array.isArray(jsx)) return jsx.map(getTextFromJSX).join(" ");
    if (jsx?.props?.children) return getTextFromJSX(jsx.props.children);
    return "";
  };

  return (
    <>
      <div className="heading9"><h2>Leadership Principles</h2></div>
      <div className="container000">
        {subjects.map((subject) => (
          <div key={subject.id} className="card000" onClick={() => openModal(subject)}>
            <img src={subject.img} alt={subject.title} />
            <h3>{subject.title}</h3>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>✖</button>
            <div className="modal-header3">
              <h2>{selectedSubject.title}</h2>
            </div>
            <div className="questions-list3">
              {selectedSubject.questions.map((q, index) => {
                const textToSpeak = getTextFromJSX(q.question);
                return (
                  <div className="question-card3" key={index}>
                    <div className="question-left3">
                      <div className="question-line3">
                        <div className="question-text">{q.question}</div>
                        <SB2 text={textToSpeak} /> 
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
