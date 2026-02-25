import React from "react";
import "./ChatMessage.css";

export default function ChatMessage({ user, message, avatar ,time }) {
  return (
    <div className="rf-chat-card">
      {/* DP */}
      <img src={avatar} alt="user" className="rf-chat-avatar" />

      {/* Message Content */}
      <div className="chat-outer">
        <div className="rf-chat-content">
          <span className="rf-chat-username">{user}</span>
          <p className="rf-chat-text">{message}</p>
        </div>
        <div className="chat-time">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}



