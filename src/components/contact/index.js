import React from 'react'
import './contact.css'
import Socials from '../duplicate/socials'
import Sectioner from '../duplicate/section'
function Contact() {
    return (
        <div className='contact'>
            <Sectioner/>
            <label className='title'>Contact</label>
            <div className='contact-container'>
                <p>Want to get in touch? Feel free to contact me!</p>
                <Socials/>
            </div>
        </div>
    )
}

export default Contact
