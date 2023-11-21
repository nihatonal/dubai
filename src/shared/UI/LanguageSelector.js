import React, { useContext } from "react";
import { LanguageContext } from "../context/Language";
import "./LanguageSelector.css";

export default function LanguageSelector(props) {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);


  return (
    <div className="select-lang">
      <button className='select-lang_btn'
        style={userLanguage === "en" ? { color: "#fcd54c" } : { color: "#929292",cursor:'pointer' }}
        onClick={() => userLanguageChange('en')}

      >En</button>
      <button className="select-lang_btn"
        style={userLanguage === "ru" ? { color: "#fcd54c" } : { color: "#929292",cursor:'pointer' }}
        onClick={() => userLanguageChange('ru')}
      >Ru</button>

    </div >
  );
}
