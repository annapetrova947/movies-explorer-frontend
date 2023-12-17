import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound__code">404</p>
      <p className="notfound__pagenotfound">Страница не найдена</p>
      <NavLink to="/" className="notfound__back">
           Назад
      </NavLink>
    </div>
  );
}
