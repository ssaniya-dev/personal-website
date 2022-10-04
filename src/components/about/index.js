import React from 'react'
import Socials from '../duplicate/socials'
import './about.css'
import Pdf from '/Users/saniyasavla/Desktop/Personal Projects/personal-website/src/components/data/saniya_savla_resume.pdf';

function About() {
    return (
        <div className='about'>
            <div className='about-info'>
                <p>Hello! I'm Saniya, a student studying computer science at <span className='college'>Georgia Tech</span>. Nice to meet you :)</p>
            </div>
            <div className='resume-btn-div'>
                <a href={Pdf} target="_blank" className='resume-btn'>Here is my Resume!</a>
            </div>
            <Socials/>
        </div>
    )
}

export default About
