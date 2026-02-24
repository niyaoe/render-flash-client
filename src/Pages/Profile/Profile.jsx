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
            <h2 className="profile-username">sameer_fx</h2>

            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">54</span>
                <span className="stat-label">Posts</span>
              </div>

              <div className="stat">
                <span className="stat-number">300</span>
                <span className="stat-label">Fans</span>
              </div>

              <div className="stat">
                <span className="stat-number">143</span>
                <span className="stat-label">Following</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bio Section */}
        <div className="profile-bio">
          <h4 className="profile-name">Sameer Nalakath</h4>
          <p>Adobe AfterEffects</p>
          <p>CapCut</p>
        </div>

      </div>
    </div>
  );
};

export default Profile;