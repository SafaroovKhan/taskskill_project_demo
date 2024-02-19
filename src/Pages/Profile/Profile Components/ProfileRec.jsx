import React, {useState} from 'react'
import stockimg from "../Profile Images/stockimg.png"

export default function ProfileRec() {

    const [openSkillCard, setOpenSkillCard] = useState(false)
    const [openInternshipCard, setOpenInternshipCard] = useState(false)
    const [openSchoolCard, setOpenSchoolCard] = useState(false)

    const handleSkillCard = () => {
        setOpenSkillCard(!openSkillCard)
        setOpenInternshipCard(false)
        setOpenSchoolCard(false)
    }
    const handleInternshipCard = () => {
        setOpenInternshipCard(!openInternshipCard)
        setOpenSchoolCard(false)
        setOpenSkillCard(false)
    }
    const handleSchoolCard = () => {
        setOpenSchoolCard(!openSchoolCard)
        setOpenSkillCard(false)
        setOpenInternshipCard(false)
    }

  return (
    <>
        <div className="profile-rec">
            <div className="profile-rec-container">
                <div className="profile-rec-container-header">
                    <h1 className="profile-rec-container-header-txt">
                        Recomendations
                    </h1>
                </div>
                <div className="profile-rec-container-btn-box">
                    <button className="profile-rec-container-btn" onClick={handleSkillCard}>
                        <div className="profile-rec-container-btn-wrapper">
                            <i className="fa-solid fa-circle-nodes profile-rec-container-btn-icon"></i>
                            <h1 className="profile-rec-container-btn-txt">Skill building</h1>
                        </div>
                        <i className="fa-solid fa-chevron-down profile-rec-container-btn-icon"></i>
                    </button>
                    {openSkillCard && 
                        <div className="skillbuilding-card-content">
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <button className="skillbuilding-card-content-box-btn">
                                    show more <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    }
                    <button className="profile-rec-container-btn" onClick={handleInternshipCard}>
                        <div className="profile-rec-container-btn-wrapper">
                            <i className="fa-solid fa-map profile-rec-container-btn-icon"></i>
                            <h1 className="profile-rec-container-btn-txt">Internship</h1>
                        </div>
                        <i className="fa-solid fa-chevron-down profile-rec-container-btn-icon"></i>
                    </button>
                    {openInternshipCard && 
                        <div className="skillbuilding-card-content">
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <button className="skillbuilding-card-content-box-btn">
                                    show more <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    }
                    <button className="profile-rec-container-btn" onClick={handleSchoolCard}>
                        <div className="profile-rec-container-btn-wrapper">
                            <i className="fa-solid fa-laptop-code profile-rec-container-btn-icon"></i>
                            <h1 className="profile-rec-container-btn-txt">Schools</h1>
                        </div>
                        <i className="fa-solid fa-chevron-down profile-rec-container-btn-icon"></i>
                    </button>
                    {openSchoolCard && 
                        <div className="skillbuilding-card-content">
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <div className="skillbuilding-card-content-box">
                                <img src={stockimg} alt="" className="skillbuilding-card-content-box-img" />
                                <div className="skillbuilding-card-content-box-txts">
                                    <h1 className="skillbuilding-card-content-box-txts-header-txt">
                                        Microsoft Power Bi:
                                    </h1>
                                    <p className="skillbuilding-card-content-box-txts-txt">
                                        price: 50azn
                                    </p>
                                </div>
                            </div>
                            <button className="skillbuilding-card-content-box-btn">
                                    show more <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
