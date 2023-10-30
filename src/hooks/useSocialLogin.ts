import { useEffect, useState } from 'react';

import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const useSocialLogin = (provider: 'kakao' | 'google') => {
  const [user, setUser] = useState<TokenResponse>();
  const [profile, setProfile] = useState([]);

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
    const getUserProfile = (user: TokenResponse) => {
      let requestUrl = '';

      if (provider === 'google')
        requestUrl = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`;
      if (provider === 'kakao')
        requestUrl =
          'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}';

      axios
        .get(requestUrl, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then(res => {
          setProfile(res.data);
          console.log(res.data);
          console.log(profile);
        })
        .catch(err => console.log(err));
    };

    user && getUserProfile(user);
  }, [user, provider, profile]);

  return {
    login,
  };
};
