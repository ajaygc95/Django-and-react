import React, { useState } from "react";
import {
  RegisterUserContainer,
  ContainerWrapper,
} from "./RegisterUser.element";

const RegisterUser = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    console.log();
    e.preventDefault();
    alert("Form Submittede");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <RegisterUserContainer>
        <ContainerWrapper>
          <h1>
            Username:
            <input
              name="username"
              type="username"
              value={values.username}
              onChange={handleChange}
            ></input>
          </h1>
          <h1>
            Password:
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            ></input>
          </h1>
          <button onSubmit={handleSubmit}>Submit</button>
          {/* <form>
            <h1>
              Username:
             
            </h1>
           
            <button>Submit</button>
          </form> */}
        </ContainerWrapper>
      </RegisterUserContainer>
    </>
  );
};

export default RegisterUser;
