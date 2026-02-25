import "./GlobalChat.css";
import ChatMessage from "../../../ChatCard/ChatMessage";
import { BsFillSendFill } from "react-icons/bs";

export default function GlobalChat() {
  const messages = [
    {
      id: 1,
      user: "sameer_fx",
      message: "Best render settings for reels?",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "10:08pm",
    },
    {
      id: 2,
      user: "amal.mp4",
      message: "Use H264 + high bitrate 🔥",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "10:08pm",
    },
    {
      id: 3,
      user: "sameer_fx",
      message: "Best render settings for reels?",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "10:08pm",
    },
    {
      id: 4,
      user: "amal.mp4",
      message: "Use H264 + high bitrate 🔥",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "10:08pm",
    },
    {
      id: 5,
      user: "sameer_fx",
      message: "sit amet consectetur adipisicing elit. Corporis nostrum corrupti doloribus eaque ducimus. Labore tenetur at repudiandae aspernatur adipisci",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "10:08pm",
    },
    {
      id: 6,
      user: "amal.mp4",
      message: "Use H264 + high bitrate 🔥",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "10:08pm",
    },
    {
      id: 7,
      user: "sameer_fx",
      message: "Best render settings for reels?",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "10:08pm",
    },
    {
      id: 8,
      user: "amal.mp4",
      message: "Use H264 + high bitrate 🔥",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "10:08pm",
    },
    {
      id: 9,
      user: "sameer_fx",
      message: "Best render settings for reels?",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "10:08pm",
    },
    {
      id: 10,
      user: "amal.mp4",
      message: "Lorem ipsum dolor sit amet consectetur.",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "10:08pm",
    },
    {
      id: 11,
      user: "sameer_fx",
      message: "Lorem ipsum dolor sit, amet consectetur",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "10:08pm",
    },
    {
      id: 12,
      user: "amal.mp4",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nostrum corrupti doloribus eaque ducimus. Labore tenetur at repudiandae aspernatur adipisci nostrum deserunt totam, repellendus vitae autem suscipit odit nam nobis quisquam voluptatum.",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "10:08pm",
    },
    {
      id: 13,
      user: "sameer_fx",
      message: "Best render settings for reels?",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "10:08pm",
    },
    {
      id: 14,
      user: "amal.mp4",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, consequuntur.",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "10:08pm",
    },
    {
      id: 15,
      user: "sameer_fx",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi ducimus aspernatur a sapiente eius, ipsa amet possimus, consectetur architecto maiores hic aperiam dolores eum! At excepturi quas corrupti praesentium, ipsam totam iure saepe sunt laudantium, blanditiis, tenetur repellendus ipsum? Consequuntur expedita eos quae quis adipisci saepe doloribus exercitationem consequatur.",
      avatar: "https://i.pravatar.cc/100?img=12",
      time: "10:08pm",
    },
    {
      id: 16,
      user: "amal.mp4",
      message: "Use H264 + high bitrate 🔥",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "10:08pm",
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
        <input className="rf-chat-input" placeholder="Say Anything..." />
        <button className="rf-chat-send">
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
}
