import React from 'react'
import { Card } from 'antd'

import { cardBody } from './Card.module.scss'

const DisplayCard = ({ children, className, title }) => {
    return (
        <Card title={title} className={`${cardBody} ${className ?? ''}`}>
            {children}
        </Card>
    )
}

export default DisplayCard
