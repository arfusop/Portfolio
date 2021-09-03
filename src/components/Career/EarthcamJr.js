import React from 'react'
import { projectBlock, info } from './Career.module.scss'

const EarthcamJr = () => {
    return (
        <article>
            My first full time development job. Worked 2 main projects here
            during my time as a junior developer.
            <div className={projectBlock}>
                <h4>
                    <a href="https://www.earthcam.com/">EarthCam.com</a>
                </h4>
                <p>
                    Inherited this project from the previous developer. I was
                    tasked with maintaining/bug fixing, adding new features as
                    required. Worked mainly as the sole developer on this site
                    for 4 months until I was brought onto the React team to work
                    on other projects.
                </p>
                <p className={info}>
                    Tech stack: jQuery, HTML, CSS, AJAX, working with a php
                    based backend
                </p>
            </div>
            <div className={projectBlock}>
                <h4>
                    <a href="http://public.earthcam.net/earthcam">
                        Public.Earthcam.net/earthcam
                    </a>
                </h4>
                <p>
                    This is the main project I worked on here for the majority
                    of my time here. Worked on a team with 2 other developers to
                    maintain/bug fix and add new features. Tasked to update
                    small parts of the PHP based API server/backend as needed
                    with new features.
                </p>
                <p className={info}>
                    Tech stack: ReactJS, CSS + CSS Modules, PHP based API,Git +
                    GitHub
                </p>
            </div>
        </article>
    )
}

export default EarthcamJr
