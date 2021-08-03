import React from 'react'
import SideNav from './components/layout/SideNav'
import Page from './components/layout/Page'

const App = () => {
    return (
        <main>
            <SideNav />
            <Page>about me content, by default</Page>
        </main>
    )
}

export default App
