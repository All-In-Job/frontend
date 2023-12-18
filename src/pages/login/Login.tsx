import { useNavigate } from 'react-router-dom';

import { deleteUser } from 'apis/deleteUser';
import SocialLoginButton from 'components/Buttons/SocialLoginBtn';

import * as S from './login.styles';

function Login() {
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    const inputValue = prompt('탈퇴할 계정의 이메일을 입력해주세요.');
    if (inputValue) {
      const res = await deleteUser(inputValue);
      const { data, status } = res;
      if (status === 200 && data.data) alert('회원 탈퇴에 성공했습니다.');
      if (status === 200 && data.data === false) alert('입력하신 계정이 DB에 존재하지 않습니다.');
    }
  };

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
          <button type='button' onClick={handleDeleteUser} style={{ backgroundColor: 'red' }}>
            계정 탈퇴
          </button>
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
