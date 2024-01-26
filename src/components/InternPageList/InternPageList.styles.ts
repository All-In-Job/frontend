import styled from '@emotion/styled';

export const InternContainer = styled.div`
  color: #717070;
  font-family: SUIT;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
`;

export const TableTitle = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  color: #414140;
  background-color: #fff6f2;
`;

export const Heading = styled.span`
  height: 100%;
  width: 9.7%;
  padding: 16px;
  text-align: center;
  border-left: 1px solid var(--orange-100, #ffe8df);
  &:nth-of-type(1) {
    width: 25% !important;
    border-left: none;
  }
  &:nth-of-type(2) {
    width: 34.5% !important;
  }
  &:nth-of-type(3) {
    width: 11.4% !important;
  }
`;
