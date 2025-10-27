import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./Poem.css";
import SoundButton0 from "./SoundButton0";

export default function Poem() {
  const poems = [
    {
      id: 1,
      title: "Twinkle Twinkle",
      img: "/src/assets/twinkle.jpeg",
      images: [
        "/src/assets/twinkle1.jpg",
        "/src/assets/twinkle2.jpg",
        "/src/assets/twinkle5.jpg",
        "/src/assets/twinkle4.jpg",
        "/src/assets/twinkle3.jpg",
      ],
      poem: `Twinkle, twinkle, little star,<br/>
How I wonder what you are!<br/>
Up above the world so high,<br/>
Like a diamond in the sky.`,
    },
    {
      id: 2,
      title: "Rain Rain",
      img: "/src/assets/rain.jpeg",
      images: [
        "/src/assets/rain1.jpg",
        "/src/assets/rain2.jpg",
        "/src/assets/rain3.jpg",
        "/src/assets/rain4.jpg",
        "/src/assets/rain5.jpg",
      ],
      poem: `Rain, rain, go away,<br/>
Come again another day,<br/>
Little Johnny wants to play,<br/>
Rain, rain, go away.`,
    },
    {
      id: 3,
      title: "Black Sheep",
      img: "/src/assets/sheep.jpg",
      images: [
        "/src/assets/sheep1.jpg",
        "/src/assets/sheep2.jpg",
        "/src/assets/sheep3.jpg",
        "/src/assets/sheep4.jpeg",
        "/src/assets/sheep5.jpg",
      ],
      poem: `Baba baba black sheep,<br/>
Have you any wool?<br/>
Yes sir, yes sir,<br/>
Three bags full!`,
    },
    {
      id: 4,
      title: "Jack and Jill",
      img: "/src/assets/jack.jpg",
      images: [
        "/src/assets/jack2.jpeg",
        "/src/assets/jack3.jpg",
        "/src/assets/jack4.jpg",
        "/src/assets/jack5.jpg",
        "/src/assets/jack1.png",
      ],
      poem: `Jack and Jill went up the hill,<br/>
To fetch a pail of water.<br/>
Jack fell down and broke his crown,<br/>
And Jill came tumbling after.`,
    },
    {
      id: 5,
      title: "Humpty Dumpty",
      img: "/src/assets/humpty.jpg",
      images: [
        "/src/assets/humpty1.jpg",
        "/src/assets/humpty2.jpg",
        "/src/assets/humpty3.jpg",
        "/src/assets/humpty4.jpg",
        "/src/assets/humpty5.jpg",
      ],
      poem: `Humpty Dumpty sat on a wall,<br/>
Humpty Dumpty had a great fall;<br/>
All the king's horses and all the king's men<br/>
Couldn't put Humpty together again.`,
    },
    {
      id: 6,
      title: "Busy Little Bee",
      img: "/src/assets/frogg.png",
      images: [
        "/src/assets/bee1.jpg",
        "/src/assets/bee2.webp",
        "/src/assets/bee3.png",
        "/src/assets/bee4.webp",
        "/src/assets/bee5.jpg",
      ],
      poem: `Buzz, buzz, buzzing by,<br/>
Zooming fast from flower to sky.<br/>
Making honey, oh so sweet,<br/>
Busy bee is hard to beat!`,
    },
    {
      id: 7,
      title: "Rainbow Colors",
      img: "/src/assets/rainbow.jpg",
      images: [
        "/src/assets/rainbow1.jpg",
        "/src/assets/rainbow2.jpg",
        "/src/assets/rainbow3.jpg",
        "/src/assets/rainbow4.jpg",
        "/src/assets/rainbow5.jpg",
      ],
      poem: `Red and orange, yellow too,<br/>
Green and blue and purple hue!<br/>
After rain, the rainbow’s near,<br/>
Smiles and colors fill the air!`,
    },
    {
      id: 8,
      title: "Little Butterfly",
      img: "/src/assets/butterfly.jpg",
      images: [
        "/src/assets/butter1.jpg",
        "/src/assets/butter2.jpg",
        "/src/assets/butter3.webp",
        "/src/assets/butter4.webp",
        "/src/assets/butter5.jpg",
      ],
      poem: `Flutter, flutter, in the sky,<br/>
Little wings go flying high.<br/>
Blue and yellow, pink and red,<br/>
Dancing where the flowers spread!`,
    },
    {
      id: 9,
      title: "Tiny Fish",
      img: "/src/assets/fish.jpg",
      images: [
        "/src/assets/fish1.png",
        "/src/assets/fish5.jpeg",
        "/src/assets/fish2.png",
        "/src/assets/fish3.jpg",
        "/src/assets/fish4.jpg",
      ],
      poem: `Tiny fish in water blue,<br/>
Swimming fast, what fun to do!<br/>
Up and down and round they go,<br/>
Shiny scales that brightly glow!`,
    },
    {
      id: 10,
      title: "The Bunny Hop",
      img: "/src/assets/bunny.jpg",
      images: [
        "/src/assets/bunny1.jpg",
        "/src/assets/bunny2.jpg",
        "/src/assets/bunny3.jpg",
        "/src/assets/bunny4.jpg",
        "/src/assets/bunny5.jpg",
      ],
      poem: `Little bunny, soft and white,<br/>
Hopping, hopping out of sight.<br/>
Through the garden, here and there,<br/>
Wiggly nose and fluffy hair!`,
    },
  ];

  const [selectedPoem, setSelectedPoem] = useState(null);

  const openModal = (poem) => {
    window.speechSynthesis.cancel();
    setSelectedPoem(poem);
    const utterance = new SpeechSynthesisUtterance(poem.title);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedPoem(null);
  };
  return (
    <>
    <div className="heading9"><h2>Poems</h2></div>
      <div className="container5">
        {poems.map((poem) => (
          <div
            key={poem.id}
            className="card5"
            onClick={() => openModal(poem)}
          >
            <img src={poem.img} alt={poem.title} />
            <h3>{poem.title}</h3>
          </div>
        ))}
      </div>

      {selectedPoem && (
        <div className="poem-modal-overlay" onClick={closeModal}>
          <div
            className="poem-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={closeModal}>
              ✖
            </button>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              speed={800}
              slidesPerView={1}
              className="poem-swiper"
            >
              {selectedPoem.images?.length > 0 ? (
                selectedPoem.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${selectedPoem.title} ${index + 1}`}
                      className="poem-img"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <img
                    src={selectedPoem.img}
                    alt={selectedPoem.title}
                    className="poem-img"
                  />
                </SwiperSlide>
              )}
            </Swiper>

            <div className="poem-card">
              <div className="poem-header">
                <h2>{selectedPoem.title}</h2>
                <div className="sound-right">
                  <span className="sound-text">Click to play 🎵</span>
                  <SoundButton0 text={selectedPoem.poem.replace(/<br\/>/g, " ")} />
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: selectedPoem.poem }}></p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
