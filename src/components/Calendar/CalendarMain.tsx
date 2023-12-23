import { useContext, useLayoutEffect, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { AxiosError } from 'axios';

import { getCalendar } from 'apis/user';

import { CurrentDateContext, MonthlySchedulesType } from './Calendar';
import { monthConfig } from './config';
import { Row } from './Row';
import { TopBar } from './TopBar';

export const CalendarMain = () => {
  const { currentDate } = useContext(CurrentDateContext)!;
  const [loading, setLoading] = useState(false);
  const [monthlySchedules, setMonthlySchedules] = useState<MonthlySchedulesType>();

  const { days, rows } = useMemo(() => monthConfig(currentDate), [currentDate]);

  useLayoutEffect(() => {
    const year = String(currentDate.year).replace('20', '');
    setLoading(true);
    getCalendar(Number(year), currentDate.month)
      .then(res => {
        const data = res.data.data;
        setMonthlySchedules(data);
        setLoading(false);
      })
      .catch(e => {
        if (e instanceof AxiosError && e.response) {
          console.log(e.response);
        }
      });
  }, [currentDate]);

  if (!loading)
    return (
      <StyledContainer>
        <TopBar />
        <Row nth={0} dates={days} />
        {rows.map((dates, idx) => (
          <Row
            key={idx}
            dates={dates}
            nth={idx + 1}
            loading={loading}
            monthlySchedules={monthlySchedules}
          />
        ))}
      </StyledContainer>
    );
  return (
    <StyledContainer>
      <TopBar />
      <Row nth={0} dates={days} />
      {rows.map((dates, idx) => (
        <Row key={idx} dates={dates} nth={idx + 1} />
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
