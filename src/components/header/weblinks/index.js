import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './weblinks.css'
import { faBriefcase, faCode, faPhone, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
function Weblinks() {
    return (
        <div className="web">
            <div className="web-links">
                <a href="#skills">
                    <FontAwesomeIcon className='links-icon' icon={faCode} size="2x" /> Skills
                </a> 
            </div>
            <div className="web-links">
                 <a href="#work">
                    <FontAwesomeIcon className='links-icon' icon={faBriefcase} size="2x" /> Work
                </a>
            </div>
            <div className="web-links">
                 <a href="#projects">
                    <FontAwesomeIcon className='links-icon' icon={faLaptopCode} size="2x" /> Projects
                </a>
            </div>
            <div className="web-links">
                <a href="#contact">
                    <FontAwesomeIcon className='links-icon' icon={faPhone} size="2x" /> Contact
                </a>   
            </div>
        </div>
    )
}

export default Weblinks
