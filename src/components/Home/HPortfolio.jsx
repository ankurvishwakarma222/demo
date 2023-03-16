import React from "react";
import Portcard from "./Portcard";
import Porths from "./Porths";
import { useState } from "react";

const HPortfolio = () => {
  const [isShow, setIsShow] = useState(false);
  const [num,setNum]=useState(1)
  const show = () => {
    setIsShow(true);
  };
  const hide = () => {
    setIsShow(false);
  };
  return (
    <>
      <div className="port_con">
        <div className="port_chnage">
          <span style={{background:num===1?'#D2042D':'transparent',color:num===1?'#f5fefd':'#373032'}} onClick={()=>{
            setNum(1)
          }}>All</span>
          <span style={{background:num===2?'#D2042D':'transparent',color:num===2?'#f5fefd':'#373032'}} onClick={()=>{
            setNum(2)
          }}>web</span>
          <span style={{background:num===3?'#D2042D':'transparent',color:num===3?'#f5fefd':'#373032'}} onClick={()=>{
            setNum(3)
          }}>App</span>
          <span style={{background:num===4?'#D2042D':'transparent',color:num===4?'#f5fefd':'#373032'}} onClick={()=>{
            setNum(4)
          }}>design</span>
        </div>
        <div className="card_con">
         {
          num===1 && 
          <>
          <Portcard show={show} head="Web Design" img="port1.jpg" />
          <Portcard show={show} head="Software Developement" img="port2.jpg" />
          <Portcard show={show} head="Logo design" img="port8.jpg" />
          <Portcard show={show} head="Brand designs" img="port4.jpg" />
          <Portcard show={show} head="Backend design" img="port7.jpg" />
          <Portcard show={show} head="UI creation" img="port6.jpg" />
          </>
         }
         {
          num===2 && 
          <>
          <Portcard show={show} head="Web Design" img="port1.jpg" />
          <Portcard show={show} head="Software Developement" img="port2.jpg" />
          <Portcard show={show} head="Backend design" img="port7.jpg" />
          <Portcard show={show} head="UI creation" img="port6.jpg" />
          </>
         }
         {
          num===3 && 
          <>
          <Portcard show={show} head="Software Developement" img="port2.jpg" />
          <Portcard show={show} head="Logo design" img="port8.jpg" />
          <Portcard show={show} head="Brand designs" img="port4.jpg" />
          <Portcard show={show} head="Backend design" img="port7.jpg" />
          <Portcard show={show} head="Android developement" img="port6.jpg" />
          </>
         }
         {
          num===4 &&
          <>
          <Portcard show={show} head="Logo design" img="port8.jpg" />
          <Portcard show={show} head="Brand designs" img="port4.jpg" />
          </>
         }
        </div>
      </div>
      {isShow && <Porths hide={hide} />}
    </>
  );
};

export default HPortfolio;
