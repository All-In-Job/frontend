import { FC } from 'react';

import {
  Desc,
  LightDesc,
  SolutionInfoContainer,
  SolutionItemContainer,
} from '../asideProfile.style';
import { Solution } from '../type';

import Badge from './Badge';
import Picture from './Picture';

interface Props {
  solution: Solution;
}

const InternItem: FC<Props> = ({ solution }) => {
  return (
    <>
      <Badge title={solution.id} />

      <SolutionItemContainer>
        <Picture img={solution.img[0]} />
        <SolutionInfoContainer>
          <LightDesc>{solution.type ?? ''}</LightDesc>
          <Desc>{solution.name}</Desc>
          <Desc>접수기간</Desc>
          <Desc>{solution.date}</Desc>
        </SolutionInfoContainer>
      </SolutionItemContainer>
    </>
  );
};

export default InternItem;
