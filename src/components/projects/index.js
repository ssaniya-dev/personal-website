import React from 'react'
import { ProjectArray } from '../data/projects'
import './projects.css'
function Project() {
    const data = ProjectArray
    return (
        <div className='projects'>
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
                                    <a>
                                        <div className='link-btns'>
                                            Demo
                                        </div>
                                    </a>}
                                </div>
                                <div className='project-url' href={project.github}>
                                    <a>
                                        <div className='link-btns'>
                                            github
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
