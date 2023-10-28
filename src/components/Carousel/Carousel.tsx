import styled from '@emotion/styled';

import theme from 'styles/theme';

// import { CarouselButton } from './CarouselButton';
import { CarouselItemSelector } from './CarouselItemSelector';

export const Carousel = () => {
  const images = [1, 2, 3];

  return (
    <StyledContainer>
      {/*<CarouselButton direction='right' />*/}
      {/*<CarouselButton direction='left' />*/}
      <CarouselItemSelector length={images.length} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  grid-column: span 12;
  background-color: ${theme.palette.orange100};
  position: relative;
  height: 439px;
`;
