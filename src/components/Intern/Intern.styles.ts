import styled from '@emotion/styled';

export const InternContainer = styled.div`
  padding: 8px 0px 8px 16px;
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
  justify-content: space-between;
  align-items: center;
  color: #414140;
  background-color: #fff6f2;
`;

export const Heading = styled.span`
  height: 100%;
  flex-basis: 13%;
  flex-grow: 1;
  padding: 16px;
  text-align: center;
  border-left: 1px solid var(--orange-100, #ffe8df);
  &:nth-child(1) {
    flex-basis: 40% !important;
    border-left: none;
  }
  &:nth-child(2) {
    flex-basis: 47% !important;
  }
`;

export const InternWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e2e4;
  & > span {
    flex-basis: 13%;
    flex-grow: 1;
    padding: 16px;
    text-align: center;
  }
`;

export const CompanyBox = styled.span`
  flex-basis: 40% !important;
  display: flex;
  align-items: center;
  gap: 24px;
  color: #000;
  font-size: 20px;
  line-height: 26px;
  border-right: 1px solid #ffe8df;
`;

export const Img = styled.img`
  width: 68px;
  height: 68px;
`;

export const TextBox = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: 47% !important;
  text-align: left !important;
`;

export const Title = styled.span`
  display: block;
  color: #000;
  font-size: 20px;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Location = styled.span``;
export const date = styled.span``;
export const View = styled.span``;
export const Scrap = styled.span``;
