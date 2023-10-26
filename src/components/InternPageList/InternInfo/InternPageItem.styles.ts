import styled from '@emotion/styled';

export const InternWrapper = styled.div`
  display: flex;
  padding: 8px 0px 8px 16px;
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
  /* border-right: 1px solid #ffe8df; */
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

export const Scrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookmarkBtn = styled.div`
  display: flex;
  width: 55px;
  height: 48px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--background-secondary, #fff6f2);
`;

export const Location = styled.span``;
export const date = styled.span``;
export const View = styled.span``;
