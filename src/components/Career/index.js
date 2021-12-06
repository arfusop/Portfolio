import React, { useContext } from 'react'
import { Timeline, Popover } from 'antd'
import { FaInfoCircle } from 'react-icons/fa'

import { ScrollContext } from '../../context/ScrollContextWrapper'
import { CAREER } from '../../utils/constants'
import MarketView from './MarketView'
import Bootcamp from './Bootcamp'
import EarthcamJr from './EarthcamJr'
import EarthcamLead from './EarthcamLead'
import Memx from './Memx'
import styles from './Career.module.scss'

const Career = () => {
    const { career, setActive } = useContext(ScrollContext)

    return (
        <section
            onMouseEnter={() => setActive(CAREER)}
            ref={career.ref}
            className={styles.Career}>
            <h1>Career</h1>
            <Timeline mode="left">
                <Timeline.Item>
                    <div className={styles.timelineItem}>
                        <span className={styles.job}>Members Exchange</span>
                        <Popover
                            content={Memx}
                            trigger="click"
                            title="Front End Web Developer">
                            <FaInfoCircle />
                        </Popover>
                    </div>
                    <span className={styles.duration}>
                        December 2019 - Current
                    </span>
                </Timeline.Item>
                <Timeline.Item>
                    <div className={styles.timelineItem}>
                        <span className={styles.job}>
                            EarthCam Inc. - Lead Web Developer
                        </span>
                        <Popover
                            content={EarthcamLead}
                            trigger="click"
                            title="Lead Front End Web Developer">
                            <FaInfoCircle />
                        </Popover>
                    </div>
                    <span className={styles.duration}>
                        July 2019 - November 2019
                    </span>
                </Timeline.Item>
                <Timeline.Item>
                    <div className={styles.timelineItem}>
                        <span className={styles.job}>
                            EarthCam Inc. - Jr. Web Developer
                        </span>
                        <Popover
                            content={EarthcamJr}
                            trigger="click"
                            title="Junior Web Developer">
                            <FaInfoCircle />
                        </Popover>
                    </div>
                    <span className={styles.duration}>
                        March 2018 - July 2019
                    </span>
                </Timeline.Item>
                <Timeline.Item>
                    <div className={styles.timelineItem}>
                        <span className={styles.job}>
                            Rutgers Coding Bootcamp
                        </span>
                        <Popover
                            trigger="click"
                            content={Bootcamp}
                            title="Part Time Student">
                            <FaInfoCircle />
                        </Popover>
                    </div>
                    <span className={styles.duration}>
                        April 2017 - September 2017
                    </span>
                </Timeline.Item>
                <Timeline.Item>
                    <div className={styles.timelineItem}>
                        <span className={styles.job}>MarketView Research</span>
                        <Popover
                            trigger="click"
                            content={MarketView}
                            title="Online Project Supervisor">
                            <FaInfoCircle />
                        </Popover>
                    </div>
                    <span className={styles.duration}>
                        March 2014 - February 2018
                    </span>
                </Timeline.Item>
            </Timeline>
        </section>
    )
}

export default Career
