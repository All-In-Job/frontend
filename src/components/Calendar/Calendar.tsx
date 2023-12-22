import { createContext, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { AxiosError } from 'axios';

import { getCalendar } from 'apis/user';
import theme from 'styles/theme';

import { CalendarMain } from './CalendarMain';
import { CalendarSub } from './CalendarSub';

type CalendarContextType = {
  calendarState: CalendarStateType;
  setCalendarState: (value: CalendarStateType) => void;
};
type CalendarStateType = { schedules: SchedulesType; year: number; month: number; date: number };
export type SchedulesType = {
  id: string;
  title: string;
  status: 'open' | 'close' | 'exam';
  path: 'competition' | 'outside' | 'qnet' | 'intern' | 'language';
  homePage?: string;
}[];
export type MonthlySchedulesType = Record<string, SchedulesType>;

type CurrentDateContextType = {
  currentDate: CurrentDateType;
  setCurrentDate: (value: CurrentDateType) => void;
};
type CurrentDateType = {
  year: number;
  month: number;
};
export type ClickedDateType = CurrentDateType & { date: number };
type ClickedDateContextType = {
  clickedDate: ClickedDateType;
  setClickedDate: (value: ClickedDateType) => void;
};

export const TODAY = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  date: new Date().getDate(),
};

export const Purple = '#EEB9FF';
export const Blue = '#AAD6FF';
export const Red = '#FFC1BD';

export const CalendarContext = createContext<CalendarContextType | null>(null);
export const CurrentDateContext = createContext<CurrentDateContextType | null>(null);
export const ClickedDateContext = createContext<ClickedDateContextType | null>(null);

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<CurrentDateType>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  const [calendarState, setCalendarState] = useState<CalendarStateType>({
    schedules: [],
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  });
  const [clickedDate, setClickedDate] = useState<ClickedDateType>({ year: 0, month: 0, date: 0 });

  const [monthlySchedules, setMonthlySchedules] = useState<MonthlySchedulesType>();
  useEffect(() => {
    const year = String(currentDate.year).replace('20', '');
    getCalendar(Number(year), currentDate.month)
      .then(res => {
        const data = res.data.data;
        setMonthlySchedules(data);
      })
      .catch(e => {
        if (e instanceof AxiosError && e.response) {
          console.log(e.response);
        }
      });
  }, [currentDate]);

  return (
    <CalendarContext.Provider value={{ calendarState, setCalendarState }}>
      <CurrentDateContext.Provider value={{ currentDate, setCurrentDate }}>
        <ClickedDateContext.Provider value={{ clickedDate, setClickedDate }}>
          <StyledContainer>
            <StyledHeader>
              <StyledTitle>나만의 달력</StyledTitle>
            </StyledHeader>

            <StyledBody>
              <CalendarMain monthlySchedules={monthlySchedules} />
              <CalendarSub />
            </StyledBody>
          </StyledContainer>
        </ClickedDateContext.Provider>
      </CurrentDateContext.Provider>
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
