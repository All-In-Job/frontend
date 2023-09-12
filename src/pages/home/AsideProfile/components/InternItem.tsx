import { FC } from 'react';

import styled from '@emotion/styled';

import { Desc, LightDesc } from '../asideProfile.style';
import { Solution } from '../type';

import Badge from './Badge';

interface Props {
  solution: Solution;
}

const InternItem: FC<Props> = ({ solution }) => {
  return (
    <>
      <Badge title={solution.id} />

      <Container>
        <Picture />
        <InfoContainer>
          <LightDesc size='14px'>{solution.type ?? ''}</LightDesc>
          <Desc size='14px'>{solution.name}</Desc>
          <Desc size='14px'>접수기간</Desc>
          <Desc size='14px'>{solution.date}</Desc>
        </InfoContainer>
      </Container>
    </>
  );
};

export default InternItem;

const Container = styled.div``;
const Picture = styled.div``;
const InfoContainer = styled.div``;
