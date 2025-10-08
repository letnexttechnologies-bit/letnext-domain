import { useEffect, useState } from "react";
import "./WebDesigner.css";
import Footer from "./Footer";
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";

export default function SoftwareTesting() {
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
      {/* Hero Section */}
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">Software Testing Portfolio</h2>
        <p className="webdesigner-desc">
         Explore our recent Software Testing works that merge innovation,
          design, and technology to create seamless digital experiences.
        </p>

        <div className="screenshot-grid">
          {/* Project Card */}
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/st1.png", "/st2.png", "/st3.png"])
            }
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <img
              src="/st1.png"
              alt="Project 1"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
            <h3 style={{ marginTop: "10px", fontSize: "20px", fontWeight: "600" }}>
              Automation Software Testing
            </h3>

            <video
              src="https://ik.imagekit.io/3zau674ihy/at1.mp4?updatedAt=1757480460041"
              controls
              loop
              muted
              playsInline
              style={{
                width: "100%",
                maxWidth: "1000px",
                height: "auto",
                marginTop: "15px",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
              }}
            />
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

      {/* Services Content */}
      <section className="webdev-content">
        <h2>Software Testing Services by Letnext Technologies</h2>
        <p>
At Letnext Technologies, an IT company in Erode, we offer extensive software testing services that make your digital products work perfectly. With the current competitive digital market, providing software with fewer defects and high reliability is key to customer satisfaction and business success. Our testing options are centered on quality, efficiency, and security to enable businesses to gain effortless performance across platforms.
Our professional team of testers and quality assurance specialists employs the latest testing methods and equipment to detect and correct problems before your software is presented to the end-user. As a reliable IT company in Erode, we enable companies to save time, decrease costs, and improve user experience through rigorous testing processes.
        </p>

        <h2>Why Software Testing Matters</h2>
        <ul>
          <li>Prevent and fix bugs early to lower development costs</li>
          <li>Improve software performance and stability</li>
          <li>Increase security and compliance with standards</li>
          <li>Enhance user experience and satisfaction</li>
          <li>Support continuous integration and deployment</li>
        </ul>

        <h2>Our Testing Process</h2>
        <ol>
          <li><strong>Requirement Analysis:</strong> Gather business objectives and software requirements.</li>
          <li><strong>Test Planning:</strong> Scope, methodology, resources, schedules, and risk plans.</li>
          <li><strong>Test Case Design:</strong> Detailed cases for functional and non-functional features.</li>
          <li><strong>Test Execution:</strong> Manual and automated testing to find bugs and performance issues.</li>
          <li><strong>Defect Reporting & Tracking:</strong> Document and manage defects for quick resolution.</li>
          <li><strong>Retesting & Regression Testing:</strong> Verify fixes and prevent new issues.</li>
          <li><strong>Test Closure & Reporting:</strong> Deliver detailed metrics, insights, and recommendations.</li>
        </ol>

        <h2>Types of Software Testing Services</h2>
        <ul>
          <li>Functional Testing</li>
          <li>Performance Testing</li>
          <li>Security Testing</li>
          <li>Usability Testing</li>
          <li>Automation Testing</li>
          <li>Regression Testing</li>
          <li>Mobile App Testing</li>
        </ul>

        <h2>Manual vs Automated Testing</h2>
        <p>
          Manual testing is ideal for exploratory, usability, and complex workflow testing. Automated testing is suited for repetitive tasks like regression and performance testing, increasing efficiency and coverage.
        </p>

        <h2>Performance & Security Testing</h2>
        <p>
          We ensure your software performs optimally under load and is protected against vulnerabilities using advanced tools like JMeter, LoadRunner, OWASP ZAP, and Burp Suite.
        </p>

        <h2>Tools & Technologies</h2>
        <ul>
          <li>Automation: Selenium, Appium, TestComplete, JUnit, TestNG</li>
          <li>Performance: LoadRunner, JMeter, Gatling</li>
          <li>Security: OWASP ZAP, Burp Suite</li>
          <li>Collaboration: Jira, Trello, Zephyr, TestRail</li>
        </ul>

        <h2>Why Choose Letnext Technologies</h2>
        <ul>
          <li>Expert QA Team</li>
          <li>Comprehensive Testing Services</li>
          <li>Proven Track Record</li>
          <li>Cutting-edge Tools & Techniques</li>
          <li>Client-Focused Methodology</li>
        </ul>

        <h2>Get Started</h2>
        <p>
          Collaborate with Letnext Technologies to ensure your software is secure, stable, and deployment-ready. Contact us today to discuss your software testing needs and elevate your digital products.
        </p>
      </section>

     <Whatapp/>
     <Chatbot/>
    </div>
  );
}
