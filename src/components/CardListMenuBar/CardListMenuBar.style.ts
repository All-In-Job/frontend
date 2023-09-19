import styled from '@emotion/styled';

export const MenuBar = styled.ul`
  background-color: #ffe7de;
  //background-color: lightslategrey;
  height: 122px;
  color: white;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 24px;
  grid-column: span 12;
`;
export const Menu = styled.li`
  background-color: darkgray;
  display: grid;
  place-items: center;
`;
export const IconBox = styled.div`
  width: 98px;
  height: 98px;
  display: grid;
  justify-content: center;
`;
export const MenuText = styled.span`
  text-align: center;
`;
