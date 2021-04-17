import React, { useState, useEffect } from "react";d
import {
  LoginBox,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
  LoginButton,
  LoginForm,
  LoginFormInput,
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
                name="email"
                type="email"
                placeholder="Your emial address"
              ></LoginFormInput>
              <LoginFormInput
                name="password"
                type="password"
                placeholder="Enter your password"
              ></LoginFormInput>
              <LoginButton onClick={login}>Sign Up</LoginButton>
            </LoginForm>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
