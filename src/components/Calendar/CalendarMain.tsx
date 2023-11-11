import { useContext, useMemo } from 'react';

import styled from '@emotion/styled';

import { CurrentDateContext } from './Calendar';
import { monthConfig } from './config';
import { Row } from './Row';
import { TopBar } from './TopBar';

export const CalendarMain = () => {
  const { currentDate } = useContext(CurrentDateContext)!;

  const { days, rows } = useMemo(() => monthConfig(currentDate), [currentDate]);

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
