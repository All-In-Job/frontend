import { Community } from 'types/community.type';

export type User = {
  id: string;
  nickname: string;
  profileImage: string;
};

export type CommentLike = {
  commentId: string;
  user: User;
};

export type CommentProps = {
  setDetailData: React.Dispatch<React.SetStateAction<Community | undefined>>;
  comment: string;
  commentLike: CommentLike[];
  date: string;
  id: string;
  user: User;
};
