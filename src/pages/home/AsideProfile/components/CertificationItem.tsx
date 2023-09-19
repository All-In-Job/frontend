import { FC } from 'react';

import {
  Desc,
  LightDesc,
  SolutionInfoContainer,
  SolutionItemContainer,
} from '../asideProfile.style';
import Badge from '../components/Badge';
import { Solution } from '../type';

import Picture from './Picture';

interface Props {
  solution: Solution;
}

const CertificationItem: FC<Props> = ({ solution }) => {
  return (
    <>
      <Badge title={solution.id} />

      <SolutionItemContainer>
        <Picture img={solution.img[0]} />
        <SolutionInfoContainer>
          <LightDesc>시행기관</LightDesc>
          <Desc>{solution.host}</Desc>
          <LightDesc>{solution.date}</LightDesc>
          <Desc>분야</Desc>
        </SolutionInfoContainer>
      </SolutionItemContainer>
    </>
  );
};

export default CertificationItem;
