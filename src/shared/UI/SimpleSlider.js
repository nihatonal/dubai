import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "../context/Language";
import './SimpleSlider.css'


export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            current: 0,
        };
    }
    next() {
        this.slider.slickNext();
        this.setState({ current: this.state.current + 1 })
    }
    previous() {
        this.slider.slickPrev();
        this.setState({ current: this.state.current - 1 })
    }
    render() {
        var settings = this.props.settings;
        return (

            <div className="slide-container">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {this.props.children}
                </Slider>
                <div className="slide-arrow-wrapper">
                    <button className="slide-arrow-btn"
                        // disabled={this.state.current < 1}
                        onClick={this.previous}>
                        <Text tid="slide_prevbtn" />
                    </button>
                    <div className="slide-arrow-rectangle"></div>
                    <button className="slide-arrow-btn"
                        // disabled={this.state.current > this.props.slides.length - 2}
                        onClick={this.next} >
                        <Text tid="slide_nextbtn" />
                    </button>
                </div>
                <div className="hero_slider_content">
                    <div className="hero_slider_content-item">
                        <p style={this.state.current === 0 ? { color: '#fcd54c' } : null}>01</p>
                        <p><Text tid="slide_content_1" /></p>
                    </div>
                    <div className="hero_slider_content-item">
                        <p style={this.state.current === 1 ? { color: '#fcd54c' } : null}>02</p>
                        <p><Text tid="slide_content_2" /></p>
                    </div>
                    <div className="hero_slider_content-item">
                        <p style={this.state.current === 2 ? { color: '#fcd54c' } : null}>03</p>
                        <p><Text tid="slide_content_3" /></p>
                    </div>
                </div>

            </div>

        );
    }
}