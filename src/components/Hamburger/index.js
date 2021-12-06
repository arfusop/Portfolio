import React from 'react'
import styles from './Hamburger.module.scss'

const Hamburger = ({ onClick, visible }) => {
    const onHamburgerClick = () => {
        onClick(!visible)
    }

    return (
        <div
            className={`${styles.Hamburger} ${visible ? styles.open : ''}`}
            onClick={onHamburgerClick}>
            <span />
            <span />
            <span />
        </div>
    )
}

export default Hamburger
