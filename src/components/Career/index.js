import React from 'react'
import { Timeline, Popover } from 'antd'

import MarketView from './MarketView'
import styles from './Career.module.scss'

const Career = () => {
    return (
        <section className={styles.Career}>
            <h3>Career</h3>
            <Timeline>
                <Popover
                    placement="topLeft"
                    content={MarketView}
                    title="MarketView Research (March 2014 - February 2018)">
                    <Timeline.Item>MarketView Research</Timeline.Item>
                </Popover>
                <Timeline.Item>Rutgers Coding Bootcamp</Timeline.Item>
                <Timeline.Item>EarthCam Inc.</Timeline.Item>
                <Timeline.Item>MEMX</Timeline.Item>
            </Timeline>
        </section>
    )
}

export default Career
