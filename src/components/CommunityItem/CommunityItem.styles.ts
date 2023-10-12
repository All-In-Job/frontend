import styled from '@emotion/styled';

import { ReactComponent as Bookmark } from './res/img/bookmark.svg';
import { ReactComponent as Horizontal } from './res/img/horizontal_rule.svg';
import { ReactComponent as Like } from './res/img/like.svg';
import { ReactComponent as View } from './res/img/view.svg';
import { ReactComponent as Visibility } from './res/img/visibility.svg';

export const CommunityListContainer = styled.article`
  display: flex;
  padding: 24px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border-top: 1px solid #e1e2e4;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Nickname = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #717070;
  font-size: 17px;
  line-height: 24px;
`;

export const Time = styled.span`
  color: #a0a09f;
  font-size: 14px;
`;

export const Title = styled.span`
  color: #121110;
  font-size: 22px;
  line-height: 30px;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;

export const Count = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: #a0a09f;
  font-size: 15px;
  line-height: 24px;
`;

export const Path = styled.span`
  padding: 4px 12px;
  border-radius: 4px;
  color: #fd6b36;
  border: 1px solid #fd6b36;
`;

export const NicknameIcon = styled(Visibility)``;

export const ViewIcon = styled(View)``;

export const BookmarkIcon = styled(Bookmark)``;

export const LikeIcon = styled(Like)``;

export const HorizontalIcon = styled(Horizontal)``;
