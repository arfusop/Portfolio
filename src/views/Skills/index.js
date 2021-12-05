import React, { useContext } from 'react'

import { ScrollContext } from '../../context/ScrollContextWrapper'
import styles from './Skills.module.scss'

const Skills = () => {
    const { skills } = useContext(ScrollContext)

    return (
        <section ref={skills.ref} id="skills" className={styles.Skills}>
            SKILLS SECTION
        </section>
    )
}

export default Skills
