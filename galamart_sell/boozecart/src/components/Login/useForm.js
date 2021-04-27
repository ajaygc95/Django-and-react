import { useState, useEffect } from "react";
import axios from "axios";

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
    country: "",
  });

  const [errors, setErros] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const data = [
    {
      title: "new comer",
      description: "This is coming from form ",
      completed: true,
    },
  ];
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
      fetch("http://localhost:8000/auth/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then(function (response) {
          console.log("this is response" + response);
          console.log(response.token);
        })
        .catch(function (error) {});
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
