import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaClock } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {

  const services = [
    { name: "Web Development", path: "/webdesigner/web-development-company-in-erode" },
    { name: "App Development", path: "/appdeveloper/app-development-company-in-erode" },
    { name: "Graphic Design", path: "/graphicdesigner/graphic-design-company-in-erode" },
    { name: "UI/UX Design", path: "/uiuxdesigner/uiux-design-company-in-erode" },
    { name: "Software Testing", path: "/testing/testing-company-in-erode" },
    { name: "Digital Marketing", path: "/digitalmarketer/digital-marketing-company-in-erode" },
    { name: "Content Creator", path: "/contentcreator/context-creator-company-in-erode" },
    { name: "SEO Specialist", path: "/seospecialist/seo-specialist-company-in-erode" },
    { name: "Photography", path: "/photographer/photograph-company-in-erode" },
    { name: "Videography", path: "/videographer/videograph-company-in-erode" },
    { name: "Social Media Handling", path: "/contentcreator/context-creator-company-in-erode" },
    { name: "Embedded", path: "/embbeded/embbeded-company-in-erode" },
    { name: "Internet Of Things", path: "/iot/iot-company-in-erode" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left - Logo & Working Hours */}
        <div className="footer-left">
          <img src="/companylogo.png" alt="Company Logo" className="footer-logo" />
          <div className="working-hours">
            <p className="footer-title">Working Hours</p>
            <p><FaClock /> Mon - Sat</p>
            <p>9.00 AM - 6.00 PM</p>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
      <h3>Services</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <Link to={service.path}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home/web-design-company-in-erode">Home</a></li>
            <li><a href="#how/web-design-company-in-erode">How It Works</a></li>
            <li><a href="#portfolio/web-design-company-in-erode">Portfolio</a></li>
            <li><a href="#career/web-design-company-in-erode">Career</a></li>
            <li><a href="#about/web-design-company-in-erode">About</a></li>
            <li><a href="#contact-web-design-company-in-erode">Contact</a></li>
            <li><a href="#ourteam/web-design-company-in-erode">Our Team</a></li>

          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-col">
          <h3>For more details</h3>
          <p><FaMapMarkerAlt /> 217,Kulavikaradu,P.VellalaPalayam,Gobi<br />Erode, Tamil Nadu 638476</p>
          <p><FaPhoneAlt /> +91 9940847940</p>
          
          <p><FaEnvelope /> lnt@letnexttechnologies.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LetNext Technologies all rights reserved.</p>
        <div className="footer-links-bottom">
          <Link to="/terms">Terms of Use</Link> |{" "}
        <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61580107612289"><FaFacebookF /></a>
          <a href="https://www.instagram.com/letnext_technologies?igsh=MWF5MnZvN3pvbjF2" target="_blank" rel="noreferrer"><FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/letnexttechnologies1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
