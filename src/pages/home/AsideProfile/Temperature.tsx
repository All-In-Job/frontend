import { FC, useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { Desc } from './asideProfile.style';
import { ReactComponent as SmallTemperature } from './res/img/small-temperature.svg';

interface Props {
  temperature: number;
}

const Temperature: FC<Props> = ({ temperature }) => {
  const temperatureRef = useRef<HTMLDivElement>(null);

  const [temperatureWidth, setTemperatureWidth] = useState(0);

  useEffect(() => {
    if (temperatureRef.current == null) return;

    setTemperatureWidth(temperatureRef.current.clientWidth);
  }, []);

  const degree = getDegreeWidth(temperature, temperatureWidth);

  return (
    <Container>
      <HeadingDesc size='12px'>IT 프로그래밍 분야 중 상위 {temperature}%</HeadingDesc>
      <TemperatureWrapper ref={temperatureRef}>
        <SmallTemperature />
        <TemperatureDegree width={`${degree}px`} />
      </TemperatureWrapper>
    </Container>
  );
};

export default Temperature;

const Container = styled.div`
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--black-white-wh, #fff);
`;

const HeadingDesc = styled(Desc)`
  margin-bottom: 4px;
  text-align: center;
  color: ${({ theme }) => theme.palette.black500};
  font-weight: 700;
`;

const TemperatureWrapper = styled.div`
  position: relative;
`;

const TemperatureDegree = styled.div<{ width: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width};
  height: 100%;
  background-color: ${({ theme }) => theme.palette.orange500};
  clip-path: url(#small-temperature);
`;

function getDegreeWidth(percent: number, width: number) {
  return (width * percent) / 100;
}
