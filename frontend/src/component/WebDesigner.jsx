import { useEffect, useState } from "react";
import "./WebDesigner.css";
// import Footer from "./Footer";
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
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">Web Development Portfolio</h2>
        <p className="webdesigner-desc">
          Explore our recent Web development works that merge innovation,
          design, and technology to create seamless digital experiences.
        </p>

        {/* ===== Project Gallery ===== */}
        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web2.png", "/web3.png", "/web1.png"])
            }
          >
            <img src="/web2.png" alt="Project 1" />
            <h3>G-shop</h3>
          </div>

          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web4.png", "/web5.png", "/web6.png"])
            }
          >
            <img src="/web4.png" alt="Project 2" />
            <h3>E-commerce</h3>
          </div>

          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web7.png", "/web8.png", "/web9.png"])
            }
          >
            <img src="/web7.png" alt="Project 3" />
            <h3>Shoes Website</h3>
          </div>

          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web10.png", "/web11.png", "/web12.png"])
            }
          >
            <img src="/web10.png" alt="Project 4" />
            <h3>Cosmetics </h3>
          </div>

          <div
            className="screenshot-card"
            onClick={() =>
              openGallery(["/web13.png", "/web14.png", "/web15.png"])
            }
          >
            <img src="/web13.png" alt="Project 5" />
            <h3>Dressing</h3>
          </div>
        </div>
      </section>

      {/* ===== Fullscreen Gallery ===== */}
      {galleryImages.length > 0 && (
        <div className="fullscreen-viewer active" onClick={closeGallery}>
          <span className="close-btn">&times;</span>

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

          <img src={galleryImages[currentIndex]} alt="Fullscreen" />

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

      {/* ===== Web Development Details Section ===== */}
      <section className="webdev-content">
        <h2>Web Development Solutions by Letnext Technologies</h2>
        <p>
          At Letnext Technologies, a reputable IT company in Erode, we are
          experts at providing premium web development solutions that
          revolutionize your presence on the web. In today’s digital age, it’s
          essential to have a modern, user-friendly website to grow your
          business. Our focus is on building websites that are both visually
          appealing and high-performing.
        </p>

        <p>
          Our developers use the latest technologies and best practices to
          design custom websites suited to your needs — whether you’re a startup
          or a large business. As a top-notch IT company in Erode, we ensure
          each project represents your unique brand and values.
        </p>

        <h2>Why Web Development is Important for Your Business</h2>
        <p>
          With over 80% of customers researching online before making a
          purchase, a strong online presence directly impacts revenue. A
          well-designed website boosts credibility, trust, and engagement. Our
          team at Letnext Technologies builds websites that convert visitors
          into loyal customers.
        </p>

        <h2>Our Web Development Process</h2>
        <p>
          We follow a structured process for maximum efficiency and client
          satisfaction:
        </p>
        <ul>
          <li>Requirement Analysis</li>
          <li>Planning & Strategy</li>
          <li>Design & Prototyping</li>
          <li>Development & Coding</li>
          <li>Testing & Quality Assurance</li>
          <li>Launch & Deployment</li>
        </ul>

        <h2>Types of Websites We Develop</h2>
        <p>We build all kinds of websites for businesses of every size:</p>
        <ul>
          <li>Corporate Websites</li>
          <li>E-commerce Sites</li>
          <li>Portfolio Sites</li>
          <li>Blogs & Content Sites</li>
          <li>Landing Pages</li>
        </ul>

        <h2>Front-End & Back-End Development</h2>
        <p>
          We specialize in seamless front-end interfaces and powerful back-end
          systems using technologies like React, Node.js, PHP, and Laravel.
        </p>

        <h2>Web Technologies We Utilize</h2>
        <p>
          Our stack includes HTML5, CSS3, JavaScript, React, Angular, PHP,
          Python, and databases like MySQL and MongoDB — ensuring your website
          is future-ready and high-performing.
        </p>

        <h2>SEO-Friendly Web Development</h2>
        <p>
          We integrate SEO best practices such as optimized page structure,
          schema markup, meta tags, and fast loading times to improve visibility
          and rankings.
        </p>

        <h2>Custom Web Solutions</h2>
        <p>
          Every business is unique. We provide custom web applications, API
          integrations, personalized user experiences, and ongoing maintenance
          tailored to your goals.
        </p>

        <h2>Importance of Responsive Design</h2>
        <p>
          Since over 70% of users browse via mobile devices, our websites are
          100% responsive — offering great experiences on every screen size.
        </p>

        <h2>Security & Performance</h2>
        <p>
          We implement SSL encryption, caching, image optimization, and regular
          backups to ensure your website is secure, fast, and reliable.
        </p>

        <h2>Real-World Impact</h2>
        <p>
          Our clients have achieved measurable results — from a 60% increase in
          leads to 70% more online sales after implementing our solutions.
        </p>

        <h2>Why Choose Letnext Technologies</h2>
        <p>
          We’re trusted for our proven expertise, client-centric approach,
          strong portfolio, and affordable pricing — making us the go-to IT
          company in Erode for web development.
        </p>

        <h2>Get Started with Letnext Technologies</h2>
        <p>
          Ready to elevate your online presence? Contact Letnext Technologies
          today — we’ll help you create a website that not only looks stunning
          but drives real business results.
        </p>
      </section>
      <Whatapp/>
<Chatbot/>
      {/* <Footer /> */}
    </div>
  );
}
