import { useState } from "react";
import "./Funfact.css";
import SB2 from "./SB2";

import h11 from "/src/assets/h11.jpg";
import h12 from "/src/assets/h12.webp";
import h13 from "/src/assets/h13.jpg";
import h14 from "/src/assets/h14.jpg";
import h15 from "/src/assets/h15.jpg";
import h16 from "/src/assets/h16.jpg";
import h17 from "/src/assets/h17.webp";

import h18 from "/src/assets/habb.jpeg";
import h19 from "/src/assets/habb2.jpeg";
import h20 from "/src/assets/habb4.jpeg";
import h21 from "/src/assets/habb3.jpeg";
import h22 from "/src/assets/habb5.jpeg";
import h23 from "/src/assets/habb6.jpeg";
import h24 from "/src/assets/habb7.jpeg";

export default function FunFact() {
  const subjects = [
    {
      id: 1,
      title: "Be Proactive",
      cardImg: h11,
      modalImg: h18,
      text: "Be Proactive means you choose how you act, even when things are hard.",
      questions: [
        {
          question: (
            <div>
              <h3><b>Be Proactive – “I’m the Boss of Me!”</b></h3>
              <p><b>Meaning:</b> You choose how you act, even when things are hard.</p>
              <p><b>Example:</b> If you spill your juice, you clean it up instead of blaming someone else.</p>
            </div>
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Begin with the End in Mind",
      cardImg: h12,
      modalImg: h19,
      text: "Begin with the End in Mind means to have a plan before starting something.",
      questions: [
        {
          question: (
            <div>
              <h3><b>Begin with the End in Mind – “Have a Plan”</b></h3>
              <p><b>Meaning:</b> Think about what you want to happen before you start.</p>
              <p><b>Example:</b> If you want to draw a rainbow, first think of the colors and order before coloring.</p>
            </div>
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Put First Things First",
      cardImg: h13,
      modalImg: h20,
      text: "Put First Things First means to do your important work before fun things.",
      questions: [
        {
          question: (
            <div>
              <h3><b>Put First Things First – “Do Important Stuff First”</b></h3>
              <p><b>Meaning:</b> Do your important tasks before fun things.</p>
              <p><b>Example:</b> Finish your homework before playing games.</p>
            </div>
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Think Win-Win",
      cardImg: h14,
      modalImg: h21,
      text: "Think Win-Win means finding a way for everyone to be happy, not just you.",
      questions: [
        {
          question: (
            <div>
              <h3><b>Think Win-Win – “Let’s Both Be Happy”</b></h3>
              <p><b>Meaning:</b> Try to make everyone feel good, not just yourself.</p>
              <p><b>Example:</b> Sharing toys so both friends can play.</p>
            </div>
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Seek First to Understand",
      cardImg: h15,
      modalImg: h22,
      text: "Seek First to Understand means listen before you speak.",
      questions: [
        {
          question: (
            <div>
              <h3><b>Seek First to Understand – “Listen First”</b></h3>
              <p><b>Meaning:</b> Listen carefully before talking.</p>
              <p><b>Example:</b> If a friend is upset, listen to why before giving advice.</p>
            </div>
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Synergize",
      cardImg: h16,
      modalImg: h23,
      text: "Synergize means teamwork makes things better and more fun.",
      questions: [
        {
          question: (
            <div>
              <h3><b>Synergize – “Teamwork is Awesome”</b></h3>
              <p><b>Meaning:</b> Working together makes things better than doing it alone.</p>
              <p><b>Example:</b> Building a Lego castle with friends is faster and more fun than building alone.</p>
            </div>
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Sharpen the Saw",
      cardImg: h17,
      modalImg: h24,
      text: "Sharpen the Saw means taking care of your body, mind, and heart.",
      questions: [
        {
          question: (
            <div>
              <h3><b>Sharpen the Saw – “Take Care of Yourself”</b></h3>
              <p><b>Meaning:</b> Keep your body, mind, and heart healthy.</p>
              <p><b>Example:</b> Eat healthy, play, read books, and rest well.</p>
            </div>
          ),
        },
      ],
    },
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const speakText = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  const openModal = (subject) => {
    setSelectedSubject(subject);
    speakText(subject.title); 
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedSubject(null);
  };

  
  const getTextFromJSX = (jsx) => {
    if (typeof jsx === "string") return jsx;
    if (Array.isArray(jsx)) return jsx.map(getTextFromJSX).join(" ");
    if (jsx?.props?.children) return getTextFromJSX(jsx.props.children);
    return "";
  };

  return (
    <>
      <div className="heading9">
        <h2>Leadership Principles</h2>
      </div>

      <div className="container000">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="card000"
            onClick={() => openModal(subject)}
          >
            <img src={subject.cardImg} alt={subject.title} />
            <h3>{subject.title}</h3>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="exp-modal-overlay">
          <div className="exp-modal-content">
            <button className="close-modal-btn" onClick={closeModal}>
              ✖
            </button>

            <div className="modal1-body">
              <div className="modal1-content">
                <div className="modal1-header">
                  <h2>{selectedSubject.title}</h2>
                  <SB2
                    text={getTextFromJSX(
                      selectedSubject.questions[0].question
                    )} 
                  />
                </div>

                <div
                  className="questions-list3"
                  onClick={() =>
                    speakText(
                      getTextFromJSX(selectedSubject.questions[0].question)
                    )
                  } 
                >
                  {selectedSubject.questions.map((q, index) => (
                    <div key={index} className="question-card3">
                      {q.question}
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal1-image">
                <img
                  src={selectedSubject.modalImg}
                  alt={selectedSubject.title}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
