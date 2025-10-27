import { useEffect } from "react";
import "./Splash.css";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img src="/star.png" alt="Logo" className="splash-logo" />
                <h2 className="splash-title">Fun Factory</h2>
        <h2 className="splash-title">Let’s Learn, Play & Explore! 🌈</h2>
        <div className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
}
