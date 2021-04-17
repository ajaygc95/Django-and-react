import React from "react";
import { serviceObj } from "./ServiceData";

const Home = () => {
  return (
    <>
      <Services {...serviceObj}></Services>
    </>
  );
};

export default Home;
