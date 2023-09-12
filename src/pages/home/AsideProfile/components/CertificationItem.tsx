import { FC } from 'react';

import styled from '@emotion/styled';

import { Desc, LightDesc } from '../asideProfile.style';
import Badge from '../components/Badge';
import { Solution } from '../type';

interface Props {
  solution: Solution;
}

const CertificationItem: FC<Props> = ({ solution }) => {
  return (
    <>
      <Badge title={solution.id} />

      <Container>
        <Picture />
        <InfoContainer>
          <LightDesc size='14px'>시행기관</LightDesc>
          <Desc size='14px'>{solution.host}</Desc>
          <LightDesc size='14px'>{solution.date}</LightDesc>
          <Desc size='14px'>공모분야</Desc>
        </InfoContainer>
      </Container>
    </>
  );
};

export default CertificationItem;

const Container = styled.div``;
const Picture = styled.div``;
const InfoContainer = styled.div``;
