import { FC } from 'react';

import { Link } from 'react-router-dom';
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
  path: string;
}

const CertificationItem: FC<Props> = ({ solution, path }) => {
  return (
    <>
      {solution && (
        <Link to={`${path}/detail/${solution?.id}`} target={'_blank'}>
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
        </Link>
      )}
    </>
  );
};

export default CertificationItem;
