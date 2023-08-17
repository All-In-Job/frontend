import React, { useState } from "react";
import * as S from "./findID.styles";

function FindID() {
  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    // 2~10자리의 영문, 한글만 사용하는 정규식
    const regex = /^[a-zA-Z가-힣]{2,10}$/;

    if (regex.test(value)) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
  };

  return (
    <S.FindIDContainer>
      <S.FindIDWrapper>
        <S.AdvertiseBox></S.AdvertiseBox>
        <S.FindIDBox>
          <S.CharactorBox>캐릭터</S.CharactorBox>
          <S.Logo>ALL IN JOB</S.Logo>
          <S.FindIDTitle>아이디 찾기</S.FindIDTitle>
          <S.nameTitle>이름</S.nameTitle>
          <S.nameInput
            value={name}
            onChange={handleNameChange}
            placeholder="이름을 입력하세요."
          />
          {!isValidName && (
            <S.validateInfo>
              2~10자리의 영문, 한글만 사용해주세요.
            </S.validateInfo>
          )}
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
