import React from "react";
import { Services } from "";
import { serviceObj } from "./ServiceData";

const Home = () => {
  return (
    <>
      <Services {...serviceObj}></Services>
    </>
  );
};

export default Home;
