import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from "../context/Language";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

import './NavLinks.css'
function NavLinks(props) {
    const lang = useContext(LanguageContext);
    const [drop, setDrop] = useState(false)

    const onToggle = () => {
        setDrop(!drop)
    }
    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            <button
                onClick={onToggle}
                className={!drop ? 'navlink_item_btn' : 'navlink_item_btn active_drop'}

            >
                {lang.dictionary["navlinks"][0]}
                {!drop ? <MdArrowDropDown className='dropbtn' /> : <MdArrowDropUp className='dropbtn' />}

            </button>
            {/* <NavLink exact
                className={({ isActive }) => (isActive ? 'active' : 'navlink_item')}
                to="/"
            >
                {lang.dictionary["navlinks"][0]}
            </NavLink> */}
            <NavLink exact
                className={({ isActive }) => (isActive ? 'active' : 'navlink_item')}
                to="/blog"
            >
                {lang.dictionary["navlinks"][1]}
            </NavLink>
            <NavLink exact
                className={({ isActive }) => (isActive ? 'active' : 'navlink_item')}
                to="/about"
            >
                {lang.dictionary["navlinks"][2]}
            </NavLink>
            <NavLink exact
                className={({ isActive }) => (isActive ? 'active' : 'navlink_item')}
                to="/contact"
            >
                {lang.dictionary["navlinks"][3]}
            </NavLink>
        </div >
    );
}

export default NavLinks;