import React from 'react'
import ProjectBlock from '../components/ProjectBlock'
import { PROJECTS } from '../utils/projects'

import styles from './views.module.scss'

const Projects = () => {
    return (
        <section className={styles.Projects}>
            {PROJECTS.map((project, idx) => {
                return <ProjectBlock key={idx} {...project} />
            })}
        </section>
    )
}

export default Projects
