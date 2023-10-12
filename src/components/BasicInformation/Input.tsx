import { CSSProperties, FC, HTMLInputTypeAttribute } from 'react';

import styled from '@emotion/styled';

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  style?: CSSProperties;
  name: 'name' | 'nickname' | 'phone' | 'code';
};

export const Input: FC<Props> = ({ type, placeholder, style, name }) => {
  return <StyledInput type={type} placeholder={placeholder} style={style} name={name} />;
};

const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid #a0a09f;
  padding: 12px;
  width: 100%;
`;
