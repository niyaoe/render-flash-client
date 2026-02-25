import { useState } from "react";
import AutoPlayVideo from "../../../Autoplay/AutoPlayVideo";
import "./Feed.css";

/* ===============================
   INITIAL POSTS
=================================*/
const initialPosts = [
  {
    id: 1,
    category: "Ronaldo",
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 12,
    liked: false,
    comments: 4,
    saved: false,
  },
  {
    id: 2,
    category: "Ronaldo",
    user: "@flash_editor",
    caption: "Velocity transition edit ⚡",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 8,
    liked: false,
    comments: 2,
    saved: false,
  },
];

export default function Feed() {
  const [feedPosts, setFeedPosts] = useState(initialPosts);

  /* ===============================
     LIKE
  =================================*/
  const handleLike = async (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );

    // await axios.post(`/api/posts/${id}/like`);
  };

  /* ===============================
     COMMENT
  =================================*/
  const handleComment = (id) => {
    console.log("Open comments:", id);
    // navigate(`/post/${id}`)
  };

  /* ===============================
     SAVE POST
  =================================*/
  const handleSave = async (id) => {
    setFeedPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, saved: !post.saved } : post
      )
    );

    // await axios.post(`/api/posts/${id}/save`);
  };

  return (
    <div className="rf-video-feed">
      {feedPosts.map((post) => (
        <div key={post.id} className="rf-video-card">
          {/* USER INFO */}
          <div className="rf-video-info">
            <div className="rf-post-left">
              <h4>{post.user}</h4>
              <p>{post.caption}</p>
            </div>

            <div className="rf-post-category">
              <p className="rf-category">{post.category}</p>
            </div>
          </div>

          {/* VIDEO */}
          <AutoPlayVideo src={post.video} />

          {/* ACTIONS */}
          <div className="rf-video-actions">
            {/* LEFT SIDE (LIKE + COMMENT) */}
            <div className="rf-actions-left">
              <button
                className="rf-action-btn"
                onClick={() => handleLike(post.id)}
              >
                <i
                  className={`bi ${
                    post.liked ? "bi-heart-fill" : "bi-heart"
                  }`}
                ></i>
                <span>{post.likes}</span>
              </button>

              <button
                className="rf-action-btn"
                onClick={() => handleComment(post.id)}
              >
                <i className="bi bi-chat"></i>
                <span>{post.comments}</span>
              </button>
            </div>

            {/* RIGHT SIDE (SAVE) */}
            <button
              className="rf-action-btn rf-save-btn"
              onClick={() => handleSave(post.id)}
            >
              <i
                className={`bi ${
                  post.saved ? "bi-bookmark-fill" : "bi-bookmark"
                }`}
              ></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}