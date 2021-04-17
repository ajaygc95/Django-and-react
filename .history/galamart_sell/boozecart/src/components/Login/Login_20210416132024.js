import React, { useState, useEffect } from "react";
import { faGoogle, faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LoginBox,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
  LoginButton,
  LoginForm,
  LoginFormInput,
  FontAwesomeStyle,
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
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={faGoogle} />
              <SocialLabel>Continue with Google</SocialLabel>
            </FontAwesomeStyle>

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
