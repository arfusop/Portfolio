import React, { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { Modal, Image } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

import ResumeJpg from '../../assets/Phil Arfuso’s Resume.jpg'
import ResumePdf from '../../assets/Phil Arfuso’s Resume.pdf'

const ResumeModal = () => {
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
        <div>
            <FaFileAlt onClick={() => setIsModalOpen(true)} title="Resume" />
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
        </div>
    )
}

export default ResumeModal
