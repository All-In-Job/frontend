import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { FlexColumnContainer } from 'pages/home/PassionTemperature/passionTemperature.style';
import PassionThermometer from 'pages/home/PassionTemperature/Thermometer';
import { thermometerPercentList } from 'pages/home/PassionTemperature/Thermometer/mock';

import Indicator from './Indicator';
import TemperatureCategory from './TemperatureCategory';
import { getTotalWidth } from './utils';

const PassionTemperature = () => {
  const temperatureRef = useRef<HTMLElement>(null);
  const [temperatureWidth, setTemperatureWidth] = useState(0);
  const indicatorRef = useRef<HTMLElement>(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  useEffect(() => {
    function adjustWidth() {
      if (temperatureRef.current == null) return;
      setTemperatureWidth(temperatureRef.current.clientWidth);
    }

    adjustWidth();

    window.addEventListener('resize', adjustWidth);

    return () => {
      window.removeEventListener('resize', adjustWidth);
    };
  }, []);

  useEffect(() => {
    if (indicatorRef.current == null) return;
    setIndicatorWidth(indicatorRef.current.clientWidth);
  }, []);

  const totalWidth = getTotalWidth(temperatureWidth, thermometerPercentList, indicatorWidth);
  return (
    <Container>
      <Title>열정온도</Title>
      <TemperatureContainer>
        <Description>IT프로그래밍 분야 중 상위 25%</Description>
        <Indicator indicatorRef={indicatorRef} totalWidth={totalWidth} />
        <PassionThermometer
          temperatureRef={temperatureRef}
          temperatureWidth={temperatureWidth}
          thermometerPercentList={thermometerPercentList}
        />
      </TemperatureContainer>
      <TemperatureCategory />
    </Container>
  );
};

export default PassionTemperature;

const Container = styled(FlexColumnContainer)`
  height: 128px;
  max-width: 1155px;
  min-width: 600px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.black500};
  font-feature-settings: 'ss10' on;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.134px;
`;

const Description = styled.h2`
  margin-bottom: 12px;
  color: var(--title-black, #121110);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TemperatureContainer = styled(FlexColumnContainer)`
  position: relative;
  padding: 32px 24px;
  border-radius: 12px;
  background: var(--background-primary-50, #f8f8f8);
`;
