import { FC } from 'react';

import styled from '@emotion/styled';

import { ReactComponent as SmileIcon } from 'pages/home/res/img/smile.svg';

interface Props {
  temperatureSum: number;
  topPercentage: number;
}

const Indicator: FC<Props> = ({ temperatureSum, topPercentage }) => {
  return (
    <Container>
      <Description>{`IT프로그래밍 분야 중 상위 ${topPercentage}%`}</Description>
      <IndicatorBox>
        <IndicatorText>{`열정온도 ${temperatureSum}℃`}</IndicatorText>
        <SmileIcon />
      </IndicatorBox>
    </Container>
  );
};

export default Indicator;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Description = styled.h2`
  color: var(--title-black, #121110);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const IndicatorBox = styled.div`
  display: flex;
  align-items: center;
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
