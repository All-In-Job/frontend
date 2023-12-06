import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { findManyThermometer, getCountActivity } from 'apis/thermometer';
import { ActivityHistory } from 'components/ActivityHistory/ActivityHistory';
import { FlexColumnContainer } from 'pages/home/PassionTemperature/passionTemperature.style';
import PassionThermometer from 'pages/home/PassionTemperature/Thermometer';
// import { thermometerPercentList } from 'pages/home/PassionTemperature/Thermometer/mock';

import Indicator from './Indicator';
import TemperatureCategory from './TemperatureCategory';
import { ThermometerList } from './Thermometer/types';
import { TemperatureCategoryList } from './type';
import { getTotalWidth } from './utils';

const PassionTemperature = () => {
  const [categoryList, setCategoryList] = useState<TemperatureCategoryList>();
  const [thermometerList, setThermometerList] = useState<ThermometerList>();
  const [temperatureSum, setTemperatureSum] = useState<number>();

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
    updateCategoryList();
    updateThermometer();
  }, []);

  const updateCategoryList = async () => {
    try {
      const res = await findManyThermometer();
      setCategoryList(res.data);
    } catch (error) {
      console.log('Error getting data:', error);
      throw error;
    }
  };

  const updateThermometer = async () => {
    try {
      const res = await getCountActivity();
      setThermometerList(res.data);
      setTemperatureSum(res.data.sum);
    } catch (error) {
      console.log('Error getting data:', error);
      throw error;
    }
  };

  const totalWidth = getTotalWidth(temperatureWidth, indicatorWidth, temperatureSum);

  // console.log(Object.keys(thermometerPercentList).length);
  return (
    <Container>
      <Title>열정온도</Title>
      <TemperatureContainer>
        <Description>{`IT프로그래밍 분야 중 상위 ${temperatureSum}%`}</Description>
        <Indicator
          indicatorRef={indicatorRef}
          totalWidth={totalWidth}
          temperatureSum={temperatureSum}
        />
        <PassionThermometer
          temperatureRef={temperatureRef}
          temperatureWidth={temperatureWidth}
          thermometerList={thermometerList}
        />
      </TemperatureContainer>
      {categoryList && <TemperatureCategory categoryList={categoryList} />}
      <ActivityHistory />
    </Container>
  );
};

export default PassionTemperature;

const Container = styled(FlexColumnContainer)`
  grid-column: span 12;
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
