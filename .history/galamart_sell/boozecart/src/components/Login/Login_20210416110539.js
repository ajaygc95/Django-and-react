import React, { useState, useEffect } from "react";
import { LoginContainer } from "./Login.element";

const Login = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    console.log("HELOOO");
  }, []);

  return (
    <>
      <LoginContainer>
          <LoginWrapper></LoginWrapper>
       
      </LoginContainer>
    </>
  );
};

export default Login;
