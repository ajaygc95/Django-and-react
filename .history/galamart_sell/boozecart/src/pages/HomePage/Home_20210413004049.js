import React from "react";
import { InfoSection } from "../../components";
import { homeObj } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObj}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <InfoSection {...homeObj}></InfoSection>
    </>
  );
};

export default Home;
