import * as S from './myInfo.style';

function MyInfo() {
  const interestTags = ['#공모전', '#인턴활동', '#대외활동', '#디자인', '#IT프로그래밍', '#예시'];

  return (
    <>
      <S.MyInfoContainer>
        <S.Title>로그인 정보</S.Title>
        <S.LoginInfoWrapper>
          <S.ProfileBox>
            <S.ProfileImgWrapper></S.ProfileImgWrapper>
            <S.ProfileNickname>올인잡님</S.ProfileNickname>
            <S.ProfileEditBtn>프로필 수정</S.ProfileEditBtn>
          </S.ProfileBox>

          <S.InfoBox>
            <S.basicInfoTitle>기본정보</S.basicInfoTitle>
            <S.basicInfoWrapper>
              <S.Id style={{ marginBottom: '12px' }}>아이디</S.Id>
              <S.UserId>asdasddas</S.UserId>
            </S.basicInfoWrapper>
            <S.basicInfoWrapper>
              <S.Id>닉네임</S.Id>
              <S.UserId>김올인</S.UserId>
            </S.basicInfoWrapper>
          </S.InfoBox>

          <S.InterestFieldBox>
            <S.InterestFieldTitle>관심분야</S.InterestFieldTitle>
            <S.InterestTagWrapper>
              {interestTags.map((tag, index) => (
                <S.InterestTag key={index}>{tag}</S.InterestTag>
              ))}
            </S.InterestTagWrapper>
          </S.InterestFieldBox>
        </S.LoginInfoWrapper>
      </S.MyInfoContainer>
    </>
  );
}

export default MyInfo;
