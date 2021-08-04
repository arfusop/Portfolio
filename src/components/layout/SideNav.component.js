import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Dialog, Icon } from '@blueprintjs/core'
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import styles from './layout.module.scss'
import ResumeImg from '../../assets/Phil Arfuso’s Resume.jpg'
import ResumePdf from '../../assets/Phil Arfuso’s Resume.pdf'

const SideNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const TitleNode = (
        <div>
            <Icon
                icon="download"
                onClick={() => window.open(ResumePdf, '_blank', 'noreferrer')}
            />{' '}
            Resume
        </div>
    )
    return (
        <nav className={styles.SideNav}>
            <div className={styles.info}>
                <h1>
                    <Link to="/">Phil Arfuso</Link>
                </h1>
                <h4>arfusop.dev@gmail.com</h4>
                <Button
                    icon="document"
                    className={styles.resumeButton}
                    text="Resume"
                    onClick={() => setIsModalOpen(true)}
                />
            </div>
            <ul className={styles.links}>
                <li className={styles.navLink}>
                    <Link to="/about">About</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="projects">Projects</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="career">Career</Link>
                </li>
            </ul>
            <ul className={styles.contactLinks}>
                <li className={styles.navLink}>
                    <a
                        href="https://github.com/arfusop"
                        target="_blank"
                        rel="noreferrer">
                        <FaGithub title="My GitHub" />
                    </a>
                </li>
                <li className={styles.navLink}>
                    <a
                        href="www.linkedin.com/in/phil-arfuso"
                        target="_blank"
                        rel="noreferrer">
                        <FaLinkedin title="My LinkedIn" />
                    </a>
                </li>
                <li className={styles.navLink}>
                    <a
                        href="https://twitter.com/Phil_Arfuso"
                        target="_blank"
                        rel="noreferrer">
                        <FaTwitter title="My Twitter" />
                    </a>
                </li>
                {/* <li className={styles.navLink}>
                    <FaDiscord title="My Discord" />
                </li> */}
                <li className={styles.navLink}>
                    <a href="mailto:arfusop.dev@gmail.com">
                        <FaEnvelope title="Email Me" />
                    </a>
                </li>
                <Dialog
                    onClose={() => setIsModalOpen(false)}
                    title={TitleNode}
                    isOpen={isModalOpen}
                    className="resumeModal">
                    <img src={ResumeImg} alt="resume" />
                </Dialog>
            </ul>
        </nav>
    )
}

export default SideNav
