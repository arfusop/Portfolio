import React, { useState, useEffect } from 'react'
import { Drawer } from 'antd'
import { FaGithub, FaLinkedinIn, FaTwitter, FaFileAlt } from 'react-icons/fa'

import ProfileEdited from '../../assets/profile-edited-taller.jpg'
import ResumeModal from './ResumeModal'
import ThemeSwitch from './ThemeSwitch'
import Hamburger from '../Hamburger'
import styles from './layout.module.scss'

const MobileNav = () => {
    const [visible, setVisible] = useState(false)

    const onCloseClick = () => {
        setVisible(false)
    }

    useEffect(() => {
        return () => {
            setVisible(false)
        }
    }, [])

    return (
        <nav id="mobileNav" className={styles.MobileNavBar}>
            <div className={styles.header}>
                <div>
                    <span className={styles.name}>Phil Arfuso</span>{' '}
                    <span className={styles.divider}>|</span>{' '}
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
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Career</li>
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
