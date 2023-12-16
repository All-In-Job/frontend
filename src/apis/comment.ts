import { postCommentApi } from 'apis';

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
