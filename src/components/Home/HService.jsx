import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import {HiDesktopComputer} from "react-icons/hi";
import {AiFillAndroid} from "react-icons/ai";
import OfferHS from "./OfferHS";
import { NavLink } from "react-router-dom";

const HService = () => {
  const [offerHS,setOfferHS]=useState(false);
  const offShow=()=>{
    setOfferHS(true)
  }
  const offClose=()=>{
    setOfferHS(false)
  }
  return (
    <>
      <div className="h_offer">
      <div className="h_off_con">
          <div className="h_off_card">
            <FaCode className="offer_icon"/>
            <h2>Web Design</h2>
            <span className="offer_show" onClick={offShow}><NavLink state={{heading:'Web Design'}}className="offer_redirect_text">Know more</NavLink></span>
          </div>
          <div className="h_off_card">
            <HiDesktopComputer className="offer_icon"/>
            <h2>Android Developement </h2>
            <span className="offer_show" onClick={offShow}><NavLink  state={{heading:'Android Developement'}} className="offer_redirect_text">Know more</NavLink></span>
          </div>
          <div className="h_off_card">
            <AiFillAndroid className="offer_icon"/>
            <h2>UI/UX Design</h2>
            <span className="offer_show" onClick={offShow}><NavLink state={{heading:'UI/UX Design'}} className="offer_redirect_text">Know more</NavLink></span>
          </div>
        </div>
      </div>
      {
        offerHS &&   <OfferHS fun={offClose}/>
      }
    </>
  );
};

export default HService;
