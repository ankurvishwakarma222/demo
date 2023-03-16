import React from 'react'
import AHeroPage from './about/AHeroPage'
import HContact from '../components/Home/HContact.jsx'
import Faq from './Faq'

const Contact = () => {
  return (
    <>
      <AHeroPage title="contact us available for 24/7"/>
      <HContact/>
      <Faq/>
    </>
  )
}

export default Contact