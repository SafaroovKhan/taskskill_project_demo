import React, {useState} from 'react'
import logo from './Navbar Images/taskilledlogo.png'
import Menu from './Menu';
import NavProfileCard from './NavProfileCard';

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const [openProfileCard, setOpenProfileCard] = useState(false);
    
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleProfileCard = () => {
        setOpenProfileCard(!openProfileCard)
    }

  return (
    <>
        <div className="navbar">
            <div className="nav-container">
                <div className="menu">
                    <button className="menu-btn" onClick={handleMenu}>
                        <i className="fa-solid fa-bars menu-btn-icon"></i>
                        <h1 className="menu-btn-txt">Menu</h1>
                    </button>
                    {openMenu && <Menu closeMenu={() => setOpenMenu(false)} />}
                </div>
                <div className="brand">
                    <div className="brand-img">
                        <img src={logo} alt="" className="brand" />
                    </div>
                </div>
                <div className="nav-btns">
                    <button className="nav-btn">
                        <i className="fa-solid fa-magnifying-glass nav-icon"></i>
                    </button>
                    <button className="nav-btn" onClick={handleProfileCard}>
                        <i className="fa-solid fa-user nav-icon"></i>
                    </button>
                    {openProfileCard && <NavProfileCard/>}
                    <button className="nav-btn">
                        <i className="fa-solid fa-bell nav-icon"></i>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
