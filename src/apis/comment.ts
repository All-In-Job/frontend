import { commentApi, likeCommentApi } from 'apis';

type CommentDataType = {
  id: string;
  comment: string;
};

export const submitComment = async (data: CommentDataType) => {
  return await commentApi({
    method: 'post',
    data: data,
  });
};

export const submitEditComment = async (data: CommentDataType) => {
  return await commentApi({
    method: 'patch',
    url: 'patch',
    data: data,
  });
};

export const deleteComment = async (commentId: string) => {
  return await commentApi({
    method: 'delete',
    url: `delete/${commentId}`,
  });
};

export const toggleCommentLike = async (commentId: string) => {
  return await likeCommentApi({
    method: 'patch',
    url: commentId,
  });
};
