import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SideNav from './components/layout/SideNav.component'
import Home from './views/home/Home.component'
import AboutMe from './views/about/AboutMe.component'
import Projects from './views/projects/Projects.component'
import Career from './views/career/Career.component'

const App = () => {
    return (
        <main>
            <Router>
                <SideNav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={AboutMe} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/career" component={Career} />
                </Switch>
            </Router>
        </main>
    )
}

export default App
