import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Chatbot from "./Chatbot"; // ✅ chatbot component
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Whatapp from "./Whatapp";
import TeamSection from "./TeamSection";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaClock } from "react-icons/fa";


const services = [
  { name: "Web Development", path: "/webdesigner/web-development-company-in-erode" },
  { name: "App Development", path: "/appdeveloper/app-development-company-in-erode" },
  { name: "Graphic Design", path: "/graphicdesigner/graphic-design-company-in-erode" },
  { name: "UI/UX Design", path: "/uiuxdesigner/uiux-design-company-in-erode" },
  { name: "Digital Marketing", path: "/digitalmarketer/digital-marketing-company-in-erode" },
  { name: "Software Testing", path: "/testing/testing-company-in-erode" },
  { name: "Social Media Marketing", path: "/contentcreator/context-creator-company-in-erode" },
  { name: "SEO Specialist", path: "/seospecialist/seo-specialist-company-in-erode" },
  { name: "Photography", path: "/photographer/photograph-company-in-erode" },
  { name: "Videography", path: "/videographer/videograph-company-in-erode" },
  { name: "Social Media Handling", path: "/contentcreator/context-creator-company-in-erode" },
  { name: "Embedded", path: "/embbeded/embbeded-company-in-erode" },
  { name: "Internet Of Things", path: "/iot/iot-company-in-erode" },
];

function Home() {


  const [open, setOpen] = useState(false);

  const text = `As a premier website development company in Erode, Findway Digital is dedicated to delivering high-quality web solutions tailored to your business needs. Whether you're looking to enhance your online presence, improve user experience, boost product sales, or strengthen your brand visibility, our expert web design and development services are vital to achieving your goals..`;
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i === text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  // form handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name) return "Name is required";
    if (!/^\d{10}$/.test(form.phone)) return "Phone must be 10 digits";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Invalid email address";
    if (!form.message) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setMsg(error);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/contact", form, {
        headers: { "Content-Type": "application/json" },
      });
      setMsg("✅ Enquiry sent successfully!");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ Error sending enquiry:", err);
      setMsg("❌ Error sending enquiry");
    }

  };



  return (

    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img src="/companylogo.png" alt="Company Logo" />
            {/* <img src="/companylogo.png" alt="Company Logo" /> */}
          </div>

          {/* Services Dropdown */}
          <div className="services">
            <button className="services-btn">Services ▾</button>
            <div className="dropdown-menu">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card"
                  onClick={() => navigate(service.path)}
                  style={{ cursor: "pointer" }}
                >
                  {service.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nav Right Links */}
        <ul className="nav-right">
          <li><a href="#home/web-design-company-in-erode">Home</a></li>
          <li><a href="#how/web-design-company-in-erode">How It Works</a></li>
          <li><a href="#portfolio/web-design-company-in-erode">Portfolio</a></li>
          <li><a href="#career/web-design-company-in-erode">Career</a></li>
          {/* <li><a href="#mission">Mission and Vision</a></li> */}
          <li><a href="#about/web-design-company-in-erode">About</a></li>
          <li><a href="#contact-web-design-company-in-erode">Contact</a></li>
          <li><a href="#ourteam/web-design-company-in-erode">Our Team</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home/web-design-company-in-erode" className="home">
        <video className="home-video" autoPlay loop muted playsInline>
          <source src="/all.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-overlay"></div>
        <div className="home-content">
          <h1 className="large">
            Professional Website Design and Development Company
          </h1>
          <div className="typewriter">
            <p>{displayedText}</p>
            <span className="cursor"></span>
          </div>

          {/* 🚀 New Button */}
          <button
            className="quote-btn"
            onClick={() =>
              document.querySelector("#contact-web-design-company-in-erode").scrollIntoView({ behavior: "smooth" })
            }
          >
            Get a Free Quote
          </button>
        </div>
      </section>


      {/* How It Works */}
      <section id="how/web-design-company-in-erode" className="section how-section">
        <h2>How It Works</h2>
        <div className="how-steps">
          <div className="step">
            <h3>Your Requirement</h3>
            <p>
              A Client Requirement is a concise overview that captures the
              essential needs, goals, and expectations a client has for a
              particular project, product, or service.
            </p>
          </div>
          <div className="step">
            <h3>Find What You Want</h3>
            <p>
              To help a client "find what you want," the most effective approach
              is to ensure the website is intuitive, well-organized, and speaks
              directly to their potential needs.
            </p>
          </div>
          <div className="step">
            <h3>Explore Our Place</h3>
            <p>217, Kulavikaradu, P VellalaPalayam, GobichettiPalayam, Erode-638476.</p>
          </div>
        </div>
      </section>
      {/* //////////portilio */}
      <Portfolio />

      {/* //////////////////////////career/////////////////////////////////////////////// */}
      {/* ✅ Career Section */}
      <section id="career/web-design-company-in-erode" className="section career-section">
        <h2>Career</h2>
        <p>
          We are always looking for passionate and talented individuals to join
          our team. Explore our career opportunities below:
        </p>

        <div className="career-carousel">
          {/* ⬅️ Left Arrow */}
          {/* <button
            className="arrow left-arrow"
            onClick={() => {
              const track = document.querySelector(".career-track");
              track.scrollBy({ left: -350, behavior: "smooth" });

              // Loop to the end when reaching start
              if (track.scrollLeft === 0) {
                track.scrollLeft = track.scrollWidth / 2;
              }
            }}
          >
            &#10094;
          </button> */}

          <div className="career-track">
            {/* ✅ Original Career Cards */}
            <div className="career-card">
              <img src="/fullstack.jpg" alt="Full Stack Developer" />
              <h3>Full Stack Developer</h3>
              <p>Building complete web solutions from frontend to backend.</p>
              <button className="career-btn" onClick={() => navigate("/fullstack/full-stack-company-in-erode")}>
                Click Here
              </button>
            </div>
            <div className="career-card">
              <img src="/seo1.jpg" alt="Digital Marketing" />
              <h3>Digital Marketing (SEO)</h3>
              <p>Optimizing brands for search engines and success.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/seo/seo-company-in-erode")} // ✅ Navigate to Seo.jsx
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/datascience.jpg" alt="Data Scientist" />
              <h3>Data Scientist</h3>
              <p>Solving problems with data, algorithms, and intuition.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/datascientist/data-scientist-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/cloud.jpg" alt="Cloud Engineer" />
              <h3>Cloud Engineer</h3>
              <p>Engineering the backbone of modern digital services.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/cloudengineer/cloud-engineer-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/ml.jpg" alt="ML Engineer" />
              <h3>Machine Learning Engineer</h3>
              <p>Turning data into predictive power through ML.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/mlengineer/ml-engineer-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/uiux1.jpg" alt="UI/UX Designer" />
              <h3>UI/UX Designer</h3>
              <p>Designing intuitive experiences that users love.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/uiux/uiux-design-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="https://ik.imagekit.io/3zau674ihy/mobile.jpg?updatedAt=1757481250842" alt="Mobile Developer" />
              <h3>Mobile App Developer</h3>
              <p>Developing fast, functional, and user-friendly apps.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/mobile/mobile-development-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/network.jpg" alt="Network Security" />
              <h3>Network & Security</h3>
              <p>Working with network protocols to ensure connectivity.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/network/network-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/embedded.jpg" alt="Embedded System" />
              <h3>Embedded System Full Guide</h3>
              <p>Developing real-time hardware-software smart solutions.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/embedded/embedded-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/blockchain.jpg" alt="Blockchain" />
              <h3>Blockchain Management</h3>
              <p>Managing blockchain projects for secure decentralized apps.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/blockchain/blockchain-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/excel.jpg" alt="Excel Expert" />
              <h3>Microsoft Excel - Beginner to Advance</h3>
              <p>Mastering Excel to automate tasks and analyze data.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/excel/excel-company-in-erode")}
              >
                Click Here
              </button>
            </div>


            {/* ✅ Duplicate Career Cards for Infinite Loop */}
            <div className="career-card">
              <img src="/fullstack.jpg" alt="Full Stack Developer" />
              <h3>Full Stack Developer</h3>
              <p>Building complete web solutions from frontend to backend.</p>
              <button className="career-btn" onClick={() => navigate("/fullstack/full-stack-company-in-erode")}>
                Click Here
              </button>
            </div>
            <div className="career-card">
              <img src="/seo1.jpg" alt="Digital Marketing" />
              <h3>Digital Marketing (SEO)</h3>
              <p>Optimizing brands for search engines and success.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/seo/seo-company-in-erode")} // ✅ Navigate to Seo.jsx
              >
                Click Here
              </button>
            </div>


            <div className="career-card">
              <img src="/datascience.jpg" alt="Data Scientist" />
              <h3>Data Scientist</h3>
              <p>Solving problems with data, algorithms, and intuition.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/datascientist/data-scientist-company-in-erode")}
              >
                Click Here
              </button>
            </div>


            <div className="career-card">
              <img src="/cloud.jpg" alt="Cloud Engineer" />
              <h3>Cloud Engineer</h3>
              <p>Engineering the backbone of modern digital services.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/cloudengineer/cloud-engineer-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/ml.jpg" alt="ML Engineer" />
              <h3>Machine Learning Engineer</h3>
              <p>Turning data into predictive power through ML.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/mlengineer/ml-engineer-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/uiux1.jpg" alt="UI/UX Designer" />
              <h3>UI/UX Designer</h3>
              <p>Designing intuitive experiences that users love.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/uiux/uiux-design-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/mobile.jpg" alt="Mobile Developer" />
              <h3>Mobile App Developer</h3>
              <p>Developing fast, functional, and user-friendly apps.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/mobile/mobile-development-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/network.jpg" alt="Network Security" />
              <h3>Network & Security</h3>
              <p>Working with network protocols to ensure connectivity.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/network/network-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/embedded.jpg" alt="Embedded System" />
              <h3>Embedded System Full Guide</h3>
              <p>Developing real-time hardware-software smart solutions.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/embedded/embedded-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/blockchain.jpg" alt="Blockchain" />
              <h3>Blockchain Management</h3>
              <p>Managing blockchain projects for secure decentralized apps.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/blockchain/blockchain-company-in-erode")}
              >
                Click Here
              </button>
            </div>

            <div className="career-card">
              <img src="/excel.jpg" alt="Excel Expert" />
              <h3>Microsoft Excel - Beginner to Advance</h3>
              <p>Mastering Excel to automate tasks and analyze data.</p>
              <button
                className="career-btn"
                onClick={() => navigate("/excel/excel-company-in-erode")}
              >
                Click Here
              </button>
            </div>

          </div>

          {/* ➡️ Right Arrow */}
          {/* <button
            className="arrow right-arrow"
            onClick={() => {
              const track = document.querySelector(".career-track");
              track.scrollBy({ left: 350, behavior: "smooth" });

              // Loop back when reaching end
              if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
                track.scrollLeft = track.scrollWidth / 2 - track.clientWidth;
              }
            }}
          >
            &#10095;
          </button> */}
        </div>
      </section>
      {/* ///////////////////////////////////////Mission////////////////////////////////////////////? */}

      {/* Mission & Vision Section */}
      <section id="mission/web-design-company-in-erode" className="mission-vision">
        <h2 className="section-title">Our Mission & Vision</h2>

        <div className="mv-container">
          {/* Mission */}
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To become a trusted technology and creative solutions partner empowering businesses and individuals with innovative digital experiences that inspire growth, creativity, and connection.
            </p>
          </div>

          {/* Vision */}
          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              Deliver cutting-edge websites and apps that combine functionality with creativity.

              Provide UI/UX and graphic design that enhances brand identity and user engagement.

              Empower businesses through digital marketing and SEO to reach the right audience.

              Capture and tell stories with photography and videography that inspire emotions.

              Build strong social media strategies that drive awareness, interaction, and growth.
            </p>
          </div>
        </div>
      </section>



      {/* About */}
      <section id="about/web-design-company-in-erode" className="section about-section">
        <h2>About Us</h2>

        {/* Row 1 */}
        <div className="about-row">
          <div className="about-image">
            <img src="/about1.jpg" alt="About 1" />
          </div>
          <div className="about-text">
            <p>
              At LetNext Technologies, we empower businesses to thrive in the digital era through cutting-edge IT services, software development, and digital marketing solutions*.

              Founded with the vision to bridge technology and business growth, we’ve built a reputation for delivering *innovative, reliable, and scalable solutions* tailored to each client’s unique needs. From custom software applications to data-driven marketing strategies, our team combines technical expertise with creative thinking to help organizations stay ahead in a rapidly evolving digital landscape.

            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="about-row reverse">
          <div className="about-text">
            <p>
              To simplify technology and make it work smarter for businesses enabling them to achieve growth, efficiency, and lasting impact.
              Innovation driving progress with forward-thinking solutions.
              Integrity building trust through transparency and commitment.
              Customer success  Putting clients at the center of everything we do.
              Collaboration  harnessing the power of teamwork for better outcomes.
              Excellence  delivering quality without compromise.

            </p>
          </div>
          <div className="about-image">
            <img src="/about2.jpg" alt="About 2" />
          </div>
        </div>
        <div className="about-row">
          <div className="about-image">
            <img src="/about3.jpg" alt="About 3" />
          </div>
          <div className="about-text">
            <p>
              Our vision is to create digital experiences that inspire and empower.
              We strive to turn ideas into reality through creativity and cutting-edge technology.
              Sustainability ensuring long-term solutions that benefit both business and community.
              Passion fueling every project with dedication and energy.
              Adaptability embracing change to stay ahead in a fast-evolving world.
              Responsibility taking ownership to deliver value with purpose.
            </p>
          </div>
        </div>

      </section>


      {/* ////////////////////////////////////////////contact////////////////////////////////////////////////////////////////////////// */}

      {/* Contact Section */}
      <section id="contact-web-design-company-in-erode" className="contact-section">
        <div className="contact-container">

          {/* Left Info with Map + Details */}
          <div className="contact-info">
            <h2>Contact Us For More Info</h2>
            <div className="map-container">
              <iframe
                title="LetNext Technologies Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.337372565509!2d77.7130152!3d11.3466261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x651a89dcc8075c43%3A0xff0910361915363f!2sLetNext%20Technologies!5e0!3m2!1sen!2sin!4v1692353492643!5m2!1sen!2sin"

                width="100%"
                height="250"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="info-block">
              <h3>For Business Enquiry :</h3>
              <p>
                <span className="icon"><FaPhoneAlt /></span>
                <a href="tel:+919940847940 ">+91 9940847940<br></br></a>
              </p>
              <p>
                <span className="icon"><FaPhoneAlt /></span>
                <a href="tel:+91 7708921550">+91 7708921550<br></br></a>
              </p>
              <p>
                <span className="icon"><FaPhoneAlt /></span>
                <a href="tel:+91637919825">+91 6379198255</a>
              </p>
              <p>
                <span className="icon"><FaEnvelope /></span>
                <a href="mailto:lnt@letnexttechnologies.com">lnt@letnexttechnologies.com</a>
              </p>
            </div>

            <div className="info-block">
              <h3>To Join Our Team :</h3>
              <p>
                <span className="icon"><FaPhoneAlt /></span>
                <a href="tel:+919043327940">+91 9043327940</a>
              </p>
              <p>
                <span className="icon"><FaEnvelope /></span>
                <a href="mailto:lnt@letnexttechnologies.com">lnt@letnexttechnologies.com</a>
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="contact-form">
            <h2>Get a Free Quote</h2>
            {msg && <p className="form-msg">{msg}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Enquiry</button>
            </form>
          </div>
        </div>
        {/* Meet Our CEO Section */}
        <section className="ceo-section">
          <div className="ceo-container">
            <h2 className="ceo-heading">Meet Our CEO</h2>
            <div className="ceo-divider"></div>

            <h3 className="ceo-name">Sabari K</h3>
            <p className="ceo-title">Chief Executive Officer & Founder</p>

            <blockquote className="ceo-quote">
              "At LetNext Technologies, our vision is to drive innovation with intelligence — building technology that empowers, inspires, and transforms lives."
            </blockquote>
          </div>

        </section>

      </section>

      {/* ✅ Chatbot floating bottom-right */}
      <TeamSection />
      <Chatbot />
      <Whatapp />
      <Footer />
    </div>
  );


}

export default Home;
