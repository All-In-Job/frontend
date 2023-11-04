export type UserInfo = {
  id: string;
  email: string;
  provider: string;
  name: string;
  nickname: string;
  phone: string;
  profileImage: string;
  major: string;
};

export type Comments = {
  id: string;
  nickname: string;

  comment: string;
  date: string;
  userId: string;
};

export type CommunityLikes = {
  id: string;
  userId: string;
};

export type Community = {
  id: string;
  title: string;
  category: string;
  detail: string;
  date: string;
  view: number;
  like: number;
  comment: number;
  userId: string;
  user: UserInfo;
  comments: Comments[];
  communityLikes: CommunityLikes[];
};
