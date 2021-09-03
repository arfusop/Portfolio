import React from 'react'
import { projectBlock, info } from './Career.module.scss'

const Bootcamp = () => {
    return (
        <article>
            6 month, part time, full stack web development bootcamp
            <div className={projectBlock}>
                <p>
                    This course was heavily focused on JavaScript. I maintained
                    my job full time at MarketView Research while attending 3 4
                    hour classes each week for the duration of the course.
                </p>
                <p className={info}>
                    Tech stack learned: HTML, CSS & Responsive Web Design,
                    JavaScript, jQuery, ReactJS, NodeJS, FireBase, SQL, MongoDB,
                    ORMs, Git + GitHub
                </p>
            </div>
        </article>
    )
}

export default Bootcamp
