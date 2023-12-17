import React from "react";
import "./Navigation.css";
import menu from "../../images/menu-icon.svg";
import { Link, NavLink } from "react-router-dom";
import profileLogo from "../../images/profile-icon-min.svg";

export default function Navigation() {
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  function handleClose() {
    setPopupOpen(false);
  }

  function openPopup() {
    setPopupOpen(true);
  }

  return (
    <div className="navigation">
      <img
        src={menu}
        alt="Меню"
        className="navigation__logo"
        onClick={openPopup}
      />
      {isPopupOpen && (
        <div className="navigation__overlay">
          <div className="navigation__popup">
            <button
              className="navigation__close-button"
              onClick={handleClose}
            ></button>
            <nav className="navigation__nav">
              <NavLink
                to="/"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive
                    ? "navigation__link navigation__link_active"
                    : "navigation__link"
                }
              >
                Главная
              </NavLink>
              <NavLink
                to="/movies"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive
                    ? "navigation__link navigation__link_active"
                    : "navigation__link"
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive
                    ? "navigation__link navigation__link_active"
                    : "navigation__link"
                }
              >
                Сохранённые фильмы
              </NavLink>
            </nav>
            <Link
              to="/profile"
              onClick={handleClose}
              className="navigation__account-button"
            >
              <p className="navigation__account">Аккаунт</p>
              <div className="navigation__account-logo">
                <img src={profileLogo} alt="аккаунт" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
