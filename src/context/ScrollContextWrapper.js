import React, { createContext, useRef, useState } from 'react'
import { ABOUT, SKILLS, PROJECTS, CAREER } from '../utils/constants'

export const ScrollContext = createContext(null)

const ScrollContextWrapper = ({ children }) => {
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectsRef = useRef(null)
    const careerRef = useRef(null)

    const [active, setActive] = useState(ABOUT)

    const scrollToAbout = () => {
        setActive(ABOUT)
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToSkills = () => {
        setActive(SKILLS)
        skillsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToProjects = () => {
        setActive(PROJECTS)
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToCareer = () => {
        setActive(CAREER)
        careerRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const values = {
        active,
        setActive,
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
