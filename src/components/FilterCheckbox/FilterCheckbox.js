import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  const [isChecked, setIsChecked] = React.useState(false);

  const changeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={changeCheckbox}
      />
      <span
        className={`filter__slider ${isChecked ? "" : "filter__slider_active"}`}
      />
      Короткометражки
    </label>
  );
}
