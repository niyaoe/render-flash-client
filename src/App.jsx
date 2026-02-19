import React from 'react'
import LandingPage from './Pages/LandingPage/RenderFlashLanding'
import RenderFlashLogin from './Pages/LoginPage/RenderFlashLogin'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About/About'
import RenderFlashFeed from './Pages/PostSection/RenderFlashFeed'

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
          <Route path="/feed" element={<RenderFlashFeed />} />

        </Routes>
      </BrowserRouter>
     
      
    </div>
    </>
  )
}

export default App
