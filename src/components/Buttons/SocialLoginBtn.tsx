import { useState, useEffect, FC } from 'react';

import styled from '@emotion/styled';
import { useGoogleLogin, TokenResponse } from '@react-oauth/google';
import axios from 'axios';
// import KakaoLogin from 'react-kakao-login';

type Props = {
  provider: 'kakao' | 'google';
};

const SocialLoginButton: FC<Props> = ({ provider }) => {
  const [user, setUser] = useState<TokenResponse>();
  const [profile, setProfile] = useState([]);

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse: TokenResponse) => setUser(codeResponse),
    onError: error => console.log('Login Failed:', error),
  });

  const login = () => {
    if (provider === 'kakao') {
      // return useKakaoLogin({
      //   onSuccess: codeResponse => setUser(codeResponse),
      //   onError: error => console.log('Login Failed:', error),
      // });
    }
    if (provider === 'google') {
      googleLogin();
    }
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
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
    }
  }, [user]);

  return (
    <SocialLoginImg
      src={
        provider === 'kakao'
          ? '/assets/images/kakao_login_medium_wide.png'
          : '/assets/images/google_login.png'
      }
      onClick={() => login()}
    />
  );
};

export default SocialLoginButton;

export const SocialLoginImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
