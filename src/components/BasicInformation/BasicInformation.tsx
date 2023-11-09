import { createContext, Dispatch, FormEventHandler, SetStateAction, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import { InputGroup } from './InputGroup';
import { InputGroupHeader } from './InputGroupHeader';
import { PhotoList, photos } from './PhotoList';
import { PhotoListHeader } from './PhotoListHeader';

export type InputRuleType = {
  regex: RegExp;
  errorMsg: string;
};
export type InputFieldType = 'name' | 'nickname' | 'phone';

const defaultState = {
  name: {
    value: '',
    isValid: false,
  },
  nickname: {
    value: '',
    isValid: false,
    isConfirmed: false,
  },
  phone: {
    value: '',
    isValid: false,
    isCodeChecked: false,
  },
  agreement: {
    'agree-1': false,
    'agree-2': false,
    isAllChecked: false,
  },
  isPhoneValid: false,
  currentPhoto: photos[0],
};

export const BasicInformationContext = createContext<{
  currentFormState: typeof defaultState;
  setCurrentFormState: Dispatch<SetStateAction<typeof defaultState>>;
} | null>(null);

export const INPUT_RULES: Record<InputFieldType, InputRuleType> = {
  name: {
    regex: /^[가-힣]{2,}$/,
    errorMsg: '2자리 이상의 한글만 입력해주세요.',
  },
  nickname: {
    regex: /^[ㄱ-ㅎ가-힣a-zA-Z]{2,}$/,
    errorMsg: '2자리 이상의 영문, 한글만 입력해주세요.',
  },
  phone: {
    regex: /^(01[016789])[0-9]{4}[0-9]{4}$/,
    errorMsg: '올바른 전화번호를 입력해주세요',
  },
};

export const BasicInformation = () => {
  const navigate = useNavigate();
  const [currentFormState, setCurrentFormState] = useState(defaultState);
  const { email, provider } = useLocation().state as {
    email: string;
    provider: 'google' | 'kakao';
  };

  const updateRequestBody: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const { name, nickname, phone, currentPhoto } = currentFormState;
    const payload = {
      name: name.value,
      nickname: nickname.value,
      phone: phone.value,
      profileImage: currentPhoto,
    };

    navigate('/signup/interest', {
      state: { email, provider, ...payload },
    });
  };

  return (
    <BasicInformationContext.Provider value={{ currentFormState, setCurrentFormState }}>
      <StyledContainer>
        <StyledForm onSubmit={updateRequestBody}>
          <StyledColumn>
            <InputGroupHeader />
            <InputGroup />
          </StyledColumn>
          <StyledColumn>
            <PhotoListHeader />
            <PhotoList />
          </StyledColumn>
        </StyledForm>
      </StyledContainer>
    </BasicInformationContext.Provider>
  );
};

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  grid-column: span 12;
`;

const StyledForm = styled.form`
  width: 988px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 24px;
  background-color: white;
  grid-column-start: 2;
`;
const StyledColumn = styled.div`
  padding: 40px;
`;
