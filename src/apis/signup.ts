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

export const validateTokenSNS = async (token: number, phone: string) => {
  return await signupApi({
    method: 'POST',
    url: 'validateToken',
    data: {
      token,
      phone,
    },
  });
};

export const createUser = async (data: object) => {
  return await signupApi({
    method: 'POST',
    url: 'createUser',
    data,
  });
};
