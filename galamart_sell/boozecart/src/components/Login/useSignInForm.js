import { useState, useEffect } from "react";
import axios from "axios";

export const useSignInForm = (callback, validate) => {
  const [values, setValues] = useState({
    // firstname: "",
    // lastname: "",
    // username: "",
    email: "",
    password: "",
    // phonenumber: "",
    // country: "",
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
      fetch("http://127.0.0.1:8000/user/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then(function (response) {
          console.log("this is response" + response.data);
          console.log(response.token);
        })
        .catch(function (error) {});
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
export default useSignInForm;
