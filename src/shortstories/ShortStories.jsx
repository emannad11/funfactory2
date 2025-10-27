import { useState } from "react";
import "./Stories.css";
import SoundButto from "./SoundButto";

export default function ShortStories() {
    const Stories = [
        {
            id: 1,
            title: "The Lion & The Mouse",
            img: "/src/assets/the lion.jpg",
            videoUrl: "https://www.youtube.com/embed/iGPOUHFYKik",
            content: (
                <>
                    <h2>The Lion & the Mouse</h2>
                    <p>
                        One day, a lion caught a mouse.<br />
                        The mouse said, “Please let me go.”<br />
                        The lion felt kind and freed him.<br />
                        Later, the lion got trapped in a net.<br />
                        The mouse came and cut the net.<br />
                        The lion was free!

                    </p>
                    <p>
                        <strong>Moral:</strong><br />
                        Always help others.
                    </p>
                </>
            ),
            text: `The Lion and the Mouse. One day, a lion caught a small mouse. The mouse begged, “Please let me go.” The lion laughed but let it go. Later, the lion was trapped in a hunter’s net. The mouse came and cut the net with its teeth. The lion was free. Moral: Always help others.`,
        },
        {
            id: 2,
            title: "The Thirsty Crow",
            img: "/src/assets/crow.jpg",
            videoUrl: "https://www.youtube.com/embed/9mc8Cp8SZxA",
            content: (
                <>
                    <h2>The Thirsty Crow</h2>
                    <p>
                        It was a hot day. A crow was very thirsty.<br />
                        He flew here and there looking for water.<br />
                        At last, he saw a pot with little water inside.<br />
                        He picked up small stones and dropped them into the pot.<br />
                        Slowly, the water came up.<br />
                        The crow drank the water and flew away happily
                    </p>
                    <p>
                        <strong>Moral:</strong><br />
                        Where there is a will, there is a way
                    </p>
                </>
            ),
            text: `The Thirsty Crow. On a hot day, a crow was very thirsty. He found a pot with little water. He dropped small stones into it. The water came up. The crow drank and flew away happily. Moral: Where there is a will, there is a way.`
        },
        {
            id: 3,
            title: "The Tortoise & the Hare",
            img: "/src/assets/hare.webp",
            videoUrl: "https://www.youtube.com/embed/Fm9VUjihKJ4",
            content: (
                <>
                    <h2>The Tortoise & the Hare</h2>
                    <p>
                        A hare laughed at a slow tortoise.<br />
                        The tortoise said, “Let’s have a race!”<br />
                        The hare ran very fast, but soon he felt sleepy.<br />
                        He said, “I will rest for a while.”<br />
                        The tortoise kept walking slowly and steadily.<br />
                        When the hare woke up, the tortoise had already won.
                    </p>
                    <p>
                        <strong>Moral:</strong><br />
                        Slow and steady wins the race.
                    </p>
                </>
            ),
            text: `The Dog and His Shadow. A dog had a bone in his mouth. He saw his reflection in the river and thought it was another dog. He barked and dropped his bone into the water. Moral: Don’t be greedy.`,
        },
        {
            id: 4,
            title: "The Greedy Dog",
            img: "/src/assets/greedy.jpg",
            videoUrl: "https://www.youtube.com/embed/TtJL9GXPB60",
            content: (
                <>
                    <h2>The Greedy Dog</h2>
                    <p>
                        A dog found a big bone and carried it in his mouth.<br />
                        He crossed a bridge and saw his reflection in the water.<br />
                        He thought it was another dog with a bigger bone.<br />
                        He barked at it to take the other bone.<br />
                        His own bone fell into the water and was gone.<br />
                    </p>
                    <p>
                        <strong>Moral:</strong><br />
                        Don’t be greedy.
                    </p>
                </>
            ),
            text: `The Dog and His Shadow. A dog had a bone in his mouth. He saw his reflection in the river and thought it was another dog. He barked and dropped his bone into the water. Moral: Don’t be greedy.`,
        },
        {
            id: 5,
            title: "The Elephant & His Friends",
            img: "/src/assets/friends.jpg",
            videoUrl: "https://www.youtube.com/embed/04oB8Cz2TxI",
            content: (
                <>
                    <h2>The Elephant & His Friends</h2>
                    <p>
                        An elephant lived in the forest.<br />
                        He wanted to make friends.<br />
                        He met a monkey, a rabbit, and a frog, but they said, “You are too big to be our friend.”<br />
                        One day, a tiger came to the forest.<br />
                        The elephant scared him away.<br />
                        The animals were happy and became his friends<br />
                    </p>
                    <p>
                        <strong>Moral:</strong><br />
                        Friends come in all sizes.
                    </p>
                </>
            ),
            text: `The Elephant and His Friends. An elephant wanted to make friends, but other animals said he was too big. One day, a tiger attacked the forest. The elephant scared the tiger away. All animals became his friends. Moral: Friends come in all sizes.`,
        },
        {
            id: 6,
            title: "The Ant & The Dove",
            img: "/src/assets/save.jpeg",
            videoUrl: "https://www.youtube.com/embed/d_0_85GkrNc",
            content: (
                <>
                    <h2>The Ant & The Dove</h2>
                    <p>
                        One day, an ant fell into a river.<br/>
                        A dove sitting on a tree saw it.<br/>
                        The dove dropped a leaf into the water.<br/>
                        The ant climbed on it and was saved.<br/>
                        Later, a hunter tried to catch the dove.<br/>
                        The ant bit his foot, and the dove flew away
                    </p>
                    <p>
                        <strong>Moral:</strong><br />
                        One good turn deserves another.
                    </p>
                </>
            ),
            ext: `The Ant and the Dove. An ant fell into the river. A dove dropped a leaf to save it. Later, the ant bit a hunter who tried to shoot the dove. The dove flew away safely. Moral: One good turn deserves another.`,
        },
        {
            id: 7,
            title: "The Tree & The Boy",
            img: "/src/assets/the boy.jpeg",
            videoUrl: "https://www.youtube.com/embed/jzRrqzivOSY",
            content: (
                <>
                    <h2>The Tree & The Boy</h2>
                    <p>
                        A little boy loved to play under a big tree.<br />
                        He ate its fruits and rested in its shade.<br />
                        As he grew older, he wanted more things.<br />
                        He took the tree’s wood to build his house.<br />
                        Years later, the tree had only a stump left.<br />
                        The boy, now old, sat on it and smiled.<br />
                        The tree was happy to help
                    </p>
                    <p>
                        <strong>Moral:</strong><br />
                        Always be thankful.
                    </p>

                </>
            ),
            text: `The Tree and the Boy. A boy loved a tree. He played under it and ate its fruits. As he grew, he took its branches and trunk for his needs. In old age, he sat on its stump and rested. The tree was happy. Moral: Always be thankful.`
        },
        {
            id: 8,
            title: "The Greedy Framer",
            img: "/src/assets/greedyhen.webp",
            videoUrl: "https://www.youtube.com/embed/IuiZM0kL1rg?si",
            content: (
                <>
                    <h2>The Greedy Framer</h2>
                    <p>
                        A farmer had a hen that laid a golden egg every day.<br />
                        The farmer was happy but soon became greedy.<br />
                        He thought there must be many golden eggs inside the hen.<br />
                        So, he killed the hen to get them.<br />
                        But there was nothing inside.<br />
                        He lost his hen and the golden eggs.
                    </p>
                    <p>
                        <strong>Moral:</strong><br />
                        Greed is curse
                    </p>
                </>
            ),
            text: `The Greedy Framer. A farmer had a hen that laid a golden egg daily. He wanted all the eggs at once. He killed the hen but found nothing. He lost everything. Moral: Greed is curse.`,
        },
    ]
    const [selectedSt, setSelectedSt] = useState(null);

    const openModal = (st) => {
        window.speechSynthesis.cancel();
        setSelectedSt(st);
        const utterance = new SpeechSynthesisUtterance(st.title);
        utterance.lang = "en-US";
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    const closeModal = () => {
        window.speechSynthesis.cancel();
        setSelectedSt(null);
    };

    return (
        <>
        <div className="heading9"><h2>Short Stories</h2></div>
            <div className="container7">
                {Stories.map((st) => (
                    <div key={st.id} className="card77" onClick={() => openModal(st)}>
                        <img src={st.img} alt={st.title} />
                        <h3>{st.title}</h3>
                    </div>
                ))}
            </div>

            {selectedSt && (
                <div className="exp-modal-overlay" onClick={closeModal}>
                    <div
                        className="exp-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-modal-btn" onClick={closeModal}>
                            ✖
                        </button>

                        <div className="modal1-body">
                            <div className="modal1-content">
                                <div className="modal1-header">
                                    <h2>{selectedSt.title}</h2>
                                    <SoundButto text={selectedSt.text} />
                                </div>
                                {selectedSt.content}
                            </div>

                            <div className="modal1-video">
                                <div className="video-frame">
                                    <iframe
                                        src={selectedSt.videoUrl}
                                        title={selectedSt.title}
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