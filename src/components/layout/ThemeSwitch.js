import React, { useContext } from 'react'
import { Switch } from 'antd'
import { FaMoon, FaSun } from 'react-icons/fa'

import { ThemeContext } from '../../context/ThemeContextWrapper'
import styles from './layout.module.scss'

const ThemeSwitch = () => {
    const { setCurrentTheme, isChecked } = useContext(ThemeContext)

    return (
        <div className={styles.themeToggle}>
            <Switch
                onChange={setCurrentTheme}
                checked={isChecked}
                checkedChildren={<FaMoon />}
                unCheckedChildren={<FaSun />}
            />
        </div>
    )
}

export default ThemeSwitch
