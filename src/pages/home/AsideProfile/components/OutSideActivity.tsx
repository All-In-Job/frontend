import { FC } from 'react';

import {
  Desc,
  FlexContainer,
  LightDesc,
  SolutionInfoContainer,
  SolutionItemContainer,
} from '../asideProfile.style';
import { Solution } from '../type';

import Badge from './Badge';
import DateBefore from './DateBefore';
import Picture from './Picture';

interface Props {
  solution: Solution;
}

const LanguageStudy: FC<Props> = ({ solution }) => {
  return (
    <>
      <Badge title={solution.id} />

      <SolutionItemContainer>
        <Picture img={solution.img[0]} />
        <SolutionInfoContainer>
          <LightDesc>{solution.type ?? ''}</LightDesc>
          <Desc>{solution.name}</Desc>
          <Desc>기간</Desc>
          <FlexContainer>
            <DateBefore date={solution.date} />
            <LightDesc>{solution.date}</LightDesc>
          </FlexContainer>
          <Desc>{solution.date}</Desc>
        </SolutionInfoContainer>
      </SolutionItemContainer>
    </>
  );
};

export default LanguageStudy;
