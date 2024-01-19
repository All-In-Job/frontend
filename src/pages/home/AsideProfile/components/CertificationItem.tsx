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
            <Img src={solution?.mainImage} width='100' height='90' />
            <SolutionInfoContainer className='qnet'>
              <LightDesc>{solution?.institution}</LightDesc>
              <Desc>{solution?.title}</Desc>
              {solution?.wtPeriod && solution?.ptPeriod && (
                <>
                  <LightDesc>{'필기접수기간'}</LightDesc>
                  <Desc>{solution?.wtPeriod}</Desc>
                  <LightDesc>{'실기접수기간'}</LightDesc>
                  <Desc>{solution?.ptPeriod}</Desc>
                </>
              )}
            </SolutionInfoContainer>
          </SolutionItemContainer>
        </Link>
      )}
    </>
  );
};

export default CertificationItem;
