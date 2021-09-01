import React from 'react'
import { Timeline, Popover } from 'antd'

import styles from './views.module.scss'

const Career = () => {
    return (
        <section className={styles.Career}>
            <h3>Career</h3>
            <Timeline>
                <Popover
                    placement="topLeft"
                    content={`Things I did here`}
                    title="MarketView Research (March 2014 - February 2018)">
                    <Timeline.Item>First Job</Timeline.Item>
                </Popover>
                <Timeline.Item>Second Job</Timeline.Item>
                <Timeline.Item>MEMX</Timeline.Item>
            </Timeline>
        </section>
    )
}

export default Career
