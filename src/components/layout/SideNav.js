import React, { useState, useContext } from 'react'
import { Modal, Image, Switch } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaFileAlt,
    FaMoon,
    FaSun
} from 'react-icons/fa'

import { ThemeContext } from '../../context/ThemeContextWrapper'
import { ScrollContext } from '../../context/ScrollContextWrapper'
import { CAREER, PROJECTS, SKILLS, ABOUT } from '../../utils/constants'
import ResumePdf from '../../assets/Phil Arfuso’s Resume.pdf'
import ResumeJpg from '../../assets/Phil Arfuso’s Resume.jpg'
import ProfileEdited from '../../assets/profile-edited-taller.jpg'
import styles from './layout.module.scss'

const SideNav = () => {
    const { active, projects, skills, about, career } =
        useContext(ScrollContext)
    const { setCurrentTheme, isChecked } = useContext(ThemeContext)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const TitleNode = (
        <div className="modalTitle">
            <DownloadOutlined
                onClick={() => window.open(ResumePdf, '_blank', 'noreferrer')}
            />{' '}
            Resume
        </div>
    )

    return (
        <nav id="fullNav" className={styles.SideNavigation}>
            <div className={styles.header}>
                <div className={styles.nameBox}>
                    <span className={styles.firstName}>Phil</span>
                    <span className={styles.lastName}>Arfuso</span>
                </div>
                <span className={styles.job}>Full Stack Web Developer</span>
                <div className={styles.themeToggle}>
                    <Switch
                        onChange={setCurrentTheme}
                        checked={isChecked}
                        checkedChildren={<FaMoon />}
                        unCheckedChildren={<FaSun />}
                    />
                </div>
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
                <div>
                    <FaFileAlt
                        onClick={() => {
                            console.log('wtf')
                            setIsModalOpen(true)
                        }}
                        title="Resume"
                    />
                </div>
            </div>
            <img src={ProfileEdited} alt="Profile" />
            <span className={styles.copyright}>
                PA © {new Date().getFullYear()}
            </span>
            <Modal
                closable
                mask
                maskClosable
                onCancel={() => setIsModalOpen(false)}
                title={TitleNode}
                visible={isModalOpen}
                className="resumeModal"
                footer={null}>
                <Image src={ResumeJpg} alt="resume" />
            </Modal>
        </nav>
    )
}

export default SideNav
