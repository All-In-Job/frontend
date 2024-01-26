import { commentApi, likeCommentApi } from 'apis';
import { AxiosResponse } from 'axios';
import { Comments } from 'types/community.type';

type CommentDataType = {
  id: string;
  comment: string;
};

type DeleteData = {
  communityId: string;
  commentId: string;
};

type DeleteFuncType = ({
  communityId,
  commentId,
}: DeleteData) => Promise<AxiosResponse<{ data: Comments[] }>>;

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

export const deleteComment: DeleteFuncType = async ({ communityId, commentId }) => {
  return await commentApi({
    method: 'delete',
    url: 'delete',
    data: { communityId, commentId },
  });
};

export const toggleCommentLike = async (commentId: string) => {
  return await likeCommentApi({
    method: 'patch',
    url: commentId,
  });
};
