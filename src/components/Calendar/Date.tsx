import { FC, useContext, useState } from 'react';

import theme from 'styles/theme';

import { CalendarContext } from './Calendar';
import { ClickedDate } from './config';
import { RowProps } from './Row';

type DateProps = {
  day: RowProps['dates'][number];
  clickedDate: ClickedDate;
  setClickedDate: (value: ClickedDate) => void;
  idx: number;
} & Pick<RowProps, 'nth'>;

export const Date: FC<DateProps> = ({ nth, day, clickedDate, setClickedDate, idx }) => {
  const [hovered, setHovered] = useState(false);
  const { calendarState } = useContext(CalendarContext)!;

  const isCurrentDateClicked = nth === clickedDate?.nth && clickedDate.date === day;

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
    if (isCurrentDateClicked) return bgColor;
    if (day === calendarState.date) return bgColor;
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
        !nth && setClickedDate(undefined);
        nth && setClickedDate({ nth, date: day });
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
          transition: '0.5s, backgroundColor ease-in-out 0.5s',
          color: idx === 0 ? theme.palette.orange400 : 'black',
        }}
      >
        {day}
      </span>
    </button>
  );
};
