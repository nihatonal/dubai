import React, { useState } from 'react';
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

import './DropMenu.css';
function DropMenu(props) {
    const [drop, setDrop] = useState(false);


    const onToggle = () => {
        setDrop(!drop)
    }
    return (
        <div className={`dropmenu `}>
            <button
                onClick={onToggle}
                className={!drop ? `dropbtn ${props.className}` : `dropbtn active_drop ${props.className}`}

            >

                {props.dropbtn_name}
                {!drop ? <MdArrowDropDown className='dropbtn_icon' /> : <MdArrowDropUp className='dropbtn_icon' />}

            </button>
            <div className={!drop ? "dropmenu_container" : "dropmenu_container opendrop"}>
                <ul
                    style={drop ? { opacity: '1', visibility: "visible" } : { opacity: "0", visibility: "hidden" }}
                >
                    <li onClick={props.onClick}>Category number one</li>
                    <li onClick={props.onClick}>Apartments in Dubai</li>
                    <li onClick={props.onClick}>Category number twenty five</li>
                </ul>
            </div>
        </div>
    );
}

export default DropMenu;