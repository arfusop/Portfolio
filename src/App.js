import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SideNav from './components/layout/SideNav.component'
import Home from './views/home/Home.component'

const App = () => {
    return (
        <main>
            <SideNav />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </main>
    )
}

export default App
