import React from "react";
import "./RenderFlashLanding.css";
import { Link } from "react-router-dom";
import TargetCursor from "../../Blits/TargetCursor";
import GradientText from "../../componentblits/GradientText";

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
            <div className="rf-lang-wrapper">
              <select className="rf-language cursor-target">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>

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
          <GradientText
            colors={["#621eff", "#ffffff"]}
            animationSpeed={5}
            showBorder={true}
            className="custom-class"
          >
            <h1 className="rf-title cursor-target">
              Unlimited Edits,
              <br />
              Creativity & More
            </h1>
          </GradientText>

         
        </div>
      </section>
    </div>
  );
};

export default RenderFlashLanding;
