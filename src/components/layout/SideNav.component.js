import React, { useState } from 'react'
import { Button, Dialog } from '@blueprintjs/core'
import {
    FaEnvelope,
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaDiscord
} from 'react-icons/fa'
import styles from './layout.module.scss'
import ResumeImg from '../../assets/Phil Arfuso’s Resume.jpg'

const SideNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <nav className={styles.SideNav}>
            <div className={styles.info}>
                <h1>Phil Arfuso</h1>
                <h4>arfusop.dev@gmail.com</h4>
                <Button
                    icon="document"
                    className={styles.resumeButton}
                    text="Resume"
                    onClick={() => setIsModalOpen(true)}
                />
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
                <Dialog
                    icon="document"
                    onClose={() => setIsModalOpen(false)}
                    title="My Resume"
                    isOpen={isModalOpen}
                    className="resumeModal">
                    <img src={ResumeImg} alt="resume" />
                </Dialog>
            </ul>
        </nav>
    )
}

export default SideNav
