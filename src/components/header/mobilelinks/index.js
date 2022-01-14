import React from 'react'
import { faBriefcase, faCode, faPhone, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import "./mobilelinks.css"
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function MobileLinks({show, setShow}) {
    return (
        <div className='mobile'>
            <div className='close' onClick={(() => setShow(!show))}>
                <FontAwesomeIcon icon={faWindowClose} onClick={()=>setShow(false)}/>
            </div>
            <div className='all-mobile-links'>
                <div className="mobile-links">
                    <a href="#skills">
                        <FontAwesomeIcon className='links-icon' icon={faCode} size="2x" /> Skills
                    </a> 
                </div>
                <div className="mobile-links">
                    <a href="#work">
                        <FontAwesomeIcon className='links-icon' icon={faBriefcase} size="2x" /> Work
                    </a>
                </div>
                <div className="mobile-links">
                    <a href="#projects">
                        <FontAwesomeIcon className='links-icon' icon={faLaptopCode} size="2x" /> Projects
                    </a>
                </div>
                <div className="mobile-links">
                    <a href="#contact">
                        <FontAwesomeIcon className='links-icon' icon={faPhone} size="2x" /> Contact
                    </a>   
                </div>
            </div>
        </div>
    )
}

export default MobileLinks
