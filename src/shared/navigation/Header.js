import React from 'react';
import MainNavigation from './MainNavigation';

import './Header.css'
function Header(props) {
    return (
        <div className='header'>
            <MainNavigation />
        </div>
    );
}

export default Header;