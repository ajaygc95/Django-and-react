import React from "react";
import { Boxcontainer, BoxItems, BoxWrapper } from "./Boxes.element";

const Boxes = () => {
  return (
    <>
      <Boxcontainer>
        <BoxWrapper>
          <BoxItems1>1</BoxItems1>
          <BoxItems>2</BoxItems>
          <BoxItems>3</BoxItems>
        </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
