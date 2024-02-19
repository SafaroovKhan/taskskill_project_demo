import React, {useState} from 'react'
import LangCard from './LangCard'

export default function Menu({ closeMenu }) {

  const [openLangCard, setOpenLangCard] = useState(false)
  const [selectedLang, setSelectedLang] = useState('AZ');


  const handleLangCard = () => {
    setOpenLangCard(!openLangCard)
  }

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    setOpenLangCard(false); 
  };


  return (
    <>  

    <div className="menu-card">
      <div className="menu-container">
        <div className="menu-top">
          <button className="lang-sup-btn" onClick={handleLangCard}>
            <h1 className="lang-header">{selectedLang}</h1>
            <i className="fa-solid fa-chevron-down menu-icon"></i>
          </button>
          {openLangCard && <LangCard langHeader={handleLangChange}/>}
          <button className="menu-exit-btn" onClick={closeMenu}>
            <i className="fa-solid fa-xmark menu-icon"></i>
          </button>
        </div>
        <div className="menu-nav">
          <button className="menu-nav-btn">
            <i className="fa-solid fa-house menu-nav-btn-icon"></i>
            <h1 className="menu-btn-header">Home</h1>
          </button>
          <button className="menu-nav-btn">
            <i className="fa-solid fa-user menu-nav-btn-icon"></i>
            <h1 className="menu-btn-header">Profile</h1>
          </button>
          <button className="menu-nav-btn">
            <i className="fa-solid fa-circle-nodes menu-nav-btn-icon"></i>
            <h1 className="menu-btn-header">Skill building</h1>
          </button>
          <button className="menu-nav-btn">
            <i className="fa-solid fa-map menu-nav-btn-icon"></i>
            <h1 className="menu-btn-header">Internship</h1>
          </button>
          <button className="menu-nav-btn">
            <i className="fa-solid fa-globe menu-nav-btn-icon"></i>
            <h1 className="menu-btn-header">Communities</h1>
          </button>
          <button className="menu-nav-btn">
            <i className="fa-solid fa-ticket menu-nav-btn-icon"></i>
            <h1 className="menu-btn-header">Hackathons</h1>
          </button>
          <button className="menu-nav-btn">
            <i className="fa-solid fa-laptop-code menu-nav-btn-icon"></i>
            <h1 className="menu-btn-header">Bootcamps</h1>
          </button>
          <button className="menu-nav-btn">
            <i className="fa-solid fa-map-pin menu-nav-btn-icon"></i>
            <h1 className="menu-btn-header">Simulation</h1>
          </button>
        </div>
      </div>
    </div>
        
    </>
  )
}
