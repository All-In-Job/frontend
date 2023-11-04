import styled from '@emotion/styled';

import { CarouselItemSelector } from './CarouselItemSelector';
import { CarouselSlide } from './CarouselSlide';

const images = [
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
images.unshift(images[images.length - 1]);
images.push(images[1]);

export const Carousel = () => {
  return (
    <StyledContainer>
      <CarouselSlide />
      <CarouselItemSelector />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: gray;
  grid-column: span 12;
  height: 439px;
`;
