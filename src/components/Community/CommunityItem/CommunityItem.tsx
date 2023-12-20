import { Community } from 'types/community.type';

import { getTimeDiffString } from 'components/Community/utils/getTimeDiffString';

import * as S from './CommunityItem.styles';
import { ReactComponent as BookmarkIcon } from './res/img/bookmark.svg';
import { ReactComponent as LikeIcon } from './res/img/like.svg';
import { ReactComponent as ViewIcon } from './res/img/view.svg';

type Props = Omit<Community, 'detail' | 'userId' | 'comments' | 'communityLikes'>;

function CommunityItem({ user, category, title, view, like, comment, date, path }: Props) {
  console.log(user);

  return (
    <S.CommunityItem to={path}>
      <S.UserInfo>
        <S.Nickname>
          <div
            style={{
              backgroundImage: `url(${user.profileImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '100%',
              height: 30,
              width: 30,
            }}
          />
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
