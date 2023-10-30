export type UserInfo = {
  nickname: string;
};

export type Community = {
  id: string;
  category: string;
  title: string;
  view: number;
  likeCount: number;
  commentCount: number;
  date: string;
  user: UserInfo;
};
