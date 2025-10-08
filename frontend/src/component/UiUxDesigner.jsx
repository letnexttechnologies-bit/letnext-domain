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

  // State for fullscreen image
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Open fullscreen
  const openFullscreen = (src) => setFullscreenImage(src);

  // Close fullscreen
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <div className="webdesigner-wrapper">
      {/* Hero Section */}
      <section className="webdesigner-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <h2 className="webdesigner-title">UI/UX Design Portfolio</h2>
        <p className="webdesigner-desc">
         Explore our recent UI/UX Design works that merge innovation,
          design, and technology to create seamless digital experiences.
        </p>

        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/uiuxl1.jpg")}
          >
            <img src="/uiuxl1.jpg" alt="Project 1" />
            <h3>Fresh Juice</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/uiuxl2.jpg")}
          >
            <img src="/uiuxl2.jpg" alt="Project 2" />
            <h3>Cycle</h3>
          </div>
          {/* <div
            className="screenshot-card"
            onClick={() => openFullscreen("/uiuxl3.jpg")}
          >
            <img src="/uiuxl3.jpg" alt="Project 3" />
            <h3>Project Three</h3>
          </div> */}
        </div>
      </section>

      {/* Fullscreen Viewer */}
      {fullscreenImage && (
        <div className="fullscreen-viewer active" onClick={closeFullscreen}>
          <span className="close-btn">&times;</span>
          <img src={fullscreenImage} alt="Fullscreen" />
        </div>
      )}

      {/* Services Content */}
      <section className="webdev-content">
        <h2>UI/UX Design Services by Letnext Technologies</h2>
        <p>
          At Letnext Technologies, we're an IT company in Erode that develops user-focused UI/UX designs that redefine digital experiences. Design is not just about beauty—it’s about making every interaction intuitive, engaging, and meaningful.
        </p>
        <p>
          Our expert UI/UX design team marries creativity with research-based solutions to provide interfaces that captivate users. As a reliable IT company in Erode, we focus on developing visually pleasing, functionally sound, and brand-synched digital products.
        </p>

        <h2>Why UI/UX Design Matters</h2>
        <p>
          A well-designed UI/UX can boost conversion rates by up to 200% and increases customer satisfaction and loyalty. At Letnext Technologies, we ensure each design decision is informed by user behavior, business objectives, and industry best practices.
        </p>
        <ul>
          <li>Increased user engagement and retention</li>
          <li>Lower bounce rates and easier usability</li>
          <li>Increased digital product conversion rates</li>
          <li>Improved brand credibility and trust</li>
          <li>Increased accessibility on various devices and platforms</li>
        </ul>
        <p>
          For example, we redesigned an app interface for a local e-commerce client and saw repeat purchases increase by 45% within three months.
        </p>

        <h2>Our UI/UX Design Process</h2>
        <ol>
          <li><strong>Research & Discovery:</strong> Learn about users, trends, and competition via interviews, surveys, and analytics.</li>
          <li><strong>Wireframing & Prototyping:</strong> Create interactive wireframes and prototypes to visualize layout and functionality.</li>
          <li><strong>Visual Design:</strong> Build visually appealing interfaces that reflect the brand personality.</li>
          <li><strong>User Testing:</strong> Conduct usability testing to refine and iterate designs.</li>
          <li><strong>Handoff & Collaboration:</strong> Provide design documentation and work with developers to implement the UI/UX vision accurately.</li>
        </ol>

        <h2>Key UI/UX Design Services</h2>
        <ul>
          <li>Mobile App UI/UX Design for iOS & Android</li>
          <li>Web UI/UX Design with intuitive navigation & responsive layouts</li>
          <li>User Research & Analysis through surveys, interviews, and usability tests</li>
          <li>Prototyping & Wireframing for initial feedback and iteration</li>
          <li>Visual Design & Branding for cohesive, engaging digital experiences</li>
          <li>UX Audits & Optimization to enhance performance and usability</li>
        </ul>

        <h2>Mobile App UI/UX Design</h2>
        <p>
          Our mobile app UI/UX designs emphasize simplicity, usability, and engagement. Features include intuitive navigation, interactive elements, consistency across screens, and responsive layouts. For a fintech client, redesigning onboarding increased downloads by 35%.
        </p>

        <h2>Web UI/UX Design</h2>
        <p>
          We craft compelling web experiences focusing on clear information architecture, engaging visuals, accessibility, and conversion-oriented design. One corporate client saw a 50% boost in form submissions after our redesign.
        </p>

        <h2>User-Centered Design Approach</h2>
        <p>
          Our design process prioritizes users: empathy to identify needs, feedback loops for iterative improvements, accessibility for all users, and efficiency for seamless interactions.
        </p>

        <h2>Prototyping & Wireframing</h2>
        <p>
          Wireframes and prototypes help visualize layouts, detect usability issues early, and gather stakeholder feedback, reducing development time and cost.
        </p>

        <h2>Visual Design & Branding</h2>
        <p>
          Visual design communicates brand identity through colors, typography, icons, and micro-interactions. A lifestyle e-commerce client saw a 40% increase in session length after our redesign.
        </p>

        <h2>UX Audits & Optimization</h2>
        <p>
          We perform ongoing UX audits, analyzing behavior, assessing navigation and content, and suggesting actionable improvements. A travel website improved booking conversions by 30% in two months.
        </p>

        <h2>Tools & Technologies</h2>
        <p>
          Adobe XD, Figma, Sketch, InVision, Marvel, Axure, Proto.io, Hotjar, UserTesting, Lookback, Zeplin, Jira, Trello.
        </p>

        <h2>Real-World Impact</h2>
        <p>
          Our solutions improve engagement, conversions, brand perception, and workflow efficiency. An ed-tech platform saw a 55% increase in student registrations after our UI/UX improvements.
        </p>

        <h2>Why Choose Letnext Technologies</h2>
        <ul>
          <li>Expert design team with industry experience</li>
          <li>User-centric approach using real insights</li>
          <li>Proven track record of measurable results</li>
          <li>Modern tools and technologies</li>
          <li>End-to-end support from concept to launch</li>
        </ul>

        <h2>Get Started</h2>
        <p>
          Join forces with Letnext Technologies, a leading IT company in Erode, to build user interfaces that amaze and captivate. Discuss your project, discover tailored solutions, and create digital experiences that deliver measurable business value.
        </p>
      </section>

     <Whatapp/>
     <Chatbot/>
    </div>
  );
}
