import { FC, ReactNode } from 'react';

import styled from '@emotion/styled';

export type Shape = 'round' | 'rect';

interface Props {
  text: ReactNode;
  isActive: boolean;
  shape?: Shape;
  onClick?: () => void;
  className?: string;
}

const HashTag: FC<Props> = ({ text, isActive, onClick, shape = 'round', className }) => {
  return (
    <Container className={className} shape={shape} onClick={onClick} isActive={isActive}>
      {text}
    </Container>
  );
};

export default HashTag;

const Container = styled.div<{ isActive: boolean; shape: Shape }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  width: fit-content;
  color: ${({ isActive, shape }) => {
    if (shape === 'round') {
      return isActive ? '#FD6B36' : '#717070';
    }

    return isActive ? '#fff' : 'var(--black-200, #A0A09F);';
  }};
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  border-radius: ${({ shape }) => (shape === 'round' ? '9999px' : '4px')};
  border: 2px solid ${({ isActive }) => (isActive ? '#FD6B36' : '#ededed')};
  background-color: ${({ isActive, shape }) => {
    if (shape === 'round') {
      return 'var(--black-white-wh, #fff)';
    }

    return isActive ? '#FD6B36' : 'var(--background-primary, #EDEDED)';
  }};
  cursor: pointer;
`;
