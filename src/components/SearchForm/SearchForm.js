import React from "react";
import "./SearchForm.css";
import findIcon from "./../../images/find-icon-min.svg";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox.js";
import { useLocation } from "react-router-dom";

export default function SearchForm(props) {
  const location = useLocation();
  const [isShortsSet, setIsShortsSet] = React.useState(false);

  React.useEffect(() => {
    if (
      localStorage.getItem("searchedMovies") &&
      localStorage.getItem("moviesShorts") &&
      location.pathname === "/movies"
    ) {
      setQuery(localStorage.getItem("searchedMovies"));
      if (localStorage.getItem("moviesShorts") === "true") {
        setIsShortsSet(true);
      }
    }
  }, [location]);

  const [query, setQuery] = React.useState("");
  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  const [isShorts, setIsShorts] = React.useState(false);

  function handleChangeShorts() {
    setIsShorts(!isShorts);
    props.handleFindFilms(query, !isShorts);
  }

  return (
    <div className="search">
      <form className="search__form">
        <img alt="Логотип поиска" src={findIcon} className="search__logo" />
        <input
          placeholder="Фильм"
          className="search__input"
          name="query"
          id="search-input"
          type="text"
          onChange={handleChangeQuery}
          value={query || ""}
        />
        <button
          type="button"
          className="search__button"
          onClick={() => {
            props.handleFindFilms(query, isShorts);
          }}
        >
          Найти
        </button>
      </form>
      <FilterCheckbox
        handleChangeShorts={handleChangeShorts}
        isShortsSet={isShortsSet}
      />
      {props.textError && <span className='search__error'>{props.textError}</span>}
    </div>
  );
}
