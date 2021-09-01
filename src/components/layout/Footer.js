import React from 'react'
import styles from './layout.module.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className={styles.Footer}>
            &copy; {currentYear} Phil Arfuso
        </footer>
    )
}

export default Footer
