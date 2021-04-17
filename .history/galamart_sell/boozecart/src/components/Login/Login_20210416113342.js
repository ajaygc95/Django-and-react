import React, { useState, useEffect } from "react";
import {
  LoginBox,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
  LoginButton,
  LoginForm,
  LoginFo
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
              <Button primary>Subscribe</Button>
            </LoginForm>
            <LoginButton onClick={login}>Sign Up</LoginButton>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
