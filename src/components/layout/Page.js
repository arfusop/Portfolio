import React from 'react'
import styles from './layout.module.scss'

const Page = ({ children }) => {
    return <section className={styles.Page}>{children}</section>
}

export default Page
