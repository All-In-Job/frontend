import { FC } from 'react';

import styled from '@emotion/styled';

import { Desc, LightDesc } from '../asideProfile.style';
import Badge from '../components/Badge';
import DateBefore from '../components/DateBefore';
import { Solution } from '../type';

interface Props {
  solution: Solution;
}

const CompetitionItem: FC<Props> = ({ solution }) => {
  return (
    <>
      <Badge title={solution.id} />

      <Container>
        <Picture />
        <InfoContainer>
          <LightDesc size='14px'>주최기관</LightDesc>
          <Desc size='14px'>{solution.host}</Desc>
          <DateContainer>
            <DateBefore date={solution.date} />
            <LightDesc size='14px'>{solution.date}</LightDesc>
          </DateContainer>
          <Desc size='14px'>공모분야</Desc>
          <Desc size='14px'>공모지역</Desc>
          <Desc size='14px'>공모대상</Desc>
        </InfoContainer>
      </Container>
    </>
  );
};

export default CompetitionItem;

const Container = styled.div``;
const Picture = styled.div``;
const InfoContainer = styled.div``;
const DateContainer = styled.div``;
