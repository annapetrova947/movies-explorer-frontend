import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__end">
        <div className="footer__navigation">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/annapetrova947"
            target="_blank"
          >
            Github
          </a>
        </div>
        <p className="footer__year">&copy; 2023</p>
      </div>
    </footer>
  );
}
