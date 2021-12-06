import React, { createContext, useState, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, DARK, LIGHT } from '../utils/constants'

export const ThemeContext = createContext(null)

const ThemeContextWrapper = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(DARK)

    useEffect(() => {
        const localStorageTheme =
            localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? DARK
        if (localStorageTheme) {
            setCurrentTheme(localStorageTheme)
            document
                .querySelector('html')
                .setAttribute('data-theme', localStorageTheme)
        }
    }, [])

    const onThemeChange = checked => {
        if (checked === true) {
            setCurrentTheme(DARK)
            document.querySelector('html').setAttribute('data-theme', DARK)
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, DARK)
        } else {
            setCurrentTheme(LIGHT)
            document.querySelector('html').setAttribute('data-theme', LIGHT)
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, LIGHT)
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                setCurrentTheme: onThemeChange,
                isChecked: currentTheme === DARK
            }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextWrapper
