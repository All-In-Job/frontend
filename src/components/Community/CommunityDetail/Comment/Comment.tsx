import { FC } from 'react';

import { toggleCommentLike } from 'apis/comment';
import { ContentInfo } from 'components/Community/CommunityDetail/ContentsInfo/ContentInfo';
import { ReactComponent as LikeSolidIcon } from 'components/Community/CommunityDetail/res/icon-like-solid.svg';

import * as S from './Comment.style';

type User = {
  id: string;
  nickname: string;
  profileImage: string;
};

type CommentProps = {
  comment: string;
  date: string;
  id: string;
  user: User;
};

const Comment: FC<CommentProps> = ({ comment, date, id, user }) => {
  const handleToggleCommentLike = async () => {
    if (!localStorage.getItem('accessToken')) return;

    try {
      const res = await toggleCommentLike(id);
      console.log('댓글 좋아요 기능', res.data.data.commentLike);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Comment>
      <ContentInfo profileImage={user.profileImage} nickname={user.nickname} date={date} />

      <S.CommentContent>
        <p>{comment}</p>
        <S.ButtonList>
          <li>
            <S.Button onClick={() => handleToggleCommentLike()}>
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

export default Comment;
