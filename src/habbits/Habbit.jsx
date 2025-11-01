import { useState } from "react";
import "./Habbit.css";
import SB3 from "./SB3";

import brushImg from "/src/assets/brush.png";
import washImg from "/src/assets/wash.jpg";
import vegImg from "/src/assets/veg.jpg";
import toysImg from "/src/assets/toys.jpg";
import notBrushImg from "/src/assets/not.jpg";
import hand1Img from "/src/assets/hand1.jpg";
import junkImg from "/src/assets/nott.jpg";
import notToysImg from "/src/assets/toyss.jpg";

export default function Habbit() {
  const subjects = [
    { 
      id: 1, 
      title: "Brush your Teeth", 
      img: brushImg, 
      videoUrl: "https://www.youtube.com/embed/T1Fnb4iVf-c?", 
      questions: [
        { 
          question: "Brush Your Teeth Twice a Day", 
          answer: "Keeps your smile bright, your teeth strong, and your mouth fresh! Brushing in the morning wakes up your teeth for the day, and brushing at night cleans away all the food and sugar from eating. It helps stop cavities and keeps your smile shiny and healthy!" 
        }
      ] 
    },
    { 
      id: 2, 
      title: "Wash Hands", 
      img: washImg, 
      videoUrl: "https://www.youtube.com/embed/5Vs0eToRFUI", 
      questions: [
        { 
          question: "Wash Hands Before Eating", 
          answer: "Clean hands keep you healthy and happy! Washing your hands before eating removes tiny germs and dirt you can’t see. Those germs can make you sick! So, use soap and water, make lots of bubbles, and wash for 20 seconds before every meal — it keeps your tummy safe and you feeling great!" 
        }
      ] 
    },
    { 
      id: 3, 
      title: "Eat Fruits and Vegetables", 
      img: vegImg, 
      videoUrl: "https://www.youtube.com/embed/mMHVEFWNLMc", 
      questions: [
        { 
          question: "Eat Fruits and Vegetables", 
          answer: "They make you strong like a superhero! Eating colorful fruits and veggies gives your body vitamins and energy to play, run, and grow big and healthy. Apples, carrots, and bananas are like power fuel for your body — the more colors on your plate, the stronger you become!" 
        }
      ] 
    },
    { 
      id: 4, 
      title: "Playing with Toys", 
      img: toysImg, 
      videoUrl: "https://www.youtube.com/embed/fbatqm3-5nU?", 
      questions: [
        { 
          question: "Put Toys Back After Playing", 
          answer: "Helps keep your room tidy and easy to find toys next time! Cleaning up after playtime teaches you to be responsible and keeps your room neat and safe. Plus, when your toys are in their right place, you can find them faster next time and start playing again sooner!" 
        }
      ] 
    },
    { 
      id: 5, 
      title: "Not Brushing Teeth", 
      img: notBrushImg, 
      videoUrl: "https://www.youtube.com/embed/XbxsdbisXzU", 
      questions: [
        { 
          question: "Not Brushing Teeth", 
          answer: "Uh-oh! Skipping brushing can let sugar bugs make holes in your teeth. Brushing keeps your mouth fresh and your smile shiny — so don’t forget to brush every morning and night!" 
        }
      ] 
    },
    { 
      id: 6, 
      title: "Not Washing Hands", 
      img: hand1Img, 
      videoUrl: "https://www.youtube.com/embed/ztDVRwgfj_M", 
      questions: [
        { 
          question: "Not Washing Hands", 
          answer: "Germs are tiny invisible bugs that can make you sick! When you don’t wash your hands before eating or after playing, those germs can get into your tummy. Washing your hands with soap and water keeps you healthy, happy, and ready for more fun!" 
        }
      ] 
    },
    { 
      id: 7, 
      title: "Eating only Junk Food", 
      img: junkImg, 
      videoUrl: "https://www.youtube.com/embed/tXODAwmjABE?", 
      questions: [
        { 
          question: "Eating only Junk Food", 
          answer: "Junk food may taste yummy, but it doesn’t help your body grow strong! Eating too many chips, candies, and sodas can make you tired and weak. Healthy foods like fruits, veggies, and milk give you energy to play, run, and grow big and strong every day!" 
        }
      ] 
    },
    { 
      id: 8, 
      title: "Not Playing with Toys", 
      img: notToysImg, 
      videoUrl: "https://www.youtube.com/embed/p7ZZrQM5zhw", 
      questions: [
        { 
          question: "Not Playing with Toys", 
          answer: "Playing with toys helps you learn, imagine, and have fun! When you don’t play, you miss chances to be creative and happy. Building blocks, drawing, or playing with dolls and cars help your brain grow and make you smarter! So remember to play and enjoy your toys every day." 
        }
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
      <h2 className="habit-heading">Good Habits</h2>
      <div className="container0">
        {subjects.slice(0, 4).map((subject) => (
          <div key={subject.id} className="card0" onClick={() => openModal(subject)}>
            <img src={subject.img} alt={subject.title} />
            <h3>{subject.title}</h3>
          </div>
        ))}
      </div>

      <h2 className="habit-heading bad">Bad Habits</h2>
      <div className="container0">
        {subjects.slice(4).map((subject) => (
          <div key={subject.id} className="card0" onClick={() => openModal(subject)}>
            <img src={subject.img} alt={subject.title} />
            <h3>{subject.title}</h3>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="exp-modal-overlay">
          <div className="exp-modal-content">
            <button className="close-modal-btn" onClick={closeModal}>✖</button>

            <div className="modal1-body">
              {/* LEFT SIDE - TEXT & SOUND */}
              <div className="modal1-content">
                <div className="modal1-header">
                  <h2>{selectedSubject.title}</h2>
                  <SB3
                    text={`${selectedSubject.questions[0].question} ${selectedSubject.questions[0].answer}`}
                  />
                </div>

                <div className="questions-list2">
                  {selectedSubject.questions.map((q, index) => (
                    <div
                      className="question-card2"
                      key={index}
                      onClick={() => {
                        window.speechSynthesis.cancel();
                        const utterance = new SpeechSynthesisUtterance(
                          `${q.question}. ${q.answer}`
                        );
                        utterance.lang = "en-US";
                        utterance.rate = 0.9;
                        window.speechSynthesis.speak(utterance);
                      }}
                    >
                      <div className="question-left2">
                        <div className="question-line2">
                          <strong>{q.question}</strong>
                          <div onClick={(e) => e.stopPropagation()}>
                          </div>
                        </div>
                        <p>{q.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE - VIDEO */}
              <div className="modal1-video">
                <div className="video-frame">
                  <iframe
                    src={selectedSubject.videoUrl}
                    title={selectedSubject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
