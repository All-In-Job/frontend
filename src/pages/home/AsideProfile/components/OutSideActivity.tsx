import { FC } from 'react';

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
}

const LanguageStudy: FC<Props> = ({ solution }) => {
  return (
    <>
      {solution && (
        <>
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
        </>
      )}
    </>
  );
};

export default LanguageStudy;
