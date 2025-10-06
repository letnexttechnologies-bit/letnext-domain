import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Chatbot.css";   // your chatbot CSS file
import "./Whatapp.css";   // your WhatsApp CSS file

const ChatbotWithWhatsapp = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919940847940", "_blank");
  };

  return (
    <div>
      {/* WhatsApp Button → only show if chatbot is closed */}
      {!isChatbotOpen && (
        <div className="whatapp-container" onClick={openWhatsApp}>
          <FaWhatsapp className="whatapp-icon" />
        </div>
      )}

      {/* Chatbot Floating Button */}
      <div className="chatbot-container">
        {!isChatbotOpen ? (
          <button className="chatbot-toggle" onClick={toggleChatbot}>
            💬
          </button>
        ) : (
          <div className={`chatbot-box ${isChatbotOpen ? "open" : "closing"}`}>
            <div className="chatbot-header">
              My Chatbot
              <button className="close-btn" onClick={toggleChatbot}>
                ✖
              </button>
            </div>

            <div className="chatbot-body">
              <div className="chatbot-messages">
                <div className="message bot">Hello 👋 How can I help you?</div>
                <div className="message user">I need support</div>
                <div className="message bot">Sure! Please describe your issue.</div>
              </div>
            </div>

            <div className="chatbot-input">
              <input type="text" placeholder="Type a message..." />
              <button>➤</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotWithWhatsapp;
