import React from "react";
import LandingPage from "./Pages/LandingPage/RenderFlashLanding";
import RenderFlashLogin from "./Pages/LoginPage/RenderFlashLogin";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Feed from "./Pages/Feed_Section/Feed/Feed";
import RenderFlashLayout from "./Pages/Feed_Section/Layout/RenderFlashLayout";
import Search from "./Pages/Feed_Section/Search/Search";
import GlobalChat from "./Pages/Feed_Section/Chat/GlobalChat";
import Settings from "./Pages/Settings/Settings"
import Profile from "./Pages/Profile/Profile";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<RenderFlashLogin />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/about" element={<About />} />
            


            <Route path="/main" element={<RenderFlashLayout />}>
              <Route index element={<Feed />} />
              <Route path="feed" element={<Feed />} />
              <Route path="search" element={<Search />} />
              <Route path="chat" element={<GlobalChat />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
