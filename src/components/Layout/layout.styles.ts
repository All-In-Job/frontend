import styled from '@emotion/styled';

export const COLUMN_WIDTH = 78;

export const Layout = styled.div`
  position: relative;
  width: 100%;
  min-width: 1200px;
  display: grid;
  grid-template-columns: repeat(12, ${COLUMN_WIDTH}px);
  column-gap: 24px;
  justify-content: center;
`;

export const Main = styled.main`
  background-color: lightslategrey;
  height: 100%;
  display: grid;
  gap: 43px;
  margin-top: 50px;
  grid-column: span 9;
`;
