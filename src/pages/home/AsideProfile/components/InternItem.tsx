import { FC } from 'react';

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
}

const InternItem: FC<Props> = ({ solution }) => {
  return (
    <>
      {solution && (
        <>
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
        </>
      )}
    </>
  );
};

export default InternItem;
