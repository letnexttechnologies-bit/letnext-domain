import { useEffect, useState } from "react";
import "./WebDesigner.css";
import Footer from "./Footer";
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";

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
      {/* Hero Section with Video Background */}
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">Embedded Portfolio</h2>
        <p className="webdesigner-desc">
          Explore our recent Embedded works that merge innovation,
          design, and technology to create seamless digital experiences.
        </p>

        {/* Screenshot Grid */}
        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/emb1.png", "/emb2.png", "/emb3.png"])
            }
          >
            <img src="/emb1.png" alt="Project 1" />
            <h3>Sample Embedded Working</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/emb4.png", "/emb5.png", "/emb6.png"])
            }
          >
            <img src="/emb4.png" alt="Project 2" />
            <h3>Sample Embedded Working</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/emb7.png", "/emb8.png", "/emb9.png"])
            }
          >
            <img src="/emb7.png" alt="Project 3" />
            <h3>Sample Embedded Working</h3>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery */}
      {galleryImages.length > 0 && (
        <div className="fullscreen-viewer active" onClick={closeGallery}>
          <span className="close-btn">&times;</span>

          <button onClick={prevImage} style={prevNextButtonStyleLeft}>
            &#10094;
          </button>

          <img src={galleryImages[currentIndex]} alt="Fullscreen" />

          <button onClick={nextImage} style={prevNextButtonStyleRight}>
            &#10095;
          </button>
        </div>
      )}

      {/* App Development Content Section */}
      <section className="webdev-content">
        <h2>Transform Your Business with Expert App Development Services</h2>
        <p>
          In the fast-paced digital era of today, a mobile application is a
          must-have for any business looking to expand and remain competitive.
          Not only does an effective app boost customer interaction but also
          introduces new income sources and optimizes business operations. At
          Letnext Technologies, our expertise lies in providing innovative app
          solutions that cater to the specific requirements of businesses. As a
          leading IT company in erode, we combine technological expertise with
          strategic insights to create applications that drive results.
        </p>
        <p>
          From startups seeking rapid market entry to established enterprises
          aiming to modernize their digital presence, our team of skilled app
          developers ensures your vision is transformed into a functional,
          user-friendly, and scalable mobile application. Our approach
          prioritizes both design and functionality, creating seamless
          experiences that keep users coming back.
        </p>

        <h2>Why Your Business Needs a Mobile App</h2>
        <h3>Increase Customer Engagement</h3>
        <p>
          Mobile apps offer an instant communication avenue with your audience.
          With push notifications, targeted promotions, and in-app messaging,
          enterprises can address their customers. Users spend 70% more time on
          mobile apps compared to websites, highlighting the significance of
          mobile presence. Partnering with a reliable IT company in erode ensures
          timely updates, customized offers, and high-quality service.
        </p>
        <h3>Drive Revenue Growth</h3>
        <p>
          Mobile applications provide various ways of monetization, such as
          subscription, in-app purchase, and advertisement. At Letnext
          Technologies IT company in erode, we assist companies in executing
          monetization strategies aligned with objectives, ensuring apps drive
          measurable revenue.
        </p>

        <h2>Our App Development Services</h2>
        <ul>
          <li>
            <strong>iOS App Development:</strong> Fast, elegant apps for Apple
            devices.
          </li>
          <li>
            <strong>Android App Development:</strong> Secure and scalable Android
            applications.
          </li>
          <li>
            <strong>Cross-Platform Development:</strong> Applications that work
            perfectly on multiple platforms.
          </li>
        </ul>

        <h2>UI/UX Design That Engages</h2>
        <ul>
          <li>
            <strong>Wireframing & Prototyping:</strong> Plan your app visually
            before development starts.
          </li>
          <li>
            <strong>Interactive Designs:</strong> Make users interact with
            intuitive and responsive interfaces.
          </li>
          <li>
            <strong>User-Centered Approach:</strong> Prioritize fixing user pain
            areas for maximum satisfaction.
          </li>
        </ul>

        <h2>Real-World Success Stories</h2>
        <h3>Retail Mobile App Case Study</h3>
        <p>
          A local retail customer came to us seeking increased customer
          interaction. We created a cross-platform application with personalized
          offers, loyalty schemes, and push alerts. In six months, repeat
          purchases increased by 40% and app downloads by 35%.
        </p>
        <h3>Healthcare App Case Study</h3>
        <p>
          A medical startup required a secure app to handle patient data and
          video consultations. We created a HIPAA-compliant application with
          appointment booking and telemedicine capabilities. After launch,
          patient compliance increased by 50%.
        </p>

        <h2>Key Features of Letnext Technologies' App Solutions</h2>
        <ul>
          <li>
            <strong>Security and Compliance:</strong> End-to-end encryption and
            secure payment portals.
          </li>
          <li>
            <strong>High Performance:</strong> Fast loading speeds, seamless
            transitions, minimal downtime.
          </li>
          <li>
            <strong>Analytics and Insights:</strong> Monitor user actions and
            optimize strategies for maximum ROI.
          </li>
        </ul>

        <h2>Our App Development Process</h2>
        <ol>
          <li>
            <strong>Discovery & Strategy:</strong> Consultations to determine
            objectives, audience, and project scope.
          </li>
          <li>
            <strong>Design & Prototyping:</strong> Wireframes and prototypes to
            visualize the app.
          </li>
          <li>
            <strong>Development & Integration:</strong> Latest frameworks with
            API/third-party integration.
          </li>
          <li>
            <strong>Testing & Quality Assurance:</strong> Remove bugs and ensure
            seamless experience.
          </li>
          <li>
            <strong>Deployment & Continued Support:</strong> Continuous updates
            and optimization post-launch.
          </li>
        </ol>

        <h2>Advantages of Selecting Letnext Technologies</h2>
        <ul>
          <li>Custom Solutions tailored to goals and market.</li>
          <li>Skilled Team of developers, designers, and managers.</li>
          <li>Affordable Development ensuring maximum ROI.</li>
          <li>Timely Delivery with transparent milestones.</li>
          <li>Post-Launch Support for sustained success.</li>
        </ul>

        <h2>Emerging Trends in App Development</h2>
        <ul>
          <li>Artificial Intelligence (AI) for predictive analytics.</li>
          <li>AR & VR for immersive user engagement.</li>
          <li>IoT-integrated apps for smart workflows.</li>
          <li>Progressive Web Apps (PWAs) for browser-based app experiences.</li>
        </ul>

        <h2>Client Testimonials</h2>
        <p>
          "Letnext Technologies totally revolutionized our mobile strategy. Our
          app usage saw a 60% rise in three months. Their IT company in erode
          cannot be matched." – Ramesh Kumar, Retail Entrepreneur
        </p>
        <p>
          "Right from conceptualization to launch, Letnext Technologies showed
          professionalism, innovation, and technical prowess. Our new app greatly
          optimized our business processes." – Priya Nair, Healthcare Startup
          Founder
        </p>

        <h2>Why Investing in a Mobile App is Critical</h2>
        <ul>
          <li>Remain Competitive</li>
          <li>Increase Operational Efficiency</li>
          <li>Boost Brand Loyalty</li>
          <li>Tap Revenue Streams</li>
        </ul>

        <h2>Take the Next Step with Letnext Technologies</h2>
        <p>
          Ready to elevate your business with a state-of-the-art mobile app? Join
          hands with Letnext Technologies, a reliable IT company in erode, to turn
          your concepts into functional, interactive, and monetizing apps. Reach
          out today to arrange a consultation.
        </p>
      </section>

      {/* Footer */}
      <Whatapp/>
      <Chatbot/>
    </div>
  );
}

// Styles for Prev/Next buttons to avoid repetition
const prevNextButtonStyleLeft = {
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
};

const prevNextButtonStyleRight = {
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
};
