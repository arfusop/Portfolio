import React, { useContext } from 'react'

import { SKILLS } from '../../utils/constants'
import { ScrollContext } from '../../context/ScrollContextWrapper'
import styles from './Skills.module.scss'

const Skills = () => {
    const { skills, setActive } = useContext(ScrollContext)

    return (
        <section
            onMouseEnter={() => setActive(SKILLS)}
            ref={skills.ref}
            id="skills"
            className={styles.Skills}>
            SKILLS SECTION
        </section>
    )
}

export default Skills
