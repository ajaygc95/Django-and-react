import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Boxcontainer = styled.div``;
export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ;
  grid-template-areas: "big big small";
  grid-template-rows: 425px;
  max-width: 1200px;
  margin: auto;
  grid-column-gap: 20px;
  padding: 25px 10px;
`;
export const BoxItems = styled.div`
  background: #e2ede8;
`;
