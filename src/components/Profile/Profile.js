import React from "react";
import Header from "./../Header/Header";
import InfoTooltip from "./../InfoTooltip/InfoTooltip";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { api } from "./../../utils/MainApi.js";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const navigate = useNavigate();

  const user = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
  const [isUpdateButton, setIsUpdateButton] = React.useState(false);
  const [isReadOnly, setIsReadOnly] = React.useState(true);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [authStatus, setAuthStatus] = React.useState();

  React.useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function closePopup(){
    setIsInfoPopupOpen(false);
  }

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("moviesShorts");
    localStorage.removeItem("searchedMovies");
    props.onLogout();
    navigate("/sign-in");
  }

  function handleChangeData(e) {
    e.preventDefault();
    if (!isUpdateButton) {
      setIsReadOnly(false);
      setIsUpdateButton(true);
    } else {
      updateUser();
    }
  }

  function updateUser() {
    api.updateUser({ name, email })
        .then(res=>{
        setAuthStatus('ok')
        setIsInfoPopupOpen(true)
        })
        .catch(err=>{
            setAuthStatus(err);
            setIsInfoPopupOpen(true);
            setName(user.name);
            setEmail(user.email);

        });
    setIsReadOnly(true);
    setIsUpdateButton(false);
  }

  return (
    <>
      <Header />
      <main className="profile">
        <p className="profile__hello">Привет, Аня!</p>
        <form>
          <div className="profile__data">
            <p className="profile__data-name">Имя</p>
            <input
              onChange={handleChangeName}
              id="name"
              type="text"
              name="name"
              className="profile__data-value"
              value={name}
              readOnly={isReadOnly}
            />
          </div>

          <div className="profile__data">
            <p className="profile__data-name">E-mail</p>
            <input
              onChange={handleChangeEmail}
              id="email"
              type="text"
              name="email"
              className="profile__data-value"
              value={email}
              readOnly={isReadOnly}
            />
          </div>

          <button
            type="submit"
            className={
              isUpdateButton ? "profile__edit profile__save" : "profile__edit"
            }
            onClick={handleChangeData}
          >
            {isUpdateButton ? "Сохранить" : "Редактировать"}
          </button>

          <button type="button" className="profile__exit" onClick={signOut}>
            Выйти за аккаунта
          </button>
        </form>
      </main>
      <InfoTooltip
          status={authStatus}
          isOpen={isInfoPopupOpen}
          onClose={closePopup}/>
    </>
  );
}
