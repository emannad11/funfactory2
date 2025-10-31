
import { useState, useRef } from "react";
import { Volume2, PauseCircle, PlayCircle } from "lucide-react";

export default function Sound1({ text }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef(null);
  const synth = window.speechSynthesis;

  const speakText = () => {
    if (!isSpeaking) {
      synth.cancel();

    
      const cleanText = text
        .replace(/<br\s*\/?>/gi, ". ") 
        .replace(/[/\\]/g, " ")        
        .replace(/\s+/g, " ")          
        .trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = "en-US";
      utterance.rate = 0.85;

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      synth.speak(utterance);
      setIsSpeaking(true);
      setIsPaused(false);
    } else if (isPaused) {
      synth.resume();
      setIsPaused(false);
    } else {
      synth.pause();
      setIsPaused(true);
    }
  };

  return (
    <button className="sound-btn111" onClick={speakText}>
      {!isSpeaking ? (
        <Volume2 size={22} />
      ) : isPaused ? (
        <PlayCircle size={22} />
      ) : (
        <PauseCircle size={22} />
      )}
    </button>
  );
}
