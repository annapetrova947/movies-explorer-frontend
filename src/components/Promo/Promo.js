import React from "react";
import "./Promo.css";
import landingLogo from "../../images/landing-logo-min.svg";

export default function Promo() {
  return (
    <div className="promo">
      <img src={landingLogo} alt="Логотип" className="promo__logo" />
      <h1 className="promo__header">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </div>
  );
}
