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
                <div>
                    <h2>Front End Tools & Frameworks</h2>
                    <p>
                        Extremely comfortable with all of the skillsets listed
                        here except for TypeScript. Actively learning and trying
                        to master that language.
                    </p>
                </div>
                <div className={styles.listWrapper}>
                    <div className={styles.list}>
                        <h3>JavaScript | TypeScript</h3>
                        <ul>
                            <li>ES6 and beyond</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h3>JS Frameworks</h3>
                        <ul>
                            <li>React</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h3>HTML | CSS</h3>
                        <ul>
                            <li>SASS</li>
                            <li>CSS Modules</li>
                            <li>Styled Components/CSS in JS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.skillSector}>
                <div>
                    <h2>Back End Tools & Frameworks</h2>
                    <p>
                        I have production level experience working in PostGres &
                        with Restful APIs. My experience with GraphQL & MongoDB
                        is more exploratory and used in side projects.
                    </p>
                </div>
                <div className={styles.listWrapper}>
                    <div className={styles.list}>
                        <h3>Node | TypeScript</h3>
                        <ul>
                            <li>Express</li>
                            <li>Restful APIs</li>
                            <li>GraphQL APIs</li>
                            <li>Apollo & Prisma</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Databases</h3>
                        <ul>
                            <li>MongoDB</li>
                            <li>PostGres (SQL Based)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
