import React from 'react';
import { Text } from "../../shared/context/Language";

import './Expertise.css';
function Expertise(props) {
    return (
        <div className='expertise_container'>
            <div className="expertise_wrapper">
                <div className="expertise_content">
                    <p className="expertise_suptitle">
                        <Text tid="expertise" />
                    </p>
                    <h4 className="expertise_title"><Text tid='expertise_title' /></h4>
                    <p className="expertise_desc"><Text tid='expertise_desc' /></p>
                </div>
            </div>
        </div>
    );
}

export default Expertise;