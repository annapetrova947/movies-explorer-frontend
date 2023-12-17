import React from "react";
import Header from "./../Header/Header.js";
import Promo from "./../Promo/Promo.js";
import NavTab from "./../NavTab/NavTab.js";
import AboutProject from "./../AboutProject/AboutProject.js";
import Techs from "./../Techs/Techs.js";
import AboutMe from "./../AboutMe/AboutMe.js";
import Portfolio from "./../Portfolio/Portfolio.js";
import Footer from "./../Footer/Footer.js";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Header />
        <main>
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
         </main>
      <Footer />
    </div>
  );
}
