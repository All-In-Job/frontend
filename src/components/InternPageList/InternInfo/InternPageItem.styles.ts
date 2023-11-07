import styled from '@emotion/styled';

export const InternWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 0px 8px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e2e4;
  & > a {
    width: 66%;
    display: flex;
  }
  & > span {
    justify-content: center;
    width: 8%;
    margin: 16px;
    text-align: center;
    &:nth-of-type(1) {
      width: 10% !important;
    }
  }
`;

export const CompanyBox = styled.span`
  width: 41%;
  display: flex;
  align-items: center;
  padding: 0 !important;
  color: #000;
  font-size: 20px;
  line-height: 26px;
  text-align: start !important;
  span {
    padding: 16px;
  }
`;

export const Img = styled.img`
  width: 84px;
  height: 100%;
  padding: 11px 8px;
`;

export const TextBox = styled.span`
  width: 58%;
  display: flex;
  padding: 16px;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  text-align: left !important;
`;

export const Title = styled.span`
  display: block;
  color: #000;
  font-size: 20px;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const JobRole = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

export const Location = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
export const date = styled.span``;
export const View = styled.span``;
