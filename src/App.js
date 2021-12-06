import React from 'react'
import Home from './views/Home'
import SideNav from './components/layout/SideNav'
import MobileNav from './components/layout/MobileNav'
import ScrollContextWrapper from './context/ScrollContextWrapper'
import ThemeContextWrapper from './context/ThemeContextWrapper'
import { useWindowSize } from './utils/useWindowSize'

const App = () => {
    const { width } = useWindowSize()
    const isMobile = width <= 768

    return (
        <main>
            <ScrollContextWrapper>
                <ThemeContextWrapper>
                    {isMobile ? <MobileNav /> : <SideNav />}
                    <Home />
                </ThemeContextWrapper>
            </ScrollContextWrapper>
        </main>
    )
}

export default App
