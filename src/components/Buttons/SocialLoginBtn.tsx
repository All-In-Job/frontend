import { FC } from 'react';

import styled from '@emotion/styled';

import { useSocialLogin } from 'hooks/useSocialLogin';

type Props = {
  provider: 'kakao' | 'google';
};

const SocialLoginButton: FC<Props> = ({ provider }) => {
  const { login } = useSocialLogin(provider);

  return (
    <SocialLoginImg
      src={
        provider === 'kakao'
          ? '/src/assets/images/kakao_login_medium_wide.png'
          : '/src/assets/images/google_login.png'
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
