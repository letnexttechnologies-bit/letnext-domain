import { useEffect } from "react";

export default function WebDesigner() {
  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <section
        style={{
          position: "relative",
          padding: "40px 20px",
        }}
      >
        {/* Background video */}
        <video
          loop
          muted
          autoPlay
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: 0.6,
          }}
        >
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        {/* Page Title */}
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Videography Portfolio
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "30px", color: "#eee" }}>
          Here are some of our video projects:
        </p>

        {/* User-controlled video */}
        <div style={{ padding: "20px" }}>
          <video
            src="https://ik.imagekit.io/3zau674ihy/video1.mov/ik-video.mp4?updatedAt=1757478520389"
            controls
            loop
            muted
            playsInline
            style={{
              width: "100%",
              maxWidth: "1000px", // keeps video size balanced
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
            }}
          />
          <h3 style={{ marginTop: "15px", fontSize: "20px", color: "#fff" }}>
            Project One
          </h3>
        </div>
      </section>
    </div>
  );
}
