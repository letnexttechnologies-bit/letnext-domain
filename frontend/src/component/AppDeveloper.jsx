import { useEffect, useState } from "react";
import "./WebDesigner.css"; // ✅ Reusing same CSS
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";


export default function AppDeveloper() {
  // Scroll to top on mount
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

  // Navigate images
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
      {/* ===== Hero Section ===== */}
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">Mobile App Development</h2>
        <p className="webdesigner-desc">
          Explore our recent app development works that merge innovation,
          design, and technology to create seamless digital experiences.
        </p>

        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery([
                "/app1.jpg",
                "/app2.jpg",
                "/app3.jpg",
                "/app4.jpg",
                "/app5.jpg",
              ])
            }
          >
            <img src="/app1.jpg" alt="App Project 1" />
            <h3>Transportation Website</h3>
          </div>
        </div>
      </section>

      {/* ===== Fullscreen Gallery ===== */}
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

          {/* Image */}
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
      <div className="webdev-content">
        <h2>Mobile Application Development Solutions by Letnext Technologies</h2>
        <p>
          At Letnext Technologies, a renowned IT company in Erode, we are experts
          in developing top-class mobile applications to promote business growth
          and increase user engagement. In this digital-first era, a strong
          mobile application is no longer merely a tool—it is a connection between
          your business and your audience. Whether you are a startup, small
          enterprise, or large enterprise, we offer personalized app development
          solutions that are dependable, scalable, and innovative.
        </p>

        <p>
          Being one of the top IT companies in Erode, we know how crucial it is
          to create apps that are fast, responsive, and full of features. Our
          developers, designers, and strategists work together to ensure that
          each app we develop meets your business objectives and delivers
          tangible results.
        </p>

        <h2>Why Mobile Apps Are Essential for Your Business</h2>
        <p>
          In the current competitive economy, mobile applications are key to
          customer interaction, loyalty, and revenue. Research indicates users
          spend over 90% of their mobile time in apps. Our mobile app solutions
          help your business tap into this immense potential.
        </p>
        <ul>
          <li>Increased Customer Engagement via Push Notifications</li>
          <li>Higher Brand Awareness & Loyalty</li>
          <li>Better Sales & Revenue through E-commerce Integration</li>
          <li>Data-Driven Insights to Improve Services</li>
        </ul>

        <h2>Our App Development Process</h2>
        <ul>
          <li>Requirement Analysis</li>
          <li>UI/UX Design & Prototyping</li>
          <li>App Development (Android / iOS / Cross-Platform)</li>
          <li>Testing & Quality Assurance</li>
          <li>Deployment & Post-launch Support</li>
        </ul>

        <h2>Types of Apps We Develop</h2>
        <ul>
          <li>Business & Enterprise Apps</li>
          <li>E-commerce Apps</li>
          <li>Healthcare & Educational Apps</li>
          <li>Social Networking & Lifestyle Apps</li>
        </ul>

        <h2>Front-End & Back-End Expertise</h2>
        <ul>
          <li>Frontend: React Native, Flutter</li>
          <li>Backend: Node.js, Express, Firebase</li>
          <li>Databases: MongoDB, MySQL, PostgreSQL</li>
        </ul>

        <h2>Technologies We Use</h2>
        <ul>
          <li>Native: Swift (iOS), Kotlin (Android)</li>
          <li>Cross-Platform: React Native, Flutter</li>
          <li>Cloud: AWS, Azure, Google Cloud</li>
        </ul>

        <h2>User-Centric Design</h2>
        <p>
          Every app we create focuses on user experience (UX). We ensure our apps
          are easy to navigate, visually appealing, and accessible to all users.
        </p>

        <h2>App Security & Performance</h2>
        <ul>
          <li>Data Encryption & Secure Logins</li>
          <li>Periodic Security Updates</li>
          <li>Optimized Performance with Caching & Load Balancing</li>
        </ul>

        <h2>App Maintenance & Support</h2>
        <p>
          We provide continuous app maintenance, bug fixes, updates, and new
          feature enhancements to ensure your app stays relevant and efficient.
        </p>

        <h2>Why Choose Letnext Technologies</h2>
        <ul>
          <li>Experienced Team of Developers</li>
          <li>Client-Focused & Transparent Process</li>
          <li>Proven Track Record Across Industries</li>
          <li>Latest Technology Stack</li>
          <li>Affordable & Scalable Solutions</li>
        </ul>

        <h2>Get Started with Letnext Technologies</h2>
        <p>
          Ready to revolutionize your business with a custom mobile app? Contact
          Letnext Technologies, your trusted IT company in Erode, to bring your
          vision to life. Let’s build an app that drives engagement, efficiency,
          and growth.
        </p>
      </div>

      {/* ===== Footer ===== */}
      <Whatapp/>
     <Chatbot/>

    </div>
  );
}
