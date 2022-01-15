import React from 'react'
import { SkillsArray } from '../data/skills';
import Sectioner from '../duplicate/section'
import "./skills.css"
function Skills() {
    const data = SkillsArray;
    return (
        <div className="skills">
            <Sectioner/>
            <label className="title">
                Skills
            </label>
            <div className='skills-container'>
                {data.map((skill)=> {
                    return (
                        <div className="skills-data">
                            <div className='skill-icon'>
                                {skill.icon}
                            </div>
                            <label className="skill-name">{skill.name}</label>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Skills
