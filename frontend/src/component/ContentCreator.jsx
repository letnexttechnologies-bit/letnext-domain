import { useEffect, useState } from "react";
import "./WebDesigner.css";
import Footer from "./Footer";
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";

export default function SocialMedia() {
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

        <h2 className="webdesigner-title">Social Media Handling Portfolio</h2>
        <p className="webdesigner-desc">
          Explore our recent Social Media Handling works that merge innovation,
          design, and technology to create seamless digital experiences.
        </p>

        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/social.jpg")}
          >
            <img src="/social.jpg" alt="Project 1" />
            <h3>LetNext Technologies</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/social2.jpg")}
          >
            <img src="/social2.jpg" alt="Project 2" />
            <h3>Pozhilarts</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/social3.jpg")}
          >
            <img src="/social3.jpg" alt="Project 3" />
            <h3>Thoorika Boutique</h3>
          </div>
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
        <h2>Social Media Handling Services by Letnext Technologies</h2>
        <p>
          Social media is essential for companies to reach their audience, establish brand awareness, and create measurable outcomes. At Letnext Technologies, we provide expert social media handling services for platforms like Facebook, Instagram, LinkedIn, Twitter, and more.
        </p>
        <p>
          As an IT company in Erode, we help businesses maintain a consistent and effective social media presence, from content creation to audience engagement.
        </p>

        <h2>Why Social Media Handling is Important</h2>
        <p>
          Social media is no longer optional. With over 4.9 billion users in 2025, it offers a vast opportunity to engage and convert potential customers. We ensure your social media efforts are data-driven and aligned with your brand’s goals.
        </p>

        <h2>Our Approach</h2>
        <ol>
          <li>
            <strong>Strategy Development:</strong> We craft brand-specific strategies based on your goals, target market, and niche trends.
          </li>
          <li>
            <strong>Content Creation and Curation:</strong> Eye-catching graphics, engaging posts, and optimized content for SEO.
          </li>
          <li>
            <strong>Platform Specialization:</strong> Facebook, Instagram, LinkedIn, Twitter/X, YouTube—tailored to each platform’s audience and format.
          </li>
          <li>
            <strong>Data-Driven Campaigns:</strong> Analytics, reporting, and optimization to maximize ROI.
          </li>
          <li>
            <strong>Audience Engagement:</strong> Interaction through comments, messages, contests, and polls.
          </li>
          <li>
            <strong>Paid Social Campaigns:</strong> Targeted ads, retargeting campaigns, and performance optimization.
          </li>
        </ol>

        <h2>Real-World Results</h2>
        <p>
          A local IT business improved LinkedIn profile views by 120% and lead inquiries by 85% in six months using our services. A startup increased social media followers by 300% in six months through campaigns and influencer partnerships.
        </p>

        <h2>Social Media Crisis Management</h2>
        <p>
          We monitor mentions, develop response strategies, and coordinate with PR teams to safeguard your brand reputation.
        </p>

        <h2>Lead Generation</h2>
        <p>
          Our targeted campaigns, optimized CTAs, and lead magnets convert followers into paying clients. A tech client experienced a 50% increase in qualified leads.
        </p>

        <h2>Why Choose Letnext Technologies</h2>
        <ul>
          <li>Experienced Team with creativity and technical expertise</li>
          <li>Customized Solutions aligned with business goals</li>
          <li>Proven Track Record with measurable results</li>
          <li>Comprehensive Services including content creation, analytics, and paid ads</li>
        </ul>

        <h2>Getting Started</h2>
        <p>
          Contact Letnext Technologies to discuss your social media strategy, discover tailored solutions, and elevate your brand’s online presence.
        </p>
      </section>
<Whatapp/>
<Chatbot/>
      
    </div>
  );
}
