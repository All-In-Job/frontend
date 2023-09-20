import { FC } from 'react';

import { ArrowButton } from './ArrowButton';
import { CarouselNavigation } from './CarouselNavigation';

export type Props = {
  moveToPrevSlide: () => void;
  moveToNextSlide: () => void;
  navigationControlCounter: number[];
  moveToThisSlide: (targetSlideIdx: number) => void;
};

export const CarouselControls: FC<Props> = ({
  moveToThisSlide,
  moveToPrevSlide,
  moveToNextSlide,
  navigationControlCounter,
}) => {
  return (
    <>
      <ArrowButton icon={'<'} direction={'left'} onClickArrow={moveToPrevSlide} />
      <ArrowButton icon={'>'} direction={'right'} onClickArrow={moveToNextSlide} />
      <CarouselNavigation
        moveToThisSlide={moveToThisSlide}
        navigationControlCounter={navigationControlCounter}
      />
    </>
  );
};
