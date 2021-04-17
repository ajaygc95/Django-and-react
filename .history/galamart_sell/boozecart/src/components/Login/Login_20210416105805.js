import React (use,useEffect) from "react";

const Login = () => {
    const [login, setLogin] = useState()

  return (
    <>
      <h1>This is login page</h1>
      <label>
        Username:<input type="text" name="username"></input>
      </label>
      <label>
        Password:<input type="password" name="password"></input>
      </label>
      <button onClick={login}>Sign Up</button>
    </>
  );
};

export default Login;
