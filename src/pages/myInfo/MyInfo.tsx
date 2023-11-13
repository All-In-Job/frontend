import * as S from './myInfo.style';

function MyInfo() {
  return (
    <>
      <S.MyInfoContainer>
        <S.Title>로그인 정보</S.Title>
        <S.LoginInfoWrapper>
          <S.ProfileBox>
            <S.ProfileImgWrapper></S.ProfileImgWrapper>
          </S.ProfileBox>
        </S.LoginInfoWrapper>
      </S.MyInfoContainer>
    </>
  );
}

export default MyInfo;
