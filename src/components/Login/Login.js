import React from "react";
import "./Login.css";
import logo from "../../images/logo-min.svg";
import { Link, NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <img src={logo} alt="Логотип" className="login__logo" />
      <p className="login__gladtosee">Рады видеть!</p>
      <form className="form">
        <p className="form__fieldtitle">E-mail</p>
        <input
          id="email"
          type="email"
          name="email"
          className="form__input_login"
          required
          minLength={2}
          maxLength={30}
        />
        <p className="form__fieldtitle">Пароль</p>
        <input
          id="password"
          type="password"
          name="password"
          className="form__input_login"
          required
        />

        <button type="submit" className="form__submit-button">
          Войти
        </button>
      </form>
      <p className="login__question">
        Еще не зарегистрированы? <NavLink
                      to="/sign-up"
                      className="login__reg"
                    >
                      Регистрация
                    </NavLink>
      </p>
    </div>
  );
}
