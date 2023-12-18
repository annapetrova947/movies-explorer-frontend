import React from "react";
import "./AboutMe.css";
import photo from "./../../images/photo.jpg";

export default function AboutMe() {
  return (
    <div className="aboutme" id="student">
      <h2 className="aboutme__student">Студент</h2>
      <div className="aboutme__info">
        <img src={photo} className="aboutme__photo" alt="Фото" />
        <div className="aboutme__text-info">
          <p className="aboutme__name">Анна</p>
          <p className="aboutme__profession">Фронтенд-разработчик, 22 года</p>
          <p className="aboutme__description">
            Я родилась в Тюмени, закончила физико-математическую школу, после
            чего в 2019 году поступила в ИТМО на программную инженерию. Сейчас я
            учусь в магистратуре ИТМО на направлении Веб-технологии. А также
            работаю разработчиком в Газпромнефть.
          </p>
          <a
            className="aboutme__github"
            href="https://github.com/annapetrova947"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
