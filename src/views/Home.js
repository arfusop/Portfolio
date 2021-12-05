import React from 'react'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Career from '../components/Career'

import styles from './views.module.scss'

const Home = () => {
    return (
        <section className={styles.Home}>
            <About />
            <Skills />
            <Projects />
            <Career />
        </section>
    )
}

export default Home
