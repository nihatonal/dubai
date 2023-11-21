import React from 'react';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';
import NavLinks from './NavLinks';
import ConsultationBtn from '../UI/ConsultationBtn';
import LanguageSelector from '../UI/LanguageSelector'
import './MainNavigation.css';
function MainNavigation(props) {
    return (
        <div className='main_navigation'>
            <div className="main_navigation_wrapper">

                <ReactSVG src={Logo} />


                <NavLinks />
                <div className="main_navigation_left_content">
                    <ConsultationBtn />
                    <LanguageSelector />
                    <a className='phone_btn' href="tel:+7 (212) 674-25-10 ">+7 (212) 674-25-10 </a>
                </div>

            </div>

        </div>
    );
}

export default MainNavigation;