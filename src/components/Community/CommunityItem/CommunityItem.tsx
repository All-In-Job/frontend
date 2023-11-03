import { Community } from 'types/community.type';

import * as S from './CommunityItem.styles';
import { ReactComponent as BookmarkIcon } from './res/img/bookmark.svg';
import { ReactComponent as LikeIcon } from './res/img/like.svg';
import { ReactComponent as ViewIcon } from './res/img/view.svg';
import { ReactComponent as NicknameIcon } from './res/img/visibility.svg';

type Props = Omit<Community, 'detail' | 'userId' | 'comments' | 'communityLikes'>;

function CommunityItem({ id, user, category, title, view, like, comment, date }: Props) {
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
    <S.CommunityItem to={id}>
      <S.UserInfo>
        <S.Nickname>
          <NicknameIcon />
          {user && user.nickname}
        </S.Nickname>
        <S.Time>{getTimeDiffString(date)}</S.Time>
      </S.UserInfo>
      <S.Title>{title}</S.Title>
      <S.PostInfo>
        <S.Category>{category}</S.Category>
        <S.CountWrapper>
          <S.Count>
            <ViewIcon />
            {view}
          </S.Count>
          <S.Count>
            <BookmarkIcon />
            {comment}
          </S.Count>
          <S.Count>
            <LikeIcon />
            {like}
          </S.Count>
        </S.CountWrapper>
      </S.PostInfo>
    </S.CommunityItem>
  );
}

export default CommunityItem;
