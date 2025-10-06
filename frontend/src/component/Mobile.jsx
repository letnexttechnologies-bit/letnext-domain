import React, { useState } from "react";
import Swal from "sweetalert2";
import Select from "react-select"; // ✅ searchable dropdown
import "./Course.css";

export default function Mobile() {
  const currentYear = new Date().getFullYear();

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileCode: "+91",
    mobile: "",
    degree: "",
    specialization: "",
    yop: "",
    marks: "",
    collegeState: "",
    collegeName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Email validation
    if (!formData.email.endsWith("@gmail.com")) {
      Swal.fire("Error", "Email must be a @gmail.com address", "error");
      return;
    }

    // ✅ YOP validation
    if (parseInt(formData.yop) > currentYear) {
      Swal.fire("Error", "Year of Passing cannot be in the future", "error");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        Swal.fire("✅ Success!", "Mobile App Developer form submitted successfully.", "success");
        setFormData({
          fullName: "",
          email: "",
          mobileCode: "+91",
          mobile: "",
          degree: "",
          specialization: "",
          yop: "",
          marks: "",
          collegeState: "",
          collegeName: "",
        });
      } else {
        Swal.fire("Error", data.error || "Something went wrong.", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Failed to connect to server.", "error");
    }
  };

  return (
    <div className="course-container">
      {/* Left Column */}
      <div className="course-left">
        <img
          src="https://ik.imagekit.io/3zau674ihy/mobile.jpg?updatedAt=1757481250842"
          alt="Mobile App Developer"
          className="course-img"
        />
        <h2>Mobile App Developer</h2>
        <h3>You'll Learn</h3>
        <ul>
          <li>Flutter / React Native</li>
          <li>Firebase & APIs</li>
          <li>App UI/UX</li>
          <li>Play Store & App Store Deployment</li>
          <li>App Monetization</li>
        </ul>
        <p className="wow">Create Android & iOS apps with real-time features.</p>
        <h3>Course Duration</h3>
        <p className="wow">80 hours of course + 1 year of support & services</p>
        <h3>Services</h3>
        <ul>
          <li>Live Classes with expert mentors</li>
          <li>Real Projects & Portfolio Building</li>
          <li>Certificate on Completion</li>
          <li>Both Online & Offline Available</li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="course-right">
        <h2>Register Now</h2>
        <form onSubmit={handleSubmit} className="course-form">
          <label>Full Name</label>
          <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} />

          <label>Email ID (@gmail.com only)</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />

          <label>Mobile</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <select
              name="mobileCode"
              value={formData.mobileCode}
              onChange={handleChange}
              style={{ width: "100px" }}
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
            </select>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <label>Degree</label>
          <input type="text" name="degree" required value={formData.degree} onChange={handleChange} />

          <label>Specialization</label>
          <input type="text" name="specialization" required value={formData.specialization} onChange={handleChange} />

          <label>YOP (Year of Passing)</label>
          <select name="yop" required value={formData.yop} onChange={handleChange}>
            <option value="">Select Year</option>
            {Array.from({ length: currentYear - 1979 }, (_, i) => currentYear - i).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <label>% of Marks</label>
          <input type="number" name="marks" required value={formData.marks} onChange={handleChange} />

          <label>College State</label>
          <Select
            options={states.map((s) => ({ value: s, label: s }))}
            value={formData.collegeState ? { value: formData.collegeState, label: formData.collegeState } : null}
            onChange={(selected) => setFormData({ ...formData, collegeState: selected.value })}
            placeholder="Select or type state"
            isSearchable
          />

          <label>College Name</label>
          <input
            type="text"
            name="collegeName"
            required
            value={formData.collegeName}
            onChange={handleChange}
            placeholder="Enter college name"
          />

          <button type="submit" className="course-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
