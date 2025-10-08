// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// --- Fix __dirname for ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ================================
// ✅ Middleware Configuration
// ================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Proper CORS setup for both local and Render
const allowedOrigins = [
  "http://localhost:5173", // your local React app
  "https://letnexttechnologies.com", // your live frontend domain
  "https://letnext-domain.onrender.com", // your backend domain (Render)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman or server requests
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`❌ CORS blocked for origin: ${origin}`);
      return callback(new Error("CORS not allowed by server"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight OPTIONS requests
app.use(cors());

// ================================
// ✅ MongoDB Connection
// ================================
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://sabari:sabari2002@cluster0.em9nvce.mongodb.net/letnext_db?retryWrites=true&w=majority"
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ================================
// ✅ CONTACT ENQUIRY SCHEMA
// ================================
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);

// ✅ POST - Save contact enquiry
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 New Contact Enquiry:", req.body);
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Enquiry saved successfully!" });
  } catch (err) {
    console.error("❌ Error saving enquiry:", err);
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});

// ✅ GET - Fetch all enquiries
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("❌ Error fetching enquiries:", err);
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
});

// ✅ DELETE - Delete enquiry by ID
app.delete("/api/contact/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Enquiry not found" });
    res.json({ message: "Enquiry deleted" });
  } catch (err) {
    console.error("❌ Error deleting enquiry:", err);
    res.status(500).json({ error: "Failed to delete enquiry" });
  }
});

// ================================
// ✅ COURSE REGISTRATION SCHEMA
// ================================
const courseSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  degree: { type: String, required: true },
  specialization: { type: String, required: true },
  yop: { type: String, required: true },
  marks: { type: String, required: true },
  collegeState: { type: String, required: true },
  collegeName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Course = mongoose.model("Course", courseSchema);

// ✅ POST - Save registration
app.post("/api/register", async (req, res) => {
  try {
    console.log("🎓 Registration Data:", req.body);
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json({ message: "Registration saved successfully!" });
  } catch (err) {
    console.error("❌ Error saving registration:", err);
    res.status(500).json({ error: "Failed to save registration" });
  }
});

// ✅ GET - Fetch all registrations
app.get("/api/register", async (req, res) => {
  try {
    const students = await Course.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    console.error("❌ Error fetching registrations:", err);
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
});

// ================================
// ✅ RESUME STORAGE (MongoDB Binary)
// ================================
const resumeSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  data: { type: Buffer, required: true },
  uploadedAt: { type: Date, default: Date.now },
});
const Resume = mongoose.model("Resume", resumeSchema);

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only PDF/DOC/DOCX allowed"));
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

// ✅ POST - Upload resume
app.post("/api/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const newResume = new Resume({
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      data: req.file.buffer,
    });
    await newResume.save();

    res.status(201).json({
      message: "Resume uploaded successfully!",
      id: newResume._id,
      filename: newResume.filename,
    });
  } catch (err) {
    console.error("❌ Error uploading resume:", err);
    res.status(500).json({ error: "Failed to upload resume" });
  }
});

// ✅ GET - List resumes
app.get("/api/resumes", async (req, res) => {
  try {
    const resumes = await Resume.find().select("filename uploadedAt");
    res.json(resumes);
  } catch (err) {
    console.error("❌ Error fetching resumes:", err);
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});

// ✅ GET - Download resume
app.get("/api/resume/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ error: "Resume not found" });

    res.set("Content-Type", resume.contentType);
    res.set("Content-Disposition", `attachment; filename="${resume.filename}"`);
    res.send(resume.data);
  } catch (err) {
    console.error("❌ Error fetching resume:", err);
    res.status(500).json({ error: "Failed to fetch resume" });
  }
});

// ================================
// ✅ CHATBOT ROUTE
// ================================
app.post("/api/chat", (req, res) => {
  const msg = (req.body?.message || "").toString().trim().toLowerCase();
  let reply = "I'm not sure about that 🤔. Try asking for 'help'.";

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
    reply = "Hello! 👋 How can I assist you today?";
  else if (msg.includes("help"))
    reply =
      "You can ask about: company, services, careers, resume, internship, training, pricing, support, or contact info.";
  else if (msg.includes("about"))
    reply = "We are LetNext Technologies — empowering innovation with code.";
  else if (msg.includes("bye")) reply = "Goodbye 👋 Have a wonderful day!";

  return res.json({ reply });
});

// ================================
// ✅ START SERVER
// ================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
