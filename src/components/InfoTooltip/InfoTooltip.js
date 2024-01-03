import React from "react";
import "./InfoTooltip.css";
import ok_image from "../../images/ok.svg";
import error_image from "../../images/error.svg";

export default function InfoTooltip(props) {
  let img;
  let text;

  if (props.status === "ok") {
    img = ok_image;
    text = "Вы успешно обновили профиль!";
  } else {
    img = error_image;
    text = props.status;
  }

  if (props.isOpen) {
    return (
      <div id="modal_info" className="modal modal_type_add modal_show">
        <div className="modal__form">
          <button
            className="modal__close modal__close_photo"
            type="button"
            onClick={props.onClose}
          />
          <img src={img} className="modal__info" alt={props.status} />
          <p className="modal__info-title">{text}</p>
        </div>
      </div>
    );
  }
}
