import React from "react";
import logo from "../../images/logo-min.svg";
import profileLogo from "../../images/profile-icon-min.svg";
import profileLogoPink from "../../images/profile-pink-icon-min.svg";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "./../Navigation/Navigation.js";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  let ifLocationPathIsMain = location.pathname === "/";
  let classNameHeader = `header ${ifLocationPathIsMain && "header-pink"}`;
  let classNameProfile = `header__profile ${
    ifLocationPathIsMain && "header__profile_pink"
  }`;

  return (
    <header className={classNameHeader}>
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__navigation">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "header__movies header__movies_active" : "header__movies"
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            isActive ? "header__movies header__movies_active" : "header__movies"
          }
        >
          Сохранённые фильмы
        </NavLink>
        <Link to="/profile" className="header__account-link">
          <p className="header__account">Аккаунт</p>

          <div className={classNameProfile}>
            <img
              src={ifLocationPathIsMain ? profileLogoPink : profileLogo}
              alt="Профиль"
              className="header__profile-logo"
            />
          </div>
        </Link>
        <div className="header__menu">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
