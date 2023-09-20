import { useContext, useEffect, useMemo, useRef, useState } from 'react';

import * as S from './carousel.styles';
import { CarouselControls } from './CarouselControls';
import { CarouselContext, CarouselProvider } from './CarouselProvider';
import { ImageSlide } from './ImageSlide';

export type SlideDirection = 'left' | 'right';

export const CAROUSEL_WIDTH = 1113;
export const TRANSITION_DURATION = 0.5;

export const Carousel = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const [slideState, setSlideState] = useState(Array.from({ length: 3 }, (_, idx) => idx));
  const { carouselState, setCarouselState } = useContext(CarouselContext);

  const originalSlideLength = useMemo(() => slideState.length, []);
  const navigationControlCounter = useMemo(() => Array.from(new Set(slideState)), []);

  useEffect(() => {
    const clonedSlide = [...slideState];
    clonedSlide.unshift(slideState[slideState.length - 1]);
    clonedSlide.push(clonedSlide[1]);
    setSlideState(clonedSlide);
    // requestAnimationFrame(() => triggerAutoSlide(Date.now()));
  }, []);

  const useAfterMountEffect = () => {
    const ref = useRef<boolean>(false);
    useEffect(() => {
      if (ref.current) {
        setInterval(
          () => {
            if (!carouselState.isNavDisabled) moveToNextSlide();
          },
          carouselState.visibleSlide <= slideState.length - 2
            ? TRANSITION_DURATION * 2000 + 500
            : TRANSITION_DURATION * 1000 + 500,
        );
      }
      ref.current = true;
    }, [ref]);
  };

  useAfterMountEffect();

  useEffect(() => {
    const customSetTimeout = (callback: () => void) => {
      setTimeout(callback, TRANSITION_DURATION * 1000);
    };

    if (carouselState.visibleSlide === 1) {
      customSetTimeout(() => setCarouselState({ ...carouselState, hasTransition: true }));
    }

    if (carouselState.visibleSlide === slideState.length - 1) {
      setCarouselState({ ...carouselState, index: 0 });
      customSetTimeout(() => {
        setCarouselState({ ...carouselState, visibleSlide: 1, hasTransition: false });
      });
    }

    if (carouselState.visibleSlide === 0) {
      setCarouselState({ ...carouselState, index: slideState.length % originalSlideLength });
      customSetTimeout(() => {
        setCarouselState({
          ...carouselState,
          hasTransition: false,
          visibleSlide: slideState.length - 2,
        });
      });
    }

    if (carouselState.visibleSlide === slideState.length - 2)
      customSetTimeout(() => setCarouselState({ ...carouselState, hasTransition: true }));
  }, [carouselState.visibleSlide]);

  useEffect(() => {
    if (carouselState.isNavDisabled)
      setTimeout(
        () => setCarouselState({ ...carouselState, isNavDisabled: false }),
        TRANSITION_DURATION * 1000 + 500,
      );
  }, [carouselState.isNavDisabled]);

  const moveToPrevSlide = () => {
    setCarouselState({
      ...carouselState,
      isNavDisabled: true,
      visibleSlide: carouselState.visibleSlide - 1,
    });
    if (0 < carouselState.visibleSlide && carouselState.visibleSlide < slideState.length - 1)
      setCarouselState({ ...carouselState, index: carouselState.index - 1 });
  };

  const moveToNextSlide = () => {
    setCarouselState({
      ...carouselState,
      visibleSlide: carouselState.visibleSlide + 1,
      isNavDisabled: true,
    });

    if (0 < carouselState.visibleSlide && carouselState.visibleSlide < slideState.length - 1)
      setCarouselState({ ...carouselState, index: carouselState.index + 1 });
  };

  const calculateLeft = () => {
    const slide = slideRef.current;
    if (slide) return `-${carouselState.visibleSlide * CAROUSEL_WIDTH}px`;
  };

  const moveToTargetSlide = (targetSlideIdx: number) => {
    const slide = slideRef.current;
    if (slide) {
      setCarouselState({
        ...carouselState,
        index: targetSlideIdx,
        visibleSlide: targetSlideIdx + 1,
      });
    }
  };

  return (
    <CarouselProvider>
      <S.container>
        <CarouselControls
          moveToThisSlide={moveToTargetSlide}
          moveToPrevSlide={moveToPrevSlide}
          moveToNextSlide={moveToNextSlide}
          navigationControlCounter={navigationControlCounter}
        />
        <ImageSlide slideRef={slideRef} slideState={slideState} calculateLeft={calculateLeft} />
      </S.container>
    </CarouselProvider>
  );
};
