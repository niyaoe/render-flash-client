import "./GlobalChat.css";
import ChatMessage from "../../../ChatCard/ChatMessage";
import { BsFillSendFill } from "react-icons/bs";

export default function GlobalChat() {
  const messages = [
    {
      id: 1,
      user: "editwizard",
      message: "Anyone exporting 4K reels without quality loss?",
      avatar: "https://i.pravatar.cc/100?img=21",
      time: "9:12pm",
    },
    {
      id: 2,
      user: "niyas.cut",
      message: "Try 60fps + VBR 2 pass. Works smooth for me.",
      avatar: "https://i.pravatar.cc/100?img=32",
      time: "9:13pm",
    },
    {
      id: 3,
      user: "framehunter",
      message: "After Effects preview is lagging 😭 any fix?",
      avatar: "https://i.pravatar.cc/100?img=14",
      time: "9:15pm",
    },
    {
      id: 4,
      user: "amal.motion",
      message: "Reduce resolution to half while previewing.",
      avatar: "https://i.pravatar.cc/100?img=45",
      time: "9:16pm",
    },
    {
      id: 5,
      user: "pixelstorm",
      message: "What font do you guys use for cinematic captions?",
      avatar: "https://i.pravatar.cc/100?img=8",
      time: "9:18pm",
    },
    {
      id: 6,
      user: "editwizard",
      message: "Montserrat + slight tracking looks clean.",
      avatar: "https://i.pravatar.cc/100?img=21",
      time: "9:19pm",
    },
    {
      id: 7,
      user: "vfx_ron",
      message: "My render stuck at 99% again 💀",
      avatar: "https://i.pravatar.cc/100?img=52",
      time: "9:22pm",
    },
    {
      id: 8,
      user: "niyas.cut",
      message: "Check disk space bro, happens sometimes.",
      avatar: "https://i.pravatar.cc/100?img=32",
      time: "9:23pm",
    },
    {
      id: 9,
      user: "clipcraft",
      message: "CapCut desktop actually getting better lately.",
      avatar: "https://i.pravatar.cc/100?img=11",
      time: "9:25pm",
    },
    {
      id: 10,
      user: "framehunter",
      message: "Yeah but AE still king for motion graphics.",
      avatar: "https://i.pravatar.cc/100?img=14",
      time: "9:27pm",
    },
    {
      id: 11,
      user: "pixelstorm",
      message: "Anyone using LUT packs for reels?",
      avatar: "https://i.pravatar.cc/100?img=8",
      time: "9:30pm",
    },
    {
      id: 12,
      user: "amal.motion",
      message: "I mostly color grade manually. LUT only base.",
      avatar: "https://i.pravatar.cc/100?img=45",
      time: "9:31pm",
    },
    {
      id: 13,
      user: "editwizard",
      message: "Client wants neon glitch effect 😅 deadline tomorrow.",
      avatar: "https://i.pravatar.cc/100?img=21",
      time: "9:34pm",
    },
    {
      id: 14,
      user: "vfx_ron",
      message: "Use displacement map + RGB split. Easy win.",
      avatar: "https://i.pravatar.cc/100?img=52",
      time: "9:35pm",
    },
    {
      id: 15,
      user: "clipcraft",
      message: "Render overnight gang where you at 😂",
      avatar: "https://i.pravatar.cc/100?img=11",
      time: "9:40pm",
    },
    {
      id: 16,
      user: "niyas.cut",
      message: "Laptop fans sounding like helicopter rn 🚁",
      avatar: "https://i.pravatar.cc/100?img=32",
      time: "9:42pm",
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
