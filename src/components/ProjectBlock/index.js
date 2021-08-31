import React from 'react'
import { Image } from 'antd'
import { FaExternalLinkAlt } from 'react-icons/fa'

import styles from './ProjectBlock.module.scss'

const ProjectBlock = ({ index, title, img, description, url, tech }) => {
    return (
        <div className={styles.ProjectBlock} key={index}>
            <h4>{title}</h4>
            <div className={styles.zoomOverImage}>
                <Image preview={false} src={img} />
            </div>
            <p>{description}</p>
            <div className={styles.footer}>
                {/* <div>{tech.map(Icon => ({ Icon }))}</div> */}
                <a href={url}>
                    <FaExternalLinkAlt />
                </a>
            </div>
        </div>
    )
}

export default ProjectBlock
