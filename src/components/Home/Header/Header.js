import React from "react";
import BgDesign from "../../../images/HeroBottomImg.svg";
import BgDesignSmall from "../../../images/smallHeroBottomImg.svg";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerContainer" id="hero">
      <div className="headerChildContainer">
        <div className="container-fluid">
          <Navbar />
          <Hero />
        </div>
        <div className="heroImg">
          <img className="mobileHideBgImg" src={BgDesign} alt="hero Bg" />
          <img className="mobileVisibleBgImg" src={BgDesignSmall} alt="hero Bg" />
        </div>
      </div>
    </div>
  );
};

export default Header;