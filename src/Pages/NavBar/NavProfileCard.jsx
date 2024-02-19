import React from 'react'
import profilepic from '../Profile/Profile Images/profilepicture.png'
export default function NavProfileCard() {
  return (
    <>
        <div className="nav-profilecard">
            <div className="nav-profilecard-container">
                <div className="nav-profilecard-container-top-section">
                    <img src={profilepic} alt="" className="nav-profilecard-container-top-section-pp" />
                    <h1 className="nav-profilecard-container-top-section-header-txt">Safarov Rafiq</h1>
                    <p className="nav-profilecard-container-top-section-title-txt">Frontend Developer</p>
                    <button className="nav-profilecard-container-top-section-btn">View Profile</button>
                </div>
                <div className="nav-profilecard-container-mid-section">
                    <button className="nav-profilecard-container-mid-section-btn">
                        <i className="fa-solid fa-gear nav-profilecard-container-mid-section-btn-icon"></i>
                        Account setting
                    </button>
                </div>
                <div className="nav-profilecard-container-bottom-section">
                    <button className="nav-profilecard-container-bottom-section-btn">
                        <i class="fa-solid fa-right-from-bracket nav-profilecard-container-bottom-section-btn-icon"></i>
                        Log out 
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
