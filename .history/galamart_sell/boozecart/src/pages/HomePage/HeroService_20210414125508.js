import React from "react";
import { Services } from "../../components";
import { } from "./ServiceData";

const Home = () => {
  return (
    <>
      <Services {...homeObj}></Services>
    </>
  );
};

export default Home;
