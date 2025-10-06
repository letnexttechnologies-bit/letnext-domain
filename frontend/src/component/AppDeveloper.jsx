import { useEffect, useState } from "react";
import "./WebDesigner.css";
import Footer from "./Footer";

export default function WebDesigner() {
  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for gallery
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open gallery
  const openGallery = (images) => {
    setGalleryImages(images);
    setCurrentIndex(0);
  };

  // Close gallery
  const closeGallery = () => {
    setGalleryImages([]);
    setCurrentIndex(0);
  };

  // Next image
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Prev image
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="webdesigner-wrapper">
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">App Development Portfolio</h2>
        <p className="webdesigner-desc">
          Here are some screenshots of our App Development projects:
        </p>

        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/app1.jpg", "/app2.jpg", "/app3.jpg","/app4.jpg","/app5.jpg"])
            }
          >
            <img src="/app1.jpg" alt="Project 1" />
            <h3>Project One</h3>
          </div>
          {/* <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web4.png", "/web5.png", "/web6.png"])
            }
          >
            <img src="/web4.png" alt="Project 2" />
            <h3>Project Two</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web7.png", "/web8.png", "/web9.png"])
            }
          >
            <img src="/web7.png" alt="Project 3" />
            <h3>Project Three</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web10.png", "/web11.png", "/web12.png"])
            }
          >
            <img src="/web10.png" alt="Project 3" />
            <h3>Project Four</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web13.png", "/web14.png", "/web15.png"])
            }
          >
            <img src="/web13.png" alt="Project 3" />
            <h3>Project Five</h3>
          </div> */}
        </div>
      </section>

      {/* Fullscreen Gallery */}
      {galleryImages.length > 0 && (
        <div className="fullscreen-viewer active" onClick={closeGallery}>
          <span className="close-btn">&times;</span>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              top: "50%",
              left: "20px",
              transform: "translateY(-50%)",
              fontSize: "2rem",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              zIndex: 9999,
            }}
          >
            &#10094;
          </button>

          {/* Current Image */}
          <img src={galleryImages[currentIndex]} alt="Fullscreen" />

          {/* Next Button */}
          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
              fontSize: "2rem",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              zIndex: 9999,
            }}
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Footer stays at the bottom */}
      {/* <Footer /> */}
    </div>
  );
}
