import styled from "styled-components";

export const ListItemContainer = styled.div`
  max-width: 1300px;
  margin: auto;
`;

export const ListItemWrapper = styled.div`
  padding: 0px 24px;
  max-width: 1100px;
  color: #444;
`;

export const ListNavContainer = styled.div`
  margin-top: 20px;
  padding: 20px 24px;
  font-family: sans-serif;
  display: flex;
  height: 40px;
  align-items: center;
  gap: 30px;
  width: 1000px;
  margin-bottom: 10px;
`;

export const ListItems = styled.li`
  text-decoration: none;
  list-style: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #4f4d4f; ;
`;

export const ListItemWrapContainer = styled.div`
  padding: 20px 24px;
`;

export const TopHeader = styled.h3`
  font-family: sans-serif;
  color: black;
`;

export const ItemCard = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const InnerCard = styled.div`
  padding: 10px 12px;
  border: 1px solid #888;
  border-radius: 5px;
  height: 150px;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const InnerCardWrapper = styled.div``;
export const InnerHeader = styled.h4``;

export const InnerPrice = styled.h4`
  font-size: 1rem;
  padding: 10px 0px;
  color: #4f4d4f;
`;

export const InnerDescript = styled.p`
  color: #444;
  margin-top: 10px;
  font-family: DD-TTNorms, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: bold;
  line-height: 20px;
  color: rgb(118, 118, 118);
  font-size: 0.75rem;
`;
export const InnerItemImage = styled.img``;
