import styled from '@emotion/styled';

import { ReactComponent as Bookmark } from './res/img/bookmark.svg';

export const LanguageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 21px;
  color: var(--black-400, #414140);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;

export const LanguageWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 12px;
  background: var(--background-primary-50, #f8f8f8);
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tag = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  span {
    height: 32px;
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--black-white-wh, #fff);
    font-size: 15px;
    line-height: 24px;
  }
`;

export const Disabled = styled.span`
  color: var(--orange-500, #a0a09f);
  border: 1px solid var(--black-200, #a0a09f);
`;

export const Activate = styled.span`
  color: var(--orange-500, #fd6b36);
  border: 1px solid var(--orange-500, #fd6b36);
`;

export const Imminent = styled.span`
  color: var(--orange-500, #fd6b36);
  background: var(--orange-100, #ffe8df) !important;
  border: 1px solid var(--orange-500, #fd6b36);
`;

export const BookmarkIcon = styled(Bookmark)<{ 'data-ispick': boolean }>`
  cursor: pointer;
  path {
    fill: ${props => (props['data-ispick'] ? props.theme.palette.black200 : '#fff')};
    stroke: ${props =>
      props['data-ispick'] ? props.theme.palette.black100 : props.theme.palette.black200};
  }
`;

export const Title = styled.div`
  color: var(--black-500, #121110);
  font-feature-settings: 'ss10' on;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.134px;
`;

export const ActivateBtn = styled.button`
  width: 100%;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: var(--title-white, #f6f6f6);
  background: var(--orange-500, #fd6b36);
  a {
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    cursor: pointer;
  }
`;

export const DisabledBtn = styled.button`
  width: 100%;
  display: flex;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: var(--background-primary-50, #f8f8f8);
  background: var(--black-100, #d0cfcf);
  pointer-events: none;
`;

export const ExamDate = styled.div``;
export const Deadline = styled.div``;
export const Schedule = styled.div``;
