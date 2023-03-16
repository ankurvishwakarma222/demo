import React, { useState } from "react";
import { BiCodeCurly, BiChevronRight, BiChevronDown } from "react-icons/bi";
import { MdOutlineDesignServices, MdDeveloperMode } from "react-icons/md";
import ExpBarCard from "./ExpBarCard";
const Experience = () => {
    const [chevron,setChevron]=useState(1);
  return (
    <>
      <div className="exp_con">
        <div className="exp_left">
          <div className="el_inndiv" onClick={()=>{
            setChevron(1)
            }}>
            <BiCodeCurly className="el_indiv_icon" />
            <div>
              <h4>Frontend developer</h4>
              <p>More then 2 years</p>
            </div>
            {
                chevron===1?<BiChevronDown className="exp_chevron" />:<BiChevronRight className="exp_chevron" />
            }
          </div>
          <div className="el_inndiv" onClick={()=>{
            setChevron(2)
            }}>
            <MdOutlineDesignServices className="el_indiv_icon" />
            <div>
              <h4>UI/UX Designer</h4>
              <p>More then 2 years</p>
            </div>
            {
                chevron===2? <BiChevronDown className="exp_chevron" />:<BiChevronRight className="exp_chevron" />
            }
          </div>
          <div className="el_inndiv" onClick={()=>{
            setChevron(3)
            }}>
            <MdDeveloperMode className="el_indiv_icon" />
            <div>
              <h4>Backend developer</h4>
              <p>More then 2 years</p>
            </div>
            {
                chevron===3? <BiChevronDown className="exp_chevron" />:<BiChevronRight className="exp_chevron" />
            }
          </div>
        </div>
        <div className="exp_right">
         {
            chevron===1  && 
            <>
            <ExpBarCard heading="HTML" smallH="90%"/>
            <ExpBarCard heading="CSS" smallH="80%"/>
            <ExpBarCard heading="Javascript" smallH="75%"/>
            <ExpBarCard heading="React" smallH="70%"/>
            </>
         }
         {
            chevron===2 && 
            <>
            <ExpBarCard heading="Figma" smallH="60%"/>
            <ExpBarCard heading="Sketch" smallH="40%"/>
            <ExpBarCard heading="Photoshop" smallH="80%"/>
            <ExpBarCard heading="AutoCad" smallH="40%"
          />
            </>
         }

         {
            chevron===3 && 
            <>
            <ExpBarCard heading="PHP" smallH="70%"/>
            <ExpBarCard heading="MySQl" smallH="90%"/>
            <ExpBarCard heading="Node Js" smallH="70%"/>
            <ExpBarCard heading="Larvel" smallH="60%"/>
            </>
         }
        </div>
      </div>
    </>
  );
};

export default Experience;
