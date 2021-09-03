import React from 'react'
import { projectBlock, info } from './Career.module.scss'

const EarthcamLead = () => {
    return (
        <article>
            I was promoted to Lead front end developer in July of 2019 to
            oversee the continued development of Public.earthcam.net/earthcam.
            <div className={projectBlock}>
                <h4>
                    <a href="http://public.earthcam.net/earthcam">
                        Public.Earthcam.net/earthcam
                    </a>
                </h4>
                <p>
                    I had to manage a team of 5 developers, coordinate their
                    daily tasklists, architect & coodrinate new features, and
                    continue developing on the site. My development focus was
                    equally split between new, complex, high priority features
                    and refactoring old inefficient features.
                </p>
                <p className={info}>
                    Tech stack: ReactJS, CSS + CSS Modules, PHP based API, Git +
                    GitHub
                </p>
            </div>
            <div className={projectBlock}>
                <h4>
                    <a href="https://www.earthcamtv.com/">EarthcamTV 2.0</a>
                </h4>
                <p>
                    The link above points to the existing & old version of
                    EarthCamTV. This project was written in Object Oriented
                    JavaScript, with jQuery and CSS. The 2.0 initiative was
                    started to rewrite the entire application from scratch, in
                    ReactJS. I was tasked to also manage this project, with a
                    team of 3 developers. This project was taken offline 3
                    months after we started, due to a reorganization of
                    priorities.
                </p>
                <p className={info}>
                    Tech stack: ReactJS, CSS + CSS Modules, Git + GitHub
                </p>
            </div>
        </article>
    )
}

export default EarthcamLead
