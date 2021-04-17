import React from "react";
import { Boxes, Services } from "../../components";
import { serviceObj } from "./ServiceData";

const Home = () => {
  return (
    <>
      <Services {...serviceObj}></Services>
      <Services {...serviceObj}></Services>
      <Boxes
    </>
  );
};

export default Home;
