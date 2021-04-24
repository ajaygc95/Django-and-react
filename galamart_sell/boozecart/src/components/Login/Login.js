import React, { useState, useEffect } from "react";
import axios from "axios";
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
  SocialDiv,
  NavLinks,
} from "./Login.element";

const Login = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phonenumber, setPhoneNumber] = useState(null);
  const [items, setItems] = useState([]);

  const data = {
    title: "from-react",
    description: "this is react descp",
    completed: true,
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8000/api/todos/", data)
      .then(function (response) {
        console.log("this is response" + response);
      })
      .catch(function (error) {
        console.log("this is error" + error);
      });
  };

  return (
    <>
      <LoginContainer>
        <div className="container">
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
        </div>

        {/* <h1> Hello world</h1>
        {items.map((item) => (
          <div>
            {item.id}
            {item.title}
            {item.description}
          </div>
        ))} */}
        {/* <LoginWrapper>
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
                <DetailGrid>
                  <LoginFormInput>
                    <FormName>First Name</FormName>
                    <FormField
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      value={firstname}
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                    ></FormField>
                  </LoginFormInput>
                  <LoginFormInput>
                    <FormName>Last Name</FormName>
                    <FormField
                      name="firstname"
                      type="text"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    ></FormField>
                  </LoginFormInput>
                  <LoginFormInput>
                    <FormName>Mobile Number</FormName>
                    <FormField
                      name="mobile"
                      type="number"
                      placeholder="Phone number"
                      value={phonenumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    ></FormField>
                  </LoginFormInput>
                </DetailGrid>
                <DetailGrid>
                  <LoginFormInput>
                    <FormName>Password</FormName>
                    <FormField
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></FormField>
                  </LoginFormInput>
                </DetailGrid>
              </SignUpDetail>

              <LoginButton onClick={login}>Sign Up</LoginButton>
            </LoginForm>
          </LoginBox>
        </LoginWrapper> */}
      </LoginContainer>
    </>
  );
};

export default Login;
