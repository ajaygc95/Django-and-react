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
  SocialDiv,
  NavLinks,
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
                      placeholder="something@email.com"
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
              <LoginButton onClick={login}>Sing In</LoginButton>
            </LoginForm>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
