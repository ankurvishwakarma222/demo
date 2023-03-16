import React from 'react'
import AHeroPage from './about/AHeroPage'
import Experience from './about/Experience'
import Qualification from './about/Qualification'
import Heading from './Heading'
import HAbout from './Home/HAbout'

const About = () => {
  return (
    <>
      <AHeroPage title="I Am Frontend React Developer"/>
      <HAbout/>
      <Heading head="Qualification"/>
      <Qualification/>
      <Heading head="Experience" />
      <Experience/>
    </>
  )
}

export default About