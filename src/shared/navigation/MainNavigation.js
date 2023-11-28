import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';
import Logo_768 from '../../assets/icons/logo_768.svg';
import Logo_mobile from '../../assets/icons/logo_mobile.svg'
import NavLinks from './NavLinks';
import ConsultationBtn from '../UI/ConsultationBtn';
import LanguageSelector from '../UI/LanguageSelector';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';
import './MainNavigation.css';
function MainNavigation(props) {
    const [showSideMenu, setShowSideMenu] = useState(false);
    return (
        <div className='main_navigation'>
            <div className="main_navigation_wrapper"            >
                <NavLink to='/' style={{ border: 'none', padding: '0' }}>
                    <ReactSVG className='logo_destkop' src={Logo} />
                    <ReactSVG className='logo_ipad' src={Logo_768} />
                    <ReactSVG className='logo_mobile' src={Logo_mobile} />
                </NavLink>

                <NavLinks />
                <div className="main_navigation_left_content">
                    <ConsultationBtn />
                    <LanguageSelector />
                    <a className='phone_btn' href="tel:+7 (212) 674-25-10 ">+7 (212) 674-25-10 </a>
                </div>
                <Hamburger onClick={() => setShowSideMenu(!showSideMenu)} show={showSideMenu} />
            </div>
            <SideMenu
                show={showSideMenu}
                close={() => setShowSideMenu(false)}
                onClick={() => setShowSideMenu(false)}
            />

        </div>
    );
}

export default MainNavigation;