import React from "react";
import { Boxes, DynamicBoxes, Services } from "../../components";
import { serviceObj } from "./ServiceData";

const Home = () => {
  return (
    <>
      <Services {...serviceObj}></Services>
      <Boxes></Boxes>
      <DynamicBoxes {...dynamicObj}></DynamicBoxes>
    </>
  );
};

export default Home;
