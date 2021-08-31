import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import SideNav from './components/layout/SideNav'

const App = () => {
    return (
        <main>
            <Router>
                <SideNav />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </main>
    )
}

export default App
