import React from 'react'
import { Image } from 'antd'
import { FaExternalLinkAlt } from 'react-icons/fa'

import styles from './ProjectBlock.module.scss'

const ProjectBlock = ({ index, title, img, description, url, tech }) => {
    return (
        <div className={styles.ProjectBlock} key={index}>
            <h4 key={'h4' + index}>{title}</h4>
            <div key={'zoomWrap' + index} className={styles.zoomOverImage}>
                <Image key={'image' + index} preview={false} src={img} />
            </div>
            <p key={'description' + index}>{description}</p>
            <div key={'footer' + index} className={styles.footer}>
                <div className={styles.techStack} key={'tech' + index}>
                    {tech.map(tech => {
                        return (
                            <div key={`${tech.title}${index}`}>{tech.Icon}</div>
                        )
                    })}
                </div>
                <a key={'anchor' + index} href={url}>
                    <FaExternalLinkAlt key={'icon' + index} />
                </a>
            </div>
        </div>
    )
}

export default ProjectBlock
