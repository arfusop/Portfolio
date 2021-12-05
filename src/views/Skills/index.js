import React, { useContext } from 'react'
import { Progress, Card } from 'antd'
import {
    SiJavascript,
    SiReact,
    SiCss3,
    SiSass,
    SiGatsby,
    SiNextdotjs,
    SiNodedotjs,
    SiGraphql,
    SiMongodb,
    SiPostgresql,
    SiCypress,
    SiJest
} from 'react-icons/si'
import { FaArrowRight } from 'react-icons/fa'

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
            <h1>
                {`Skills.map(skill `}
                <FaArrowRight />
                {` {`}
            </h1>
            <div className={styles.skillsGrid}>
                <Card title={<SiJavascript />}>
                    <Progress percent={85} type="dashboard" />
                </Card>
                <Card
                    title={
                        <>
                            <SiReact />
                            <SiNextdotjs />
                            <SiGatsby />
                        </>
                    }>
                    <Progress percent={90} type="dashboard" />
                </Card>
                <Card
                    title={
                        <>
                            <SiSass />
                            <SiCss3 />
                        </>
                    }>
                    <Progress percent={95} type="dashboard" />
                </Card>
                <Card
                    title={
                        <>
                            <SiNodedotjs />
                            <SiGraphql />
                        </>
                    }>
                    <Progress percent={65} type="dashboard" />
                </Card>
                <Card
                    title={
                        <>
                            <SiMongodb />
                            <SiPostgresql />
                        </>
                    }>
                    <Progress percent={60} type="dashboard" />
                </Card>
                <Card
                    title={
                        <>
                            <SiCypress />
                            <SiJest />
                        </>
                    }>
                    <Progress percent={45} type="dashboard" />
                </Card>
                <h1>{`})`}</h1>
            </div>
        </section>
    )
}

export default Skills
