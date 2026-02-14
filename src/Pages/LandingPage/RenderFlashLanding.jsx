import React from "react";
import "./RenderFlashLanding.css";
import { Link } from "react-router-dom";
import TargetCursor from "../../Blits/TargetCursor";


const RenderFlashLanding = () => {
  return (
    <div className="rf-wrapper">

      {/* BLITS */}

      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {/* NAVBAR */}
      <header className="rf-header">
        <nav className="rf-navbar">
          <div className="rf-logo cursor-target">renderFlash</div>

          <div className="rf-nav-right">
            <select className="rf-language cursor-target">
              <option>English</option>
              <option>Hindi</option>
            </select>

            <Link to="/login" className="rf-signin-btn cursor-target">
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="rf-hero">
        <div className="rf-overlay"></div>

        <div className="rf-hero-content">
          <h1 className="rf-title cursor-target">
            Unlimited Edits,
            <br />
            Creativity & More
          </h1>

          <p className="rf-subtitle cursor-target">Start creating today. Cancel anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default RenderFlashLanding;
