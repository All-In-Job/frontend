import { FC } from 'react';

import { Link } from 'react-router-dom';
import { CommonProps } from 'types/solution';

import {
  Img,
  Desc,
  FlexContainer,
  LightDesc,
  SolutionInfoContainer,
  SolutionItemContainer,
} from 'pages/home/AsideProfile/asideProfile.style';

import Badge from './Badge';
import DateBefore from './DateBefore';

interface Props {
  solution: CommonProps;
  path: string;
}

const OutSideItem: FC<Props> = ({ solution, path }) => {
  return (
    <>
      {solution && (
        <Link to={`${path}/detail/${solution?.id}`} target={'_blank'}>
          <Badge title={'대외활동'} />
          <SolutionItemContainer>
            <Img src={solution?.mainImage} width='110' height='102' />
            <SolutionInfoContainer>
              <FlexContainer>
                <DateBefore date={solution?.Dday} />
              </FlexContainer>
              <LightDesc>{solution?.enterprise}</LightDesc>
              <Desc>{solution?.title}</Desc>
              <Desc>{solution?.interests}</Desc>
              <Desc>{solution?.target}</Desc>
            </SolutionInfoContainer>
          </SolutionItemContainer>
        </Link>
      )}
    </>
  );
};

export default OutSideItem;
