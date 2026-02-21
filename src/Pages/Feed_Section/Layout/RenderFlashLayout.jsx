import { NavLink, Outlet } from "react-router-dom";
import "./RenderFlashLayout.css";

export default function RenderFlashLayout() {
  return (
    <div className="rf-layout-wrapper">

      {/* ===== HEADER ===== */}
      <header className="rf-main-header">
        <div className="rf-header-inner rf-container">

          <div className="rf-feed-logo">renderFlash</div>

          <div className="rf-feed-tabs">
            <NavLink to="feed" className="rf-tab-btn">
              Feed
            </NavLink>

            <NavLink to="search" className="rf-tab-btn">
              Search
            </NavLink>

            <NavLink to="chat" className="rf-tab-btn">
              Global Chat
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