import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { FaExclamationCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "./useForm";
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
  const [items, setItems] = useState([]);

  const data = {
    title: "with-details",
    description: "THis is something cool with api",
  };

  // const handleSubmit = (e) => {
  //   console.log(data);
  //   fetch("http://localhost:8000/api/todos/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then(function (response) {
  //       console.log("this is response" + response);
  //       console.log(response.token);
  //     })
  //     .catch(function (error) {});
  // };

  return (
    <>
      <LoginContainer>
        {/* <div className="container">
          <form className="white" onSubmit={handleSubmit}>
            <h5 className="grey-text.text-darken-3">Sign Up With Email</h5>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" />
            </div>
            <div className="input-field">
              <button className="btn blue darken-3" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div> */}

        <LoginWrapper>
          <LoginBox>
            <LoginHeader>Sign Up</LoginHeader>
            <Topq>
              <YesAccount>Already have an account?</YesAccount>
              <NavLinks to="/sign-in">Sign In</NavLinks>
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
                {/* <DetailGrid>
                  <LoginFormInput>
                    <FormName>First Name</FormName>
                    <FormField
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      value={values.firstname}
                      onChange={handleChange}
                    ></FormField>

                    {errors.firstname && (
                      <ErrorsSignUp>
                        <FaExclamationCircle></FaExclamationCircle>
                        {errors.firstname}
                      </ErrorsSignUp>
                    )}
                  </LoginFormInput>
                  <LoginFormInput>
                    <FormName>Last Name</FormName>
                    <FormField
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      value={values.lastname}
                      onChange={handleChange}
                    ></FormField>
                    {errors.lastname && (
                      <ErrorsSignUp>
                        {" "}
                        <FaExclamationCircle></FaExclamationCircle>
                        {errors.lastname}
                      </ErrorsSignUp>
                    )}
                  </LoginFormInput>
                </DetailGrid> */}
                <DetailGrid>
                  <LoginFormInput>
                    <FormName>Username</FormName>
                    <FormField
                      name="username"
                      type="username"
                      value={values.username}
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
                {/* <DetailGrid>
                  <LoginFormInput>
                    <FormName>Country</FormName>
                    <FormField
                      name="country"
                      type="dropdown"
                      placeholder="+1 (     )"
                      value={values.country}
                      onChange={handleChange}
                    ></FormField>
                    {errors.country && (
                      <ErrorsSignUp>

                        <FaExclamationCircle></FaExclamationCircle>
                        {errors.country}
                      </ErrorsSignUp>
                    )}
                  </LoginFormInput>
                  <LoginFormInput>
                    <FormName>Mobile Number</FormName>
                    <FormField
                      name="phonenumber"
                      type="text"
                      placeholder="Phone number"
                      value={values.phonenumber}
                      onChange={handleChange}
                    ></FormField>
                    {errors.phonenumber && (
                      <ErrorsSignUp>

                        <FaExclamationCircle></FaExclamationCircle>
                        {errors.phonenumber}
                      </ErrorsSignUp>
                    )}
                  </LoginFormInput>
                </DetailGrid> */}
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

              <LoginButton onClick={handleSubmit}>Sign Up</LoginButton>
            </LoginForm>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
