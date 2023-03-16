import React from 'react'
import HService from './Home/HService'
import HTestamonials from '../components/Home/HTestamonials';
import AHeroPage from './about/AHeroPage'
import Heading from './Heading';

const Services = () => {
  return (
    <>
    <AHeroPage title="We provide a good and quality service"/>
    <HService/>
    <Heading head="What my client say"/>
    <HTestamonials/>
    </>
  )
}

export default Services
