import { loginApi } from './index';

export const socialLogin = async (provider: 'google' | 'kakao', token: string) => {
  return await loginApi({
    method: 'GET',
    url: `socialLogin?provider=${provider}&token=${token}`,
  });
};
