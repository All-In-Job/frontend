import { useNavigate } from 'react-router-dom';

import * as S from './Aside.styles';

function Aside() {
  const navigate = useNavigate();

  return (
    <S.AsideWrapper>
      <S.UserSideBar>
        <S.UserSideBarText>맞춤 솔루션을 받아보세요!</S.UserSideBarText>
        <S.LoginButton type='button' onClick={() => navigate('/login')}>
          로그인
        </S.LoginButton>
        <S.OptionsButton onClick={() => navigate('/login')}>회원가입</S.OptionsButton>
      </S.UserSideBar>
      {/*<MyInfoNav />*/}

      <S.ContentsSideBar>홍보문구</S.ContentsSideBar>
    </S.AsideWrapper>
  );
}

export default Aside;
