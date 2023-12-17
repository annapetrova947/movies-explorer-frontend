import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <div className="about-project" id="about_project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__description">
        <p className="about-project__in-numbers">
          Дипломный проект включал 5 этапов
        </p>
        <p className="about-project__details">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__in-numbers">
          На выполнение диплома ушло 5 недель
        </p>
        <p className="about-project__details">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline">
        <p className="about-project__weeks about-project__weeks-black">
          1 неделя
        </p>
        <p className="about-project__weeks">4 недели</p>
        <p className="about-project__side">Back-end</p>
        <p className="about-project__side">Front-end</p>
      </div>
    </div>
  );
}
