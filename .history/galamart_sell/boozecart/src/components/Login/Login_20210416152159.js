import React, { useState, useEffect } from "react";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
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
  SignUpDetail,
  DetailGrid,
  Last,
  FormName,
  FormField,
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
            <LoginHeader>Sign Up</LoginHeader>
            <p>Already have an account? Sign in</p>

            <LoginForm>
              <div>
                <IconStyle1>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faFacebook} />

                    <SocialLabel>Continue with Facebook</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle1>
              </div>
              <div>
                <IconStyle2>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faGoogle} />

                    <SocialLabel>Continue with Google</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle2>
              </div>
              <div>
                <IconStyle3>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faApple} />

                    <SocialLabel>Continue with Apple</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle3>
              </div>
              <SignUpDetail>
                <DetailGrid>
                  <LoginFormInput>
                    <FormName>First Name</FormName>
                    <FormField
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                    ></FormField>
                  </LoginFormInput>
                  <LoginFormInput>
                    <FormName>First Name</FormName>
                    <FormField
                      name="firstname"
                      type="text"
                      placeholder="Last Name"
                    ></FormField>
                  </LoginFormInput>
                </DetailGrid>
                <DetailGrid>
                  <LoginFormInput>
                    <FormName>Email</FormName>
                    <FormField
                      name="email"
                      type="email"
                      placeholder="something@email.com"
                    ></FormField>
                  </LoginFormInput>
                </DetailGrid>
                <DetailGrid>
                  <LoginFormInput>
                    <FormName>Country</FormName>
                    <FormField
                      name="country"
                      type="dropdown"
                      placeholder="+1 (     )"
                    ></FormField>
                  </LoginFormInput>
                  <LoginFormInput>
                    <FormName>Email</FormName>
                    <FormField
                      name="email"
                      type="email"
                      placeholder="something@email.com"
                    ></FormField>
                  </LoginFormInput>
                </DetailGrid>
                {/* <LoginFormInput
                    name="email"
                    type="email"
                    placeholder="Your emial address"
                  ></LoginFormInput>
                  <LoginFormInput
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  ></LoginFormInput> */}
              </SignUpDetail>
              <DetailGrid>
                <LoginFormInput>
                  <FormName>First Name</FormName>
                  <FormField
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                  ></FormField>
                </LoginFormInput>
              </DetailGrid>
              <LoginButton onClick={login}>Sign Up</LoginButton>
            </LoginForm>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
