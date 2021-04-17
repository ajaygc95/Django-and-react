import React, { useState, useEffect } from "react";
import {
  LoginBox,
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
            <label>
              Username:<input type="text" name="username"></input>
            </label>
            <label>
              Password:<input type="password" name="password"></input>
            </label>
            <Log onClick={login}>Sign Up</Log>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
