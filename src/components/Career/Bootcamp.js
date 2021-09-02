import React from 'react'
import { bootcamp } from './Career.module.scss'

const Bootcamp = () => {
    return (
        <article className={bootcamp}>
            6 month, part time, full stack web development bootcamp that was
            focused on JavaScript. I maintained my job full time at MarketView
            Research while attending 3 4 hour classes each week for the duration
            of the course.
            <hr />
            The course taught:
            <ul>
                <li>HTML</li>
                <li>CSS & Responsive Web Design</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>FireBase</li>
                <li>SQL Database</li>
                <li>MongoDB</li>
                <li>ORMs</li>
            </ul>
        </article>
    )
}

export default Bootcamp
