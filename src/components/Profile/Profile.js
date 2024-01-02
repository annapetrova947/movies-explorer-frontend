import React from "react";
import Header from "./../Header/Header";
import InfoTooltip from "./../InfoTooltip/InfoTooltip";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { api } from "./../../utils/MainApi.js";
import { useNavigate } from "react-router-dom";
import useForm from '../../hooks/useForm';

export default function Profile(props) {
  const navigate = useNavigate();
  const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();

  const user = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
  const [isUpdateButton, setIsUpdateButton] = React.useState(false);
  const [isReadOnly, setIsReadOnly] = React.useState(true);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [authStatus, setAuthStatus] = React.useState();
  const [isLastValues, setIsLastValues] = React.useState(false);
  let buttonClassName = `profile__edit profile__save ${!isFormValid && "profile__save_disabled"}`
   const EMAIL_REGEX =
           "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";

   React.useEffect(() => {
      if (user) {
        resetForm(user);
      }
    }, [user, resetForm]);

    React.useEffect(() => {
        if (user.name === enteredValues.name && user.email === enteredValues.email) {
          setIsLastValues(true);
        } else {
          setIsLastValues(false);
        }
      }, [enteredValues]);

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
    api.updateUser({
          name: enteredValues.name,
          email: enteredValues.email,
    })
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
        <form id="form">
          <div className="profile__data">
            <p className="profile__data-name">Имя</p>
            <input
              onChange={handleChange}
              id="name"
              type="text"
              name="name"
              className="profile__data-value"
              value={enteredValues.name || ''}
              readOnly={isReadOnly}
              required
            />
          </div>
            <span className="form__input-error">{errors.name}</span>
          <div className="profile__data">
            <p className="profile__data-name">E-mail</p>
            <input
              onChange={handleChange}
              id="email"
              type="email"
              name="email"
              className="profile__data-value"
              value={enteredValues.email || ''}
              readOnly={isReadOnly}
              required
              minLength={2}
              maxLength={30}
              pattern={EMAIL_REGEX}
            />
          </div>
            <span className="form__input-error">{errors.email}</span>
          <button
            type="submit"
            className={
              isUpdateButton ? buttonClassName : "profile__edit"
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
