import { useState, useEffect } from 'react';

import * as S from './findID.styles';

function FindID() {
  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(300); // 초 단위
  const [timerActive, setTimerActive] = useState(false);
  const [phone, setPhone] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidAuthCode, setIsValidAuthCode] = useState(false);
  const [isAuthRequested, setIsAuthRequested] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    // 2~10자리의 영문, 한글만 사용하는 정규식
    const regex = /^[a-zA-Z가-힣]{2,10}$/;

    setIsValidName(regex.test(value));
  };

  const handleAuthClick = () => {
    if (!isValidPhone) {
      return;
    }

    setTimeRemaining(300);
    setTimerActive(true);
    setIsAuthRequested(true);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // 숫자만 남김
    if (value.length > 3) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    }
    if (value.length > 8) {
      value = value.slice(0, 8) + '-' + value.slice(8);
    }
    if (value.length > 13) {
      value = value.slice(0, 13); // 최대 길이는 13
    }
    setPhone(value);
    setIsValidPhone(/^\d{3}-\d{4}-\d{4}$/.test(value));
  };

  const handleAuthCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // 인증번호가 6자리를 초과하면, 6자리까지만 잘라낸다.
    if (value.length > 6) {
      value = value.substring(0, 6);
    }

    setAuthCode(value);
    const regex = /^\d{6}$/; // 정확히 6자리 숫자여야 함

    setIsValidAuthCode(regex.test(value));
  };

  const isValid = isValidName && isValidPhone && isValidAuthCode;

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

  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
  const seconds = String(timeRemaining % 60).padStart(2, '0');

  return (
    <S.FindIDContainer>
      <S.FindIDWrapper>
        <S.FindIDBox>
          <S.Logo>ALL IN JOB</S.Logo>
          <S.FindIDTitle>가입 계정 찾기</S.FindIDTitle>
          <S.nameBoxWrapper>
            <S.nameTitle>이름</S.nameTitle>
            <S.nameInput
              value={name}
              onChange={handleNameChange}
              placeholder='이름을 입력하세요.'
            />
            {!isValidName && <S.validateInfo>2~10자리의 영문, 한글만 사용해주세요.</S.validateInfo>}
          </S.nameBoxWrapper>
          <S.phoneAuthTitle>휴대폰 인증</S.phoneAuthTitle>

          {/* 휴대폰 input */}
          <S.phoneAuthBox>
            <S.AuthWBoxWrapper>
              <S.nameInput value={phone} onChange={handlePhoneChange} placeholder='휴대폰 11자리' />
              <S.phoneAuthSendBtn onClick={handleAuthClick} isActive={isValidPhone}>
                인증요청
              </S.phoneAuthSendBtn>
            </S.AuthWBoxWrapper>
            {!isValidPhone && phone.length > 0 && (
              <S.validateInfo>올바른 전화번호를 입력해주세요.</S.validateInfo>
            )}
          </S.phoneAuthBox>

          {/* 인증번호 input */}
          <S.phoneAuthBox>
            <S.AuthWBoxWrapper>
              <S.AuthNumberInput
                value={authCode}
                onChange={handleAuthCodeChange}
                placeholder='인증번호를 입력해주세요.'
                isAuthRequested={isAuthRequested}
              />
              <S.phoneAuthSendBtn isActive={isValidAuthCode}>인증완료</S.phoneAuthSendBtn>
            </S.AuthWBoxWrapper>
            <div style={{ display: 'flex' }}>
              {!isValidAuthCode && authCode.length > 0 && (
                <S.validateInfo>올바른 인증번호를 입력해주세요.</S.validateInfo>
              )}
              <S.timeCount style={{ visibility: isAuthRequested ? 'visible' : 'hidden' }}>
                {`유효시간 ${minutes}:${seconds}`}
              </S.timeCount>
            </div>
          </S.phoneAuthBox>

          <S.confirmBtn
            style={{
              backgroundColor: isValid ? '#FD6B36' : '#E7E6E5',
            }}
          >
            확인
          </S.confirmBtn>
        </S.FindIDBox>
      </S.FindIDWrapper>
    </S.FindIDContainer>
  );
}

export default FindID;
