import React from 'react';
import { Text } from "../../shared/context/Language";

import './ConsultationBtn.css'
function ConsultationBtn(props) {
    return (
        <button className="consultation-btn">
            <Text tid="consultation_btn" />
        </button>
    );
}

export default ConsultationBtn;