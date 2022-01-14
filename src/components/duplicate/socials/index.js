import React from 'react'
import './socials.css'

import { SocialsArray } from '../../data/socials'
function Socials() {
    const data = SocialsArray
    return (
        <div className="social-contact">
            {data.map((item) => {
                return(
                    <a target="_blank" href={item.url}>
                        <div className='social-icons'>
                            <img src={item.icon}  className='social-icon'/>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default Socials
