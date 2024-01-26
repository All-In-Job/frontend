import { atom } from 'recoil';

export const loginUserState = atom({
  key: 'loginUser',
  default: {
    id: '',
    nickname: '',
    profileImage: '',
  },
});
