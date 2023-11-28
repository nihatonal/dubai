import React from 'react';

import Hero from './Components/Hero';
import LastProjects from './Components/LastProjects'
import Expertise from './Components/Expertise'

import './Main.css'
function Main(props) {
    return (
        <div className='main container'>
            <Hero />
            <LastProjects />
            <Expertise />
        </div>
    );
}

export default Main;