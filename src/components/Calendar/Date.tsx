import { FC, useContext, useState } from 'react';

import theme from 'styles/theme';

import { CalendarContext, ClickedDateContext, CurrentDateContext, TODAY } from './Calendar';
import { RowProps } from './Row';

type DateProps = {
  day: RowProps['dates'][number];
  idx: number;
} & Pick<RowProps, 'nth'>;

export const Date: FC<DateProps> = ({ nth, day, idx }) => {
  const [hovered, setHovered] = useState(false);
  const { calendarState } = useContext(CalendarContext)!;
  const { currentDate } = useContext(CurrentDateContext)!;
  const { clickedDate, setClickedDate } = useContext(ClickedDateContext)!;

  const isCurrentDateClicked = clickedDate?.date === day;

  const controlTextColor = () => {
    const lightGrey = { color: 'lightgrey' };

    if (typeof day === 'number') {
      if (hovered || isCurrentDateClicked) return { color: 'white' };
      // grey text color if the date is not the date of this month.
      if (nth === 1 && day >= 23) return lightGrey;
      if (nth === 5 && day <= 6) return lightGrey;
      if (nth === 6 && day <= 13) return lightGrey;
    }
    return null;
  };
  const controlSpanBackgroundColor = () => {
    const bgColor = theme.palette.orange100;
    if (typeof day === 'number' && hovered) return bgColor;

    // currentDate: 달력이 지금 보여주고 있는 년, 월, 일.
    // clickedDate: 유저가 클릭한 날짜의 년, 월, 일.
    // calendarState: 우측에 표시될 달력의 상태 (clickedDate)랑 같음

    if (
      clickedDate &&
      clickedDate.date === day &&
      clickedDate.month === currentDate.month + 1 &&
      clickedDate.year === currentDate.year
    )
      return bgColor;
    if (
      !clickedDate.year &&
      day === TODAY.date &&
      TODAY.year === calendarState.year &&
      TODAY.month === calendarState.month
    )
      return bgColor;
    return undefined;
  };

  return (
    <button
      style={{
        width: '100%',
        height: typeof day === 'number' ? '60px' : '30px',
        border: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        ...controlTextColor(),
        cursor: typeof day === 'number' ? 'pointer' : 'default',
      }}
      onClick={() => {
        !nth && setClickedDate({ year: 0, month: 0, date: 0 });
        nth &&
          setClickedDate({
            year: currentDate.year,
            month: currentDate.month + 1,
            date: Number(day),
          });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          display: 'flex',
          width: '30px',
          aspectRatio: 1,
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: controlSpanBackgroundColor(),
          color: idx === 0 ? theme.palette.orange400 : 'black',
        }}
      >
        {day}
      </span>
    </button>
  );
};
