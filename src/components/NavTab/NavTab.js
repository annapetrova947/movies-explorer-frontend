import React from "react";
import "./NavTab.css";

export default function NavTab() {
  return (
    <div className="navtab">
      <div className="navtab__navigation">
        <a className="navtab__text" href="#about_project">
          О проекте
        </a>
        <a className="navtab__text" href="#techs">
          Технологии
        </a>
        <a className="navtab__text" href="#student">
          Студент
        </a>
      </div>
    </div>
  );
}
