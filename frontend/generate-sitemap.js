// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

// ✅ Replace with your actual website URL (Netlify or custom domain)
const BASE_URL = "https://yourwebsite.netlify.app";

// ✅ Add all your important routes here
const pages = [
  "", // homepage
  "about",
  "contact",
  "services",
  "products",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream("./public/sitemap.xml");

  pages.forEach((page) => {
    sitemap.write({ url: `/${page}`, changefreq: "monthly", priority: 0.8 });
  });

  sitemap.end();

  streamToPromise(sitemap)
    .then(() => console.log("✅ Sitemap generated successfully!"))
    .catch((err) => console.error("❌ Error generating sitemap:", err));

  sitemap.pipe(writeStream);
}

generateSitemap();
