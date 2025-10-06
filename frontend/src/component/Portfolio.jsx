import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

const PortfolioCard = ({ title, imgSrc, videoSrc, navigateTo }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to first frame
    }
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="media">
        <img src={imgSrc} alt={title} className="card-img" />
        <video ref={videoRef} className="card-video" muted loop preload="metadata">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <h3 className="card-title">{title}</h3>
      <button
        className="read-more"
        onClick={() => navigate(navigateTo ? navigateTo : "#")}
      >
        Read More
      </button>
    </div>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio/web-design-company-in-erode" className="portfolio-section">
      <h2>Our Portfolio</h2>
      <div className="portfolio-items">
        {/* Row 1 */}
        <PortfolioCard
          title="Web Development"
          imgSrc="/web designer.jpg"
          videoSrc="https://ik.imagekit.io/ppy2tlisz/web%20designer%20video.mp4?updatedAt=1757411079806"
          navigateTo="/webdesigner/web-development-company-in-erode"
        />
        <PortfolioCard
          title="App Development"
          imgSrc="/app developer.png"
          videoSrc="https://ik.imagekit.io/3zau674ihy/app%20developer.mp4?updatedAt=1757477800719"
          navigateTo="/appdeveloper/app-development-company-in-erode"
        />
        <PortfolioCard
          title="Graphic Design"
          imgSrc="/graphic designer.jpg"
          videoSrc="https://ik.imagekit.io/3zau674ihy/graphic%20designer.mp4?updatedAt=1757480684261"
          navigateTo="/graphicdesigner/graphic-design-company-in-erode"
        />

        {/* Row 2 */}
        <PortfolioCard
          title="UI/UX Design"
          imgSrc="/uiux.jpg"
          videoSrc="https://ik.imagekit.io/ppy2tlisz/uiux.mp4?updatedAt=1757411391578"
          navigateTo="/uiuxdesigner/uiux-design-company-in-erode"
        />
        <PortfolioCard
          title="Software Testing"
          imgSrc="/testing.jpg"
          videoSrc="https://ik.imagekit.io/ppy2tlisz/testing.mp4?updatedAt=1757411496437"
          navigateTo="/testing/testing-company-in-erode"
        />
        <PortfolioCard
          title="Digital Marketing"
          imgSrc="/digital marketer.jpg"
          videoSrc="https://ik.imagekit.io/ppy2tlisz/digital%20marketer.mp4?updatedAt=1757411661001"
          navigateTo="/digitalmarketer/digital-marketing-company-in-erode"
        />
        <PortfolioCard
          title="SEO Specialist"
          imgSrc="/seo.jpg"
          videoSrc=" https://ik.imagekit.io/jgn0eartt/seo.mp4?updatedAt=1757484692439"
          navigateTo="/seospecialist/seo-specialist-company-in-erode"
        />

        {/* Row 3 */}
        <PortfolioCard
          title="Photography"
          imgSrc="/photographer.jpg"
          videoSrc="https://ik.imagekit.io/ppy2tlisz/photographer.mp4?updatedAt=1757411733778"
          navigateTo="/photographer/photograph-company-in-erode"
        />
        <PortfolioCard
          title="Videography"
          imgSrc="/videographer.jpg"
          videoSrc="https://ik.imagekit.io/jgn0eartt/videography.mp4?updatedAt=1757484744547"
          navigateTo="/videographer/videograph-company-in-erode"
        />
        <PortfolioCard
          title="Social Media Handling"
          imgSrc="/content creator.jpg"
          videoSrc="https://ik.imagekit.io/ppy2tlisz/content%20creator.mp4?updatedAt=1757410851129"
          navigateTo="/contentcreator/context-creator-company-in-erode"
        />
        <PortfolioCard
          title="Internet Of Things"
          imgSrc="/iot.jpg"
          videoSrc="https://ik.imagekit.io/ppy2tlisz/iot.mp4?updatedAt=1757411868961"
          navigateTo="/iot/iot-company-in-erode"
        />
        <PortfolioCard
          title="Embbeded"
          imgSrc="/emb.jpg"
          videoSrc="https://ik.imagekit.io/jgn0eartt/embeded.mp4?updatedAt=1757484599506"
          navigateTo="/embbeded/embbeded-company-in-erode"
        />
      </div>
    </section>
  );
}
