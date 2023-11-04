import { useState } from 'react';

import styled from '@emotion/styled';

import { CarouselItemSelector } from './CarouselItemSelector';
import { CarouselSlide } from './CarouselSlide';

export type Image = {
  id: number;
  source: string;
};

const images: Image[] = [
  {
    id: 2,
    source:
      'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg',
  },
  {
    id: 3,
    source:
      'https://wallpapers.com/images/hd/high-resolution-nature-mountains-landscape-5n3jp9psonuimymd.jpg',
  },
  { id: 4, source: 'https://wallpapers.com/images/hd/mountain-top-t6qhv1lk4j0au09t.jpg' },
];
images.unshift({ ...images[images.length - 1] });
images.push({ ...images[1] });
images[0].id = 1;
images[images.length - 1].id = 5;

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <StyledContainer>
      <button onClick={() => setCurrentIndex(currentIndex + 1)}>button</button>
      <CarouselSlide images={images} currentIndex={currentIndex} />
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
