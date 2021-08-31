import React from 'react'
import ProjectBlock from '../components/ProjectBlock'
import { PROJECTS } from '../utils/projects'

const Projects = () => {
    return (
        <section>
            {PROJECTS.map((project, idx) => {
                return <ProjectBlock index={idx} {...project} />
            })}
        </section>
    )
}

export default Projects
