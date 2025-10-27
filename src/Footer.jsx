
import "./Footer.css";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="kid-footer">
      <p className="footer-text">
        Developed with <FaHeart className="heart-icon" /> by :{" "}
        <span className="highlight">Technic Mentors</span>
      </p>
    </footer>
  );
}
