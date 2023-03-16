import React from 'react'
import { Link } from 'react-router-dom';
import { BiSupport } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";
import { SiExpensify } from "react-icons/si";
import Button from '../Button';

const HAbout = () => {
  return (
    <>
    <div className='h_aboutcon'>
        <div className='h_a_eft'>
            <img src='./images/hero.png' alt='about' />
        </div>
        <div className='h_a_right'>
            <h3>
                Hi,I'am ankur vishwakarma,based in india
            </h3>
            <p className='h_a_para'>A web developer's job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website's performance and capacity. Types of web developers</p>
            <div className='h_ar_inner'>
                <div className='h_ari_child'>
                    <SiExpensify className='h_aric_icon'/>
                    <h4>Experience</h4>
                    <p className='h_aric_para'>1+Years</p>
                </div>
                <div
                className='h_ari_child'>
                    <FaProductHunt
                        className='h_aric_icon'
                    />
                    <h4>Completed</h4>
                    <p className='h_aric_para'>10+Project</p>
                </div>
                <div
                className='h_ari_child'>
                    <BiSupport className='h_aric_icon'/>
                    <h4>Support</h4>
                    <p className='h_aric_para'>Online 24/7</p>
                </div>
            </div>
            <Button btnName="Read More"/>
        </div>
    </div>
    </>
  )
}

export default HAbout