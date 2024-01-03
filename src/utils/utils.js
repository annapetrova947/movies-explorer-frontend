export function sortFilmsByName(movies, searchedFilm) {
  if (movies !== undefined) {
    return movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchedFilm.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchedFilm.toLowerCase()),
    );
  }
}

export function sortFilmsByDuration(movies) {
  return movies.filter((movie) => movie.duration <= 40);
}
