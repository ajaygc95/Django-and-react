import React, { useState, useEffect } from "react";
import {
  LoginForm,
  FormInput,
  LoginBox,
  LoginButton,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
} from "./Login.element";

const Login = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    console.log("HELOOO");
  }, []);

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginBox>
            <LoginHeader>BoozeCart</LoginHeader>
            <LoginForm>
              <LoginFormInput
                name="username"
                type="username"
                placeholder="Your username"
              ></LoginFormInput>
            </LoginForm>
            <label>
              Password:<input type="password" name="password"></input>
            </label>
            <LoginButton onClick={login}>Sign Up</LoginButton>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
