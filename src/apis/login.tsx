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