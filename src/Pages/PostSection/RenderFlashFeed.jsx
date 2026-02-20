import React, { useState } from "react";
import "./RenderFlashFeed.css";

const posts = [
  {
    id: 1,
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    user: "@motion_creator",
    caption: "After Effects glow transition ⚡",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    user: "@motion_creator",
    caption: "After Effects glow transition ⚡",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    user: "@motion_creator",
    caption: "After Effects glow transition ⚡",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 7,
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    user: "@motion_creator",
    caption: "After Effects glow transition ⚡",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
];

const RenderFlashFeed = () => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="rf-feed-wrapper">
      {/* ===== STICKY HEADER ===== */}
      <header className="rf-main-header">
        <div className="rf-header-inner rf-container">
          <div className="rf-feed-logo">renderFlash</div>

          <div className="rf-feed-tabs">
            <button
              className={`rf-tab-btn ${
                activeTab === "feed" ? "rf-tab-active" : ""
              }`}
              onClick={() => setActiveTab("feed")}
            >
              Feed
            </button>

            <button
              className={`rf-tab-btn ${
                activeTab === "search" ? "rf-tab-active" : ""
              }`}
              onClick={() => setActiveTab("search")}
            >
              Search
            </button>

            <button
              className={`rf-tab-btn ${
                activeTab === "chat" ? "rf-tab-active" : ""
              }`}
              onClick={() => setActiveTab("chat")}
            >
              Global Chat
            </button>
          </div>
        </div>
      </header>

      {/* ===== CONTENT ===== */}
      <div className="rf-feed-content">
        {/* ===== FEED ===== */}
        {activeTab === "feed" && (
          <div className="rf-video-feed">
            {posts.map((post) => (
              <div key={post.id} className="rf-video-card">
                <video
                  src={post.video}
                  className="rf-video-player"
                  controls
                  loop
                />

                <div className="rf-video-info">
                  <h4>{post.user}</h4>
                  <p>{post.caption}</p>
                </div>

                <div className="rf-video-actions">
                  <button className="rf-action-btn">❤️ Like</button>
                  <button className="rf-action-btn">💬 Comment</button>
                  <button className="rf-action-btn">🔁 Repost</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== SEARCH SECTION ===== */}
        {activeTab === "search" && (
          <div className="rf-search-section">
            <input
              placeholder="Search creators, edits..."
              className="rf-search-input"
            />

            <div className="rf-search-placeholder">
              <p>🔎 Trending creators</p>
              <p>@velocity_edit</p>
              <p>@cinema_flash</p>
              <p>@motion_ai</p>
            </div>
          </div>
        )}

        {/* ===== GLOBAL CHAT ===== */}
        {activeTab === "chat" && (
          <div className="rf-chat-section">
            <div className="rf-chat-messages">
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
              <p>
                <strong>User1:</strong> Best render settings?
              </p>
              <p>
                <strong>User2:</strong> Use H264 high bitrate 🔥
              </p>
            </div>

            <div className="rf-chat-input-area">
              <input className="rf-chat-input" placeholder="Type message..." />
              <button className="rf-chat-send">Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RenderFlashFeed;
