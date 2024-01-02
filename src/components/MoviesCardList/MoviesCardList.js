import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "./../MoviesCard/MoviesCard.js";
import Preloader from "./../Preloader/Preloader.js";
import "./MoviesCardList.css";

export default function MoviesCardList(props) {
  const location = useLocation();
  let isSavedLocation = location.pathname === "/saved-movies";
  const [shownMovies, setShownMovies] = React.useState(0);

  React.useEffect(()=>{
    console.log(props.isLoading)
  }, [])

  function shownMoviesCount() {
    const displayWidth = window.innerWidth;
    if (isSavedLocation) {
      setShownMovies(props.movies.length);
    }
    if (displayWidth > 1180) {
      setShownMovies(16);
    } else if (displayWidth > 1023) {
      setShownMovies(12);
    } else if (displayWidth > 800) {
      setShownMovies(8);
    } else if (displayWidth < 800) {
      setShownMovies(5);
    }
  }

  React.useEffect(() => {
    shownMoviesCount();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", shownMoviesCount);
    }, 500);
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(shownMovies + 4);
    } else if (display > 1023) {
      setShownMovies(shownMovies + 3);
    } else if (display < 1023) {
      setShownMovies(shownMovies + 2);
    }
  }

  return (
    <div className="movies">
      {props.isLoading === false ? (
        <>
          <div className="movies__list">
            {props.movies.slice(0, shownMovies).map((film) => (
              <MoviesCard
                movie={film}
                deleteMovieOnSavedPage={props.deleteMovieOnSavedPage}
                key={isSavedLocation ? film._id : film.id}
              />
            ))}
          </div>
          {!isSavedLocation && shownMovies < props.movies.length ? (
            <div className="movies__more">
              <button
                type="button"
                className="movies__button"
                onClick={showMore}
              >
                Еще
              </button>
            </div>
          ) : (
            <div className="movies__empty"></div>
          )}
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
