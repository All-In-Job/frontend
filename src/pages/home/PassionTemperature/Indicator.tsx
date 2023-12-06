import { FC, RefObject } from 'react';

import styled from '@emotion/styled';

import { FlexCenterContainer } from 'pages/home/PassionTemperature/passionTemperature.style';
import { ReactComponent as SmileIcon } from 'pages/home/res/img/smile.svg';

interface Props {
  indicatorRef: RefObject<HTMLElement>;
  totalWidth: number;
  temperatureSum?: number;
}

const Indicator: FC<Props> = ({ totalWidth, indicatorRef, temperatureSum }) => {
  return (
    <Container ref={indicatorRef as RefObject<HTMLDivElement>} left={`${totalWidth}px`}>
      <IndicatorText>{`열정온도 ${temperatureSum}℃`}</IndicatorText>
      <SmileIcon />
    </Container>
  );
};

export default Indicator;

const Container = styled(FlexCenterContainer)<{ left: string }>`
  position: absolute;
  left: ${({ left }) => left};
`;

const IndicatorText = styled.span`
  color: ${({ theme }) => theme.palette.orange500};
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 26px;
  margin-right: 4px;
`;
