import React from 'react'
import {
    FaEnvelope,
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaDiscord,
    FaFileAlt
} from 'react-icons/fa'
import styles from './layout.module.scss'

const SideNav = () => {
    return (
        <nav className={styles.SideNav}>
            <div className={styles.info}>
                <h1>Phil Arfuso</h1>
                <h4>arfusop.dev@gmail.com</h4>
            </div>
            <ul className={styles.links}>
                <li className={styles.navLink}>About</li>
                <li className={styles.navLink}>Projects</li>
                <li className={styles.navLink}>Career</li>
            </ul>
            <ul className={styles.contactLinks}>
                <li className={styles.navLink}>
                    <FaGithub title="My GitHub" />
                </li>
                <li className={styles.navLink}>
                    <FaLinkedin title="My LinkedIn" />
                </li>
                <li className={styles.navLink}>
                    <FaTwitter title="My Twitter" />
                </li>
                <li className={styles.navLink}>
                    <FaDiscord title="My Discord" />
                </li>
                <li className={styles.navLink}>
                    <FaEnvelope title="Email Me" />
                </li>
                <li className={styles.navLink}>
                    <FaFileAlt title="My Resume" />
                </li>
            </ul>
        </nav>
    )
}

export default SideNav
