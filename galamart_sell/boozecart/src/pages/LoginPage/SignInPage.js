import React, { useState } from "react";
import { SignIn } from "../../components";
import HomeFeedPage from "../HomeFeed/HomeFeedPage";

const SignInPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>{!isSubmitted ? <SignIn submitForm={submitForm} /> : <HomeFeedPage />}</>
  );
};

export default SignInPage;

// import React from "react";
// import { SignIn } from "../../components";
// const SignInPage = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   function submitForm() {
//     setIsSubmitted(true);
//   }
//   return (
//     <>{!isSubmitted ? <Login submitForm={submitForm} /> : <HomeFeedPage />}</>
//   );
// };

// export default SignInPage;
