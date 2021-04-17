import React, { useState, useEffect } from "react";
import {
  LoginBox,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
  LoginButton,
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
            <Form>
            <FormInput
              name="email"
              type="email"
              placeholder="Your emial address"
            ></FormInput>
            <Button primary>Subscribe</Button>
          </Form>
            <LoginButton onClick={login}>Sign Up</LoginButton>
          </LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
