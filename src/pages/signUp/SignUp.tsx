import styled from '@emotion/styled';
import { Outlet, useOutlet } from 'react-router-dom';

import SocialLoginButton from 'components/Buttons/SocialLoginBtn';

import * as S from './signUp.styles';

function SignUp() {
  const outlet = useOutlet();

  if (outlet) return <Outlet />;

  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.LoginBox>
          <S.LogoBox src='/src/assets/images/mainLogo.png' />
          <S.Logo>ALL IN JOB</S.Logo>
          <S.AccountActionsBox>
            <S.ActionBtn>회원가입</S.ActionBtn>
          </S.AccountActionsBox>
          <S.divisionLine>
            <div style={{ flexGrow: '1', height: '1px', backgroundColor: '#E1E2E4' }}></div>
            <div style={{ flexGrow: '1', height: '1px', backgroundColor: '#E1E2E4' }}></div>
          </S.divisionLine>
          <S.SocialLoginBox>
            <SocialLoginButton provider='kakao' />
            <SocialLoginButton provider='google' />
          </S.SocialLoginBox>
        </S.LoginBox>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
}

export default SignUp;

export const SocialLoginImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
