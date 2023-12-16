import { ContentInfo } from 'components/Community/CommunityDetail/ContentsInfo/ContentInfo';
import { ReactComponent as LikeSolidIcon } from 'components/Community/CommunityDetail/res/icon-like-solid.svg';

import * as S from './Comment.style';

type Comments = {
  profileImage?: string;
  nickname?: string;
  comment?: string;
  date: string;
};

export const Comment = ({ profileImage, nickname, comment, date }: Comments) => {
  return (
    <S.Comment>
      <ContentInfo profileImage={profileImage} nickname={nickname} date={date} />

      <S.CommentContent>
        <p>{comment}</p>
        <S.ButtonList>
          <li>
            <S.Button>
              <LikeSolidIcon style={{ marginRight: '4px' }} /> <p>좋아요</p>
            </S.Button>
          </li>
          <li>
            <S.Dotted />
          </li>
          <li>
            <S.Button>수정</S.Button>
          </li>
          <li>
            <S.Dotted />
          </li>
          <li>
            <S.Button>삭제</S.Button>
          </li>
        </S.ButtonList>
      </S.CommentContent>
    </S.Comment>
  );
};
