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
  comment: string;
  commentLike: CommentLike[];
  date: string;
  id: string;
  user: User;
};
