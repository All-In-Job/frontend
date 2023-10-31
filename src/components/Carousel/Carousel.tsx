import { useCallback, useEffect, useState } from 'react';

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
  const [timerId, setTimerId] = useState(-1);

  const setSlideInterval = useCallback(() => {
    let count = 1;
    if (timerId === -1)
      setTimerId(
        setInterval(() => {
          setCurrentImage(images[count]);
          console.log(count);
          if (count === images.length - 1) count = 1;
          else count++;
        }, 2000),
      );
  }, [timerId]);

  useEffect(() => {
    setSlideInterval();

    return () => {
      clearInterval(timerId);
    };
  }, [timerId, setSlideInterval]);

  return (
    <StyledContainer>
      {/*<CarouselButton direction='right' />*/}
      {/*<CarouselButton direction='left' />*/}
      <CarouselSlide currentImage={currentImage} images={images} />
      <CarouselItemSelector
        images={images}
        timerId={timerId}
        currentImageId={currentImage.id}
        setCurrentImage={setCurrentImage}
        setSlideInterval={setSlideInterval}
      />
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
