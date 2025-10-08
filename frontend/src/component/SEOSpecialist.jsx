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

        <h2 className="webdesigner-title">SEO Specialist Portfolio</h2>
        <p className="webdesigner-desc">
          Here are some screenshots of our SEO Specialist projects:
        </p>

        <div className="screenshot-grid">
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/seoo1.jpg")}
          >
            <img src="/seoo1.jpg" alt="Project 1" />
            <h3>Project One</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/seoo2.jpg")}
          >
            <img src="/seoo2.jpg" alt="Project 2" />
            <h3>Project Two</h3>
          </div>
          <div
            className="screenshot-card"
            onClick={() => openFullscreen("/seoo3.jpg")}
          >
            <img src="/seoo3.jpg" alt="Project 3" />
            <h3>Project Three</h3>
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

      {/* ===== SEO Content Section ===== */}
      <section className="webdev-content">
        <h2>SEO Specialist Services at Letnext Technologies</h2>
        <p>
          In the modern digital age, companies live and die by visibility. Your
          online reputation is what determines the success or failure of your
          brand, and SEO is at the center of that. Letnext Technologies is
          dedicated to assisting enterprises rank higher, attract targeted
          traffic, and convert leads into customers. We are a reputable IT
          company in Erode with SEO experts who blend technical know-how,
          creativity, and strategic vision to produce measurable outcomes.
        </p>

        <h2>Why SEO Is Important for Your Business</h2>
        <p>
          SEO isn't about being at the top of Google—it's about reaching your
          audience when and where it matters. Companies that use successful SEO
          see:
        </p>
        <ul>
          <li>More website traffic: Organic search accounts for 53% of all web traffic.</li>
          <li>Increased conversion rates: SEO traffic is 10 times more likely to convert than cold leads.</li>
          <li>Brand credibility: First-page-ranked websites are viewed as more credible by users.</li>
        </ul>
        <p>
          Collaborating with a seasoned IT company in Erode guarantees that your
          business not only achieves these objectives but also leads the pack
          in the fast-paced digital arena.
        </p>

        <h2>Our Approach towards SEO</h2>
        <p>
          At Letnext Technologies, our SEO methodology is integrated,
          combining technical optimization with engaging content and data-based
          decision-making.
        </p>

        <h3>1. On-Page SEO</h3>
        <ul>
          <li>Keyword research and inclusion</li>
          <li>Meta tags, titles, and image optimization</li>
          <li>Internal linking structure improvement</li>
        </ul>
        <p>
          Example: An e-commerce client experienced a 75% boost in organic traffic
          in 3 months after we optimized their product pages, meta descriptions, and title tags.
        </p>

        <h3>2. Off-Page SEO</h3>
        <ul>
          <li>High-quality backlink campaigns</li>
          <li>Guest blogging and influencer marketing</li>
          <li>Social media interaction</li>
        </ul>
        <p>
          A skilled IT company in Erode ensures your brand obtains credibility
          on various online platforms, enhancing search engine worthiness.
        </p>

        <h3>3. Technical SEO</h3>
        <ul>
          <li>Optimization for website speed</li>
          <li>Responsive and mobile-friendly design</li>
          <li>Implementation of structured data</li>
          <li>Resolving crawl errors and broken links</li>
        </ul>
        <p>
          Example: We helped a local startup boost page speed by 60%, improving rankings and lowering bounce rates.
        </p>

        <h3>Keyword Research and Competitive Analysis</h3>
        <ul>
          <li>Detailed keyword research to find high-traffic, low-competition keywords</li>
          <li>Competitive analysis to find opportunities and gaps</li>
          <li>Content planning to hit the right search intent</li>
        </ul>

        <h3>SEO Content Optimization</h3>
        <ul>
          <li>Creating optimized blogs, articles, and webpages</li>
          <li>Optimizing existing content to targeted keywords</li>
          <li>Adding multimedia content (images, videos, infographics)</li>
        </ul>

        <h3>Local SEO Services</h3>
        <ul>
          <li>Optimizing Google Business Profile listings</li>
          <li>Building local citations and directory listings</li>
          <li>Creating positive customer reviews</li>
        </ul>

        <h3>Analytics and Reporting</h3>
        <ul>
          <li>Monthly performance reports</li>
          <li>Keyword position updates</li>
          <li>User behavior and traffic insights</li>
          <li>Suggestions for ongoing improvement</li>
        </ul>

        <h3>Link Building Strategies</h3>
        <ul>
          <li>Guest post outreach</li>
          <li>Influencer partnerships</li>
          <li>Content promotion campaigns</li>
        </ul>

        <h3>SEO Audit Services</h3>
        <ul>
          <li>Site structure and internal linking</li>
          <li>Meta tags and content quality</li>
          <li>Mobile usability and page speed</li>
          <li>Security and technical performance</li>
        </ul>

        <h2>Why Letnext Technologies?</h2>
        <ul>
          <li>Trained team of certified SEO experts</li>
          <li>Data-driven approach and measurable results</li>
          <li>Open communication and monthly reports</li>
          <li>Consistent success with local and international clients</li>
        </ul>

        <h2>Success Stories in the Real World</h2>
        <ul>
          <li>E-Commerce Business: +75% organic traffic in 3 months</li>
          <li>Startup Client: Reduced bounce rate by 40%</li>
          <li>Local Business: Achieved #1 Google Maps ranking through local SEO</li>
        </ul>

        <h2>Expert Quotes</h2>
        <p>
          "SEO isn't a choice anymore; it's a requirement. A site that is properly optimized brings in traffic, establishes trust, and increases sales." – John Mueller, Google Webmaster Trends Analyst
        </p>
        <p>
          "Local SEO is the underground weapon for small businesses to take over the local search rankings." – Rand Fishkin, Moz Founder
        </p>

        <h2>Get Started with Letnext Technologies</h2>
        <p>
          Ready to increase your website's visibility and drive sustainable growth?
          Our SEO experts at Letnext Technologies are here to develop tailored strategies that work. Contact us today and let our SEO specialists take your business to the next level!
        </p>
      </section>

      {/* Footer */}
      <Whatapp/>
      <Chatbot/>
      
    </div>
  );
}
