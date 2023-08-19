import { useState, useEffect } from "react";
import * as S from "./findID.styles";

function FindID() {
  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(300); // 초 단위
  const [timerActive, setTimerActive] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    // 2~10자리의 영문, 한글만 사용하는 정규식
    const regex = /^[a-zA-Z가-힣]{2,10}$/;

    setIsValidName(regex.test(value));
  };

  const handleAuthClick = () => {
    setTimeRemaining(300); // 타이머를 5분으로 초기화
    setTimerActive(true);
  };

  useEffect(() => {
    let timer: number | undefined;
    if (timerActive && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else {
      setTimerActive(false);
    }

    return () => clearTimeout(timer);
  }, [timerActive, timeRemaining]);

  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
  const seconds = String(timeRemaining % 60).padStart(2, "0");

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
            <S.phoneAuthSendBtn onClick={handleAuthClick}>
              인증요청
            </S.phoneAuthSendBtn>
          </S.phoneAuthBox>
            
          <S.phoneAuthBox>
            <S.phoneAuthInput placeholder="인증번호 입력" />
            <S.phoneAuthSendBtn onClick={handleAuthClick}>
              재전송
            </S.phoneAuthSendBtn>
          </S.phoneAuthBox>

          <S.timeCount>{`${minutes}:${seconds}`}</S.timeCount>

          <S.confirmBtn>확인</S.confirmBtn>
        </S.FindIDBox>
      </S.FindIDWrapper>
    </S.FindIDContainer>
  );
}

export default FindID;
