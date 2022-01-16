import React from 'react'
import { ProjectArray } from '../data/projects'
import Sectioner from '../duplicate/section'
import './projects.css'
function Project() {
    const data = ProjectArray
    return (
        <div className='projects'>
            <Sectioner/>
            <label className="title">Projects</label>
            <div>
                {data.map((project) => {
                    return (
                        <div className='project-area'>
                            <div className='project-info'>
                                <label className='project-title'>{project.title}</label>
                                <p>{project.about}</p>
                                <div className="project-urls">
                                <div className='project-url' href={project.demo}>
                                    {project.demo&& 
                                    <a href={project.demo} target="_blank">
                                        <div className='link-btns'>
                                            Demo
                                        </div>
                                    </a>}
                                </div>
                                <div className='project-url'>
                                    <a href={project.github} target="_blank"> 
                                        <div className='link-btns'>
                                            Github
                                        </div>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <img className='project-pic' src={project.image}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
