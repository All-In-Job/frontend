import * as S from "./findID.styles";

function FindID() {
  return (
    <S.FindIDContainer>
      <S.FindIDWrapper>
        <S.AdvertiseBox></S.AdvertiseBox>
        <S.FindIDBox>
          <S.CharactorBox>캐릭터</S.CharactorBox>
          <S.Logo>ALL IN JOB</S.Logo>
          <S.FindIDTitle>아이디 찾기</S.FindIDTitle>
          <S.nameTitle>이름</S.nameTitle>
          <S.nameInput placeholder="이름을 입력하세요." />
          <S.validateInfo>2~10자리의 영문, 한글만 사용해주세요.</S.validateInfo>
          <S.phoneAuthTitle>휴대폰 인증</S.phoneAuthTitle>

          <S.phoneAuthBox>
            <S.phoneAuthInput placeholder="휴대폰 11자리" />
            <S.phoneAuthSendBtn>인증요청</S.phoneAuthSendBtn>
          </S.phoneAuthBox>

          <S.phoneAuthBox>
            <S.phoneAuthInput placeholder="인증번호 입력" />
            <S.phoneAuthSendBtn>재전송</S.phoneAuthSendBtn>
          </S.phoneAuthBox>
          
          <S.timeCount>05:00</S.timeCount>

          <S.confirmBtn>확인</S.confirmBtn>
        </S.FindIDBox>
      </S.FindIDWrapper>
    </S.FindIDContainer>
  );
}

export default FindID;
