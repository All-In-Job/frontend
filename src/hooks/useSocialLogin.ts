import { useEffect, useState } from 'react';

import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { socialLogin } from 'apis/login';

export const useSocialLogin = (provider: 'kakao' | 'google') => {
  const [user, setUser] = useState<TokenResponse | null>(null);
  const [socialLoginResponse, setSocialLoginResponse] = useState({
    email: '',
    accessToken: '',
  });

  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse),
    onError: error => console.log('Login Failed:', error),
  });

  const kakaoLogin = () => {
    window.open(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
        import.meta.env.VITE_API_KAKAO_CLIENT_ID
      }&redirect_uri=http://${location.host}/`,
      'PopupWin',
      'width=500,height=600',
    );
  };

  const login = () => {
    if (provider === 'google') googleLogin();
    if (provider === 'kakao') kakaoLogin();
  };

  useEffect(() => {
    const getUserProfile = async (user: TokenResponse) => {
      try {
        const res = await socialLogin(provider, user.access_token);

        const emailRegex1 = new RegExp(/[a-z0-9]+@[a-z]+\.([a-z]{2})+\.[a-z]{2}/);
        const emailRegex2 = new RegExp(/[a-z0-9]+@[a-z]+\.([a-z]{2,3})/);

        const { data } = res.data;
        console.log(data);

        if (emailRegex1.test(data) || emailRegex2.test(data))
          setSocialLoginResponse({ email: data, accessToken: '' });
        else setSocialLoginResponse({ email: '', accessToken: data });
        setUser(null);
      } catch (e) {
        if (e instanceof AxiosError && e.response) console.log(e.response);
      }
    };

    user && getUserProfile(user);

    // if (user) navigate('/signup/basic-info', { state: user });
    if (socialLoginResponse.email)
      navigate('/signup/basic-info', { state: { email: socialLoginResponse.email, provider } });
    if (socialLoginResponse.accessToken) navigate('/', { state: socialLoginResponse });
  }, [user, socialLoginResponse]);

  return {
    login,
  };
};
