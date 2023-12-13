import { userApi } from './index';

export const checkNickNameDuplicate = async (nickname: string) => {
  return await userApi({
    method: 'GET',
    url: `isNickname?nickname=${nickname}`,
  });
};

export const sendTokenSMS = async (phone: string) => {
  return await userApi({
    method: 'POST',
    url: 'sendTokenSMS',
    data: {
      phone,
    },
  });
};

export const validateTokenSNS = async (token: number, phone: string) => {
  return await userApi({
    method: 'POST',
    url: 'validateToken',
    data: {
      token,
      phone,
    },
  });
};

export const createUser = async (data: object) => {
  return await userApi({
    method: 'POST',
    url: 'createUser',
    data,
  });
};

export const getLoginUserInfo = async () => {
  return await userApi({
    method: 'GET',
    url: 'getLoginUserInfo',
  });
};

export const findUserProfile = async () => {
  return await userApi({
    method: 'GET',
    url: 'findUserProfile',
  });
};

export const getCalendar = async (year: number, month: number) => {
  return await userApi({
    method: 'GET',
    url: `getCalendar?year=${year}&month=${month}`,
  });
};
