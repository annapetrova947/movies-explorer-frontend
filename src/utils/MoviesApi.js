function _getHeaders() {
  return { "Content-Type": "application/json" };
}

function _getJSON(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export default function getMovies() {
  const promise = fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
    headers: _getHeaders(),
  });
  return promise.then(_getJSON);
}
