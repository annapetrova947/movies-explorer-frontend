import React from "react";
import "./Register.css";
import { Link, NavLink } from "react-router-dom";

export default function Register(props) {
  const refInputEmail = React.useRef();
  const refInputPassword = React.useRef();
  const refInputName = React.useRef();

  function register(event) {
    event.preventDefault();
    console.log(
      refInputName.current.value,
      refInputEmail.current.value,
      refInputPassword.current.value,
    );
    props.onRegister(
      refInputName.current.value,
      refInputEmail.current.value,
      refInputPassword.current.value,
    );
  }
  return (
    <div className="register">
      <Link to="/" className="register__logo"></Link>
      <p className="register__welcome">Добро пожаловать!</p>
      <form className="form" onSubmit={register}>
        <p className="form__fieldtitle">Имя</p>
        <input
          ref={refInputName}
          id="name"
          type="text"
          name="name"
          className="form__input"
          required
          minLength={2}
          maxLength={30}
        />
        <p className="form__fieldtitle">E-mail</p>
        <input
          ref={refInputEmail}
          id="email"
          type="email"
          name="email"
          className="form__input"
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
          className="form__input"
          required
        />

        <button type="submit" className="form__submit-button">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__question">
        Уже зарегистрированы?{" "}
        <NavLink to="/sign-in" className="register__signin">
          Войти
        </NavLink>
      </p>
    </div>
  );
}
