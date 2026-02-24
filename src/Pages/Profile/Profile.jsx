import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-card">

        {/* Top Section */}
        <div className="profile-top">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="profile-image"
          />

          <div className="profile-info">
            <h2 className="profile-username">sameer_nalakath</h2>

            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">54</span>
                <span className="stat-label">Posts</span>
              </div>

              <div className="stat">
                <span className="stat-number">2.3k</span>
                <span className="stat-label">Followers</span>
              </div>

              <div className="stat">
                <span className="stat-number">180</span>
                <span className="stat-label">Following</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bio Section */}
        <div className="profile-bio">
          <h4 className="profile-name">Sameer Nalakath</h4>
          <p>
            Digital Marketer 🚀 <br />
            React Learner 💻 <br />
            Building cool web apps 🔥
          </p>
        </div>

      </div>
    </div>
  );
};

export default Profile;