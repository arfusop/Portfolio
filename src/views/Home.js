import React from 'react'
import Footer from '../components/layout/Footer'
import Projects from './Projects'
import About from './About'
import Career from '../components/Career'

import styles from './views.module.scss'

const Home = () => {
    return (
        <section className={styles.Home}>
            <About />
            <Projects />
            <Career />
            <Footer />
        </section>
    )
}

export default Home
