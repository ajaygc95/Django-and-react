import React from "react";
import { Boxes, DynamicBoxes, Services } from "../../components";
import { dynamicObj } from "./DynmicServiceData";
import { serviceObj } from "./ServiceData";

const Home = () => {
  return (
    <>
      <Services {...serviceObj}></Services>
      <Boxes></Boxes>
      <DynamicBoxes {...dynamicObj}></DynamicBoxes>
      <DynamicBoxes {...dynamicObj}></DynamicBoxes>
    </>
  );
};

export default Home;
