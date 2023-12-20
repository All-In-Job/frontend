export type User = {
  id: string;
  nickname: string;
  profileImage: string;
};

export type CommentProps = {
  comment: string;
  date: string;
  id: string;
  user: User;
};

export type CommentLikeUser = {
  email: string;
  id: string;
  name: string;
  nickname: string;
  phone: string;
  profileImage: string;
  provider: string;
  subMajorId: string;
  thermometer: number;
  top: number;
};

export type CommentLike = {
  commentId: string;
  id: string;
  userId: string;
  user: CommentLikeUser;
};
