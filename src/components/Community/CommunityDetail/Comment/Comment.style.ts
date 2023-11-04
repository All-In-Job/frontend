import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Profile = styled.img`
  background-color: ${palette.background.primary};
  border-radius: 100%;
  height: 44px;
  width: 44px;
`;

export const IconBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  ${textStyle.title01}
  color: ${palette.black200};
`;

export const Nickname = styled.div`
  ${textStyle.title02}
`;

export const TimeDiff = styled.div`
  ${textStyle.label03}
  color: ${palette.black200};
`;

export const Comment = styled.li``;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 14px;
  padding-left: 46px;
  & > p {
    ${textStyle.title02}
    background-color: ${palette.background.secondary};
    padding: 12px 16px;
    border-radius: 8px;
  }
`;
