// import { Link } from 'react-router-dom';

import * as S from './CommunityItem.styles';

interface UserInfo {
  nickname: string;
}

interface CommunityListProps {
  user: UserInfo;
  dateCreation: string;
  title: string;
  path: string;
  viewCount: string;
  likeCount: string;
  scrapCount: string;
}

function CommunityList(props: CommunityListProps) {
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
    <S.CommunityListContainer>
      <S.UserInfo>
        <S.Nickname>
          <S.NicknameIcon />
          {props.user && props.user.nickname}
        </S.Nickname>
        <S.Time>{getTimeDiffString(props.dateCreation)}</S.Time>
      </S.UserInfo>
      <S.Title>{props.title}</S.Title>
      <S.Bottom>
        <S.Path>{props.path}</S.Path>
        <S.CountWrapper>
          <S.Count>
            <S.ViewIcon />
            {props.viewCount}
          </S.Count>
          <S.Count>
            <S.BookmarkIcon />
            {props.scrapCount}
          </S.Count>
          <S.Count>
            <S.LikeIcon />
            {props.likeCount}
          </S.Count>
        </S.CountWrapper>
      </S.Bottom>
    </S.CommunityListContainer>
  );
}

export default CommunityList;
