import React from "react";
import "./RenderFlashLanding.css";
import { Link } from "react-router-dom";

const RenderFlashLanding = () => {
  return (
    <div className="rf-wrapper">

      {/* NAVBAR */}
      <header className="rf-header">
        <nav className="rf-navbar">
          <div className="rf-logo">renderFlash</div>

          <div className="rf-nav-right">
            <select className="rf-language">
              <option>English</option>
              <option>Hindi</option>
            </select>

            <Link to="/login" className="rf-signin-btn">
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="rf-hero">
        <div className="rf-overlay"></div>

        <div className="rf-hero-content">
          <h1 className="rf-title">
            Unlimited Edits,<br />
            Creativity & More
          </h1>

          <p className="rf-subtitle">
            Start creating today. Cancel anytime.
          </p>

        </div>
      </section>

    </div>
  );
};

export default RenderFlashLanding;
