import { ReactComponent as LikeSolidIcon } from 'components/Community/CommunityDetail/res/icon-like-solid.svg';

import * as S from './Comment.style';

export const Comment = () => {
  return (
    <S.Comment>
      <S.ArticleHeader>
        <S.Profile src={'detailData?.user.profileImage'} />
        <div>
          <S.Nickname>{'detailData?.user.nickname'}님</S.Nickname>
          <S.TimeDiff>12잔</S.TimeDiff>
        </div>
      </S.ArticleHeader>

      <S.CommentContent>
        <p>{'comments'}</p>
        <S.IconBtn>
          <LikeSolidIcon /> <p>좋아요</p>
        </S.IconBtn>
      </S.CommentContent>
    </S.Comment>
  );
};
