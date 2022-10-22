import React from 'react';
import  Icons  from '../common/Icon';


const NavBar = () => {
    return (
        <header className='header'>
            <div className="container">

            <div className="header_logo">
                <img src={ Icons.react } alt="" />
            </div>
            <nav className="header_nav">
                <ul className="header_menu">
                    <li className="header_menu-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="header_menu-item">
                        <a href="#">Skills</a>
                    </li>
                    <li className="header_menu-item">
                        <a href="#">Projects</a>
                    </li>
                </ul>
                <ul className="header_social">
                    <li className="header_social-item">
                        <a href="#">
                            <img src={ Icons.facebook } alt="" />
                        </a>
                    </li>
                    <li className="header_social-item">
                        <a href="#">
                            <img src={ Icons.linkedin } alt="" />
                        </a>
                    </li>
                    <li className="header_social-item">
                        <a href="#">
                            <img src={ Icons.tiktok} alt="" />
                        </a>
                    </li>
                </ul>
                <a href="#" className="header_contact">Contact me</a>
            </nav>
            </div>
        </header>
    );
};

export default NavBar;