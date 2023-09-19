import { FC } from 'react';

import {
  Desc,
  FlexContainer,
  LightDesc,
  SolutionInfoContainer,
  SolutionItemContainer,
} from '../asideProfile.style';
import Badge from '../components/Badge';
import DateBefore from '../components/DateBefore';
import { Solution } from '../type';

import Picture from './Picture';

interface Props {
  solution: Solution;
}

const CompetitionItem: FC<Props> = ({ solution }) => {
  return (
    <>
      <Badge title={solution.id} />
      <SolutionItemContainer>
        <Picture img={solution.img[0]} />
        <SolutionInfoContainer>
          <LightDesc>주최기관</LightDesc>
          <Desc>{solution.host}</Desc>
          <FlexContainer>
            <DateBefore date={solution.date} />
            <LightDesc>{solution.date}</LightDesc>
          </FlexContainer>
          <Desc>분야</Desc>
          <Desc>지역</Desc>
          <Desc>대상</Desc>
        </SolutionInfoContainer>
      </SolutionItemContainer>
    </>
  );
};

export default CompetitionItem;
