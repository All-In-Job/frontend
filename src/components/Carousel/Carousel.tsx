import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

// import { CarouselButton } from './CarouselButton';
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
  const [currentImage, setCurrentImage] = useState(images[1]);

  // const setSlideInterval = () => {
  //   return function () {
  //     if (timerId) clearInterval(timerId);
  //     else {
  //       timerId =  setInterval(() => {
  //         setCurrentImage(images[count]);
  //         if (count === images.length - 1) count = 0;
  //         else count++;
  //       }, 1000);
  //     }
  //   }
  // }

  // idx: 1 ~ 3: transition
  // idx: 3 -> 4,

  useEffect(() => {
    let count = 1;
    const timerId = setInterval(() => {
      setCurrentImage(images[count]);
      console.log(count);
      if (count === images.length - 1) count = 1;
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
      <CarouselSlide currentImage={currentImage} images={images} />
      <CarouselItemSelector length={images.length - 2} currentImageId={currentImage.id} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  grid-column: span 12;
  background-color: ${theme.palette.orange100};
  position: relative;
  height: 439px;
  overflow: hidden;
`;
