import { loginApi } from './index';

export const socialLogin = async (provider: 'google' | 'kakao', token: string) => {
  return await loginApi({
    url: 'socialLogin',
    method: 'POST',
    data: {
      provider,
      token,
    },
  });
};

export const login = async (id: string) => {
  return await loginApi({
    method: 'POST',
    data: {
      id,
    },
  });
};

export const logout = async () => {
  return await loginApi({
    method: 'POST',
    url: 'logout',
  });
};
