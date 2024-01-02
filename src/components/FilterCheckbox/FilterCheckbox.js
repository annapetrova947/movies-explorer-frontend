import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox(props) {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (props.isShortsSet === true) {
      setIsChecked(true);
    }
  }, [props.isShortsSet]);

  const changeCheckbox = () => {
    setIsChecked(!isChecked);
    props.handleChangeShorts();
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
