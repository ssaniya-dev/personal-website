import React, {useState} from 'react'
import WebLinks from './weblinks'
import MobileLinks from './mobilelinks'   
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
    const [show, setShow] = useState(false)
    return (
        <div className="header">
            <div className="name">Saniya</div>
            <div className="links">
               <div className='weblinks'>
                    <WebLinks/>
                </div> 
                <div className='mobilelinks'>
                    <div onClick={() => setShow(!show)}>
                        <FontAwesomeIcon className='links-icon' icon={faBars} size="2x" />
                    </div>
                    {show && <MobileLinks show={show} setShow={setShow}/>}
                </div> 
            </div>
        </div>
    )
}

export default Header
