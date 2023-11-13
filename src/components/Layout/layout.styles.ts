import styled from '@emotion/styled';

export const COLUMN_WIDTH = 4;

export const Layout = styled.div`
  //background-color: azure;
  //min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, ${COLUMN_WIDTH}vw);
  column-gap: 24px;
  justify-content: center;
  //margin-bottom: 12px;
  height: 100%;
`;

export const Main = styled.main`
  background-color: lightslategrey;
  height: 100%;
  display: grid;
  gap: 43px;
  margin-top: 50px;
  grid-column: span 9;
`;
