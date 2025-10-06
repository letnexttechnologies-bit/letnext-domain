import { useEffect, useState } from "react";
import "./WebDesigner.css";
import Footer from "./Footer";

export default function WebDesigner() {
  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for fullscreen image
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Open fullscreen
  const openFullscreen = (src) => {
    setFullscreenImage(src);
  };

  // Close fullscreen
  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="webdesigner-wrapper">
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">Social Media Handling Portfolio</h2>
        <p className="webdesigner-desc">
          Here are some screenshots of our social media handling projects:
        </p>

        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/social.jpg")}
          >
            <img src="/social.jpg" alt="Project 1" />
            <h3>Project One</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/social2.jpg")}
          >
            <img src="/social2.jpg" alt="Project 2" />
            <h3>Project Two</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/social3.jpg")}
          >
            <img src="/social3.jpg" alt="Project 3" />
            <h3>Project Three</h3>
          </div>
        </div>
      </section>

      {/* Fullscreen Viewer */}
      {fullscreenImage && (
        <div className="fullscreen-viewer active" onClick={closeFullscreen}>
          <span className="close-btn">&times;</span>
          <img src={fullscreenImage} alt="Fullscreen" />
        </div>
      )}

      {/* Footer stays at the bottom */}
      {/* <Footer /> */}
    </div>
  );
}
