import "./App.css";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="kid-footer1">
      <p className="footer-text">
        Developed with <FaHeart className="heart-icon" /> by:{" "}
        <a
          href="https://technicmentors.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
        >
          Technic Mentors
        </a>
      </p>
    </footer>
  );
}
