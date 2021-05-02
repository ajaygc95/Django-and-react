import React, { useState, useEffect } from "react";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { FaExclamationCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "./useSignInForm";
import validate from "./ValidateInfo";
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
  SocialDiv,
  NavLinks,
  ErrorsSignUp,
} from "./Login.element";

const Login = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginBox>
            <LoginHeader>Sign In</LoginHeader>
            <Topq>
              <YesAccount>New to BoozeCart?</YesAccount>
              <NavLinks to="/sign-up">Sign Up</NavLinks>
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
                    <FormName>Email</FormName>
                    <FormField
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                    ></FormField>
                    {errors.email && (
                      <ErrorsSignUp>
                        <FaExclamationCircle></FaExclamationCircle>
                        {errors.email}
                      </ErrorsSignUp>
                    )}
                  </LoginFormInput>
                </DetailGrid>

                <DetailGrid>
                  <LoginFormInput>
                    <FormName>Password</FormName>
                    <FormField
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                    ></FormField>
                    {errors.password && (
                      <ErrorsSignUp>
                        <FaExclamationCircle></FaExclamationCircle>
                        {errors.password}
                      </ErrorsSignUp>
                    )}
                  </LoginFormInput>
                </DetailGrid>
              </SignUpDetail>
              <LoginButton onClick={handleSubmit}>Sing In</LoginButton>
            </LoginForm>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
