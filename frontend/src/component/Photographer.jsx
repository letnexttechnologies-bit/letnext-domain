import { useEffect } from "react";
import "../component/WebDesigner.css"; // make sure this CSS file path is correct
import Whatapp from "./Whatapp";
import Chatbot from "./Chatbot";
export default function WebDesigner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdesigner-wrapper">
      {/* ===== Hero Section ===== */}
      <section className="webdesigner-section">
        {/* Background Video */}
        <video
          loop
          muted
          autoPlay
          playsInline
          className="background-video"
        >
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay Content */}
        <h1 className="webdesigner-title">
          Product Photography Services
        </h1>
        <p className="webdesigner-desc">
          Capturing visuals that engage, inspire, and convert — crafted by Letnext Technologies.
        </p>

        {/* Example Project */}
        <div className="screenshot-grid">
          <div className="screenshot-card">
            <video
              src="https://ik.imagekit.io/3zau674ihy/IMG_0402.MOV/ik-video.mp4?updatedAt=1757478853691"
              controls
              muted
              loop
              playsInline
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>Sample Product Showcase</h3>
          </div>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <section className="webdev-content">
        <h2>Product Photography Services at Letnext Technologies</h2>
        <p>
          With today's digital-first economy, high-quality images are key to keeping your customers engaged. 
          Your product photography isn't merely about presenting your products—it's about telling a story that 
          captivates, persuades, and converts. Letnext Technologies specializes in expert product photography 
          that brings out the uniqueness of your brand. As an established IT company in Erode, we combine 
          technical skills with creative eyes to produce visually compelling outcomes that drive your business forward.
        </p>

        <h2>Why Product Photography is Important to Your Business</h2>
        <p>
          Pictures are worth more than words. In e-commerce and online marketing, your product photos can:
        </p>
        <ul>
          <li>Boost your sales online by as much as 30%, as supported by Shopify studies.</li>
          <li>Increase customer trust and believability.</li>
          <li>Decrease product returns with accurate representation.</li>
        </ul>
        <p>
          Collaborating with a reputable IT company in Erode ensures that your products are photographed professionally, 
          providing your business with an edge in the online market.
        </p>

        <h2>Our Product Photography Process</h2>
        <p>
          At Letnext Technologies, we use a comprehensive photography approach blending artistic creativity with technical precision.
        </p>

        <h3>1. Conceptualization and Planning</h3>
        <p>
          We begin by understanding your brand, target audience, and marketing objectives. This includes:
        </p>
        <ul>
          <li>Determining the mood and style of your shoot.</li>
          <li>Choosing the right backgrounds, props, and lighting.</li>
          <li>Creating a shot list aligned with your goals.</li>
        </ul>
        <p>
          Example: A fashion brand experienced a 50% increase in engagement after a unified photography strategy that reflected their identity.
        </p>

        <h3>2. Studio Photography</h3>
        <ul>
          <li>High-quality photos for e-commerce and catalogues.</li>
          <li>360-degree product turns for interactive viewing.</li>
          <li>Lifestyle shots illustrating product usage.</li>
        </ul>
        <p>
          Partnering with an IT company in Erode ensures each image is sharp, colorful, and optimized for the web.
        </p>

        <h3>3. On-Location Product Photography</h3>
        <ul>
          <li>Office or retail settings.</li>
          <li>Outdoor environments for natural lighting.</li>
          <li>Exhibition and event photography.</li>
        </ul>
        <p>
          A home furnishings brand saw 60% higher social engagement after an in-store lifestyle shoot showcasing their products.
        </p>

        <h3>4. Product Photography for E-Commerce</h3>
        <ul>
          <li>Zoomable product galleries.</li>
          <li>Clear multi-angle displays.</li>
          <li>Fast-loading, mobile-friendly optimization.</li>
        </ul>

        <h3>5. Post-Processing and Editing</h3>
        <ul>
          <li>Color balancing and exposure correction.</li>
          <li>Background cleanup or replacement.</li>
          <li>Retouching for enhanced product clarity.</li>
        </ul>
        <p>
          A jewelry client saw a 70% increase in site dwell time after we enhanced their product imagery.
        </p>

        <h3>6. Marketing-Focused Product Photography</h3>
        <ul>
          <li>Designing banners and social media visuals.</li>
          <li>Creating visuals for email campaigns.</li>
          <li>Developing promotional assets for ads and videos.</li>
        </ul>

        <h2>Types of Product Photography</h2>
        <ul>
          <li><b>Packshot Photography:</b> Clean product shots on plain backgrounds for e-commerce.</li>
          <li><b>Lifestyle Photography:</b> Products shown in real-life settings.</li>
          <li><b>360-Degree Photography:</b> Interactive views to increase confidence and reduce returns.</li>
          <li><b>Macro Photography:</b> Close-ups for jewelry, electronics, or handmade goods.</li>
          <li><b>Catalog Photography:</b> Professional-grade visuals for print or digital catalogs.</li>
        </ul>

        <h2>Local Product Photography Services</h2>
        <p>
          For companies in Erode and nearby regions, our local photography services provide convenience and context:
        </p>
        <ul>
          <li>On-site photography at your location.</li>
          <li>Highlighting products in real contexts.</li>
          <li>Collaborating with local brands for regional appeal.</li>
        </ul>

        <h2>Analytics and ROI Tracking</h2>
        <ul>
          <li>Image performance tracking across platforms.</li>
          <li>Engagement and conversion metrics.</li>
          <li>Continuous improvement for better visual strategy.</li>
        </ul>
        <p>
          Example: An electronics store saw 25% fewer product returns after refining their imagery with our guidance.
        </p>

        <h2>Why Letnext Technologies?</h2>
        <ul>
          <li>We bridge artistic creativity with technical expertise.</li>
          <li>End-to-end solutions from concept to post-production.</li>
          <li>Experience across fashion, electronics, home décor, and e-commerce.</li>
          <li>Professional-grade equipment and editing tools for premium outcomes.</li>
        </ul>

        <h2>Success Stories in the Real World</h2>
        <ul>
          <li><b>Fashion Brand:</b> 40% higher conversions after lifestyle photography.</li>
          <li><b>Electronics Store:</b> 25% reduction in product returns.</li>
          <li><b>Home Décor Start-up:</b> 60% Instagram engagement boost.</li>
        </ul>

        <h2>Expert Sayings on Product Photography</h2>
        <blockquote>"Good pictures are good business." – Roy Hamburg</blockquote>
        <blockquote>"High-quality product images are essential for e-commerce success." – Jeffrey Eisenberg</blockquote>
        <blockquote>"Your images are your most persuasive sales tool. Invest in them wisely." – David Ogilvy</blockquote>

        <h2>Get Started with Letnext Technologies</h2>
        <p>
          Ready to elevate your product visuals and boost sales? Contact Letnext Technologies today to schedule your shoot.
          We create high-quality images that showcase your products and strengthen your brand.
        </p>
        <p>
          From studio sessions and lifestyle photography to interactive 360° product visuals — we’ve got your business covered.
        </p>
      </section>
      <Whatapp/>
      <Chatbot/>
    </div>
  );
}
