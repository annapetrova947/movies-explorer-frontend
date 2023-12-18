import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <div className="techs" id="techs">
      <h2 className="techs__header">Технологии</h2>
      <p className="techs__seven-technologies">7 технологий</p>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__details">
        <p className="techs__technology">HTML</p>
        <p className="techs__technology">CSS</p>
        <p className="techs__technology">JS</p>
        <p className="techs__technology">React</p>
        <p className="techs__technology">Git</p>
        <p className="techs__technology">Express.js</p>
        <p className="techs__technology">mongoDB</p>
      </div>
    </div>
  );
}
