import React from 'react';
import ConsultationBtn from '../UI/ConsultationBtn';
import LanguageSelector from '../UI/LanguageSelector';
import NavLinks from './NavLinks';


import './SideMenu.css';
function SideMenu(props) {
    return (
        <div
            className='sidemenu-container'
            style={props.show ? { left: '0' } : null}

        >
            <NavLinks onClick={props.onClick} />
            <div className="sidemenu_content">
                <ConsultationBtn />    
                <a className='phone_btn' href="tel:+7 (212) 674-25-10 ">+7 (212) 674-25-10 </a>
                <LanguageSelector />
            </div>
        </div>
    );
}

export default SideMenu;