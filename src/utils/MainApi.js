class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  _getAuthHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }

  _getJSON(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  signup(email, name, password) {
    const promise = fetch(`${this._baseUrl}/signup`, {
      headers: this._getHeaders(),
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    });
    return promise.then(this._getJSON);
  }

  signin(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      headers: this._getHeaders(),
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(this._getJSON)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          return res;
        }
      });
  }

  getMe() {
    const token = localStorage.getItem("token");
    const promise = fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return promise.then(this._getJSON);
  }

  updateUser(data) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(this._getJSON);
  }

  saveFilm(film) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._getAuthHeaders(),
      method: "POST",
      body: JSON.stringify({
        country: film.country,
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: "https://api.nomoreparties.co" + film.image.url,
        trailerLink: film.trailerLink,
        thumbnail:
          "https://api.nomoreparties.co" + film.image.formats.thumbnail.url,
        movieId: film.id,
        nameRU: film.nameRU,
        nameEN: film.nameEN,
      }),
    }).then(this._getJSON);
  }

  getSavedFilms() {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this._getJSON);
  }

  deleteSavedFilm(filmId) {
    const token = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies/${filmId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    }).then(this._getJSON);
  }
}

export const api = new Api("https://api.anna.movies.nomoredomainsmonster.ru");
