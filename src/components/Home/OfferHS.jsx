import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import {RxCross2} from "react-icons/rx"
import { useLocation } from 'react-router-dom';
const OfferHS = ({fun}) => {
    const params=useLocation()
  return (
    <div className='offerhs'>
        <div className='offerhs_inner'>
        <RxCross2 className='offerhs_close' onClick={fun}/>
           <h2>{params.state.heading}</h2>
           <p className='offerhs_p1'>Service with more then 3 years of<br/> experience providing quality work to clients<br/> and companies</p>
           <div className='offerhs_icondeiv'>
           <MdOutlineDone className='offerhs_icon'/>
           <p>Develop the user interface</p>
           </div>
           <div className='offerhs_icondeiv'>
           <MdOutlineDone className='offerhs_icon'/>
           <p>Web page developement</p>
           </div>
           <div className='offerhs_icondeiv'> 
           <MdOutlineDone className='offerhs_icon'/>
           <p>I create ux element interactions.</p>
           </div>
           <div className='offerhs_icondeiv'>
           <MdOutlineDone className='offerhs_icon'/>
           <p>I position your company brand</p>
           </div>
           <div className='offerhs_icondeiv'>
           <MdOutlineDone className='offerhs_icon'/>
           <p>Design and mockups of products for companies</p>
           </div>
        </div>
    </div>
  )
}

export default OfferHS