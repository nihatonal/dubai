import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { LanguageContext } from "../../shared/context/Language";
import { Text } from "../../shared/context/Language";
import SimpleSlider from '../../shared/UI/SimpleSlider';

import arrow from '../../assets/icons/arrow.svg';
import arrow_ipad from '../../assets/icons/arrow_ipad.svg'

import './Hero.css'
function Hero(props) {
    const lang = useContext(LanguageContext);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        // afterChange: current => this.setState({ current: current })
    }
    return (
        <div className='hero_wrapper'>
            <div className="hero_content_wrapper">
                <div className="hero_frame"></div>
                <p className="hero_suptitle"><Text tid="hero_suptitle" /></p>
                <h1 className="hero_title">
                    {lang.dictionary["hero_title"][0]}
                    <br></br>
                    <span>{lang.dictionary["hero_title"][1]}</span>
                    {lang.dictionary["hero_title"][2]}
                </h1>
                <button className='hero_btn'>
                    <Text tid="consultation_btn" />
                    <ReactSVG className='hero_btn_arrow' src={arrow} />
                    <ReactSVG className='hero_btn_arrow arrow_ipad' src={arrow_ipad} />

                </button>
            </div>

            <div className="hero_slider_container">
                <SimpleSlider next={'NEXT'} prev={'PREV'} settings={settings}>
                    <div className="hero_slide_1 slide_mobile"></div>
                    <div className="hero_slide_2 slide_mobile"></div>
                    <div className="hero_slide_3 slide_mobile"></div>
                </SimpleSlider>
            </div>
        </div>
    );
}

export default Hero;