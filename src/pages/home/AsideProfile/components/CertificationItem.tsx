import { FC } from 'react';

import { qnetProps } from 'types/solution';

import {
  Img,
  Desc,
  LightDesc,
  SolutionInfoContainer,
  SolutionItemContainer,
} from 'pages/home/AsideProfile/asideProfile.style';
import Badge from 'pages/home/AsideProfile/components/Badge';

interface Props {
  solution: qnetProps;
}

const CertificationItem: FC<Props> = ({ solution }) => {
  return (
    <>
      {solution && (
        <>
          <Badge title={'자격증'} />

          <SolutionItemContainer>
            <Img src={solution?.mainImage} width='82' height='66' />
            <SolutionInfoContainer>
              <LightDesc>{solution?.institution}</LightDesc>
              <Desc>{solution?.title}</Desc>
              <LightDesc>{'필기접수기간 : ' + solution?.wtPeriod}</LightDesc>
              <LightDesc>{'실기접수기간 : ' + solution?.ptPeriod}</LightDesc>
            </SolutionInfoContainer>
          </SolutionItemContainer>
        </>
      )}
    </>
  );
};

export default CertificationItem;
