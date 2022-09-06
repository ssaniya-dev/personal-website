import React from 'react'
import Socials from '../duplicate/socials'
import './about.css'
function About() {
    return (
        <div className='about'>
            <div className='about-info'>
                <p>Hello! I'm Saniya, a student studying computer science at <span className='college'>Georgia Tech</span>. Nice to meet you :)</p>
            </div>
            <div className='resume-btn-div'>
                
                <a href="https://drive.google.com/file/d/1YwWpsInBdMvMd6ys5_dt6I56BWcGT0-o/view?usp=sharing" target="_blank" className='resume-btn'>Here is my Resume!</a>
            </div>
            <Socials/>
        </div>
    )
}

export default About
