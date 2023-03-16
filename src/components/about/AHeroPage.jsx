import React from 'react'
import Button from '../Button'

const AHeroPage = ({title}) => {
  return (
    <>
      <div className='Aheropage'>
        <h2>{title}</h2>
        <p>What is a Front-End Developer? A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.</p>
        <Button btnName="Hire me"/>
      </div>
      <hr/>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default AHeroPage