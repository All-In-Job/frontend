import styled from '@emotion/styled';

export const COLUMN_WIDTH = 78;

export const Layout = styled.div`
  position: relative;
  //width: 100%;
  height: 100%;
  min-width: 1200px;
  display: grid;
  grid-template-columns: repeat(12, ${COLUMN_WIDTH}px);
  column-gap: 24px;
  justify-content: center;
`;
