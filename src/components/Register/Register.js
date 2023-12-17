import React from "react";
import "./Register.css";
import logo from "../../images/logo-min.svg";

export default function Register() {
  return (
    <div className="register">
      <img src={logo} alt="Логотип" className="register__logo" />
      <p className="register__welcome">Добро пожаловать!</p>
      <form className="form form_auth">
        <p className="form__fieldtitle form__fieldtitle_auth">Имя</p>
        <input
          id="name"
          type="text"
          name="name"
          className="form__input form__input_auth"
          required
          minLength={2}
          maxLength={30}
        />
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

        <button
          type="submit"
          className="form__submit-button form__submit-button_auth form__submit-button_auth-enterance"
        >
          Войти
        </button>
      </form>
      <p className="register__question">
        Уже зарегистрированы? <a className="register__signin">Войти</a>
      </p>
    </div>
  );
}
