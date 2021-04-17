import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Boxcontainer = styled.div``;
export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ;
  grid-template-areas: "big big small";
  grid-template-rows: 400px;
  max-width: 1200px;
  margin: auto;
  grid-column-gap: 20px;
  padding: 25px 10px;
`;
export const BoxItems1 = styled.div`
  background: #323638;
`;
export const BoxItems2 = styled.div`
  background: #e2ede8;
`;
export const BoxItems3 = styled.div`
  background: #53dbb0;
`;
