import { likeCommentApi, postCommentApi } from 'apis';

type PostCommentType = {
  id: string;
  comment: string;
};

export const submitComment = async (data: PostCommentType) => {
  return await postCommentApi({
    method: 'post',
    data: data,
  });
};

export const toggleCommentLike = async (commentId: string) => {
  return await likeCommentApi({
    method: 'patch',
    url: commentId,
  });
};
