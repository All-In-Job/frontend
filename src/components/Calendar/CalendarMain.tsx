import { FC, useContext, useMemo } from 'react';

import styled from '@emotion/styled';

import { CurrentDateContext, MonthlySchedulesType } from './Calendar';
import { monthConfig } from './config';
import { Row } from './Row';
import { TopBar } from './TopBar';

type Props = {
  monthlySchedules?: MonthlySchedulesType;
};

export const CalendarMain: FC<Props> = ({ monthlySchedules }) => {
  const { currentDate } = useContext(CurrentDateContext)!;

  const { days, rows } = useMemo(() => monthConfig(currentDate), [currentDate]);

  return (
    <StyledContainer>
      <TopBar />
      <Row nth={0} dates={days} />
      {rows.map((dates, idx) => (
        <Row key={idx} dates={dates} nth={idx + 1} monthlySchedules={monthlySchedules} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  grid-column: span 6;
  height: 100%;
  background-color: white;
  padding: 20px 32px;
  border-radius: 12px;
`;
