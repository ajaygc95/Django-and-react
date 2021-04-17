import React, { useState, useEffect } from "react";
import { LoginContainer, LoginWrapper } from "./Login.element";

const Login = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    console.log("HELOOO");
  }, []);

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginBox></LoginBox>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
