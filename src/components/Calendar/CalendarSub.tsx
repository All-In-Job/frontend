import { useContext, useLayoutEffect, useMemo, useRef } from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import theme from 'styles/theme';

import {
  Blue,
  CalendarContext,
  ClickedDateContext,
  CurrentDateContext,
  Purple,
  Red,
  SchedulesType,
  TODAY,
} from './Calendar';
import { filterScheduleStatus } from './Row';

const CONTAINER_PADDING_VERTICAL = 40;

export const CalendarSub = () => {
  const { clickedDate } = useContext(ClickedDateContext)!;
  const { calendarState } = useContext(CalendarContext)!;
  const { currentDate } = useContext(CurrentDateContext)!;
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const { year, month, date } = useMemo(() => {
    if (clickedDate.date) return clickedDate;
    return TODAY;
  }, [clickedDate]);

  useLayoutEffect(() => {
    updateScrollableFrameHeightByCurrentDate();
  }, [currentDate]);

  const updateScrollableFrameHeightByCurrentDate = () => {
    const container = containerRef.current;
    const scrollableFrame = scrollableRef.current;
    if (container && scrollableFrame)
      scrollableFrame.style.height = container.offsetHeight - CONTAINER_PADDING_VERTICAL * 4 + 'px';
  };

  const moveToDetailPage = (schedule: SchedulesType[number]) => {
    if (schedule.homePage) {
      window.open(schedule.homePage);
      return;
    }
    navigate(`/${schedule.path}/detail/${schedule.id}`);
  };

  return (
    <StyledContainer ref={containerRef}>
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
      <StyledScrollableFrame ref={scrollableRef}>
        <StyledUl>
          {calendarState.schedules &&
            calendarState.schedules.map(
              schedule =>
                schedule.title && (
                  <StyledLi key={schedule.title} onClick={() => moveToDetailPage(schedule)}>
                    <StyledStatusBar bgColor={filterScheduleStatus(schedule.status)} />
                    <span>{schedule.title}</span>
                  </StyledLi>
                ),
            )}
        </StyledUl>
      </StyledScrollableFrame>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  grid-column: span 4;
  background-color: white;
  border-radius: 12px;
  padding: ${CONTAINER_PADDING_VERTICAL}px 32px;
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
  //height: calc(100% - ${CONTAINER_PADDING_VERTICAL}px);
`;
const StyledScrollableFrame = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`;
const StyledLi = styled.li`
  width: 100%;
  height: 100px;
  padding: 16px;
  display: grid;
  gap: 11px;
  cursor: pointer;
  background-color: ${theme.palette.background.primary50};
`;
