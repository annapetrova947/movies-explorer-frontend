import React from "react";
import "./Login.css";
import { Link, NavLink } from "react-router-dom";

export default function Login(props) {
  const refInputEmail = React.useRef();
  const refInputPassword = React.useRef();
  function login(evt) {
    evt.preventDefault();
    props.onLogin(refInputEmail.current.value, refInputPassword.current.value);
  }

  return (
    <div className="login">
      <Link to="/" className="login__logo"></Link>
      <p className="login__gladtosee">Рады видеть!</p>
      <form className="form" onSubmit={login}>
        <p className="form__fieldtitle">E-mail</p>
        <input
          ref={refInputEmail}
          id="email"
          type="email"
          name="email"
          className="form__input-login"
          required
          minLength={2}
          maxLength={30}
        />
        <p className="form__fieldtitle">Пароль</p>
        <input
          ref={refInputPassword}
          id="password"
          type="password"
          name="password"
          className="form__input-login"
          required
        />

        <button type="submit" className="form__submit-button">
          Войти
        </button>
      </form>
      <p className="login__question">
        Еще не зарегистрированы?{" "}
        <NavLink to="/sign-up" className="login__reg">
          Регистрация
        </NavLink>
      </p>
    </div>
  );
}
