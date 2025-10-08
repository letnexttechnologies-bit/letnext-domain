import { useEffect, useState } from "react";
import "./WebDesigner.css";
import Footer from "./Footer";
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";

export default function WebDesigner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (images) => {
    setGalleryImages(images);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setGalleryImages([]);
    setCurrentIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="webdesigner-wrapper">
      {/* Hero / Portfolio Section */}
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">Internet Of Things Portfolio</h2>
        <p className="webdesigner-desc">
         Explore our recent Internet Of Things works that merge innovation,
          design, and technology to create seamless digital experiences.
        </p>

        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/iot1.png", "/iot2..png"])
            }
          >
            <img src="/iot1.png" alt="Project 1" />
            <h3>Sample Internet Of Things</h3>
          </div>
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

      {/* ===== Content Section ===== */}
      <section className="webdev-content">
        <h2>Internet of Things (IoT) Solutions by LetNext Technologies</h2>
        <p>
          In the fast-paced digital era, companies are always looking for innovative means to boost efficiency, maximize operations, and provide superior experiences. The Internet of Things (IoT) is no longer a vision but a reality shaping industries globally. At LetNext Technologies, one of the top IT companies in Erode, we deliver advanced IoT solutions tailored to your business.
        </p>

        <h2>Understanding IoT</h2>
        <p>
          IoT is an interconnected network of physical objects like sensors, appliances, cars, and industrial equipment that collect, exchange, and analyze data via the internet. Devices interact in real-time, providing opportunities for automation, optimization, and innovation.
        </p>
        <ul>
          <li>Real-Time Monitoring: Monitor processes and performance instantly.</li>
          <li>Cost Reduction: Optimize energy consumption and supply chains.</li>
          <li>Improved Customer Experience: Smart devices provide personalized and predictive services.</li>
        </ul>

        <h2>Our IoT Services</h2>
        <ul>
          <li>
            <strong>IoT Strategy and Consulting:</strong> Determine IoT opportunities, assess infrastructure, and define adoption roadmap.
          </li>
          <li>
            <strong>IoT Application Development:</strong> Mobile/web apps, smart device integration, predictive analytics.
          </li>
          <li>
            <strong>IoT Device Management:</strong> Secure onboarding, remote monitoring, and proactive maintenance.
          </li>
          <li>
            <strong>IoT Analytics and Data Insights:</strong> Real-time dashboards, predictive maintenance, behavioral insights.
          </li>
        </ul>

        <h2>Industry Applications</h2>
        <ul>
          <li>
            <strong>Smart Manufacturing:</strong> Automated line monitoring, predictive maintenance, energy management.
          </li>
          <li>
            <strong>Healthcare IoT:</strong> Remote patient monitoring, equipment tracking, real-time data analysis.
          </li>
          <li>
            <strong>Smart Cities:</strong> Traffic management, waste management, environmental monitoring.
          </li>
          <li>
            <strong>Agriculture IoT:</strong> Precision agriculture, smart irrigation, livestock tracking.
          </li>
        </ul>

        <h2>Why Choose LetNext Technologies</h2>
        <ul>
          <li>Industry Domain Expertise across manufacturing, healthcare, agriculture, logistics, and smart cities.</li>
          <li>Custom Solutions tailored to business needs.</li>
          <li>Security-first systems with scalable architecture.</li>
          <li>Proven Track Record delivering measurable efficiency and ROI.</li>
        </ul>

        <h2>Success Stories</h2>
        <ul>
          <li>
            <strong>Smart Factory:</strong> 30% less downtime and 20% more productivity.
          </li>
          <li>
            <strong>Healthcare IoT:</strong> Remote patient monitoring increased efficiency and care quality.
          </li>
          <li>
            <strong>Smart Agriculture:</strong> Auto-irrigation increased yield by 25%.
          </li>
        </ul>

        <h2>IoT Features</h2>
        <ul>
          <li>Seamless Connectivity</li>
          <li>Real-Time Data Access</li>
          <li>Predictive Analytics</li>
          <li>Secure Infrastructure</li>
          <li>Scalable Architecture</li>
        </ul>

        <h2>Our Implementation Process</h2>
        <ul>
          <li>Requirement Analysis</li>
          <li>Solution Design</li>
          <li>Implementation</li>
          <li>Monitoring & Optimization</li>
          <li>Maintenance & Support</li>
        </ul>

        <h2>Future of IoT</h2>
        <ul>
          <li>Edge Computing for low latency</li>
          <li>AI & Machine Learning Integration</li>
          <li>5G Connectivity for real-time apps</li>
          <li>Sustainability & energy monitoring</li>
        </ul>

        <h2>Get Started with LetNext Technologies</h2>
        <p>
          Elevate your business with LetNext Technologies. Our team provides intelligent, scalable, and productive IoT solutions. Reach out to us today and bring your vision to life.
        </p>
      </section>

      {/* Footer */}
     <Whatapp/>
     <Chatbot/>
    </div>
  );
}
