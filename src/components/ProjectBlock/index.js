import React from 'react'
import { Image, Carousel } from 'antd'
import { FaExternalLinkAlt } from 'react-icons/fa'

import DisplayCard from '../Card'
import styles from './ProjectBlock.module.scss'

const ProjectBlock = ({ index, title, description, url, images }) => {
    const titleNode = (
        <a key={'anchor' + index} href={url}>
            <div className="projectTitle">
                <h4 key={'h4' + index}>{title}</h4>
                <FaExternalLinkAlt key={'icon' + index} />
            </div>
        </a>
    )

    return (
        <DisplayCard className="projectCard" title={titleNode}>
            <div className={styles.ProjectBlock} key={index}>
                <Carousel
                    dots={{ className: 'carouselDots' }}
                    key={'carousel' + index}
                    autoplay
                    effect="fade">
                    {images.map((image, i) => (
                        <div className={styles.carouselItem} key={i}>
                            <Image key={'image' + i} src={image} />
                        </div>
                    ))}
                </Carousel>
                <p key={'description' + index}>{description}</p>
            </div>
        </DisplayCard>
    )
}

export default ProjectBlock
