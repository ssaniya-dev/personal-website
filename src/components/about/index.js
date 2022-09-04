import React from 'react'
import Socials from '../duplicate/socials'
import './about.css'
function About() {
    return (
        <div className='about'>
            <div className='about-info'>
                Hello! I'm Saniya, an aspiring software engineer at Georgia Tech. Nice to meet you :)
            </div>
            <div className='resume-btn-div'>
                <button className='resume-btn'>Here is my Resume!</button>
            </div>
            <Socials/>
        </div>
    )
}

export default About
