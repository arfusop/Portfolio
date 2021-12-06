import React from 'react'
import Home from './views/Home'
import SideNav from './components/layout/SideNav'
import ScrollContextWrapper from './context/ScrollContextWrapper'
import ThemeContextWrapper from './context/ThemeContextWrapper'

const App = () => {
    return (
        <main>
            <ScrollContextWrapper>
                <ThemeContextWrapper>
                    <SideNav />
                    <Home />
                </ThemeContextWrapper>
            </ScrollContextWrapper>
        </main>
    )
}

export default App
