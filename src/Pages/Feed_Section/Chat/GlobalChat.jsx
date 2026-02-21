import "./GlobalChat.css";

export default function GlobalChat() {
  return (
    <div className="rf-chat-section">

      <div className="rf-chat-messages">
        {[...Array(30)].map((_, i) => (
          <p key={i}><strong>User:</strong> Best render settings?</p>
        ))}
      </div>

      <div className="rf-chat-input-area">
        <input className="rf-chat-input" placeholder="Type message..." />
        <button className="rf-chat-send">Send</button>
      </div>

    </div>
  );
}