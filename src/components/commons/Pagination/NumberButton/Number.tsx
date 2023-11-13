import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  number: number;
  isActive: boolean;

  handleClickPageNumber: () => void;
};

const NumberButton: FC<Props> = ({ number, isActive, handleClickPageNumber }) => {
  return (
    <Number isActive={isActive} onClick={() => handleClickPageNumber()}>
      {number}
    </Number>
  );
};

export default NumberButton;

const Number = styled.button<{ isActive: boolean }>`
  color: ${props =>
    props.isActive ? props.theme.palette.orange500 : props.theme.palette.black100};
  background-color: transparent;
  font-size: 20px;
  font-family: ${props => (props.isActive ? 'ExtraBold' : 'Bold')};
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
  cursor: pointer;
`;
