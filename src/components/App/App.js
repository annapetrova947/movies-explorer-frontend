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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState(true);
  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/sign-up" element={<Register />} />
            <Route path="/sign-in" element={<Login />} />
            <Route
              exact
              path="/"
              element={
                <ProtectedRoute isAllowed={loggedIn}>
                  <Main />
                </ProtectedRoute>
              }
            />
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
                    <Profile />
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
