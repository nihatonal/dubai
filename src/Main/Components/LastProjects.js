import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from "../../shared/context/Language";
import { Text } from "../../shared/context/Language";
import SimpleSlider from '../../shared/UI/SimpleSlider';
import { MdArrowForwardIos } from "react-icons/md";
import { Data } from '../../assets/Data';
import './LastProjects.css'
function LastProjects(props) {
    const lang = useContext(LanguageContext);
    const Slides = Data.projects;
    const Slides_data = lang.dictionary['lastprojects_data'];

    const settings = {
        dots: true,
        dotsClass: "button__bar",
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2
                }
            }
        ]
    }
    const [filter, setFilter] = useState(Slides)
    const filterHandler = (item) => {
        const filtered = Slides.filter((el) => el.view === item)
        if (item === "all") {
            setFilter(Slides)
        } else {
            setFilter(filtered)
        }
    }

    return (
        <div className='lastprojects_container'>
            <div className="lastprojects_titlebar">
                <h3 className="lastprojects_title">
                    <Text tid="lastprojects_title" />
                </h3>
                <div className="lastprojects_titlebar-items">
                    {/* lang.dictionary["hero_title"][2] */}
                    <button onClick={() => filterHandler('all')} className="lastprojects_btn">
                        {lang.dictionary["lastprojects_buttons"][0]}
                    </button>
                    <button onClick={() => filterHandler('building')} className="lastprojects_btn">
                        {lang.dictionary["lastprojects_buttons"][1]}
                    </button>
                    <button onClick={() => filterHandler('interior')} className="lastprojects_btn">
                        {lang.dictionary["lastprojects_buttons"][2]}
                    </button>
                    <NavLink to='/' className="lastprojects_btn">
                        {lang.dictionary["lastprojects_buttons"][3]}
                    </NavLink>
                </div>
            </div>
            <div className="lastprojects_slides">
                <SimpleSlider settings={settings}>
                    {filter.map((item, index) =>
                        <div className="lastprojects_slide"
                            key={item.id}
                        >


                            <img src={item.image} alt="slide" />
                            <p className="lastprojects_slide_type">{Slides_data[index].type}</p>
                            <div className="lastprojects_slide_modal">
                                <p className="lastprojects_slide-title">{Slides_data[index].region}</p>
                                <p className="lastprojects_slide-desc">{Slides_data[index].desc}</p>
                                <NavLink className="lastprojects_slide-link" to='/'>
                                    <Text tid="lastprojects-link-btn" />
                                    <MdArrowForwardIos />
                                </NavLink>
                            </div>
                        </div>
                    )}


                </SimpleSlider>

            </div>
        </div>
    );
}

export default LastProjects;