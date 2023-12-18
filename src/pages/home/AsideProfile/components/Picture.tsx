import { FC } from 'react';

import styled from '@emotion/styled';

// import { Img } from '../type';

interface Props {
  img: string;
}

const Picture: FC<Props> = ({ img }) => {
  const emptyURL =
    'https://imagedelivery.net/0ZP-N9B45ji28JoChYUvWw/f0d1ff60-2d0e-46b6-9f9c-9698fcfeb700/projectCard';

  return (
    <Container>
      <Image src={img || emptyURL} />
    </Container>
  );
};

export default Picture;

const Container = styled.div`
  margin-right: 8px;
  width: 82px;
  height: 64px;
  border: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
