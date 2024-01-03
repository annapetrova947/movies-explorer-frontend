import React, { useCallback } from "react";
import isEmail from "validator/es/lib/isEmail";

const useForm = () => {
  const [enteredValues, setEnteredValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleChange = (event) => {
    const input = event.target;
    const name = event.target.name;
    const value = event.target.value;

    if (name === "email") {
      if (!isEmail(value)) {
        input.setCustomValidity("Некорректый адрес почты.");
      } else {
        input.setCustomValidity("");
      }
    }

    setEnteredValues({
      ...enteredValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });
    setIsFormValid(event.target.closest("#form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setEnteredValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setEnteredValues, setErrors, setIsFormValid],
  );

  return {
    enteredValues,
    errors,
    handleChange,
    isFormValid,
    resetForm,
  };
};

export default useForm;
