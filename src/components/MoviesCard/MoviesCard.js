import React from "react";
import "./MoviesCard.css";
import filmPhotoExample from "./../../images/film-photo-example.jpg";
import { useLocation } from "react-router-dom";

export default function MoviesCard(props) {
  const location = useLocation();
  let isSaved = props.movie.isSaved;
  let shouldDeleted = location.pathname === "/saved-movies";
  let buttonClassName = `movies-card__button
  ${
    shouldDeleted
      ? "movies-card__button_should-deleted"
      : isSaved
        ? "movies-card__button_saved"
        : "movies-card__button_default"
  }`;
  return (
    <div className="movies-card">
      <img
        className="movies-card__image"
        src={filmPhotoExample}
        alt="Фото фильма"
      />

      <button type="button" className={buttonClassName} />

      <p className="movies-card__title">{props.movie.name}</p>
      <span className="movies-card__time">{props.movie.duration}</span>
    </div>
  );
}
