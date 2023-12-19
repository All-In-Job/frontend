import { FC, useState } from 'react';

import { useRecoilState } from 'recoil';

import { toggleCommentLike } from 'apis/comment';
import { ContentInfo } from 'components/Community/CommunityDetail/ContentsInfo/ContentInfo';
import { loginUserState } from 'store/user';

import * as S from './Comment.style';
import { CommentLike, CommentProps } from './Comment.types';

const Comment: FC<CommentProps> = ({ comment, date, id, user }) => {
  const [loginUser] = useRecoilState(loginUserState);
  const [commentLike, setCommentLike] = useState<CommentLike[]>([]);
  const [isMatch, setIsMatch] = useState(false);

  const handleToggleCommentLike = async () => {
    if (!localStorage.getItem('accessToken')) return;

    try {
      const res = await toggleCommentLike(id);
      if (res) {
        const isMatched = res.data.data.commentLike.some(
          (data: CommentLike) => data.user.id === loginUser.id,
        );
        console.log(isMatched);
        setCommentLike(res.data.data.commentLike);
        setIsMatch(isMatched);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(commentLike);

  return (
    <S.Comment>
      <ContentInfo profileImage={user.profileImage} nickname={user.nickname} date={date} />

      <S.CommentContent>
        <p>{comment}</p>
        <S.ButtonList>
          <li>
            <S.Button onClick={() => handleToggleCommentLike()}>
              <S.LikeIcon style={{ marginRight: '4px' }} data-ismatched={isMatch} />
              <S.LikeText isMatched={isMatch}>좋아요</S.LikeText>
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
