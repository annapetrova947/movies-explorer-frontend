import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "./../MoviesCard/MoviesCard.js";
import "./MoviesCardList.css";

export default function MoviesCardList(props) {
  const location = useLocation();
  let isSavedLocation = location.pathname === "/saved-movies";
  return (
    <div className="movies">
      <div className="movies__list">
        {!isSavedLocation
          ? props.movies.map((film, i) => <MoviesCard movie={film} key={i} />)
          : props.movies
              .filter((film) => film.isSaved === true)
              .map((film, i) => <MoviesCard movie={film} key={i} />)}
      </div>
      {!isSavedLocation ? (
        <div className="movies__more">
          <button type="button" className="movies__button">
            Еще
          </button>
        </div>
      ) : (
        <div className="movies__empty"></div>
      )}
    </div>
  );
}
