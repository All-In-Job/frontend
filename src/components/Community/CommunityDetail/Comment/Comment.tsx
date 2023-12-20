import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { useRecoilState } from 'recoil';

import { submitEditComment, toggleCommentLike } from 'apis/comment';
import { ContentInfo } from 'components/Community/CommunityDetail/ContentsInfo/ContentInfo';
import { loginUserState } from 'store/user';

import * as S from './Comment.style';
import { CommentLike, CommentProps } from './Comment.types';

const Comment: FC<CommentProps> = ({ comment, date, id, user }) => {
  const [loginUser] = useRecoilState(loginUserState);
  const [commentValue, setCommentValue] = useState(comment);
  const [editComment, setEditComment] = useState('');
  const [commentLike, setCommentLike] = useState<CommentLike[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  const handleToggleCommentLike = async () => {
    if (!localStorage.getItem('accessToken')) return;

    try {
      const res = await toggleCommentLike(id);
      if (res) {
        const isMatched = res.data.data.commentLike.some(
          (data: CommentLike) => data.user.id === loginUser.id,
        );
        setCommentLike(res.data.data.commentLike);
        setIsMatch(isMatched);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeEditComment = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEditComment(e.target.value);
  };

  const handleSubmitEditComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editComment === '') return;

    try {
      const res = await submitEditComment({ id, comment: editComment });

      setCommentValue(res.data.data.comment);
      setEditComment('');
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(commentLike);

  return (
    <S.Comment>
      <ContentInfo profileImage={user.profileImage} nickname={user.nickname} date={date} />

      <S.CommentContent>
        {isEdit ? (
          <S.CommentEditForm onSubmit={handleSubmitEditComment}>
            <input
              value={editComment}
              onChange={onChangeEditComment}
              placeholder='댓글을 입력해주세요!'
            />
            <S.EditButton>수정</S.EditButton>
          </S.CommentEditForm>
        ) : (
          <p>{commentValue}</p>
        )}
        <S.ButtonList>
          <li>
            <S.Button onClick={() => handleToggleCommentLike()}>
              <S.LikeIcon style={{ marginRight: '4px' }} data-ismatched={isMatch} />
              <S.LikeText isMatched={isMatch}>좋아요</S.LikeText>
            </S.Button>
          </li>
          {user.id === loginUser.id && (
            <>
              <li>
                <S.Dotted />
              </li>
              <li>
                <S.Button onClick={() => setIsEdit(prev => !prev)}>수정</S.Button>
              </li>
              <li>
                <S.Dotted />
              </li>
              <li>
                <S.Button>삭제</S.Button>
              </li>
            </>
          )}
        </S.ButtonList>
      </S.CommentContent>
    </S.Comment>
  );
};

export default Comment;
