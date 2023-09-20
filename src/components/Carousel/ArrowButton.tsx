import { FC, useContext } from 'react';

import styled from '@emotion/styled';

import { CarouselContext } from '../../contexts/CarouselProvider';

import { SlideDirection } from './Carousel';

type Props = {
  icon: '>' | '<';
  onClickArrow: () => void;
  direction: 'left' | 'right';
};

export const ArrowButton: FC<Props> = ({ direction, icon, onClickArrow }) => {
  const { carouselState } = useContext(CarouselContext);

  return (
    <StyledArrow
      direction={direction}
      onClick={onClickArrow}
      disabled={carouselState.isNavDisabled}
    >
      {icon}
    </StyledArrow>
  );
};

const StyledArrow = styled.button<{ direction: SlideDirection }>`
  width: 67px;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  transform: translateX(${props => (props.direction === 'left' ? '-50%' : '50%')}) translateY(-50%);
  right: ${props => (props.direction === 'right' ? 0 : 'none')};
  box-shadow: 0 4px 13px #0000001c;
  background-color: white;
  border-radius: 100%;
  cursor: pointer;
  z-index: 10;
`;
