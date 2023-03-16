import React from 'react'
import AHeroPage from './about/AHeroPage'
import HPortfolio from '../components/Home/HPortfolio';
import HTestamonials from '../components/Home/HTestamonials'
import Heading from './Heading';
const Work = () => {
  return (
   <>
    <AHeroPage title="here is the list of my reacent work"/>
    <HPortfolio/>
    <Heading head="What my client say"/>
    <HTestamonials/>
    </>
  )
}

export default Work