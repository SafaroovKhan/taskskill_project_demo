import React from 'react'

export default function LangCard({ langHeader }) {

    const handleLangChange = (lang) => {
        langHeader(lang);
      };

  return (
    <>
        <div className="menu-langcard">
            <div className="menu-langcard-container">
                <button className="menu-langcard-container-btn" onClick={() => handleLangChange('AZ')}>
                    AZ
                </button>
                <button className="menu-langcard-container-btn" onClick={() => handleLangChange('TR')}>
                    TR
                </button>
                <button className="menu-langcard-container-btn" onClick={() => handleLangChange('RU')}>
                    RU
                </button>
                <button className="menu-langcard-container-btn" onClick={() => handleLangChange('EN')}>
                    EN
                </button>
            </div>
        </div>
    </>
  )
}
