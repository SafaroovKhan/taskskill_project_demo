import React from 'react'
import footerlogo from './Profile Footer Images/taskilledfooterlogo.png'
export default function ProfileFooter() {
  return (
    <>
        <div className="profile-footer">
            <div className="profile-footer-container">
                <div className="profile-footer-container-top-section">
                    <div className="profile-footer-container-top-section-column ">
                        <img src={footerlogo} alt="" className="profile-footer-container-top-section-column-img" />
                        <div className="profile-footer-container-top-section-column-btns">
                            <button className="profile-footer-container-top-section-column-btn grid-btn-1">
                                <i className="fa-brands fa-linkedin profile-footer-container-top-section-column-btn-icon"></i>
                            </button>
                            <button className="profile-footer-container-top-section-column-btn grid-btn-2">
                                <i className="fa-brands fa-instagram profile-footer-container-top-section-column-btn-icon"></i>
                            </button>
                            <button className="profile-footer-container-top-section-column-btn grid-btn-3">
                                <i className="fa-brands fa-facebook profile-footer-container-top-section-column-btn-icon"></i>
                            </button>
                            <button className="profile-footer-container-top-section-column-btn grid-btn-4">
                                <i className="fa-brands fa-telegram profile-footer-container-top-section-column-btn-icon"></i>
                            </button>
                            <button className="profile-footer-container-top-section-column-btn grid-btn-5">
                                <i className="fa-brands fa-youtube profile-footer-container-top-section-column-btn-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className="profile-footer-container-top-section-column">
                        <h1 className="profile-footer-container-top-section-column-header-txt">
                            Menu
                        </h1>
                        <div className="profile-footer-container-top-section-column-nav">
                            <button className="profile-footer-container-top-section-column-btn">
                                Home
                            </button>
                            <button className="profile-footer-container-top-section-column-btn">
                                About
                            </button>
                            <button className="profile-footer-container-top-section-column-btn">
                                Our Partners
                            </button>
                        </div>
                    </div>
                    <div className="profile-footer-container-top-section-column">
                        <h1 className="profile-footer-container-top-section-column-header-txt">
                            Help
                        </h1>
                        <div className="profile-footer-container-top-section-column-nav">
                            <button className="profile-footer-container-top-section-column-btn">
                                FAQ
                            </button>
                            <button className="profile-footer-container-top-section-column-btn">
                                How it works?
                            </button>
                        </div>
                    </div>
                    <div className="profile-footer-container-top-section-column">
                        <h1 className="profile-footer-container-top-section-column-header-txt">
                            Contact
                        </h1>
                        <div className="profile-footer-container-top-section-column-nav">
                            <button className="profile-footer-container-top-section-column-btn">
                                <i className="fa-solid fa-location-dot profile-footer-container-top-section-column-btn-icon"></i>
                                79 Z.Nudiraliyev str, Baku, Azerbaijan
                            </button>
                            <button className="profile-footer-container-top-section-column-btn">
                                <i className="fa-solid fa-envelope profile-footer-container-top-section-column-btn-icon"></i>
                                info@taskilled.com
                            </button>
                            <button className="profile-footer-container-top-section-column-btn">
                                <i className="fa-solid fa-phone profile-footer-container-top-section-column-btn-icon"></i>                                
                                +994 77 567 41 11
                            </button>
                        </div>
                    </div>
                </div>
                <div className="profile-footer-container-bottom-section">
                    <h1 className="profile-footer-container-bottom-section-header-txt">Taskilled 2023. All rights reserved.</h1>
                    <div className="profile-footer-container-bottom-section-btn-box">
                        <button className="profile-footer-container-bottom-section-btn">Terms and Conditions</button>
                        <button className="profile-footer-container-bottom-section-btn">Privacy Policy</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
