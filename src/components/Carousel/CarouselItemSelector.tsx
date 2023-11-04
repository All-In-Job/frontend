import { FC } from 'react';

import styled from '@emotion/styled';

import { Image } from './Carousel';

type Props = {
  images: Image[];
};

export const CarouselItemSelector: FC<Props> = ({ images }) => {
  return (
    <StyledContainer>
      {Array.from({ length: images.length - 2 }).map((_, idx) => {
        return <StyledCircle key={idx} />;
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
const StyledCircle = styled.button`
  width: 11px;
  height: 11px;
  border-radius: 100%;
  cursor: pointer;
  background-color: #d9d9d9;
`;
