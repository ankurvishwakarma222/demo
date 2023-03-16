import React from "react";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

const Qualification = () => {
  return (
    <>
      <div className="qual_con">
          <div className="qual_inner_left">
            <div className="qual_inner1div">
              <MdWork className="qual_inner1div_icon" />
              <h2>Experience</h2>
            </div>
            <div className="qual_innerdiv2">
              <h4> Copalopa inc.(Sometown,IN)</h4>
              <p> Lead / Senior UX Designer</p>
              <span>2018 - 2021</span>
            </div>
            <div className="qual_innerdiv2">
              <h4> Gagoble inc.(Sometown,IN)</h4>
              <p> Web site /UX Designer</p>
              <span>2021 - present</span>
            </div>
            <div className="qual_innerdiv2">
              <h4> Copalopa inc.(Sometown,IN)</h4>
              <p> Senior UX Designer</p>
              <span>2021 - 2022</span>
            </div>
          </div>
          <div className="qual_inner_right">
            <div className="qual_inner1div">
              <GiGraduateCap  className="qual_inner1div_icon" />
              <h2>education</h2>
            </div>
            <div className="qual_innerdiv2">
              <h4> XYZ University (Sometown,IN)</h4>
              <p> BSc. cs</p>
              <span>2018 - 2021</span>
            </div>
            <div className="qual_innerdiv2">
              <h4> ABC Unversity(Sometown,IN)</h4>
              <p> Diploma in web design design</p>
              <span>2021 - present</span>
            </div>
            <div className="qual_innerdiv2">
              <h4> RTA University(Sometown,IN)</h4>
              <p>BFA in Graphic design</p>
              <span>2021 - 2022</span>
            </div>
          </div>
      </div>
    </>
  );
};

export default Qualification;
