import { FC } from 'react';

import styled from '@emotion/styled';

import { Desc } from './asideProfile.style';

interface Props {
  temperature: number;
}

const Temperature: FC<Props> = ({ temperature }) => {
  return (
    <Container>
      <Desc size='20px'>`IT 프로그래밍 분야 중 상위 ${temperature}%`</Desc>
    </Container>
  );
};

export default Temperature;

const Container = styled.div``;
