import React, { useState } from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Sabari K",
    role: "Chief Executive Officer & Founder",
    description: "Visionary leader driving innovation at LetNext Technologies.",
    img: "sabari.jpg",
  },
  {
    name: "Elantamil Thendral M A",
    role: "Co-Founder and HR Manager",
    description: "Building teams and fostering a thriving workplace culture.",
    img: "elai.jpg",
  },
  {
    name: "Keerthivasan K",
    role: "Founder & Chief Operating Officer",
    description: "Leading projects from concept to successful delivery.",
    img: "vasan3.jpg",
  },
  {
    name: "Gokulakrishnan M",
    role: "Head Of Creative Design",
    description: "Crafting scalable solutions and mentoring developers.",
    img: "gokul1.jpg",
  },
  {
    name: "Krishna Suthers Raj T G B",
    role: "Chief Technology Officer",
    description: "Designing robust solutions and guiding the development team.",
    img: "krishna.jpg",
  },
  {
    name: "Deepak S",
    role: "Chief Academic Officer",
    description: "Building dynamic web applications with MongoDB, Express, React, and Node.js.",
    img: "deepak11.jpg",
  },
  {
    name: "Sridharan S",
    role: "Senior Video Editor",
    description: "Bringing stories to life through visuals and creativity.",
    img: "sri.jpg",
  },
  {
    name: "Deepan R",
    role: "Chief Internship Officer",
    description: "Crafts intuitive and engaging user experiences.",
    img: "deepak12.jpg",
  },
  {
    name: "Ayyasamy M",
    role: "Head Of Developnment",
    description: "Powering applications with secure and efficient server-side logic.",
    img: "ayya.jpg",
  },
  {
    name: "Dheeraj C",
    role: "Chief Information Officer",
    description: "Transforms data into actionable insights.",
    img: "theeraj1.jpg",
  },
  {
    name: "Jatheeswaran S",
    role: "Head Of Business Operation",
    description: "Growing skills while contributing to real-world coding projects.",
    img: "jathish1.jpg",
  },
  {
    name: "Vijayakumar M",
    role: "Intern Coordinater",
    description: "Growing skills while contributing to real-world coding projects.",
    img: "vijay.jpg",
  },
  {
    name: "Kiruthickrosan K",
    role: "Data Analyst",
    description: "Developing coding skills while contributing to projects and providing code resources for others.",
    img: "Kiruthick1.jpg",
  },
];

const TeamSection = () => {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <section id="ourteam/web-design-company-in-erode" className="team-wrapper">
      {/* Toggle Button */}
      <div className="team-toggle-container">
        <button
          className="toggle-team-btn"
          onClick={() => setShowTeam(!showTeam)}
        >
          {showTeam ? "Hide Team" : "Our Team"}
        </button>
      </div>

      {/* Team Section */}
      <div className={`team-section ${showTeam ? "show" : ""}`}>
        <h2 className="team-heading">Find Our Team</h2>
        <p className="team-subtext">
          Meet the passionate leaders and innovators driving LetNext
          Technologies forward.
        </p>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.description}</p>
                {/* <button className="view-profile-btn">View Profile</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
