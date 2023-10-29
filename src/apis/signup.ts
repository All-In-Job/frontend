import { signupApi } from './index';

export const checkNickNameDuplicate = async (nickname: string) => {
  return await signupApi({
    url: `isNickname?nickname=${nickname}`,
  });
};
