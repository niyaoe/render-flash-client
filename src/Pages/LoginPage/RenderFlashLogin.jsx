import React from "react";
import "./RenderFlashLogin.css";

const RenderFlashLogin = () => {
  return (
    <div className="rf-login-wrapper">
      {/* LOGIN CARD */}
      <div className="rf-login-container">
        <div className="rf-login-card">
          <h2 className="rf-login-logo">renderFlash</h2>

          <h2 className="rf-login-title">Sign In</h2>

          <form className="rf-login-form">
            <div className="rf-login-field">
              <input
                type="email"
                placeholder="Email or phone number"
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

            <button type="submit" className="rf-login-btn">
              Sign In
            </button>
          </form>

          <div className="rf-login-footer">
            <p>
              New to renderFlash?{" "}
              <span className="rf-login-signup">Sign up now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderFlashLogin;
