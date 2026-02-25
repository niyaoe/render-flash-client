import { NavLink, Outlet } from "react-router-dom";

import "./RenderFlashLayout.css";

export default function RenderFlashLayout() {
  return (
    <div className="rf-layout-wrapper">
      {/* ===== HEADER ===== */}
      <header className="rf-main-header">
        <div className="rf-header-inner rf-container">
          {/* ⭐ LOGO ROW */}
          <div className="rf-header-top">
            <div className="rf-feed-logo">renderFlash</div>

            <div className="rf-header-icons">
              <i className="bi bi-bell-fill"></i>
              <i className="bi bi-chat-dots"></i>
              <i className="bi bi-plus-square"></i>
            </div>
          </div>

          {/* TABS */}
          <div className="rf-feed-tabs">
            <NavLink to="feed" className="rf-tab-btn">
              Feed
            </NavLink>
            <NavLink to="search" className="rf-tab-btn">
              Search
            </NavLink>
            <NavLink to="chat" className="rf-tab-btn">
              <p className="bi bi-globe2">-Chat</p>
            </NavLink>
            <NavLink to="profile" className="rf-tab-btn">
              Profile
            </NavLink>
          </div>
        </div>
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main className="rf-layout-content">
        <Outlet />
      </main>
    </div>
  );
}
