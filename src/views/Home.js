import React from 'react'
import Page from '../components/layout/Page'
import Footer from '../components/layout/Footer'
import Projects from './Projects'
import Career from './Career'

import styles from './views.module.scss'

const Home = () => {
    return (
        // <Page>
        <section className={styles.Home}>
            <Projects />
            <Career />
            <Footer />
        </section>
        // </Page>
    )
}

export default Home
