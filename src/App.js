import React from 'react'
import Home from './views/Home'
import SideNav from './components/layout/SideNav'
import ScrollContextWrapper from './context/ScrollContextWrapper'

const App = () => {
    return (
        <main>
            <ScrollContextWrapper>
                <SideNav />
                <Home />
            </ScrollContextWrapper>
        </main>
    )
}

export default App
