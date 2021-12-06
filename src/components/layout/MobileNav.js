import React, { useState, useEffect, useContext } from 'react'
import { Drawer } from 'antd'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import { ScrollContext } from '../../context/ScrollContextWrapper'
import { CAREER, PROJECTS, SKILLS, ABOUT } from '../../utils/constants'
import ProfileEdited from '../../assets/profile-edited-taller.jpg'
import ResumeModal from './ResumeModal'
import ThemeSwitch from './ThemeSwitch'
import Hamburger from '../Hamburger'
import styles from './layout.module.scss'

const MobileNav = () => {
    const { active, projects, skills, about, career } =
        useContext(ScrollContext)

    const [visible, setVisible] = useState(false)

    const onCloseClick = () => {
        setVisible(false)
    }

    useEffect(() => {
        return () => {
            setVisible(false)
        }
    }, [])

    const onNavLinkClick = next => {
        setVisible(false)

        setTimeout(() => {
            switch (next) {
                case ABOUT:
                    about.scrollTo()
                    break
                case SKILLS:
                    skills.scrollTo()
                    break
                case PROJECTS:
                    projects.scrollTo()
                    break
                case CAREER:
                    career.scrollTo()
                    break
                default:
                    break
            }
        }, 200)
    }

    return (
        <nav id="mobileNav" className={styles.MobileNavBar}>
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                    <span className={styles.name}>Phil Arfuso</span>{' '}
                    <span className={styles.job}>Full Stack Web Developer</span>
                </div>
                <ThemeSwitch />
                <Hamburger onClick={setVisible} visible={visible} />
            </div>
            <Drawer
                maskClosable={false}
                placement="bottom"
                visible={visible}
                onClose={onCloseClick}
                height="calc(100% - 2.5rem)"
                className="mobileNavDrawer"
                closable={false}>
                <div className={styles.mobileNavDrawerBody}>
                    <ul>
                        <li
                            className={active === ABOUT ? styles.active : null}
                            onClick={() => onNavLinkClick(ABOUT)}>
                            About
                        </li>
                        <li
                            className={active === SKILLS ? styles.active : null}
                            onClick={() => onNavLinkClick(SKILLS)}>
                            Skills
                        </li>
                        <li
                            className={
                                active === PROJECTS ? styles.active : null
                            }
                            onClick={() => onNavLinkClick(PROJECTS)}>
                            Projects
                        </li>
                        <li
                            className={active === CAREER ? styles.active : null}
                            onClick={() => onNavLinkClick(CAREER)}>
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
                </div>
            </Drawer>
        </nav>
    )
}

export default MobileNav
