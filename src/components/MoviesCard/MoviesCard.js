import React from "react";
import "./MoviesCard.css";
import filmPhotoExample from "./../../images/film-photo-example.jpg";
import { useLocation } from "react-router-dom";
import { api } from "./../../utils/MainApi.js";

export default function MoviesCard(props) {
  const location = useLocation();
  let isSavedPage = location.pathname === "/saved-movies";
  const [listSavedMovies, setListSavedMovies] = React.useState();
  const [cardID, setCardID] = React.useState();
  const [isMovieSaved, setIsMovieSaved] = React.useState(false);

  React.useEffect(() => {
    api
      .getSavedFilms()
      .then((mov) => {
        setListSavedMovies(mov);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    let result;
    if (listSavedMovies && !isSavedPage) {
      result = listSavedMovies.filter(
        (savedMovie) => savedMovie.nameRU === props.movie.nameRU,
      );

      if (result.length !== 0) {
        setIsMovieSaved(true);
        setCardID(result[0]._id);
      }
    } else if (isSavedPage) {
      setCardID(props.movie._id);
    }
  }, [listSavedMovies]);

  function handleSaveMovie(movie) {
    if (isSavedPage) {
      api
        .deleteSavedFilm(cardID)
        .then((res) => {
          props.deleteMovieOnSavedPage(res);
        })
        .catch((err) => console.log(err));
    } else if (isMovieSaved) {
      api
        .deleteSavedFilm(cardID)
        .then((res) => {
          setIsMovieSaved(false);
        })
        .catch((err) => console.log(err));
    } else {
      api
        .saveFilm(movie)
        .then((res) => {
          console.log(res.data._id);
          setCardID(res.data._id);
        })
        .catch((err) => console.log(err));

      setIsMovieSaved(true);
    }
  }

  let buttonClassName = `movies-card__button
    ${
      isSavedPage
        ? "movies-card__button_should-deleted"
        : isMovieSaved
          ? "movies-card__button_saved"
          : "movies-card__button_default"
    }`;

  return (
    <div className="movies-card">
      <a
        href={props.movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-link"
      >
        <img
          className="movies-card__image"
          src={
            isSavedPage
              ? `${props.movie.image}`
              : `https://api.nomoreparties.co/${props.movie.image.url}`
          }
          alt="Фото фильма"
        />
      </a>
      <button
        type="button"
        className={buttonClassName}
        onClick={() => {
          handleSaveMovie(props.movie);
        }}
      />

      <p className="movies-card__title">{props.movie.nameRU}</p>
      <span className="movies-card__time">
        {props.movie.duration > 60
          ? `${Math.floor(props.movie.duration / 60)}ч ${
              props.movie.duration % 60
            }м`
          : `${props.movie.duration}м`}
      </span>
    </div>
  );
}
