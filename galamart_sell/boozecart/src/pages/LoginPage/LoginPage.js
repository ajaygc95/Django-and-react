import React, { useState } from "react";
import { Login } from "../../components";
import HomeFeedPage from "../HomeFeed/HomeFeedPage";

const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>{!isSubmitted ? <Login submitForm={submitForm} /> : <HomeFeedPage />}</>
  );
};

export default LoginPage;
