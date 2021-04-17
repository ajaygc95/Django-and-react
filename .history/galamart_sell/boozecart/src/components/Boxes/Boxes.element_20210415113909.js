import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Boxcontainer = styled.div``;
export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: ;
  grid-template-areas: "big big small";
  grid-template-rows: 400px;
  max-width: 1200px;
  margin: auto;
  grid-gap: 20px;
  padding: 25px 10px;
`;

export const BoxItems1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  background: #323638;
  color: white;
`;
export const BoxItems2 = styled.div`
  align-items: center;
  padding: 1.5rem 2rem;
  padding: 20px;
  background: #e2ede8;
`;
export const BoxItems3 = styled.div`
  align-items: center;
  padding: 1.5rem 2rem;
  padding: 20px;
  background: #53dbb0;
`;

export const FontAwesomeStyle = styled.div`
  text-align: center;
  font-size: 80px;
  width: 100%;
  margin-bottom: 10px;
`;

export const TopLine = styled.p`
  font-family: sans-serif !important;
  font-font-weight: bold;
  font-size: 16px;
  align-self: flex-start;
  margin-bottom: 20px;
`;
