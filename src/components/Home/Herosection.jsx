import React from 'react'
import { FaDiscord,FaGithub,FaInstagram,FaTwitter } from "react-icons/fa";
import {CgArrowLongRight} from "react-icons/cg";
import Button from '../Button';

const Herosection = () => {
  return (
    <>
          <div className="herosection">
        <div className="heroleft">
          <h2>Hi,I'am <span className="hero_name">Ankur</span></h2>
          <h3>React developer</h3>
          <p>
            Web developers usually fall under one of three categories: back-end,
            front-end,and full-stack developers. Some
            web .
          </p>
          <div className="herofollow">
          <span>Follow me</span>
          <CgArrowLongRight className='icon_movehero' />
         <div className="innerherofollow">
         <FaDiscord className="heroicon"/>
            <FaGithub className="heroicon"/>
            <FaInstagram className="heroicon"/>
            <FaTwitter className="heroicon"/>
         </div>
          </div>
          <Button btnName="read more"/>
          <Button btnName="Hire me"/>
        </div>
        <div className="heroright">
          <img src="./images/hero.png" alt="hero" />
        </div>
      </div>
    </>
  )
}

export default Herosection