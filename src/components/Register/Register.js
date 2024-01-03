import React from "react";
import "./Register.css";
import { Link, NavLink } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function Register(props) {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  let buttonClassName = `form__submit-button ${
    !isFormValid && "form__submit-button_disabled"
  }`;

  function register(event) {
    event.preventDefault();
    props.onRegister(
      enteredValues.name,
      enteredValues.email,
      enteredValues.password,
    );
  }
  return (
    <div className="register">
      <Link to="/" className="register__logo"></Link>
      <p className="register__welcome">Добро пожаловать!</p>
      <form className="form" onSubmit={register} id="form">
        <p className="form__fieldtitle">Имя</p>
        <input
          value={enteredValues.name || ""}
          id="name"
          type="text"
          name="name"
          className="form__input"
          required
          minLength={2}
          maxLength={30}
          onChange={handleChange}
        />
        <span className="form__input-error">{errors.name}</span>
        <p className="form__fieldtitle">E-mail</p>
        <input
          value={enteredValues.email || ""}
          id="email"
          type="email"
          name="email"
          className="form__input"
          required
          onChange={handleChange}
        />
        <span className="form__input-error">{errors.email}</span>
        <p className="form__fieldtitle">Пароль</p>
        <input
          value={enteredValues.password || ""}
          id="password"
          type="password"
          name="password"
          className="form__input"
          required
          onChange={handleChange}
        />
        <span className="form__input-error">{errors.password}</span>

        <button type="submit" className={buttonClassName}>
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
