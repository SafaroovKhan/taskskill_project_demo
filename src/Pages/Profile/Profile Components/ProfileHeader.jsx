import React from 'react'
import profilebanner from '../Profile Images/profilebanner.jpg'
import profilepicture from '../Profile Images/profilepicture.png'

export default function ProfileHeader() {
  return (
    <>
        <div className="profile-header">
            <div className="header-banner-box">
                <img src={profilebanner} alt="" className="header-banner" />
                <button className="banner-btn">
                    <i class="fa-solid fa-pen banner-btn-icon"></i>
                </button>
            </div>
            <div className="header-content-box">
                <div className="header-profile-img-box">
                    <img src={profilepicture} alt="" className="profile-img" />
                </div>
                <div className="header-info-box">
                    <div className="personal-info">
                        <div className="pi-header-box">
                            <div className="pi-header-details">
                                <div className='pi-header-name-box'>
                                    <h1 className="pi-header">Rafiq Safarov</h1>
                                    <p className="pi-username">@safaroovrafiq</p>
                                </div>
                                <div className="pi-header-details-box">
                                    <i class="fa-solid fa-user-tie pi-header-details-icon"></i>
                                    <p className="pi-header-details-txt">Frontend Developer, App Development</p>
                                </div>
                                <div className="pi-header-details-box">
                                    <i class="fa-solid fa-location-dot pi-header-details-icon"></i>
                                    <p className="pi-header-details-txt">Baku City, Azerbaijan</p>
                                </div>
                            </div>
                            <button className="pi-btn">
                                <i class="fa-solid fa-pen pi-btn-icon"></i>
                            </button>
                        </div>
                        <div className="pi-bottom-box">
                            <div className="pi-bottom-details">
                                <p className="pi-bottom-details-txt">2324 Followers</p>
                                <p className="pi-bottom-details-txt">3239 Follows</p>
                            </div>
                            <button className="pi-bottom-box-more-btn">
                                <i className="fa-solid fa-list-ul pi-bottom-box-more-btn-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
