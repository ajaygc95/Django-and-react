import React from "react";
import { Boxcontainer } from "./Boxes.element";

const Boxes = () => {
  return (
    <>
      <Boxcontainer>
          <BoxWrapper>
              <BoxItems></BoxItems>
              <BoxItems></BoxItems>
              <BoxItems></BoxItems>
              <BoxItems></BoxItems>
          </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
