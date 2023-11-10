import { useMemo, useState } from 'react';

import styled from '@emotion/styled';

import { ClickedDate, monthConfig } from './config';
import { Row } from './Row';
import { TopBar } from './TopBar';

export const CalendarMain = () => {
  const [clickedDate, setClickedDate] = useState<ClickedDate>();

  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  const { days, rows } = useMemo(() => monthConfig(currentDate), [currentDate]);

  return (
    <StyledContainer>
      <TopBar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <Row nth={0} dates={days} clickedDate={clickedDate} setClickedDate={setClickedDate} />
      {rows.map((dates, idx) => (
        <Row
          key={idx}
          dates={dates}
          nth={idx + 1}
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  grid-column: span 3;
  height: 100%;
  background-color: white;
  padding: 20px 32px;
`;
