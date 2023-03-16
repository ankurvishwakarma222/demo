import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {HiMenuAlt3} from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [icon,setIcon]=useState(true);
  const toggle=()=>{
    if(icon===true){
      setIcon(false)
    }
    if(icon===false){
      setIcon(true)
    }
  }
  return (
    <div className="navbar">
      <span className="logo"><Link to='/'>Portfolio</Link></span>
      <div className="toggle_div" onClick={toggle}>
      {
       icon?<HiMenuAlt3 className="toggle_icon "/>:<RxCross2 className="
       toggle_icon"/>
      }
      </div>
      <ul className={icon?'':'activemenu'}>
        <li>
          <NavLink to="/" onClick={()=>{setIcon(true)}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={()=>{setIcon(true)}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/service" onClick={()=>{setIcon(true)}}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/work" onClick={()=>{setIcon(true)}}>Work</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={()=>{setIcon(true)}}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
