import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../AIMGGGG/Logo.PNG';
import contactImg from '../../AIMGGGG/chat (1).png';
import { Link } from 'react-scroll';
import menu from '../../AIMGGGG/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img srcSet={Logo} alt="Logo" className='Logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>       
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>       
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>       
            <Link activeClass='active' to='srevices1' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Services</Link>       
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

            <img srcSet={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>       
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>       
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>       
            <Link activeClass='active' to='srevices1' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Srevices</Link>       
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>       
        </div>
    </nav>
  )
}

export default Navbar