import React, { useState, useEffect } from "react";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
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
  SocialLabel,
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
            <p>Already have an account? Sign in</p>

            <LoginForm>
              <div>
                <FontAwesomeStyle>
                <IconStyel1></IconStyel1>
                  <FontAwesomeIcon icon={faWineGlass} />
                  <SocialLabel>Continue with Google</SocialLabel>
                </FontAwesomeStyle>
              </div>
              <div>
                <FontAwesomeStyle>
                  <FontAwesomeIcon icon={faWineGlass} />
                  <SocialLabel>Continue with Google</SocialLabel>
                </FontAwesomeStyle>
              </div>
              <div>
                <FontAwesomeStyle>
                  <FontAwesomeIcon icon={faWineGlass} />
                  <SocialLabel>Continue with Google</SocialLabel>
                </FontAwesomeStyle>
              </div>
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
