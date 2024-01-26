import { FC } from 'react';

import { Link } from 'react-router-dom';
import { internProps } from 'types/solution';

import {
  Img,
  Desc,
  LightDesc,
  SolutionInfoContainer,
  SolutionItemContainer,
} from 'pages/home/AsideProfile/asideProfile.style';

import Badge from './Badge';

interface Props {
  solution: internProps;
  path: string;
}

const InternItem: FC<Props> = ({ solution, path }) => {
  return (
    <>
      {solution && (
        <Link to={`${path}/detail/${solution?.id}`} target={'_blank'}>
          <Badge title={'인턴'} />

          <SolutionItemContainer>
            <Img src={solution?.mainImage} width='82' height='66' />
            <SolutionInfoContainer>
              <LightDesc>{solution?.preferentialTreatment}</LightDesc>
              <Desc>{solution?.title}</Desc>
              <LightDesc>{solution?.location}</LightDesc>
              <Desc>{solution?.closeDate}</Desc>
            </SolutionInfoContainer>
          </SolutionItemContainer>
        </Link>
      )}
    </>
  );
};

export default InternItem;
