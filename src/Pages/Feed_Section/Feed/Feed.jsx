import { useState } from "react";
import AutoPlayVideo from "../../../Autoplay/AutoPlayVideo";
import "./Feed.css";

/* ===============================
   INITIAL POSTS (TEMP DATA)
   Later comes from backend API
=================================*/
const initialPosts = [
  {
    id: 1,
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 12,
    liked: false,
    comments: 4,
    reposts: 1,
  },
  {
    id: 2,
    user: "@flash_editor",
    caption: "Velocity transition edit ⚡",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 8,
    liked: false,
    comments: 2,
    reposts: 0,
  },
  {
    id: 3,
    user: "@flash_editor",
    caption: "After Effects glow style ✨",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 21,
    liked: false,
    comments: 7,
    reposts: 3,
  },
];

export default function Feed() {
  const [feedPosts, setFeedPosts] = useState(initialPosts);

  /* ===============================
     LIKE HANDLER
     (Optimistic update)
  =================================*/
  const handleLike = async (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked
                ? post.likes - 1
                : post.likes + 1,
            }
          : post
      )
    );

    // ✅ BACKEND READY
    // await axios.post(`/api/posts/${id}/like`);
  };

  /* ===============================
     COMMENT HANDLER
  =================================*/
  const handleComment = (id) => {
    console.log("Open comments for post:", id);

    // later:
    // navigate(`/post/${id}`)
  };

  /* ===============================
     REPOST / SHARE HANDLER
  =================================*/
  const handleRepost = async (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, reposts: post.reposts + 1 }
          : post
      )
    );

    // ✅ BACKEND READY
    // await axios.post(`/api/posts/${id}/repost`);
  };

  /* ===============================
     UI
  =================================*/
  return (
    <div className="rf-video-feed">
      {feedPosts.map((post) => (
        <div key={post.id} className="rf-video-card">
          
          {/* USER INFO */}
          <div className="rf-video-info">
            <h4>{post.user}</h4>
            <p>{post.caption}</p>
          </div>

          {/* AUTO PLAY VIDEO */}
          <AutoPlayVideo src={post.video} />

          {/* ACTION BUTTONS */}
          <div className="rf-video-actions">
            <button
              className="rf-action-btn"
              onClick={() => handleLike(post.id)}
            >
              {post.liked ? "💜" : "🤍"} {post.likes}
            </button>

            <button
              className="rf-action-btn"
              onClick={() => handleComment(post.id)}
            >
              💬 {post.comments}
            </button>

            <button
              className="rf-action-btn"
              onClick={() => handleRepost(post.id)}
            >
              🔁 {post.reposts}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}