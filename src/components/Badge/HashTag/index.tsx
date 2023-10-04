import { FC, ReactNode } from 'react';

import styled from '@emotion/styled';

interface Props {
  text: ReactNode;
  isActive: boolean;
}

const HashTag: FC<Props> = ({ text, isActive }) => {
  return <Container isActive={isActive}>{text}</Container>;
};

export default HashTag;

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  width: fit-content;
  color: ${({ isActive }) => (isActive ? '#FD6B36' : '#717070')};
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  border-radius: 9999px;
  border: 2px solid ${({ isActive }) => (isActive ? '#FD6B36' : '#ededed')};
  background: var(--black-white-wh, #fff);
  cursor: pointer;
`;
