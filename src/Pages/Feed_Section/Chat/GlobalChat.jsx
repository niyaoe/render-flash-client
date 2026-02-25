import "./GlobalChat.css";
import ChatMessage from "../../../ChatCard/ChatMessage";

export default function GlobalChat() {
  const messages = [
    {
      id: 1,
      user: "sameer_fx",
      message: "Best render settings for reels?",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      user: "amal.mp4",
      message: "Use H264 + high bitrate 🔥",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
  ];

  return (
    <div className="rf-chat-section">
      <div className="rf-chat-messages">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} {...msg} />
        ))}
      </div>

      <div className="rf-chat-input-area">
        <input className="rf-chat-input" placeholder="Type message..." />
        <button className="rf-chat-send">Send</button>
      </div>
    </div>
  );
}
