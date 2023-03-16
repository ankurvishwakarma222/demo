import React from "react";
import Heading from "./Heading";
import HAbout from "./Home/HAbout";
import HContact from "./Home/HContact";
import Herosection from "./Home/Herosection";
import HService from "./Home/HService";
import HPortfolio from "./Home/HPortfolio";
import HTestamonials from "./Home/HTestamonials";

const home = () => {
  return (
    <>
    <Herosection/>
    <Heading head="About me"/>
    <HAbout/>
    <Heading head="what i offer"/>/
    <HService/>
    <Heading head="Portfolio"/>
    <HPortfolio/>
    <Heading head="Testamonial"/>
    <HTestamonials/>
    <Heading head="Contact"/>
    <HContact/>
    </>
  );
};

export default home;
