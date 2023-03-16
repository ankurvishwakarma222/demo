import React from "react";
// import { NavLink } from "react-router-dom";
import Button from "../Button";
const Portcard = ({ head, show, img }) => {
  return(
    <>
    <div className="port_card">
      <img src={`./images/${img}`} alt="port1" />
      <h4>{head}</h4>
      <div className="portbtn_con">
      <Button btnName="See Demo" img={img} head={head} show={show}/>
        {/* <button onClick={show}>
          <NavLink state={{ img, head }}>See demo</NavLink>
        </button> */}
      </div>
    </div>
  </>
  )
}

export default Portcard;
