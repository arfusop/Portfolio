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
            <h1>Skills & Abilities</h1>
            <div className={styles.skillSector}>
                <h2>Front End Tools & Frameworks</h2>
                <hr />
                <h3>JavaScript | TypeScript</h3>
                <ul>
                    <li>ES6 and beyond</li>
                </ul>
                <h3>JS Frameworks</h3>
                <ul>
                    <li>React</li>
                    <li>Next.js</li>
                </ul>
                <h3>HTML | CSS</h3>
                <ul>
                    <li>SASS</li>
                    <li>CSS Modules</li>
                    <li>Styled Components/CSS in JS</li>
                </ul>
                <h2>Back End Tools & Frameworks</h2>
                <hr />
                <h3>Node | TypeScript</h3>
                <ul>
                    <li>Express</li>
                    <li>Restful APIs</li>
                    <li>GraphQL APIs</li>
                    <li>Apollo & Prisma</li>
                </ul>
                <h3>Databases</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>PostGres (SQL Based)</li>
                </ul>
            </div>
        </section>
    )
}

export default Skills
