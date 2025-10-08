import { useEffect, useState } from "react";
import "./WebDesigner.css";
import Footer from "./Footer";
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";

export default function GraphicDesigner() {
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
      {/* ===== Hero Section ===== */}
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">Graphic Design Portfolio</h2>
        <p className="webdesigner-desc">
          Here are some of our creative and professional Graphic Design works:
        </p>

        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/gd1.jpg")}
          >
            <img src="/gd1.jpg" alt="Graphic Project 1" />
            <h3>Logo & Branding</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/gd2.jpg")}
          >
            <img src="/gd2.jpg" alt="Graphic Project 2" />
            <h3>Social Media Design</h3>
          </div>
        </div>
      </section>

      {/* ===== Fullscreen Viewer ===== */}
      {fullscreenImage && (
        <div className="fullscreen-viewer active" onClick={closeFullscreen}>
          <span className="close-btn">&times;</span>
          <img src={fullscreenImage} alt="Fullscreen" />
        </div>
      )}

      {/* ===== Detailed Company Content ===== */}
      <section className="webdev-content">
        <h2>Graphic Design Services by Letnext Technologies</h2>
        <p>
          Here at <strong>Letnext Technologies</strong>, a reliable IT company
          in Erode, we know that impressions are everything. A properly designed
          solution can convey your brand's message, capture your audience's
          attention, and help spur business growth. Our graphic design services
          blend creativity, strategy, and technology to create visual solutions
          that leave a lasting impression.
        </p>

        <p>
          From brochures and logos to digital banners and social media posts, we
          assist businesses in creating a harmonious and professional brand
          image. As a top IT company in Erode, our graphic designers collaborate
          with clients to identify their objectives and interpret ideas into
          aesthetically appealing designs that connect with their audience.
        </p>

        <h2>Why Graphic Design is Essential for Your Business</h2>
        <p>
          Great graphic design is not just about looks — it's about effective
          communication. A solid visual identity sets your company apart in a
          crowded marketplace. According to Adobe, consistent branding can drive
          up to 23% more revenue. At Letnext Technologies, we create visuals
          that enhance engagement and strengthen brand identity.
        </p>

        <h2>Our Graphic Design Process</h2>
        <ul>
          <li>Understanding Your Brand and Target Audience</li>
          <li>Concept Development and Creative Ideation</li>
          <li>Design Execution with Industry Tools</li>
          <li>Client Feedback and Iteration</li>
          <li>Final Delivery — print-ready and digital formats</li>
        </ul>

        <h2>Graphic Design Services We Offer</h2>
        <ul>
          <li>Logo & Branding Design</li>
          <li>Print Design (brochures, flyers, posters)</li>
          <li>Digital Design (banners, social media graphics)</li>
          <li>UI/UX Design for web & apps</li>
          <li>Packaging Design</li>
        </ul>

        <h2>Logo & Branding Design</h2>
        <p>
          A professional logo forms the foundation of a strong brand identity.
          We craft unique, scalable, and memorable logos that represent your
          business values. Our branding services include color palettes,
          typography, and brand guidelines to ensure consistency.
        </p>

        <h2>Print Design Solutions</h2>
        <p>
          Print materials are still essential for marketing. We create brochures,
          business cards, catalogs, and banners that attract attention and
          communicate professionalism.
        </p>

        <h2>Digital & Social Media Design</h2>
        <p>
          The digital space demands bold, creative visuals. We design social
          media graphics, web banners, and ad creatives that boost engagement
          and brand recognition.
        </p>

        <h2>UI/UX Design</h2>
        <p>
          Our UI/UX design focuses on ease of use and user delight. We design
          interfaces that improve navigation, retention, and conversions.
        </p>

        <h2>Packaging Design</h2>
        <p>
          Packaging is your product’s first impression. We create visually
          appealing, functional, and brand-aligned packaging for retail and
          digital promotions.
        </p>

        <h2>Why Choose Letnext Technologies</h2>
        <ul>
          <li>Creative and Experienced Designers</li>
          <li>Client-Centric and Collaborative Process</li>
          <li>Use of Latest Design Tools (Adobe, Corel, Figma)</li>
          <li>Proven Track Record with Businesses & Startups</li>
          <li>High-Quality Designs at Competitive Pricing</li>
        </ul>

        <h2>Real-World Impact</h2>
        <p>
          Our clients have achieved measurable growth through our designs — from
          45% higher customer engagement to improved brand recall and sales
          growth. Whether it’s digital media, packaging, or corporate identity,
          our designs make an impact.
        </p>

        <h2>Our Design Tools & Technologies</h2>
        <ul>
          <li>Adobe Creative Suite (Photoshop, Illustrator, InDesign)</li>
          <li>CorelDRAW for vector design</li>
          <li>Figma & Sketch for UI/UX</li>
          <li>Canva Pro for rapid design</li>
          <li>3D & Motion Tools — Blender, Cinema 4D</li>
        </ul>

        <h2>Commitment to Quality & Innovation</h2>
        <p>
          Every project undergoes detailed review for visual impact, usability,
          and brand alignment. We ensure on-time delivery and lasting business
          value through creativity and innovation.
        </p>

        <h2>Partner with Letnext Technologies</h2>
        <p>
          Ready to elevate your brand with world-class design? Partner with{" "}
          <strong>Letnext Technologies</strong>, a leading IT company in Erode,
          and let’s bring your vision to life. Reach out today to discuss your
          design goals and discover how our creative solutions can transform
          your business.
        </p>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
      <Whatapp/>
      <Chatbot/>

    </div>
  );
}
