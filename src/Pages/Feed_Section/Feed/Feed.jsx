import AutoPlayVideo from "../../../Autoplay/AutoPlayVideo";
import "./Feed.css";

const posts = [
  {
    id: 1,
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    user: "@flash_editor",
    caption: "Cinematic velocity edit 🔥",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function Feed() {
  return (
    <div className="rf-video-feed">
      {posts.map((post) => (
        <div key={post.id} className="rf-video-card">
          <div className="rf-video-info">
            <h4>{post.user}</h4>
            <p>{post.caption}</p>
          </div>

          {/* <video src={post.video} className="rf-video-player" controls loop /> */}
          <AutoPlayVideo src={post.video} />

          <div className="rf-video-actions">
            <button className="rf-action-btn">❤️</button>
            <button className="rf-action-btn">💬</button>
            <button className="rf-action-btn">🔁</button>
          </div>
        </div>
      ))}
    </div>
  );
}
