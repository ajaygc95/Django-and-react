import { useState, useEffect } from "react";
import axios from "axios";

export const useSignInForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [errors, setErros] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErros(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      axios
        .post("http://127.0.0.1:8000/auth/", values)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
export default useSignInForm;
