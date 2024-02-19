import { useState } from 'react'
import './App.css'
import Navbar from './Pages/NavBar/Navbar'
import Profile from './Pages/Profile/Profile'
import ProfileFooter from './Pages/Profile/Profile Components/Profile Footer/ProfileFooter'
import ProfileRec from './Pages/Profile/Profile Components/ProfileRec'
function App() {

  return (
    <>
        <Navbar/>
        <div className="page">
          <div className="page-container">
            <Profile/>
            <ProfileRec/>
          </div>
        </div>
        <ProfileFooter/>
    </>
  )
}

export default App
