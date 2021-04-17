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
  Topq,
  YesAccount,
  SignIn,
  SocialDiv,
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
            <Topq>
              <YesAccount>Already have an account?</YesAccount>
              <SignIn to=''>Sign In</SignIn>
            </Topq>

            <LoginForm>
              <SocialDiv>
                <IconStyle1>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faFacebook} />

                    <SocialLabel>Continue with Facebook</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle1>
              </SocialDiv>
              <SocialDiv>
                <IconStyle2>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faGoogle} />

                    <SocialLabel>Continue with Google</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle2>
              </SocialDiv>
              <SocialDiv>
                <IconStyle3>
                  <FontAwesomeStyle>
                    <FontAwesomeIcon icon={faApple} />

                    <SocialLabel>Continue with Apple</SocialLabel>
                  </FontAwesomeStyle>
                </IconStyle3>
              </SocialDiv>
              <hr></hr>

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
                    <FormName>Last Name</FormName>
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
                    <FormName>Mobile Number</FormName>
                    <FormField
                      name="mobile"
                      type="number"
                      placeholder="Phone number"
                    ></FormField>
                  </LoginFormInput>
                </DetailGrid>
                <DetailGrid>
                  <LoginFormInput>
                    <FormName>Password</FormName>
                    <FormField name="password" type="password"></FormField>
                  </LoginFormInput>
                </DetailGrid>
              </SignUpDetail>
              <LoginButton onClick={login}>Sign Up</LoginButton>
            </LoginForm>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
