import { FC, RefObject, useContext } from 'react';

import styled from '@emotion/styled';

import { CarouselContext } from 'contexts/CarouselProvider';

import { CAROUSEL_WIDTH, TRANSITION_DURATION } from './Carousel';

type Props = {
  slideState: number[];
  slideRef: RefObject<HTMLDivElement>;
  calculateLeft: () => string | undefined;
};

export const ImageSlide: FC<Props> = ({ slideRef, slideState, calculateLeft }) => {
  const { carouselState } = useContext(CarouselContext);

  return (
    <StyledContainer>
      <StyledWrapper
        ref={slideRef}
        count={slideState.length}
        calculateLeft={calculateLeft}
        hasTransition={carouselState.hasTransition}
      >
        {slideState.map((image, idx) => (
          <StyledImage key={idx}>{image}</StyledImage>
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  overflow: hidden;
`;

const StyledWrapper = styled.div<{
  count: number;
  hasTransition: boolean;
  calculateLeft: Props['calculateLeft'];
}>`
  width: calc(100% / ${props => props.count});
  height: 100%;

  display: flex;
  position: absolute;
  //width: ${props => (props.count ? props.count * CAROUSEL_WIDTH + 'px' : '100%')};
  transition: ${props =>
    props.hasTransition ? `${TRANSITION_DURATION}s left ease-in-out 0s` : ''};
`;

const StyledImage = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 120px;
`;
