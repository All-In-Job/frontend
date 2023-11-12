import { useContext, useMemo } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

import { Blue, CalendarContext, ClickedDateContext, Purple, Red, TODAY } from './Calendar';
import { filterScheduleStatus } from './Row';

export const CalendarSub = () => {
  const { clickedDate } = useContext(ClickedDateContext)!;
  const { calendarState } = useContext(CalendarContext)!;

  const { year, month, date } = useMemo(() => {
    if (clickedDate.date) return clickedDate;
    return TODAY;
  }, [clickedDate]);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledStatusBar bgColor={Red} />
        <span>모집</span>
        <StyledStatusBar bgColor={Blue} />
        <span>마감</span>
        <StyledStatusBar bgColor={Purple} />
        <span>시작</span>
      </StyledHeader>
      <StyledDate>
        {year}년 {month}월 {date}일
      </StyledDate>
      <StyledUl>
        {calendarState.schedules &&
          calendarState.schedules.map(
            schedule =>
              schedule.title && (
                <StyledLi key={schedule.title}>
                  <StyledStatusBar bgColor={filterScheduleStatus(schedule.status)} />
                  <span>{schedule.title}</span>
                </StyledLi>
              ),
          )}
      </StyledUl>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  grid-column: span 4;
  background-color: white;
  border-radius: 12px;
  padding: 40px 32px;
`;
const StyledHeader = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
`;
const StyledStatusBar = styled.div<{ bgColor: string }>`
  width: 60px;
  height: 10px;
  background-color: ${props => props.bgColor};
`;
const StyledDate = styled.h1`
  font-size: 17px;
  margin-top: 32px;
`;
const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  gap: 16px;
  margin-top: 17px;
`;
const StyledLi = styled.li`
  width: 100%;
  height: 100px;
  padding: 16px;
  display: grid;
  gap: 11px;
  background-color: ${theme.palette.background.primary50};
`;
