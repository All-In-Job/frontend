import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  currentImage: { id: number; source: string };
  images: Props['currentImage'][];
};

export type CarouselSlideProps = Props;

// currentImage idx: 1 ~ 3
export const CarouselSlide: FC<Props> = ({ currentImage, images }) => {
  return (
    <StyledContainer idx={currentImage.id}>
      {images.map((image, idx) => {
        return <StyledImage key={image.id + idx} source={image.source} />;
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ idx: number }>`
  width: 400%;
  height: 100%;
  margin-left: ${props => `${props.idx * 1200 * -1}px`};
  transition: 0.5s ease-in-out;
`;
const StyledImage = styled.div<{ source: string }>`
  width: 1200px;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${props => (props.source ? `url(${props.source})` : null)};
  display: inline-block;
`;
