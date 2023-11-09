import { useContext, useEffect } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

import { MyInfoUpdateContext } from './MyInfoUpdateModal';

export const NicknameSection = () => {
  const { formState, setFormState } = useContext(MyInfoUpdateContext);

  useEffect(() => {
    // 닉네임 정보 요청
    // setFormState(닉네임)
  }, []);

  return (
    <StyledContainer>
      <StyledTitle>닉네임</StyledTitle>
      <StyledInput
        type='text'
        value={formState.nickname}
        onChange={e => setFormState({ ...formState, nickname: e.target.value })}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
const StyledTitle = styled.h1`
  font-size: 20px;
`;
const StyledInput = styled.input`
  border-radius: 4px;
  width: 100%;
  padding: 12px;
  border: 1px ${theme.palette.black200} solid;
  margin-top: 8px;
`;
