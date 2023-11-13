import { useEffect, useState } from 'react';

import { useGoogleLogin } from '@react-oauth/google';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { socialLogin } from 'apis/login';

export const useSocialLogin = (provider: 'kakao' | 'google') => {
  const [kakaoToken, setKakaoToken] = useState<string | null>(null);
  const [socialAccessToken, setSocialAccessToken] = useState<string | null>(null);
  const [socialLoginResponse, setSocialLoginResponse] = useState({
    email: '',
    accessToken: '',
  });

  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: codeResponse => setSocialAccessToken(codeResponse.access_token),
    onError: error => console.log('Login Failed:', error),
  });

  const openKakaoPopupWindow = () => {
    const popup = window.open(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
        import.meta.env.VITE_API_KAKAO_CLIENT_ID
      }&redirect_uri=http://${location.host}/&scope=account_email`,
      'PopupWin',
      'width=500,height=600',
    );

    const storeKakaoToken = (e: MessageEvent) => {
      const { kakaoToken } = e.data;

      if (!kakaoToken) return;
      setKakaoToken(kakaoToken);
    };
    if (popup) {
      window.removeEventListener('message', storeKakaoToken);
      window.addEventListener('message', storeKakaoToken);
    }
  };

  const getKakaoAccessToken = async (token: string) => {
    const { data } = await axios.post(
      `https://kauth.kakao.com/oauth/token?client_id=${
        import.meta.env.VITE_API_KAKAO_CLIENT_ID
      }&redirect_uri=http://${location.host}/&code=${token}&grant_type=authorization_code`,
    );
    setSocialAccessToken(data.access_token);
  };

  const login = () => {
    if (provider === 'google') googleLogin();
    if (provider === 'kakao') openKakaoPopupWindow();
  };

  const sendSocialAccessTokenToServer = async (token: string) => {
    try {
      const res = await socialLogin(provider, token);
      const emailRegex1 = new RegExp(/[a-z0-9]+@[a-z]+\.([a-z]{2})+\.[a-z]{2}/);
      const emailRegex2 = new RegExp(/[a-z0-9]+@[a-z]+\.([a-z]{2,3})/);
      const { data } = res.data;

      if (emailRegex1.test(data) || emailRegex2.test(data))
        setSocialLoginResponse({ email: data, accessToken: '' });
      else setSocialLoginResponse({ email: '', accessToken: data });
      setSocialAccessToken(null);
    } catch (e) {
      if (e instanceof AxiosError && e.response) console.log(e.response);
    }
  };

  useEffect(() => {
    if (kakaoToken) getKakaoAccessToken(kakaoToken);
  }, [kakaoToken]);

  useEffect(() => {
    socialAccessToken && sendSocialAccessTokenToServer(socialAccessToken);

    if (socialLoginResponse.email)
      navigate('/signup/basic-info', { state: { email: socialLoginResponse.email, provider } });
    if (socialLoginResponse.accessToken) {
      localStorage.setItem('accessToken', socialLoginResponse.accessToken);
      window.location.replace('/');
    }
  }, [socialAccessToken, socialLoginResponse]);

  return {
    login,
  };
};
