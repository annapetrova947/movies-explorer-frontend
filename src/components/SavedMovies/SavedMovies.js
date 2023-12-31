import React from "react";
import Header from "./../Header/Header.js";
import Footer from "./../Footer/Footer.js";
import SearchForm from "./../SearchForm/SearchForm.js";
import MoviesCardList from "./../MoviesCardList/MoviesCardList.js";

export default function SavedMovies() {
  let movies = [
    {
      name: "33 слова о дизайне",
      duration: "1ч 17м",
      isSaved: true,
    },
    {
      name: "33 слова о дизайне",
      duration: "1ч 17м",
      isSaved: false,
    },
    {
      name: "33 слова о дизайне",
      duration: "1ч 17м",
      isSaved: true,
    },
    {
      name: "33 слова о дизайне",
      duration: "1ч 17м",
      isSaved: false,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList movies={movies} />
      </main>
      <Footer />
    </>
  );
}
