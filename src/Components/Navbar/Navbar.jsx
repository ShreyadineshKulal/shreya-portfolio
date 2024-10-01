import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/shreyalogo.jpg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
        setMenuOpen(true);  // Show close icon
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
        setMenuOpen(false);  // Hide close icon
    };

    // This function will both navigate and close the menu
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);  // Set the active menu item
        closeMenu();  // Close the menu after clicking any section
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo" style={{ width: '50px', height: '50px', borderRadius: '20px' }} />
            <img src={menu_open} onClick={openMenu} alt="open menu" className='nav-mob-open' />

            <ul ref={menuRef} className='nav-menu'>
                {/* Each link will now trigger the handleMenuClick function */}
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#home'>
                        <p onClick={() => handleMenuClick("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>
                        <p onClick={() => handleMenuClick("about")}>About Me</p>
                    </AnchorLink>
                    {menu === "about" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#education'>
                        <p onClick={() => handleMenuClick("education")}>Education</p>
                    </AnchorLink>
                    {menu === "education" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#projects'>
                        <p onClick={() => handleMenuClick("projects")}>Projects</p>
                    </AnchorLink>
                    {menu === "projects" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#certifications'>
                        <p onClick={() => handleMenuClick("certifications")}>Certifications</p>
                    </AnchorLink>
                    {menu === "certifications" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#experience'>
                        <p onClick={() => handleMenuClick("experience")}>Experience</p>
                    </AnchorLink>
                    {menu === "experience" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p onClick={() => handleMenuClick("contact")}>Contact Me</p>
                    </AnchorLink>
                    {menu === "contact" && <img src={underline} alt='' />}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
