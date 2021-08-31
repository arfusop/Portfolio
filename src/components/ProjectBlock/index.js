import React from 'react'

const ProjectBlock = ({ index, title }) => {
    return <div key={index}>{title}</div>
}

export default ProjectBlock
