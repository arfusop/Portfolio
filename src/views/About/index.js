import React from 'react'
import { Button } from 'antd'

import styles from './About.module.scss'

const About = () => {
    return (
        <section className={styles.About}>
            <h1>
                Developer.
                <br />
                <span>Thinker.</span>
                <br />
                Problem Solver.
                <br />
                <span>Gamer.</span>
                <br />
                Cycler.
            </h1>
            <p>
                Currently working <a href="https://memx.com/">@ MEMX</a>.
                Working on side projects, both for business and pleasure. Take a
                look around. If you like what you see, let's talk.
            </p>
            <a href="mailto:arfusop.dev@gmail.com">
                <Button
                    className={styles.contactButton}
                    shape="round"
                    type="primary">
                    Say Hello
                </Button>
            </a>
            {/* <img src={ProfilePic} alt="profile_pic" />  */}
        </section>
    )
}

export default About
