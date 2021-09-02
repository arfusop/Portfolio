import React from 'react'
import { Timeline, Popover } from 'antd'

import MarketView from './MarketView'
import Bootcamp from './Bootcamp'
import styles from './Career.module.scss'

const Career = () => {
    return (
        <section className={styles.Career}>
            <h3>Career</h3>
            <Timeline>
                <Popover
                    placement="topLeft"
                    content={MarketView}
                    title="Online Project Supervisor">
                    <Timeline.Item>
                        <span className={styles.job}>MarketView Research</span>
                        <br />
                        <span className={styles.duration}>
                            March 2014 - February 2018
                        </span>
                    </Timeline.Item>
                </Popover>
                <Popover
                    placement="topLeft"
                    content={Bootcamp}
                    title="Part Time Student">
                    <Timeline.Item>
                        <span className={styles.job}>
                            Rutgers Coding Bootcamp
                        </span>
                        <br />
                        <span className={styles.duration}>
                            April 2017 - September 2017
                        </span>
                    </Timeline.Item>
                </Popover>
                <Popover
                    placement="topLeft"
                    content=""
                    title="Junior Web Developer">
                    <Timeline.Item>
                        <span className={styles.job}>
                            EarthCam Inc. - Jr. Web Developer
                        </span>
                        <br />
                        <span className={styles.duration}>
                            March 2018 - July 2019
                        </span>
                    </Timeline.Item>
                </Popover>
                <Popover
                    placement="topLeft"
                    content=""
                    title="Lead Front End Web Developer">
                    <Timeline.Item>
                        <span className={styles.job}>
                            EarthCam Inc. - Lead Web Developer
                        </span>
                        <br />
                        <span className={styles.duration}>
                            July 2019 - November 2019
                        </span>
                    </Timeline.Item>
                </Popover>
                <Popover
                    placement="topLeft"
                    content=""
                    title="Front End Web Developer">
                    <Timeline.Item>
                        <span className={styles.job}>Members Exchange</span>
                        <br />
                        <span className={styles.duration}>
                            December 2019 - Current
                        </span>
                    </Timeline.Item>
                </Popover>
            </Timeline>
        </section>
    )
}

export default Career
