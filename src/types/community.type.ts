export type UserInfo = {
  nickname: string;
};

export type Community = {
  category: string;
  title: string;
  view: number;
  like: number;
  comment: number;
  date: string;
  user: UserInfo;
};
