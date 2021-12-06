import React, { useContext } from 'react'
import ProjectBlock from '../../components/ProjectBlock'
import { PROJECTS as PROJECTS_VAR } from '../../utils/constants'
import { PROJECTS } from '../../utils/projects'
import { ScrollContext } from '../../context/ScrollContextWrapper'

import styles from './Projects.module.scss'

const Projects = () => {
    const { projects, setActive } = useContext(ScrollContext)

    return (
        <section
            onMouseEnter={() => setActive(PROJECTS_VAR)}
            ref={projects.ref}
            id="projects"
            className={styles.Projects}>
            <h1>Projects</h1>
            {PROJECTS.map((project, idx) => {
                return <ProjectBlock key={idx} {...project} />
            })}
        </section>
    )
}

export default Projects
