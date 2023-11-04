import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { CarouselItemSelector } from './CarouselItemSelector';
import { CarouselSlide } from './CarouselSlide';

export type Image = {
  id: number;
  source: string;
};

const images: Image[] = [
  {
    id: 1,
    source:
      'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg',
  },
  {
    id: 2,
    source:
      'https://wallpapers.com/images/hd/high-resolution-nature-mountains-landscape-5n3jp9psonuimymd.jpg',
  },
  { id: 3, source: 'https://wallpapers.com/images/hd/mountain-top-t6qhv1lk4j0au09t.jpg' },
];
// images.unshift({ ...images[images.length - 1] });
images.push({ ...images[0] });
images[images.length - 1].id = 4;

const IMAGE_SHOW_SECONDS = 2;
export const TRANSITION_DURATION = 0.3;

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  const beforeLastIndex = currentIndex < images.length - 1;
  const startLastSlide = currentIndex === images.length - 1;
  const isTransitionOff = !isTransition;

  const moveToNextImageAfter = (seconds: number) => {
    setTimeout(() => {
      if (beforeLastIndex) setCurrentIndex(currentIndex + 1);
    }, seconds * 1000);
  };

  const turnOffTransitionAfterSlide = (seconds: number) => {
    setTimeout(() => {
      setIsTransition(false);
    }, seconds * 1000);
  };

  const startSlideAgainAfter = (seconds: number) => {
    setTimeout(() => {
      setIsTransition(true);
    }, seconds * 1000);
  };

  useEffect(() => {
    if (startLastSlide) turnOffTransitionAfterSlide(TRANSITION_DURATION);
    else moveToNextImageAfter(IMAGE_SHOW_SECONDS);
  }, [currentIndex]);

  useEffect(() => {
    if (isTransitionOff) {
      setCurrentIndex(0);
      startSlideAgainAfter(TRANSITION_DURATION);
    }
  }, [isTransition]);

  return (
    <StyledContainer>
      <CarouselSlide
        images={images}
        currentIndex={currentIndex}
        isTransition={isTransition}
        setIsTransition={setIsTransition}
      />
      <CarouselItemSelector images={images} currentIndex={currentIndex} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: gray;
  grid-column: span 12;
  height: 439px;
  overflow: hidden;
  position: relative;
`;
