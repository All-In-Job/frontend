import { signupApi } from './index';

export const checkNickNameDuplicate = async (nickname: string) => {
  return await signupApi({
    method: 'GET',
    url: `isNickname?nickname=${nickname}`,
  });
};

export const sendTokenSMS = async (phone: string) => {
  return await signupApi({
    method: 'POST',
    url: 'sendTokenSMS',
    data: {
      phone,
    },
  });
};
