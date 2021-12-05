import React, { createContext, useRef, useState } from 'react'
import { ABOUT, SKILLS, PROJECTS, CAREER } from '../utils/constants'

export const ScrollContext = createContext(null)

const ScrollContextWrapper = ({ children }) => {
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectsRef = useRef(null)
    const careerRef = useRef(null)

    const [current, setCurrent] = useState('')

    const scrollToAbout = () => {
        setCurrent(ABOUT)
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToSkills = () => {
        setCurrent(SKILLS)
        skillsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToProjects = () => {
        setCurrent(PROJECTS)
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToCareer = () => {
        setCurrent(CAREER)
        careerRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const values = {
        active: current,
        about: {
            ref: aboutRef,
            scrollTo: scrollToAbout
        },
        skills: {
            ref: skillsRef,
            scrollTo: scrollToSkills
        },
        projects: {
            ref: projectsRef,
            scrollTo: scrollToProjects
        },
        career: {
            ref: careerRef,
            scrollTo: scrollToCareer
        }
    }

    return (
        <ScrollContext.Provider value={values}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollContextWrapper
