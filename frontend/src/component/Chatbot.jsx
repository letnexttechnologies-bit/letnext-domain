import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const API_BASE = import.meta.env.VITE_BASE_URL; // Backend server

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi! I'm your assistant. Ask me anything or upload your resume.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const messagesEndRef = useRef(null);

  // 🧭 Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add new message
  const addMessage = (text, sender = "user") => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  // ✉️ Send message to backend
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    addMessage(trimmed, "user");
    setInput("");

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error("Failed to connect to server");

      const data = await res.json();
      const reply = data?.reply || "🤔 Sorry, I didn't get that.";
      addMessage(reply, "bot");
    } catch (err) {
      console.error("Chat error:", err);
      addMessage("❌ Server unreachable. Try again later.", "bot");
    }
  };

  // ⌨️ Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // 📎 Handle Upload button
  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.value = "";
    fileInputRef.current?.click();
  };

  // 📄 File upload using fetch
  const handleFileSelected = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(file.type)) {
      addMessage("❌ Please upload PDF, DOC, or DOCX only.", "bot");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setUploading(true);
    addMessage(`📂 Uploading "${file.name}"…`, "user");

    try {
      const res = await fetch(`${API_BASE}/api/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      const { filename, url } = data;

      addMessage(
        `✅ Resume uploaded: ${filename}\n📎 Saved at: ${API_BASE}${url}`,
        "bot"
      );
    } catch (err) {
      console.error("Upload error:", err);
      addMessage("❌ Upload failed. Please try again.", "bot");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.sender}`}>
                  {msg.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            <div className="chatbot-actions">
              <button
                className="upload-btn"
                onClick={handleUploadClick}
                disabled={uploading}>
                📎 {uploading ? "Uploading…" : "Upload Resume"}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelected}
                style={{ display: "none" }}
              />
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                onKeyDown={handleKeyDown}
              />
              <button onClick={sendMessage} disabled={uploading}>
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
