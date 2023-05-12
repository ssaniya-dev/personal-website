import React from 'react'
import './work.css'
import {WorkArray} from '../data/work.js'
import Sectioner from '../duplicate/section'
function Work() {
    const data = WorkArray;
    return (
        <div className='work'>
            <Sectioner/>
            <label className="title">Work Experience</label>
            <div className='work-data'>
                {data.map((work) => {
                    return (
                        <div className='work-container'>
                            <img className='work-logo' src ={work.logo}/>
                            <div className='work-info'>
                                <label className='work-name'>{work.name}</label>
                                <div className='work-dates'>
                                    <label>{work.dateJoin}</label>-
                                    <label>{work.dateLeave}</label>
                                </div>
                                <div className='work-desc'>
                                    <p>{work.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work
