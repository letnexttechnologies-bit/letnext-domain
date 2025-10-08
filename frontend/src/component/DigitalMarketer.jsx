import { useEffect, useState } from "react";
import "./WebDesigner.css"; // ✅ Reusing the same CSS
import Footer from "./Footer";
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";

export default function DigitalMarketing() {
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

        <h2 className="webdesigner-title">Digital Marketing Services</h2>
        <p className="webdesigner-desc">
          At Letnext Technologies, we deliver effective digital marketing strategies that boost your online presence and drive measurable results.
        </p>

        {/* Gallery Grid */}
        <div className="screenshot-grid">
          <div className="screenshot-card" onClick={() => openFullscreen("/dig1.jpg")}>
            <img src="/dig1.jpg" alt="Project 1" />
            <h3>Project One</h3>
          </div>
          <div className="screenshot-card" onClick={() => openFullscreen("/dig2.jpg")}>
            <img src="/dig2.jpg" alt="Project 2" />
            <h3>Project Two</h3>
          </div>
          <div className="screenshot-card" onClick={() => openFullscreen("/dig3.jpg")}>
            <img src="/dig3.jpg" alt="Project 3" />
            <h3>Project Three</h3>
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

      {/* ===== Content Section ===== */}
      <section className="webdev-content">
        <h2>Digital Marketing Services of Letnext Technologies</h2>
        <p>
          At Letnext Technologies, a top IT company in Erode, we offer effective digital marketing services that increase the online presence of businesses. In the digital-first era of today, companies require more than a website—they require an integrated strategy to attract, engage, and convert their desired audience. Our digital marketing solutions integrate creativity, analytics, and technology to produce measurable outcomes.
        </p>
        <p>
          Our experts in digital marketing collaborate with clients closely to gauge their business objectives, market environment, and user behavior. As an established IT company in Erode, we create tailored campaigns that yield high ROI, attract traffic, and promote brand awareness.
        </p>

        <h2>Why Digital Marketing is Crucial</h2>
        <p>
          Online marketing has emerged as the foundation of current business growth. With HubSpot figures, businesses focusing on inbound marketing achieve 3X more ROI compared to those using pure traditional marketing. At Letnext Technologies, a top-notch IT company in Erode, we empower businesses to leverage the strength of online platforms to reach out and engage their audience efficiently.
        </p>
        <ul>
          <li>Specific reach to specific people</li>
          <li>Affordable campaigns compared to conventional advertising</li>
          <li>Measurable outcomes through analytics and reporting</li>
          <li>Increased brand visibility and credibility</li>
          <li>Increased customer engagement and loyalty</li>
        </ul>
        <p>
          For example, a retail customer recorded a 60% rise in online sales within six months of following our SEO and social media guidelines, reflecting the real-world impact of online marketing.
        </p>

        <h2>Our Digital Marketing Solutions</h2>
        <ul>
          <li>
            <strong>Search Engine Optimization (SEO):</strong> Improve your website rankings, attract organic traffic, and generate quality leads. Our SEO solutions include keyword research, on-page SEO, technical SEO, off-page link building, and local SEO.
          </li>
          <li>
            <strong>Pay-Per-Click Advertising (PPC):</strong> Cost-effective campaigns on Google Ads and Bing Ads with continuous monitoring, bid optimization, and A/B testing for better ROI.
          </li>
          <li>
            <strong>Social Media Marketing (SMM):</strong> Build brand awareness, engagement, and conversions across Instagram, Facebook, LinkedIn, and Twitter.
          </li>
          <li>
            <strong>Content Marketing:</strong> Blogs, articles, guides, infographics, videos, and case studies to attract, educate, and convert your audience.
          </li>
          <li>
            <strong>Email Marketing:</strong> Custom campaigns, segmentation, automated drip campaigns, and A/B testing to nurture leads and boost engagement.
          </li>
          <li>
            <strong>Conversion Rate Optimization (CRO):</strong> Heatmap analysis, A/B testing of CTAs, redesigning forms & landing pages, and ongoing optimization for maximum conversions.
          </li>
        </ul>

        <h2>Our Digital Marketing Process</h2>
        <ul>
          <li>Market Research & Analysis</li>
          <li>Strategy Development</li>
          <li>Campaign Implementation</li>
          <li>Monitoring & Optimization</li>
          <li>Reporting & Insights</li>
        </ul>

        <h2>Analytics & Reporting</h2>
        <p>
          We use Google Analytics, Search Console, social media performance tracking, and real-time KPI dashboards to ensure campaigns are measurable and improved continuously.
        </p>

        <h2>Impact in Real Life</h2>
        <p>
          Our digital marketing solutions have led to higher online presence, increased conversion rates, improved brand credibility, better customer interaction, and streamlined marketing spend. For example, a local healthcare client recorded a 55% boost in patient inquiries within three months following our combined SEO, PPC, and social media campaigns.
        </p>

        <h2>Why Letnext Technologies</h2>
        <ul>
          <li>Expert Team: Experienced marketers, SEO experts, content writers, and analysts</li>
          <li>Personalized Strategies: Targeted campaigns aligned with business objectives and audience behavior</li>
          <li>Success Stories: Winning campaigns across industries and business scales</li>
          <li>Advanced Tools & Techniques: Utilizing advanced digital marketing platforms and analytics</li>
          <li>End-to-End Support: Strategy, deployment, monitoring, and optimization</li>
        </ul>

        <h2>Get Started with Letnext Technologies</h2>
        <p>
          Ready to boost your online presence and grow your business? Join forces with Letnext Technologies, a reputable IT company in Erode, for expert digital marketing services that deliver. Share your objectives, discover customized solutions, and see how our expertise can drive traffic, engagement, and conversions. Your digital success begins here.
        </p>
      </section>

      {/* ===== Footer ===== */}
     <Whatapp/>
     <Chatbot/>
    </div>
  );
}
