import { Outlet, useNavigate, useOutlet } from 'react-router-dom';

import * as S from './signUp.styles';

function SignUp() {
  const myCookieData = false;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('basic-info', { state: { myData: myCookieData } });
  };

  const outlet = useOutlet();

  if (outlet) return <Outlet />;

  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <S.LoginBox>
          <S.CharactorBox />
          <S.Logo>ALL IN JOB</S.Logo>
          <S.AccountActionsBox>
            <S.ActionBtn>회원가입</S.ActionBtn>
          </S.AccountActionsBox>
          <S.divisionLine>
            <div style={{ flexGrow: '1', height: '1px', backgroundColor: '#E1E2E4' }}></div>
            <div style={{ flexGrow: '1', height: '1px', backgroundColor: '#E1E2E4' }}></div>
          </S.divisionLine>
          <S.SocialLoginBox>
            <a href='https://allinjob.co.kr/login/kakao/callback'>
              <S.SocialLoginImg src='/src/pages/signUp/res/img/kakao.png' alt='kakao' />
            </a>
            {/* <a href='https://allinjob.co.kr/login/google/callback'> */}
            <div>
              <S.SocialLoginImg
                onClick={handleNavigation}
                src='/src/pages/signUp/res/img/google.png'
                alt='google'
              />
            </div>
            {/* </a> */}
          </S.SocialLoginBox>
        </S.LoginBox>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
}

export default SignUp;
