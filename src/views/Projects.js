import React, { useContext } from 'react'
import ProjectBlock from '../components/ProjectBlock'
import { PROJECTS as PROJECTS_VAR } from '../utils/constants'
import { PROJECTS } from '../utils/projects'
import { ScrollContext } from '../context/ScrollContextWrapper'

import styles from './views.module.scss'

const Projects = () => {
    const { projects, setActive } = useContext(ScrollContext)

    return (
        <section
            onMouseEnter={() => setActive(PROJECTS_VAR)}
            ref={projects.ref}
            id="projects"
            className={styles.Projects}>
            {PROJECTS.map((project, idx) => {
                return <ProjectBlock key={idx} {...project} />
            })}
        </section>
    )
}

export default Projects
