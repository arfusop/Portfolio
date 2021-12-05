import React, { useState } from 'react'
import { Modal, Image } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { FaGithub, FaLinkedinIn, FaTwitter, FaFileAlt } from 'react-icons/fa'

import ResumePdf from '../../assets/Phil Arfuso’s Resume.pdf'
import ResumeJpg from '../../assets/Phil Arfuso’s Resume.jpg'
import styles from './layout.module.scss'

const SideNav = () => {
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
        <nav className={styles.SideNavigation}>
            <div className={styles.header}>
                <div className={styles.nameBox}>
                    <span className={styles.firstName}>Phil</span>
                    <span className={styles.lastName}>Arfuso</span>
                </div>
                <span className={styles.job}>Full Stack Web Developer</span>
            </div>
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
                    {' '}
                    <FaTwitter title="Twitter" />
                </a>
                <FaFileAlt
                    onClick={() => {
                        console.log('wtf')
                        setIsModalOpen(true)
                    }}
                    title="Resume"
                />
            </div>{' '}
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
