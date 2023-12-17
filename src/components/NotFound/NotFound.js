import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound__code">404</p>
      <p className="notfound__pagenotfound">Страница не найдена</p>
      <p className="notfound__back">Назад</p>
    </div>
  );
}
