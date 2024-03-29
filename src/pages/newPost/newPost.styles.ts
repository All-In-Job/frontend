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
  &::placeholder {
    ${textStyle.title02}
    font-family: Medium;
    color: ${palette.black200};
  }
`;

export const MyBlock = styled.div`
  .wrapper-class {
    margin-bottom: 4rem;
    font-family: none;
  }
  .toolbar-class {
    border: 1px solid ${palette.black200} !important;
  }
  .editor {
    height: 500px !important;
    border: 1px solid ${palette.black200} !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
  .disable {
    display: none;
  }
  .RichEditor-editor,
  .RichEditor-editor .public-DraftEditor-content {
    ${textStyle.label03}
    font-family: Medium;
  }
  .public-DraftEditorPlaceholder-root {
    font-family: Medium;
    color: ${palette.black500};
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const SubmitBtn = styled.button`
  width: 180px;
  padding: 12px 0;
  border-radius: 8px;
  color: #f6f6f6;
  background-color: ${theme.palette.orange500};
  font-size: ${textStyle.title02.fontSize};
  line-height: ${textStyle.title02.lineHeight};
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  width: 180px;
  padding: 12px 0;
  border-radius: 8px;
  color: ${theme.palette.black300};
  background-color: ${props => props.theme.palette.background.primary};
  font-size: ${textStyle.title02.fontSize};
  line-height: ${textStyle.title02.lineHeight};
  cursor: pointer;
`;
