import React from "react";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
import Button from "../Button";
const HContact = () => {
  return (
    <>
      <div className="contact_con">
        <div className="inner_contact_div">
          <div className="left_con">
            <div className="leftc_card">
              <SiGmail className="leftc_icon" />
              <h4>Email</h4>
              <p>anku@gmail.com</p>
              <span>write me</span>
            </div>
            <div className="leftc_card">
              <SiWhatsapp className="leftc_icon" />
              <h4>Whatsapp</h4>
              <p>9922-222-555</p>
              <span>write me</span>
            </div>
            <div className="leftc_card">
              <RiMessengerLine className="leftc_icon" />
              <h4>Messenger</h4>
              <p>user.fb222</p>
              <span>write me</span>
            </div>
          </div>
          <form className="right_con">
            <input type="text" required placeholder="Username"/>
            <input type="email" placeholder="Enter email"/>
            <input type="number" placeholder="Phone number" required />
            <textarea placeholder="Type message here"></textarea>
            <Button btnName="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default HContact;
