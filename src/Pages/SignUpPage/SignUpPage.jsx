import React from "react";
import "../LoginPage/RenderFlashLogin.css";

const SignUpPage = () => {
  return (
    <div className="rf-login-wrapper">
      {/* LOGIN CARD */}
      <div className="rf-login-container">
        <div className="rf-login-card">
          <h2 className="rf-login-logo">renderFlash</h2>

          <h2 className="rf-login-title">Sign Up</h2>

          <form className="rf-login-form">

              <div className="rf-login-field">
              <input
                type="text"
                placeholder="Name"
                className="rf-login-input"
              />
            </div>

            <div className="rf-login-field">
              <input
                type="email"
                placeholder="Email Address"
                className="rf-login-input"
              />
            </div>

          
            <div className="rf-login-field">
              <input
                type="password"
                placeholder="Password"
                className="rf-login-input"
              />
            </div>

            <div className="rf-login-field">
              <input
                type="password"
                placeholder="Confirm Password"
                className="rf-login-input"
              />
            </div>

            <button type="submit" className="rf-login-btn">
              Sign Up
            </button>
          </form>

          <div className="rf-login-footer">
            <p>
              Already in renderFlash?{" "}
              <span className="rf-login-signup">Sign in now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
