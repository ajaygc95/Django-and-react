import React from "react";
import { Boxcontainer } from "./Boxes.element";

const Boxes = () => {
  return (
    <>
      <Boxcontainer>
        <BoxWrapper>
          <BoxItems>1</BoxItems>
          <BoxItems>2</BoxItems>
          <BoxItems>3</BoxItems>
        </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
