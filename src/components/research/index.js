import React from 'react'
import './research.css'
import {ResearchArray} from '../data/research.js'
import Sectioner from '../duplicate/section'
function Research() {
    const data = ResearchArray;
    return (
        <div className='research'>
            <Sectioner/>
            <label className="title">Research</label>
            <div className='research-data'>
                {data.map((research) => {
                    return (
                        <div className='research-container'>
                            <img className='research-logo' src ={research.logo}/>
                            <div className='research-info'>
                                <label className='research-name'>{research.name}</label>
                                <div className='research-dates'>
                                    <label>{research.dateJoin}</label>-
                                    <label>{research.dateLeave}</label>
                                </div>
                                <div className='research-desc'>
                                    <p>{research.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Research
