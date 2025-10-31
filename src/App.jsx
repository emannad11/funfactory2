import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { FaHome } from "react-icons/fa";
import clickSound from "./assets/sounds/click.mp3";
import Home from "./Home";
import Quiz from "./Quiz";
import Alphabets from "./quiz/Alphabets";
import Animals from "./quiz/Animals";
import Birds from "./quiz/Birds";
import Colors from "./quiz/Colors";
import Counting from "./quiz/Counting";
import Fruits from "./quiz/Fruits";
import Shapes from "./quiz/Shapes";
import Vegetables from "./quiz/Vegetables";
import Learning from "./Learning";
import Alphabet from "./learn/Alphabet";
import Animal from "./learn/Animal";
import Bird from "./learn/Bird";
import Color from "./learn/Color";
import Count from "./learn/Count";
import Fruit from "./learn/Fruit";
import Shape from "./learn/Shape";
import Vegetable from "./learn/Vegetable";
import Poem from "./poem/Poem";
import Experiment from "./exp/Experiment";
import Knowledge from "./gk/Knowledge";
import Drawing from "./draw/Drawing";
import FunFact from "./fun/FunFact";
import Habbit from "./habbits/Habbit";
import SplashScreen from "./screen/SplashScreen";
import Classes from "./class/Classes";
import Home2 from "./Home2";
import Learning2 from "./Learning2";
import MissingLetter from "./learn2/MissingLetter";
import WordBuilder from "./learn2/WordBuilder";
import Phonics from "./phonics/Phonics";
import Rhyming from "./learn2/Rhyming";
import WordSentence from "./learn2/WordSentence";
import ShortStories from "./shortstories/ShortStories";
import Experiment2 from "./exp2/Experiment2";
import MathMagic from "./math/MathMagic";
import Drawing2 from "./drawing2/Drawing2";
import DrawCanvas from "./drawing2/DrawCanvas";
import Puzzle from "./game/Puzzle";
import Manners from "./manner/Manners";
import Home3 from "./Home3";
import ArtActivities from "./art/ArtActivities";
import Craft from "./art/Craft";
import NatureCraft from "./art/NatureCarft";
import Experiment3 from "./exp3/Experiment3";
import Environment from "./env/Enviornment";
import Living from "./env/Living";
import Recycle from "./env/Recycle";
import Weather from "./env/Weather";
import Computer from "./comp/Computer";
import FallingLetter from "./comp/FallingLetter";
import TypingGame from "./comp/TypingGame";
import Coding from "./comp/Coding";
import Puzzle3 from "./puzzle/Puzzle3";
import Games from "./mind/Games";
import RiddleGame from "./mind/RiddleGame";
import AnimalQuiz from "./mind/AnimalQuiz";
import SlotMachine from "./mind/SlotMachine";
import Home4 from "./Home4";
import MatchingCards from "./cards/MatchingCards";
import Cards from "./cards/Cards";
import Game from "./cards/Game";
import Share from "./speak/Share";
import Guess from "./speak/Guess";
import Twister from "./speak/Twister";
import Culture from "./world/Culture";
import Food from "./world/Food";
import Language from "./world/Language";
import Building from "./world/Building";
import Play from "./digital/Play";
import Tictactoe from "./digital/Tictactoe";
import WordSearch from "./digital/WordSearch";
import Experiment4 from "./maze/Experiment4";
import Footer from "./Footer";
import Enter from "./story5/Enter";
import Adventure from "./story5/Adventure";
import Islamic from "./story5/Islamic";
import Horror from "./story5/Horror";

function ResponsiveNavbar({ backLink, backText, homeLink }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.currentTime = 0;
    audio.play();
  };
  const handleClick = (e, target) => {
    e.preventDefault();
    playClickSound();
    setTimeout(() => navigate(target), 150);
  };
  return (
    <header className="kids-navbar1">
      <div className="home-link-container1 left-links1">
        <a
          href={backLink}
          className="home-link1"
          onClick={(e) => handleClick(e, backLink)}
        >
          {backText}
        </a>
      </div>
      <div className="kids-logo center-logo">
        <a href="/" className="logo-link" onClick={(e) => handleClick(e, "/")}>
          <img src="/star.png" alt="Star" />
          <h2>Fun Factory</h2>
        </a>
      </div>
      <div className="right-home">
        <FaHome
          className="home-icon"
          onClick={(e) => handleClick(e, homeLink)}
          title="Home"
        />
      </div>
    </header>
  );
}

function KidsNavbar() {
  const location = useLocation();
  const path = location.pathname;
  const isQuizSubpage = path.startsWith("/quiz/") && path !== "/quiz";
  const isQuizPage = path === "/quiz" || isQuizSubpage;
  const isPlaygroupPage =
    path.startsWith("/home") ||
    path.startsWith("/learning") ||
    path.startsWith("/learn/") ||
    isQuizPage ||
    path.startsWith("/poem") ||
    path.startsWith("/experiment") ||
    path.startsWith("/drawing") ||
    path.startsWith("/habbits") ||
    path.startsWith("/funfact") ||
    path.startsWith("/knowledge");
  const isClass12Page =
    path.startsWith("/class1-2") ||
    path.startsWith("/learning1-2") ||
    path.startsWith("/learn2/") ||
    path.startsWith("/quiz1-2") ||
    path.startsWith("/phonics") ||
    path.startsWith("/shortstories") ||
    path.startsWith("/exp2") ||
    path.startsWith("/math") ||
    path.startsWith("/game") ||
    path.startsWith("/manner") ||
    path.startsWith("/drawing2");
  if (!isPlaygroupPage || isClass12Page) return null;
  if (path === "/home")
    return (
      <ResponsiveNavbar
        backLink="/"
        backText="⮪ Back To Classes"
        homeLink="/home"
      />
    );
  if (path.startsWith("/learn/") && path !== "/learning")
    return (
      <ResponsiveNavbar
        backLink="/learning"
        backText="⮪ Back To Learning"
        homeLink="/home"
      />
    );
  if (path === "/quiz")
    return (
      <ResponsiveNavbar
        backLink="/home"
        backText="⮪ Back To PlayGroup - Prep"
        homeLink="/home"
      />
    );
  if (path.startsWith("/quiz/"))
    return (
      <ResponsiveNavbar backLink="/quiz" backText="Back To Quiz" homeLink="/home" />
    );
  return (
    <ResponsiveNavbar
      backLink="/home"
      backText="⮪ Back To PlayGroup - Prep"
      homeLink="/home"
    />
  );
}

function KidsNavbar2() {
  const location = useLocation();
  const path = location.pathname;
  const isClass12Page =
    path.startsWith("/class1-2") ||
    path.startsWith("/learning1-2") ||
    path.startsWith("/learn2/") ||
    path.startsWith("/quiz1-2") ||
    path.startsWith("/phonics") ||
    path.startsWith("/shortstories") ||
    path.startsWith("/exp2") ||
    path.startsWith("/math") ||
    path.startsWith("/game") ||
    path.startsWith("/manner") ||
    path.startsWith("/drawing2");
  if (!isClass12Page) return null;
  if (path === "/class1-2")
    return (
      <ResponsiveNavbar
        backLink="/"
        backText="⮪ Back To Classes"
        homeLink="/class1-2"
      />
    );
  if (path.startsWith("/learn2/"))
    return (
      <ResponsiveNavbar
        backLink="/learning1-2"
        backText="⮪ Back To Learning 1–2"
        homeLink="/class1-2"
      />
    );
  if (path === "/drawing2/draw2")
    return (
      <ResponsiveNavbar
        backLink="/class1-2"
        backText="⮪ Back To Grade 1–2"
        homeLink="/class1-2"
      />
    );
  if (path.startsWith("/drawing2/") && path !== "/drawing2/draw2")
    return (
      <ResponsiveNavbar
        backLink="/drawing2/draw2"
        backText="⮪ Back To Drawing"
        homeLink="/class1-2"
      />
    );
  return (
    <ResponsiveNavbar
      backLink="/class1-2"
      backText="⮪ Back To Grade 1–2"
      homeLink="/class1-2"
    />
  );
}

function KidsNavbar3() {
  const location = useLocation();
  const path = location.pathname;
  const isClass34Page =
    path.startsWith("/class3-4") ||
    path.startsWith("/comp") ||
    path.startsWith("/puzzle") ||
    path.startsWith("/mind") ||
    path.startsWith("/exp3") ||
    path.startsWith("/env") ||
    path.startsWith("/drawing3") ||
    path.startsWith("/art/");
  if (!isClass34Page) return null;
  if (path === "/class3-4")
    return (
      <ResponsiveNavbar
        backLink="/"
        backText="⮪ Back To Classes"
        homeLink="/class3-4"
      />
    );
  if (path.startsWith("/env/") && path !== "/env/enviornment")
    return (
      <ResponsiveNavbar
        backLink="/env/enviornment"
        backText="⮪ Back To Science & Environment"
        homeLink="/class3-4"
      />
    );
  if (path.startsWith("/art/") && path !== "/art/artactivities")
    return (
      <ResponsiveNavbar
        backLink="/art/artactivities"
        backText="⮪ Back To Creative Activities"
        homeLink="/class3-4"
      />
    );
  if (path.startsWith("/comp/") && path !== "/comp/computer")
    return (
      <ResponsiveNavbar
        backLink="/comp/computer"
        backText="⮪ Back To Computer Activities"
        homeLink="/class3-4"
      />
    );
  if (path.startsWith("/mind/") && path !== "/mind/games")
    return (
      <ResponsiveNavbar
        backLink="/mind/games"
        backText="⮪ Back To Mind Games"
        homeLink="/class3-4"
      />
    );
  return (
    <ResponsiveNavbar
      backLink="/class3-4"
      backText="⮪ Back To Grade 3–4"
      homeLink="/class3-4"
    />
  );
}

function KidsNavbar4() {
  const location = useLocation();
  const path = location.pathname;
  if (
    !(
      path.startsWith("/class5-6") ||
      path.startsWith("/cards") ||
      path.startsWith("/speak") ||
      path.startsWith("/story5") ||
      path.startsWith("/world") ||
      path.startsWith("/maze") ||
      path.startsWith("/digital")
    )
  )
    return null;
  if (path === "/class5-6")
    return (
      <ResponsiveNavbar
        backLink="/"
        backText="⮪ Back To Classes"
        homeLink="/class5-6"
      />
    );
  if (path.startsWith("/cards/"))
    return (
      <ResponsiveNavbar
        backLink="/cards"
        backText="⮪ Back To Brain Teasers"
        homeLink="/class5-6"
      />
    );
  if (path.startsWith("/speak/"))
    return (
      <ResponsiveNavbar
        backLink="/speak"
        backText="⮪ Back To Speak & Share"
        homeLink="/class5-6"
      />
    );
  if (path.startsWith("/story5/") && path !== "/story5/entertainment")
    return (
      <ResponsiveNavbar
        backLink="/story5/entertainment"
        backText="⮪ Back To Entertainment"
        homeLink="/class5-6"
      />
    );
  if (path.startsWith("/world/") && path !== "/world/culture")
    return (
      <ResponsiveNavbar
        backLink="/world/culture"
        backText="⮪ Back To World Of Culture"
        homeLink="/class5-6"
      />
    );
  if (path.startsWith("/digital/") && path !== "/digital/play")
    return (
      <ResponsiveNavbar
        backLink="/digital/play"
        backText="⮪ Back To Grid & Find"
        homeLink="/class5-6"
      />
    );
  return (
    <ResponsiveNavbar
      backLink="/class5-6"
      backText="⮪ Back To Grade 5–6"
      homeLink="/class5-6"
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <KidsNavbar />
          <KidsNavbar2 />
          <KidsNavbar3 />
          <KidsNavbar4 />
          <main className="page">
            <Routes>
              <Route path="/" element={<Classes />} />
              <Route path="/home" element={<Home />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/alphabets" element={<Alphabets />} />
              <Route path="/quiz/animals" element={<Animals />} />
              <Route path="/quiz/birds" element={<Birds />} />
              <Route path="/quiz/colors" element={<Colors />} />
              <Route path="/quiz/counting" element={<Counting />} />
              <Route path="/quiz/fruits" element={<Fruits />} />
              <Route path="/quiz/shapes" element={<Shapes />} />
              <Route path="/quiz/vegetables" element={<Vegetables />} />
              <Route path="/learn/alphabet" element={<Alphabet />} />
              <Route path="/learn/animal" element={<Animal />} />
              <Route path="/learn/bird" element={<Bird />} />
              <Route path="/learn/color" element={<Color />} />
              <Route path="/learn/count" element={<Count />} />
              <Route path="/learn/fruit" element={<Fruit />} />
              <Route path="/learn/shape" element={<Shape />} />
              <Route path="/learn/vegetable" element={<Vegetable />} />
              <Route path="/poem" element={<Poem />} />
              <Route path="/experiment" element={<Experiment />} />
              <Route path="/drawing" element={<Drawing />} />
              <Route path="/habbits" element={<Habbit />} />
              <Route path="/funfact" element={<FunFact />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/class1-2" element={<Home2 />} />
              <Route path="/learning1-2" element={<Learning2 />} />
              <Route path="/learn2/missingletter" element={<MissingLetter />} />
              <Route path="/learn2/wordbuilder" element={<WordBuilder />} />
              <Route path="/learn2/rhymingwords" element={<Rhyming />} />
              <Route path="/learn2/wordsentence" element={<WordSentence />} />
              <Route path="/math/mathmagic" element={<MathMagic />} />
              <Route path="/phonics/phonics" element={<Phonics />} />
              <Route path="/shortstories/shortstories" element={<ShortStories />} />
              <Route path="/exp2/experiment2" element={<Experiment2 />} />
              <Route path="/drawing2/draw2" element={<Drawing2 />} />
              <Route path="/drawing2/:name" element={<DrawCanvas />} />
              <Route path="/game/puzzle" element={<Puzzle />} />
              <Route path="/manner/manners" element={<Manners />} />
              <Route path="/class3-4" element={<Home3 />} />
              <Route path="/art/artactivities" element={<ArtActivities />} />
              <Route path="/art/craft" element={<Craft />} />
              <Route path="/art/nature" element={<NatureCraft />} />
              <Route path="/exp3/experiment3" element={<Experiment3 />} />
              <Route path="/env/enviornment" element={<Environment />} />
              <Route path="/env/livingnonliving" element={<Living />} />
              <Route path="/env/recycle" element={<Recycle />} />
              <Route path="/env/weather" element={<Weather />} />
              <Route path="/comp/computer" element={<Computer />} />
              <Route path="/comp/fallingletters" element={<FallingLetter />} />
              <Route path="/comp/typing" element={<TypingGame />} />
              <Route path="/comp/coding" element={<Coding />} />
              <Route path="/puzzle/puzzle" element={<Puzzle3 />} />
              <Route path="/mind/games" element={<Games />} />
              <Route path="/mind/riddlegame" element={<RiddleGame />} />
              <Route path="/mind/animalquiz" element={<AnimalQuiz />} />
              <Route path="/mind/slotmachine" element={<SlotMachine />} />
              <Route path="/class5-6" element={<Home4 />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/cards/matching" element={<MatchingCards />} />
              <Route path="/cards/mission" element={<Game />} />
              <Route path="/speak" element={<Share />} />
              <Route path="/speak/guess" element={<Guess />} />
              <Route path="/speak/twister" element={<Twister />} />
              <Route path="/story5/entertainment" element={<Enter />} />
              <Route path="/story5/adventure" element={<Adventure />} />
              <Route path="/story5/islamic" element={<Islamic />} />
              <Route path="/story5/horror" element={<Horror />} />
              <Route path="/world/culture" element={<Culture />} />
              <Route path="/world/food" element={<Food />} />
              <Route path="/world/language" element={<Language />} />
              <Route path="/world/building" element={<Building />} />
              <Route path="/maze/exp4" element={<Experiment4 />} />
              <Route path="/digital/play" element={<Play />} />
              <Route path="/digital/tictactoe" element={<Tictactoe />} />
              <Route path="/digital/wordsearch" element={<WordSearch />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}
