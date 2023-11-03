import SocialLoginButton from 'components/Buttons/SocialLoginBtn';

import * as S from './login.styles';

function Login() {
  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.LoginBox>
          <S.LogoBox src='/src/assets/images/mainLogo.png' />
          <S.Logo>ALL IN JOB</S.Logo>
          <S.AccountActionsBox>
            <S.ActionBtn>가입 계정 찾기</S.ActionBtn>
            <span style={{ margin: '0 8px', color: '#E1E2E4' }}>|</span>
            <S.ActionBtn>회원가입</S.ActionBtn>
          </S.AccountActionsBox>
          <S.divisionLine>
            <div style={{ flexGrow: '1', height: '1px', backgroundColor: '#E1E2E4' }}></div>
            <span style={{ margin: '0 4px', padding: '0' }}>OR</span>
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

export default Login;
