import React from "react";
import "./Navigation.css";
import menu from "../../images/menu-icon.svg";
import { Link, NavLink } from "react-router-dom";
import profileLogo from "../../images/profile-icon-min.svg";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  let classNameMenuButton = `navigation__logo ${
    location.pathname === "/" && "navigation__logo_color-pink"
  }`;
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  function handleClose() {
    setPopupOpen(false);
  }

  function openPopup() {
    setPopupOpen(true);
  }

  return (
    <div className="navigation">
      <button
        type="button"
        className={classNameMenuButton}
        onClick={openPopup}
      />
      {isPopupOpen && (
        <div className="navigation__overlay">
          <div className="navigation__popup">
            <button
              type="button"
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
