import React, { useState, useEffect } from "react";

const Login = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    console.log("HELOOO");
  }, []);

  return (
    <>
      <LoginContainer>
        <h1>This is login page</h1>
        <label>
          Username:<input type="text" name="username"></input>
        </label>
        <label>
          Password:<input type="password" name="password"></input>
        </label>
        <button onClick={login}>Sign Up</button>
      </LoginContainer>
    </>
  );
};

export default Login;
