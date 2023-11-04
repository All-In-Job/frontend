import { FC } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

import { Image } from './Carousel';

type Props = {
  images: Image[];
  currentIndex: number;
};

export const CarouselItemSelector: FC<Props> = ({ images, currentIndex }) => {
  return (
    <StyledContainer>
      {Array.from({ length: images.length - 2 }).map((_, idx) => {
        return <StyledCircle key={idx} isTarget={currentIndex === idx + 1} />;
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  bottom: 23px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
`;
const StyledCircle = styled.button<{ isTarget: boolean }>`
  width: ${props => (props.isTarget ? '31px' : '11px')};
  height: 11px;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${props => (props.isTarget ? theme.palette.orange500 : '#d9d9d9')};
  transition: 0.3s width ease-in-out;
`;
