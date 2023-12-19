import styled from '@emotion/styled';

import { ReactComponent as LikeSolidIcon } from 'components/Community/CommunityDetail/res/icon-like-solid.svg';
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

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  color: ${palette.black200};
  gap: 6px;

  > li {
    font-size: 14px;
    color: ${palette.black200};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${palette.black200};
  cursor: pointer;
`;

export const LikeText = styled.p<{ isMatched: boolean }>`
  color: ${props => (props.isMatched ? palette.orange500 : palette.black200)};
`;

export const LikeIcon = styled(LikeSolidIcon)<{ 'data-ismatched': boolean | undefined }>`
  path {
    stroke: ${props => (props['data-ismatched'] ? palette.orange500 : palette.black200)};
  }
`;

export const Dotted = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${palette.black100};
`;

export const Nickname = styled.div`
  ${textStyle.title02}
`;

export const TimeDiff = styled.div`
  ${textStyle.label03}
  color: ${palette.black200};
`;

export const Comment = styled.li`
  :not(:last-of-type) {
    margin-bottom: 32px;
  }
`;

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
