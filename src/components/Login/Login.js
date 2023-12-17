import React from "react";
import "./Login.css";
import logo from "../../images/logo-min.svg";

export default function Login() {
  return (
    <div className="login">
      <img src={logo} alt="Логотип" className="login__logo" />
      <p className="login__gladtosee">Рады видеть!</p>
      <form className="form form_auth">
        <p className="form__fieldtitle form__fieldtitle_auth">E-mail</p>
        <input
          id="email"
          type="email"
          name="email"
          className="form__input form__input_auth"
          required
          minLength={2}
          maxLength={30}
        />
        <p className="form__fieldtitle form__fieldtitle_auth">Пароль</p>
        <input
          id="password"
          type="password"
          name="password"
          className="form__input form__input_auth"
          required
        />

        <button type="submit" className="form__submit-button">
          Войти
        </button>
      </form>
      <p className="login__question">
        Еще не зарегистрированы? <a className="login__reg">Регистрация</a>
      </p>
    </div>
  );
}
