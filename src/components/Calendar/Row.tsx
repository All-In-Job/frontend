import { FC, MouseEvent, useContext } from 'react';

import styled from '@emotion/styled';

import { Blue, CalendarContext, Purple, Red } from './Calendar';
import { ClickedDate, Dates } from './config';
import { Date } from './Date';

export type RowProps = {
  dates: Dates;
  nth: number;
  clickedDate: ClickedDate;
  setClickedDate: (value: ClickedDate) => void;
};

export const Row: FC<RowProps> = ({ dates, nth, clickedDate, setClickedDate }) => {
  const { calendarState, setCalendarState } = useContext(CalendarContext)!;

  const tempSchedules = [
    {
      date: 10,
      items: [
        { title: '2023 Meta Spark AR 콘텐츠 공모전1', color: Red },
        { title: '2023 Meta Spark AR 콘텐츠 공모전2', color: Blue },
      ],
    },
    {
      date: 15,
      items: [
        { title: '2023 Meta Spark AR 콘텐츠 공모전3', color: Red },
        { title: '2023 Meta Spark AR 콘텐츠 공모전4', color: Purple },
      ],
    },
    {
      date: 20,
      items: [
        { title: '2023 Meta Spark AR 콘텐츠 공모전5', color: Purple },
        { title: '2023 Meta Spark AR 콘텐츠 공모전6', color: Blue },
      ],
    },
  ];

  const saveSchedules = (e: MouseEvent, date: string | number) => {
    if (typeof date !== 'number') return;

    const children = [...e.currentTarget.children] as HTMLElement[];
    children.shift();

    const schedules = children.map(child => ({
      title: child.textContent!,
      color: child.style.backgroundColor,
    }));
    setCalendarState({ ...calendarState, schedules, date });
  };

  return (
    <StyledContainer style={{}}>
      {dates.map((date, idx) => (
        <StyledDateWrapper key={'date-' + idx} onClick={e => saveSchedules(e, date)}>
          <Date
            nth={nth}
            day={date}
            clickedDate={clickedDate}
            setClickedDate={setClickedDate}
            idx={idx}
          />
          {tempSchedules
            .filter(schedule => schedule.date === date)
            .map(schedule =>
              schedule.items.map(item => (
                <ScheduleBar key={item.title + item.color} style={{ backgroundColor: item.color }}>
                  <StyledHiddenText id='text'>{item.title}</StyledHiddenText>
                </ScheduleBar>
              )),
            )
            .flat(1)}
        </StyledDateWrapper>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 32px;
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
const StyledHiddenText = styled.span`
  display: none;
`;
