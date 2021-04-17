import React, { useState, useEffect } from "react";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { fa } from "@fortawesome/free-brands-svg-icons";
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
  IconStyle1,
  IconStyle2,
  IconStyle3,
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
                <IconStyle1>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faWineGlass} />

                    <SocialLabel>Continue with Facebook</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle1>
              </div>
              <div>
                <IconStyle2>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faWineGlass} />

                    <SocialLabel>Continue with Google</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle2>
              </div>
              <div>
                <IconStyle3>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faWineGlass} />

                    <SocialLabel>Continue with Apple</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle3>
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
