// import { Link } from 'react-router-dom';

import * as S from './CommunityItem.styles';

interface UserInfo {
  nickname: string;
}

interface CommunityItemProps {
  category: string;
  title: string;
  view: number;
  like: number;
  comment: number;
  date: string;
  user: UserInfo;
}

function CommunityItem({ user, category, title, view, like, comment, date }: CommunityItemProps) {
  const getTimeDiffString = (pastTime: string) => {
    const now = new Date();
    const past = new Date(pastTime);
    const diffMs = now.getTime() - past.getTime();

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0) return `${diffYears}년전`;
    if (diffMonths > 0) return `${diffMonths}개월전`;
    if (diffDays > 0) return `${diffDays}일전`;
    if (diffHours > 0) return `${diffHours}시간전`;
    if (diffMinutes > 0) return `${diffMinutes}분전`;
    if (diffSeconds > 0) return `${diffSeconds}초전`;
  };

  return (
    <S.CommunityItemContainer>
      <S.UserInfo>
        <S.Nickname>
          <S.NicknameIcon />
          {user && user.nickname}
        </S.Nickname>
        <S.Time>{getTimeDiffString(date)}</S.Time>
      </S.UserInfo>
      <S.Title>{title}</S.Title>
      <S.PostInfo>
        <S.Category>{category}</S.Category>
        <S.CountWrapper>
          <S.Count>
            <S.ViewIcon />
            {view}
          </S.Count>
          <S.Count>
            <S.BookmarkIcon />
            {comment}
          </S.Count>
          <S.Count>
            <S.LikeIcon />
            {like}
          </S.Count>
        </S.CountWrapper>
      </S.PostInfo>
    </S.CommunityItemContainer>
  );
}

export default CommunityItem;
