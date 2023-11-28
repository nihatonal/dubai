import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from "../context/Language";

import DropMenu from '../UI/DropMenu';
import 'react-dropdown/style.css';
import './NavLinks.css'
function NavLinks(props) {
    const lang = useContext(LanguageContext);

    return (
        <div className={`navbar ${props.className}`} style={props.style}>


            <DropMenu
                className={'navlink_item'}
                onClick={props.onClick}
                dropbtn_name={lang.dictionary["navlinks"][0]}
            />

            <NavLink
                onClick={props.onClick}
                className={({ isActive }) => (isActive ? 'active' : 'navlink_item')}
                to="/blog"
            >
                {lang.dictionary["navlinks"][1]}
            </NavLink>
            <NavLink
                onClick={props.onClick}
                className={({ isActive }) => (isActive ? 'active' : 'navlink_item')}
                to="/about"
            >
                {lang.dictionary["navlinks"][2]}
            </NavLink>
            <NavLink
                onClick={props.onClick}
                className={({ isActive }) => (isActive ? 'active' : 'navlink_item')}
                to="/contact"
            >
                {lang.dictionary["navlinks"][3]}
            </NavLink>
        </div >
    );
}

export default NavLinks;