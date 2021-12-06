import React, { useContext } from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import { ScrollContext } from '../../context/ScrollContextWrapper'
import { CAREER, PROJECTS, SKILLS, ABOUT } from '../../utils/constants'

import ResumeModal from './ResumeModal'
import ProfileEdited from '../../assets/profile-edited-taller.jpg'
import styles from './layout.module.scss'
import ThemeSwitch from './ThemeSwitch'

const SideNav = () => {
    const { active, projects, skills, about, career } =
        useContext(ScrollContext)

    return (
        <nav id="fullNav" className={styles.SideNavigation}>
            <div className={styles.header}>
                <div className={styles.nameBox}>
                    <span className={styles.firstName}>Phil</span>
                    <span className={styles.lastName}>Arfuso</span>
                </div>
                <span className={styles.job}>Full Stack Web Developer</span>
                <ThemeSwitch />
            </div>
            <ul>
                <li
                    className={active === ABOUT ? styles.active : null}
                    onClick={about.scrollTo}>
                    About
                </li>
                <li
                    className={active === SKILLS ? styles.active : null}
                    onClick={skills.scrollTo}>
                    Skills
                </li>
                <li
                    className={active === PROJECTS ? styles.active : null}
                    onClick={projects.scrollTo}>
                    Projects
                </li>
                <li
                    className={active === CAREER ? styles.active : null}
                    onClick={career.scrollTo}>
                    Career
                </li>
            </ul>
            <div className={styles.navIcons}>
                <a
                    href="https://github.com/arfusop"
                    target="_blank"
                    rel="noreferrer">
                    <FaGithub title="GitHub" />
                </a>
                <a
                    href="https://www.linkedin.com/in/phil-arfuso"
                    target="_blank"
                    rel="noreferrer">
                    <FaLinkedinIn title="LinkedIn" />
                </a>
                <a
                    href="https://twitter.com/Phil_Arfuso"
                    target="_blank"
                    rel="noreferrer">
                    <FaTwitter title="Twitter" />
                </a>
                <ResumeModal />
            </div>
            <img src={ProfileEdited} alt="Profile" />
            <span className={styles.copyright}>
                PA © {new Date().getFullYear()}
            </span>
        </nav>
    )
}

export default SideNav
