import React from "react";
import Header from "./../Header/Header";
import "./Profile.css";

export default function Profile() {
  function handleChange() {}
  return (
    <>
      <Header />
      <div className="profile">
        <p className="profile__hello">Привет, Аня!</p>
        <div className="profile__data">
          <p className="profile__data-name">Имя</p>
          <input
            className="profile__data-value"
            value="Anna"
            onChange={handleChange}
          />
        </div>

        <div className="profile__data">
          <p className="profile__data-name">E-mail</p>
          <input
            className="profile__data-value"
            value="anna@mail.ru"
            onChange={handleChange}
          />
        </div>
        <p className="profile__edit">Редактировать</p>
        <p className="profile__exit">Выйти за аккаунта</p>
      </div>
    </>
  );
}
