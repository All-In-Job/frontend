import { FC, MouseEvent, useContext } from 'react';

import styled from '@emotion/styled';

import {
  Blue,
  CalendarContext,
  MonthlySchedulesType,
  Purple,
  Red,
  SchedulesType,
} from './Calendar';
import { Dates } from './config';
import { Date } from './Date';

export type RowProps = {
  dates: Dates;
  nth: number;
  monthlySchedules?: MonthlySchedulesType;
};

export const filterScheduleStatus = (status: 'open' | 'close' | 'exam') => {
  if (status === 'open') return Red;
  if (status === 'close') return Blue;
  return Purple;
};

export const Row: FC<RowProps> = ({ dates, nth, monthlySchedules }) => {
  const { calendarState, setCalendarState } = useContext(CalendarContext)!;

  const saveSchedules = (e: MouseEvent, date: string | number) => {
    if (typeof date !== 'number') return;
    if (!monthlySchedules) {
      setCalendarState({ ...calendarState, schedules: [] });
      return;
    }

    const children = [...e.currentTarget.children] as HTMLElement[];
    children.shift();

    setCalendarState({ ...calendarState, schedules: monthlySchedules[date] });
  };

  const setRowMarginTopByNth = () => {
    if (nth === 0) return 15;
    if (nth === 1) return 10;
  };
  const setRowHeightByNth = () => {
    if (nth === 0) return 60;
    return 100;
  };

  const filterSchedule = (schedules: SchedulesType) => {
    return Array.from(new Set(schedules.map(schedule => schedule.status)));
  };

  return (
    <StyledContainer style={{ marginTop: setRowMarginTopByNth(), height: setRowHeightByNth() }}>
      {dates.map((date, idx) => (
        <StyledDateWrapper key={'date-' + idx} onClick={e => saveSchedules(e, date)}>
          <Date nth={nth} day={date} idx={idx} />
          {monthlySchedules &&
            monthlySchedules[date] &&
            filterSchedule(monthlySchedules[date]).map(status => (
              <ScheduleBar key={status} style={{ backgroundColor: filterScheduleStatus(status) }} />
            ))}
        </StyledDateWrapper>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const StyledDateWrapper = styled.div`
  width: 80px;
  &:hover {
    cursor: pointer;
  }
`;

const ScheduleBar = styled.div`
  width: 100%;
  height: 10px;
`;
