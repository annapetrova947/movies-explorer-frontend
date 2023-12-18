import React from "react";
import "./SearchForm.css";
import findIcon from "./../../images/find-icon-min.svg";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox.js";

export default function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <img alt="Логотип поиска" src={findIcon} className="search__logo" />
        <input placeholder="Фильм" className="search__input" />
        <button type="button" className="search__button">
          Найти
        </button>
      </form>
      <FilterCheckbox />
    </div>
  );
}
