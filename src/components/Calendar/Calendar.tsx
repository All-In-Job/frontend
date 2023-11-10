import { createContext, useState } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

import { CalendarMain } from './CalendarMain';
import { CalendarSub } from './CalendarSub';

type CalendarContextType = {
  calendarState: CalendarStateType;
  setCalendarState: (value: CalendarStateType) => void;
};
type CalendarStateType = { schedules: ScheduleType[]; year: number; month: number; date: number };
type ScheduleType = { title: string; color: string };

export const Purple = '#EEB9FF';
export const Blue = '#AAD6FF';
export const Red = '#FFC1BD';

export const CalendarContext = createContext<CalendarContextType | null>(null);

export const Calendar = () => {
  const [calendarState, setCalendarState] = useState<CalendarStateType>({
    schedules: [
      {
        title: '',
        color: '',
      },
    ],
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  });

  console.log(calendarState);

  return (
    <CalendarContext.Provider value={{ calendarState, setCalendarState }}>
      <StyledContainer>
        <StyledHeader>
          <StyledTitle>나만의 달력</StyledTitle>
        </StyledHeader>
        <StyledBody>
          <CalendarMain />
          <CalendarSub />
        </StyledBody>
      </StyledContainer>
    </CalendarContext.Provider>
  );
};

const StyledContainer = styled.section`
  grid-column: span 12;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const StyledHeader = styled.div`
  border-bottom: 1px ${theme.palette.line.normal} solid;
  padding-bottom: 12px;
`;
const StyledTitle = styled.h1`
  font-size: 24px;
`;
const StyledBody = styled.div`
  width: 100%;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 24px;
  background-color: ${theme.palette.background.secondary};
  border-radius: 12px;
`;
