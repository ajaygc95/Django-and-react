import React from "react";
import { InfoSection } from "../../components";
import { homeObj, homeObjFour, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObj}></InfoSection>
    </>
  );
};

export default Home;
