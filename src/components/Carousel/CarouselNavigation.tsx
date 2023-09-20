import { FC, useContext } from 'react';

import styled from '@emotion/styled';

import { Props as CarouselControlsProps } from './CarouselControls';
import { CarouselContext } from './CarouselProvider';

type Props = Pick<CarouselControlsProps, 'moveToThisSlide' | 'navigationControlCounter'>;

export const CarouselNavigation: FC<Props> = ({
  moveToThisSlide,
  navigationControlCounter: counters,
}) => {
  const { currentIndex } = useContext(CarouselContext);

  return (
    <StyledUl>
      {counters.map((_, idx) => (
        <StyledButton
          key={idx}
          activated={currentIndex === idx}
          onClick={() => moveToThisSlide(idx)}
        />
      ))}
    </StyledUl>
  );
};

export const StyledUl = styled.ul`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 21px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const StyledButton = styled.button<{ activated: boolean }>`
  border-radius: ${props => (props.activated ? '7px' : '100%')};
  background-color: ${props => (props.activated ? 'orange' : '#00000061')};
  width: ${props => (props.activated ? '24px' : '11px')};
  height: 11px;
  cursor: pointer;
  transition: 0.1s width ease-in-out 0s;
`;
