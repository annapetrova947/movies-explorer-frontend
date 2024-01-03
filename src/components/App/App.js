import React from "react";
import "./App.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import ProtectedRoute from "./../ProtectedRoute.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import Register from "./../Register/Register.js";
import Login from "./../Login/Login.js";
import Header from "./../Header/Header.js";
import Main from "./../Main/Main.js";
import Footer from "./../Footer/Footer.js";
import SavedMovies from "./../SavedMovies/SavedMovies.js";
import Movies from "./../Movies/Movies.js";
import Profile from "./../Profile/Profile.js";
import NotFound from "./../NotFound/NotFound.js";
import { api } from "./../../utils/MainApi.js";
import getMovies from "./../../utils/MoviesApi.js";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState();
  const navigate = useNavigate();

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .getMe(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch((error) => console.log("Ошибка...111 " + error));
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      api
        .getMe()
        .then((userInformation) => {
          setCurrentUser(userInformation);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleLogOut() {
    setLoggedIn(false);
  }

  function handleRegister(name, email, password) {
    api
      .signup(email, name, password)
      .then((res) => {
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    api
      .signin(email, password)
      .then((res) => {
        setLoggedIn(true);
      })
      .then(() => {
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path="/sign-up"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
            <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              exact
              path="/movies"
              element={
                <ProtectedRoute isAllowed={loggedIn}>
                  <>
                    <Movies />
                  </>
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/saved-movies"
              element={
                <ProtectedRoute isAllowed={loggedIn}>
                  <>
                    <SavedMovies />
                  </>
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/profile"
              element={
                <ProtectedRoute isAllowed={loggedIn}>
                  <>
                    <Profile onLogout={handleLogOut} />
                  </>
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
