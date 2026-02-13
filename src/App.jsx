import React from 'react'
import LandingPage from './Pages/LandingPage/RenderFlashLanding'
import RenderFlashLogin from './Pages/LoginPage/RenderFlashLogin'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<RenderFlashLogin />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
     
      
    </div>
  )
}

export default App
