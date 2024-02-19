import React from 'react'
import kapitallogo from './Profile Exp Images/kapitalimg.jpg'
import aztelekomlogo from './Profile Exp Images/aztelekomimg.jpg'
import mobilexlogo from './Profile Exp Images/mobileximg.jpg'

export default function ProfileExp({headerTxt}) {
  return (
    <>
        <div className="profile-exp">
            <div className="profile-exp-container">
                <div className="profile-exp-container-top-section">
                    <h1 className="profile-exp-container-top-section-header-txt">
                        {headerTxt}
                    </h1>
                    <div className="profile-exp-container-top-section-btn-box">
                        <button className="profile-exp-container-top-section-btn">
                            <i className="fa-solid fa-plus profile-exp-container-top-section-btn-icon"></i>
                        </button>
                        <button className="profile-exp-container-top-section-btn">
                            <i className="fa-solid fa-pen profile-exp-container-top-section-btn-icon"></i>
                        </button>
                    </div>
                </div>
                <div className="profile-exp-container-content">
                    <div className="profile-exp-container-content-box">
                        <img src={kapitallogo} alt="" className="profile-exp-container-content-box-img" />
                        <div className="profile-exp-container-content-box-details">
                            <p className="profile-exp-container-content-box-details-small-txt">January 2024 - March 2024</p>
                            <p className="profile-exp-container-content-box-details-big-txt">UX/UI Design</p>
                            <p className="profile-exp-container-content-box-details-mid-txt">Kapital Bank</p>
                        </div>
                    </div>
                    <div className="profile-exp-container-content-box">
                        <img src={aztelekomlogo} alt="" className="profile-exp-container-content-box-img" />
                        <div className="profile-exp-container-content-box-details">
                            <p className="profile-exp-container-content-box-details-small-txt">January 2024 - March 2024</p>
                            <p className="profile-exp-container-content-box-details-big-txt">UX/UI Design</p>
                            <p className="profile-exp-container-content-box-details-mid-txt">Aztelekom</p>
                        </div>
                    </div>
                    <div className="profile-exp-container-content-box">
                        <img src={mobilexlogo} alt="" className="profile-exp-container-content-box-img" />
                        <div className="profile-exp-container-content-box-details">
                            <p className="profile-exp-container-content-box-details-small-txt">January 2024 - March 2024</p>
                            <p className="profile-exp-container-content-box-details-big-txt">UX/UI Design</p>
                            <p className="profile-exp-container-content-box-details-mid-txt">Mobilex</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
