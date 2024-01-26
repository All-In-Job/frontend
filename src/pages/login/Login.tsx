import { useNavigate } from 'react-router-dom';

import SocialLoginButton from 'components/Buttons/SocialLoginBtn';

import * as S from './login.styles';

function Login() {
  const navigate = useNavigate();

  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.LoginBox>
          <S.LogoBox src='/images/mainLogo.png' onClick={() => navigate('/')} />
          <S.Logo onClick={() => navigate('/')}>ALL IN JOB</S.Logo>

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

export default Login;
