import React from "react";
import "./Login.css";
import { Link, NavLink } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function Login(props) {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  let buttonClassName = `form__submit-button ${
    !isFormValid && "form__submit-button_disabled"
  }`;

  function login(evt) {
    evt.preventDefault();
    props.onLogin(enteredValues.email, enteredValues.password);
  }

  return (
    <div className="login">
      <Link to="/" className="login__logo"></Link>
      <p className="login__gladtosee">Рады видеть!</p>
      <form className="form" onSubmit={login} id="form">
        <p className="form__fieldtitle">E-mail</p>
        <input
          value={enteredValues.email || ""}
          id="email"
          type="email"
          name="email"
          className="form__input-login"
          required
          minLength={2}
          maxLength={30}
          onChange={handleChange}
        />
        <span className="form__input-error">{errors.email}</span>
        <p className="form__fieldtitle">Пароль</p>
        <input
          value={enteredValues.password || ""}
          id="password"
          type="password"
          name="password"
          className="form__input-login"
          required
          onChange={handleChange}
        />
        <span className="form__input-error">{errors.password}</span>

        <button type="submit" className={buttonClassName}>
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
