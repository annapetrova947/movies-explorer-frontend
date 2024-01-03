import React from "react";
import Header from "./../Header/Header.js";
import Footer from "./../Footer/Footer.js";
import SearchForm from "./../SearchForm/SearchForm.js";
import MoviesCardList from "./../MoviesCardList/MoviesCardList.js";
import "./Movies.css";
import getMovies from "./../../utils/MoviesApi.js";
import { sortFilmsByName, sortFilmsByDuration } from "./../../utils/utils.js";

export default function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (
      localStorage.getItem("searchedMovies") &&
      localStorage.getItem("moviesShorts") &&
      localStorage.getItem("searchedMoviesList")
    ) {
      setSearchMovies(JSON.parse(localStorage.getItem("searchedMoviesList")));
    }
  }, []);
  const [textError, setTextError] = React.useState();

  function getFilms() {}

  function handleFindFilms(film, isShortFilm) {
    if (film === "") {
      setTextError("Нужно ввести ключевое слово");
      setSearchMovies([]);
    } else {
      setIsLoading(true);
      getMovies()
        .then((mov) => {
          setTextError("");
          setMovies(mov);
          const sortedMovies = sortFilmsByName(mov, film);
          if (sortedMovies.length === 0) setTextError("Ничего не найдено");
          if (isShortFilm === "true" || isShortFilm === true) {
            const sortedShortMovies = sortFilmsByDuration(sortedMovies);
            if (sortedShortMovies.length === 0)
              setTextError("Ничего не найдено");
            setSearchMovies(sortedShortMovies);
            localStorage.setItem("searchedMoviesList", JSON.stringify(sortedShortMovies));
          } else {
            setSearchMovies(sortedMovies);
            localStorage.setItem("searchedMoviesList", JSON.stringify(sortedMovies));
          }
          localStorage.setItem("searchedMovies", film);
          localStorage.setItem("moviesShorts", isShortFilm);
        })
        .catch((err) => {
          setTextError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          );
        })
        .finally(() => setIsLoading(false));
    }
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm handleFindFilms={handleFindFilms} textError={textError} />
        <MoviesCardList movies={searchMovies} isLoading={isLoading} />
      </main>
      <Footer />
    </>
  );
}
