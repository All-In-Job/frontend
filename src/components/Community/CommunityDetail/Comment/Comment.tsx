import { ContentInfo } from 'components/Community/CommunityDetail/ContentsInfo/ContentInfo';
import { ReactComponent as LikeSolidIcon } from 'components/Community/CommunityDetail/res/icon-like-solid.svg';

import * as S from './Comment.style';

type Props = {
  profileImage?: string;
  nickname?: string;
  comment?: string;
};

export const Comment = ({ profileImage, nickname, comment }: Props) => {
  return (
    <S.Comment>
      <ContentInfo profileImage={profileImage} nickname={nickname} />

      <S.CommentContent>
        <p>{comment}</p>
        <S.IconBtn>
          <LikeSolidIcon /> <p>좋아요</p>
        </S.IconBtn>
      </S.CommentContent>
    </S.Comment>
  );
};
