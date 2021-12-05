import React, { useContext } from 'react'
import ProjectBlock from '../components/ProjectBlock'
import { PROJECTS } from '../utils/projects'
import { ScrollContext } from '../context/ScrollContextWrapper'

import styles from './views.module.scss'

const Projects = () => {
    const { projects } = useContext(ScrollContext)

    return (
        <section ref={projects.ref} id="projects" className={styles.Projects}>
            {PROJECTS.map((project, idx) => {
                return <ProjectBlock key={idx} {...project} />
            })}
        </section>
    )
}

export default Projects
