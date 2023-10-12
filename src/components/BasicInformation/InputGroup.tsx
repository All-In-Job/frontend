import { ReactComponent as ArrowForwardIcon } from 'assets/icons/icon_arrow_forward.svg';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/icon_check_circle.svg';

import theme from 'styles/theme';

import * as S from './BasicInformation.style';
import { Input } from './Input';

export const InputGroup = () => {
  return (
    <S.Container>
      <NameInput />
      <NicknameInput />
      <PhoneInput />
      <Agreement />
      <S.Submit>확인</S.Submit>
    </S.Container>
  );
};

const NameInput = () => {
  return (
    <S.Row>
      <S.InputHeading>이름</S.InputHeading>
      <Input type='text' placeholder='이름을 입력하세요' name='name' />
    </S.Row>
  );
};

const PhoneInput = () => {
  return (
    <S.Row>
      <S.InputHeading>휴대폰 번호</S.InputHeading>
      <S.FlexRow style={{ gap: '8px' }}>
        <Input type='text' placeholder='휴대폰 11자리를 입력하세요' name='phone' />
        <S.Button>인증요청</S.Button>
      </S.FlexRow>
      <S.FlexRow style={{ marginTop: '12px', gap: '8px' }}>
        <Input
          type='text'
          placeholder='인증 번호를 입력하세요'
          name='code'
          style={{ backgroundColor: theme.palette.background.primary }}
        />
        <S.Button>인증완료</S.Button>
      </S.FlexRow>
    </S.Row>
  );
};

const NicknameInput = () => {
  return (
    <S.Row>
      <S.InputHeading>닉네임</S.InputHeading>
      <Input type='text' placeholder='닉네임을 입력하세요' name='nickname' />
    </S.Row>
  );
};

const Agreement = () => {
  return (
    <S.Row style={{ gap: '8px' }}>
      <S.InputHeading>약관동의</S.InputHeading>
      <p>필수항목 및 선택항목 약관에 동의해주세요.</p>
      <S.CheckAllButton type='button'>
        <CheckCircleIcon fill={theme.palette.black200} />
        <S.InputHeading>전체동의</S.InputHeading>
      </S.CheckAllButton>
      <S.Ul>
        <S.List>
          <button style={{ cursor: 'pointer', borderRadius: '100%' }}>
            <CheckCircleIcon fill={theme.palette.black200} />
          </button>
          <span>필수</span>
          <span>개인정보 수집 및 이용동의</span>
          <ArrowForwardIcon />
        </S.List>
        <S.List>
          <button style={{ cursor: 'pointer', borderRadius: '100%' }}>
            <CheckCircleIcon fill={theme.palette.black200} />
          </button>
          <span>필수</span>
          <span>정보보유기간</span>
          <ArrowForwardIcon />
        </S.List>
      </S.Ul>
    </S.Row>
  );
};
