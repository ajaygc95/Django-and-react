import React from "react";
import { Boxes, Services } from "../../components";
import { serviceObj } from "./ServiceData";

const Home = () => {
  return (
    <>
      <Services {...serviceObj}></Services>
      <Boxes></Boxes>
      <Services {...serviceObj}></Services>
      <Boxes></Boxes>
    </>
  );
};

export default Home;
