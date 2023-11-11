import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Container = styled.main`
  display: grid;
  grid-column: span 12;
  font-family: Bold;
  color: ${palette.black500};
`;

export const Title = styled.h1`
  ${textStyle.headLine02}
  margin: 32px 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & label {
    ${textStyle.title01}
  }
`;
export const SelectWrapper = styled(InputWrapper)`
  width: 588px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid ${palette.black200};
  border-radius: 4px;
  /* font-family: Arial, Helvetica, sans-serif; */
  &::placeholder {
    ${textStyle.title02}
    font-family: Medium;
    color: ${palette.black200};
  }
`;
