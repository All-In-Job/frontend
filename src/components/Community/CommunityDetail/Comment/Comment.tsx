import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import { isAxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Community } from 'types/community.type';

import { deleteComment, submitEditComment, toggleCommentLike } from 'apis/comment';
import { ContentInfo } from 'components/Community/CommunityDetail/ContentsInfo/ContentInfo';
import { loginUserState } from 'store/user';

import * as S from './Comment.style';
import { CommentLike, CommentProps } from './Comment.types';

const Comment: FC<CommentProps> = ({ setDetailData, comment, commentLike, date, id, user }) => {
  const [loginUser] = useRecoilState(loginUserState);
  const [commentValue, setCommentValue] = useState(comment);
  const [editComment, setEditComment] = useState(comment);
  const [isEdit, setIsEdit] = useState(false);
  const [isMatch, setIsMatch] = useState(false);
  const { detailId } = useParams();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (commentLike) {
      const isMatched = commentLike.some(like => like.user.id === loginUser.id);
      setIsMatch(isMatched);
    }
  }, [loginUser]);

  const handleToggleCommentLike = async () => {
    setIsMatch(isMatch => !isMatch);
    if (!accessToken) return;

    try {
      const res = await toggleCommentLike(id);
      const updatedCommentLikes = res.data.data.commentLike;
      if (updatedCommentLikes > 0) {
        const isLikedByUser = updatedCommentLikes.some(
          (data: CommentLike) => data.user.id === loginUser.id,
        );
        setIsMatch(isLikedByUser);
      }
    } catch (error) {
      if (isAxiosError(error)) throw new Error(error.response?.data);
    }
  };

  const onChangeEditComment = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEditComment(e.target.value);
  };

  const handleSubmitEditComment = async (e: FormEvent<HTMLFormElement>) => {
    if (!accessToken) return;

    e.preventDefault();
    if (editComment === '') return;

    try {
      const res = await submitEditComment({ id, comment: editComment });

      setCommentValue(res.data.data.comment);
      setEditComment(res.data.data.comment);
      setIsEdit(false);
    } catch (error) {
      if (isAxiosError(error)) throw new Error(error.response?.data);
    }
  };

  const handleDeleteComment = async () => {
    if (!accessToken) return;

    try {
      const res = await deleteComment({ communityId: detailId as string, commentId: id });

      if (res) {
        setDetailData(prevData => {
          return {
            ...(prevData as Community),
            comments: res.data.data,
          };
        });
      }
    } catch (error) {
      if (isAxiosError(error)) throw new Error(error.response?.data);
    }
  };

  return (
    <S.Comment>
      <ContentInfo profileImage={user.profileImage} nickname={user.nickname} date={date} />

      <S.CommentContent>
        {isEdit ? (
          <S.CommentEditForm onSubmit={handleSubmitEditComment}>
            <input
              defaultValue={editComment}
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
                <S.Button onClick={() => handleDeleteComment()}>삭제</S.Button>
              </li>
            </>
          )}
        </S.ButtonList>
      </S.CommentContent>
    </S.Comment>
  );
};

export default Comment;
