import React from 'react'
import { projectBlock, info } from './Career.module.scss'

const Memx = () => {
    return (
        <article>
            Front end developer working on multiple iniatives here at Members
            Exchange. Employee #32, I joined MEMX in its infancy, about a year
            before the go live launch.
            <div className={projectBlock}>
                <h4>
                    <a href="https://memxtrading.com/">MemxTrading.com</a>
                </h4>
                <p>
                    Helped write this web app from scratch, and continue to
                    maintain and add new features currently.Work on a team with
                    3 other developers. I occasionally get the chance to do some
                    NodeJS work to add small endpoints as needed for new UI
                    features. This is not a publically available web app, only
                    clients have Okta Authentication priveleges to log in and
                    see the core of the site.
                </p>
                <p className={info}>
                    Tech stack: ReactJS, SCSS + CSS Modules,NodeJS, PostGres,
                    Jira, Confluence, Git + GitHub, Jest + Enzyme unit testing,
                    Cypress End2End testing
                </p>
            </div>
        </article>
    )
}

export default Memx
