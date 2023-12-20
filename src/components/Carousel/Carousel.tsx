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
    source: '/images/carousel_1.png',
  },
  {
    id: 2,
    source: '/images/carousel_2.png',
  },
  { id: 3, source: 'https://wallpapers.com/images/hd/mountain-top-t6qhv1lk4j0au09t.jpg' },
];
images.push({ ...images[0] });
images[images.length - 1].id = 4;

const IMAGE_SHOW_SECONDS = 2;
export const TRANSITION_DURATION = 0.3;

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [timerId, setTimerId] = useState(-1);
  const [isClickedSelector, setIsClickedSelector] = useState(-1);

  const beforeLastIndex = currentIndex < images.length - 1;
  const startLastSlide = currentIndex === images.length - 1;
  const isTransitionOff = !isTransition;

  const moveToNextImageAfter = (seconds: number) => {
    clearTimeout(timerId);
    setTimerId(
      setTimeout(() => {
        if (beforeLastIndex) {
          if (isClickedSelector) setIsClickedSelector(-1);
          setCurrentIndex(currentIndex + 1);
        }
      }, seconds * 1000),
    );
  };

  const turnOffTransitionAfterSlide = (seconds: number) => {
    setTimerId(
      setTimeout(() => {
        setIsTransition(false);
      }, seconds * 1000),
    );
  };

  const startSlideAgainAfter = (seconds: number) => {
    setTimeout(() => {
      setIsTransition(true);
    }, seconds * 100);
  };

  useEffect(() => {
    clearTimeout(timerId);
    if (startLastSlide) turnOffTransitionAfterSlide(TRANSITION_DURATION);
    else moveToNextImageAfter(IMAGE_SHOW_SECONDS);
  }, [currentIndex, isClickedSelector]);

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
      <CarouselItemSelector
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        timerId={timerId}
        isClickedSelector={isClickedSelector}
        setIsClickedSelector={setIsClickedSelector}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: gray;
  grid-column: span 12;
  width: 1200px;
  height: 439px;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
`;
