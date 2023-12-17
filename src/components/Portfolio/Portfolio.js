import React from "react";
import "./Portfolio.css";
import linkLogo from "./../../images/link-logo-min.svg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <a
        className="portfolio__link"
        href="https://github.com/annapetrova947/how-to-learn"
        target="_blank"
      >
        <p className="portfolio__text">Одностраничный сайт</p>
        <img
          src={linkLogo}
          className="portfolio__link-logo"
          alt="Логотип ссылки"
        />
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/annapetrova947/russian-travel"
        target="_blank"
      >
        <p className="portfolio__text">Адаптивный сайт</p>
        <img
          src={linkLogo}
          className="portfolio__link-logo"
          alt="Логотип ссылки"
        />
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/annapetrova947/react-mesto-auth"
        target="_blank"
      >
        <p className="portfolio__text">Одностраничное приложение</p>
        <img
          src={linkLogo}
          className="portfolio__link-logo"
          alt="Логотип ссылки"
        />
      </a>
    </div>
  );
}
