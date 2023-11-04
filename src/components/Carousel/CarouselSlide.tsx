import { Dispatch, FC, SetStateAction } from 'react';

import styled from '@emotion/styled';

import { Image } from './Carousel';

type Props = {
  images: { id: number; source: string }[];
  currentIndex: number;
  isTransition: boolean;
  setIsTransition: Dispatch<SetStateAction<boolean>>;
};

const IMAGE_WIDTH = 1200;

export const CarouselSlide: FC<Props> = ({
  images,
  currentIndex,
  isTransition,
  // setIsTransition,
}) => {
  return (
    <StyledContainer
      imageCount={images.length}
      currentIndex={currentIndex}
      isTransition={isTransition}
    >
      {images.map(image => (
        <StyledImage key={image.id} image={image} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{
  imageCount: number;
  currentIndex: number;
  isTransition: boolean;
}>`
  width: ${props => props.imageCount * 100}%;
  height: 100%;
  display: flex;
  margin-left: ${props => props.currentIndex * IMAGE_WIDTH * -1}px;
  transition: ${props => (props.isTransition ? '0.3s all ease-in-out' : '')};
`;
const StyledImage = styled.div<{ image: Image }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image.source});
  background-position: center;
  background-size: cover;
`;
