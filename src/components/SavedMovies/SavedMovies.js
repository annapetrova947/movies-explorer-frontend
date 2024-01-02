import React from "react";
import Header from "./../Header/Header.js";
import Footer from "./../Footer/Footer.js";
import SearchForm from "./../SearchForm/SearchForm.js";
import MoviesCardList from "./../MoviesCardList/MoviesCardList.js";
import { api } from "./../../utils/MainApi.js";
import { sortFilmsByName, sortFilmsByDuration } from "./../../utils/utils.js";

export default function SavedMovies() {
  const [savedMovies, setSavedMovies] = React.useState();
  const [searchSavedMovies, setSearchSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [textError, setTextError] = React.useState();

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getSavedFilms()
      .then((mov) => {
        setSavedMovies(mov);
        setSearchSavedMovies(mov);
      })
      .catch((err)=>{setTextError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')})
      .finally(()=>setIsLoading(false));
  }, []);

  function deleteMovieOnSavedPage(movie) {
    console.log('filter');
    setSearchSavedMovies(searchSavedMovies.filter((mov) => mov._id !== movie._id));
  }

  function handleFindFilms(film, isShortFilm) {
    if (film === '') {
            setTextError('Нужно ввести ключевое слово');
            setSearchSavedMovies([])
    }
    else if (savedMovies) {
        setTextError('')
      const sortedMovies = sortFilmsByName(savedMovies, film);
      if (sortedMovies.length === 0) setTextError('Ничего не найдено');
      if (isShortFilm === true) {
        const sortedShortMovies = sortFilmsByDuration(sortedMovies);
        if (sortedShortMovies.length === 0) setTextError('Ничего не найдено');
        setSearchSavedMovies(sortedShortMovies);
      } else {
        setSearchSavedMovies(sortedMovies);
      }
    }
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm handleFindFilms={handleFindFilms} textError={textError}/>
        <MoviesCardList
          movies={searchSavedMovies}
          deleteMovieOnSavedPage={deleteMovieOnSavedPage}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  );
}
