import { FC } from 'react';

import styled from '@emotion/styled';

import { ClickedDate, Dates } from './config';
import { Date } from './Date';

export type RowProps = {
  dates: Dates;
  nth: number;
  clickedDate: ClickedDate;
  setClickedDate: (value: ClickedDate) => void;
};

const Purple = '#EEB9FF';
const Blue = '#AAD6FF';
const Red = '#FFC1BD';
const tempSchedules = [
  {
    date: 10,
    items: [
      { title: '2023 Meta Spark AR 콘텐츠 공모전', color: Red },
      { title: '2023 Meta Spark AR 콘텐츠 공모전', color: Blue },
    ],
  },
  {
    date: 15,
    items: [
      { title: '2023 Meta Spark AR 콘텐츠 공모전', color: Red },
      { title: '2023 Meta Spark AR 콘텐츠 공모전', color: Purple },
    ],
  },
  {
    date: 20,
    items: [
      { title: '2023 Meta Spark AR 콘텐츠 공모전', color: Purple },
      { title: '2023 Meta Spark AR 콘텐츠 공모전', color: Blue },
    ],
  },
];

export const Row: FC<RowProps> = ({ dates, nth, clickedDate, setClickedDate }) => {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '32px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {dates.map((date, idx) => (
        <StyledDateWrapper key={'date-' + idx}>
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
              schedule.items.map(item => <ScheduleBar key={item.title} bgColor={item.color} />),
            )
            .flat(1)}
        </StyledDateWrapper>
      ))}
    </div>
  );
};

const StyledDateWrapper = styled.div`
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const ScheduleBar = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 10px;
  background-color: ${props => props.bgColor};
`;
