import { useEffect } from "react";
import "./WebDesigner.css"; // ✅ Import your CSS file
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";
export default function Videographer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdesigner-wrapper">
      <section className="webdesigner-section">
        {/* Background video */}
        <video
          loop
          muted
          autoPlay
          playsInline
          className="background-video"
        >
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        {/* Title and description */}
        <h2 className="webdesigner-title">Videography Portfolio</h2>
        <p className="webdesigner-desc">
          Capturing visuals that engage, inspire, and convert — crafted by Letnext Technologies.
        </p>

        {/* Video Section */}
        <div className="screenshot-grid">
          <div className="screenshot-card">
            <video
              src="https://ik.imagekit.io/3zau674ihy/video1.mov/ik-video.mp4?updatedAt=1757478520389"
              controls
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
              }}
            />
            <h3>Sample Product Showcase</h3>
          </div>
        </div>
      </section>

      {/* ====== Full Description Content ====== */}
      <div className="webdev-content">
        <h2>Videographer Services by LetNext Technologies</h2>
        <p>
          At LetNext Technologies, we know that visual storytelling is possibly
          the most effective means of connecting with your audience and taking
          your brand to a new level. Our Videographer Services are crafted to
          bring out the best of your business, delivering meaningful videos that
          appeal to your target customers. Being a top IT company in Erode, we
          employ cutting-edge technology and creative vision to deliver
          high-end videos for businesses across the board.
        </p>
        <p>
          Whether you need promotional videos, corporate presentations, product
          demonstrations, or event coverage, our crew of professional
          videographers ensures your story is told with clarity and
          effectiveness in every frame. Video content is no longer a
          luxury—it’s a marketing necessity, and our services assist in
          extracting its highest potential.
        </p>

        <h2>Why Video Content Matters</h2>
        <p>
          Video marketing is the most rapidly expanding online marketing trend,
          and research indicates that video content can raise conversion rates
          as much as 80%. Viewers remember 95% of a message when communicated
          via video versus only 10% in text. Investing in professional
          videography makes you leave an indelible mark and enhance your
          company's credibility.
        </p>

        <p>
          As a trusted IT company in Erode, LetNext Technologies combines
          technical proficiency with creative vision to ensure that your videos
          not only look stunning but also drive measurable results. Our team
          works closely with clients to understand their business goals,
          audience, and brand personality before crafting a tailored video
          strategy.
        </p>

        <h2>Our Videography Services</h2>
        <ul>
          <li>
            <strong>Corporate Video Production:</strong> Emphasize company
            culture, demonstrate products, and engage employees effectively.
          </li>
          <li>
            <strong>Promotional and Marketing Videos:</strong> Drive social
            media engagement, boost conversions, and build trust.
          </li>
          <li>
            <strong>Event Coverage:</strong> Multi-camera live streams,
            post-event highlights, and drone services.
          </li>
          <li>
            <strong>Product Demonstration Videos:</strong> Step-by-step demos
            with visual effects and social media optimization.
          </li>
        </ul>

        <h2>Our Process: From Concept to Completion</h2>
        <ul>
          <li>Consultation & Planning</li>
          <li>Storyboarding & Scriptwriting</li>
          <li>Filming & Production</li>
          <li>Post-Production & Editing</li>
          <li>Delivery & Optimization</li>
        </ul>

        <h2>Why Choose LetNext Technologies?</h2>
        <ul>
          <li>
            <strong>Expertise and Experience:</strong> Skilled videographers
            with industry insights.
          </li>
          <li>
            <strong>Customized Solutions:</strong> Tailored videos that fit your
            business and audience.
          </li>
          <li>
            <strong>Cutting-Edge Technology:</strong> 4K cameras, drones, and
            high-end editing tools.
          </li>
          <li>
            <strong>Proven Results:</strong> Our videos boost engagement and
            conversions significantly.
          </li>
          <li>
            <strong>Comprehensive Support:</strong> SEO optimization, hosting,
            and marketing guidance.
          </li>
        </ul>

        <h2>Real-World Examples and Case Studies</h2>
        <p>
          <strong>Case Study 1:</strong> Corporate video increased inquiries by
          40% for a manufacturing unit.
        </p>
        <p>
          <strong>Case Study 2:</strong> Promotional videos grew engagement by
          75% and boosted online sales by 30%.
        </p>
        <p>
          <strong>Case Study 3:</strong> App launch video gained 50,000+ views
          in its first week.
        </p>

        <h2>Video SEO and Digital Marketing Integration</h2>
        <ul>
          <li>Keyword and metadata optimization</li>
          <li>Custom thumbnails and captions</li>
          <li>Video schema markup for search visibility</li>
        </ul>

        <h2>Why Partner with LetNext Technologies</h2>
        <ul>
          <li>Enhanced brand recognition and recall</li>
          <li>Improved engagement and conversion rates</li>
          <li>Affordable and reusable video marketing assets</li>
          <li>Data-driven insights and analytics</li>
        </ul>

        <h2>Tips for Creating Impactful Videos</h2>
        <ul>
          <li>Know your audience and tailor content to them.</li>
          <li>Keep it brief and to the point.</li>
          <li>Tell a compelling story.</li>
          <li>Invest in professional quality.</li>
          <li>Always include a call to action.</li>
        </ul>

        <h2>Get in Touch with LetNext Technologies</h2>
        <p>
          At LetNext Technologies, every successful project begins with a
          conversation. Whether you want to produce meaningful videos, build
          apps, or grow your online presence, our experts are ready to help. As
          a top IT company in Erode, we provide personalized solutions with
          clear communication and timely updates from start to finish.
        </p>
        <p>
          Working with LetNext Technologies means partnering with a team
          dedicated to your success — turning your vision into measurable
          business results.
        </p>
      </div>
      <Whatapp/>
      <Chatbot/>
    </div>
  );
}
