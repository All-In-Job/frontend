import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  direction: 'right' | 'left';
};

export const CarouselButton: FC<Props> = ({ direction }) => {
  const content = direction === 'right' ? '>' : '<';

  const getStyle = () => {
    if (direction === 'right') return { right: 0, transform: 'translateX(50%) translateY(-50%)' };
    return { left: 0, transform: 'translateX(-50%) translateY(-50%)' };
  };

  return <StyledButton style={getStyle()}>{content}</StyledButton>;
};

const StyledButton = styled.button`
  border-radius: 100%;
  background-color: white;
  width: 50px;
  height: 50px;

  position: absolute;
  top: 50%;
`;
