import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

// import { CarouselButton } from './CarouselButton';
import { CarouselItemSelector } from './CarouselItemSelector';

const images = [
  'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg',
  'https://wallpapers.com/images/hd/high-resolution-nature-mountains-landscape-5n3jp9psonuimymd.jpg',
  'https://wallpapers.com/images/hd/mountain-top-t6qhv1lk4j0au09t.jpg',
];

export const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    let count = 0;

    const timerId = setInterval(() => {
      setCurrentImage(images[count]);
      if (count === images.length - 1) count = 0;
      else count++;
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <StyledContainer>
      {/*<CarouselButton direction='right' />*/}
      {/*<CarouselButton direction='left' />*/}
      <StyledImage currentImage={currentImage} />
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
const StyledImage = styled.div<{ currentImage: string }>`
  width: 100%;
  height: 100%;
  background-image: ${props => (props.currentImage ? `url(${props.currentImage})` : null)};
  background-size: cover;
  background-position: center;
`;
