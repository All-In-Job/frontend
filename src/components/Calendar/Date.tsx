import { FC, useContext, useEffect, useState } from 'react';

import theme from 'styles/theme';

import { ClickedDateContext, ClickedDateType, CurrentDateContext, TODAY } from './Calendar';
import { RowProps } from './Row';

type DateProps = {
  day: RowProps['dates'][number];
  idx: number;
} & Pick<RowProps, 'nth'>;

export const Date: FC<DateProps> = ({ nth, day, idx }) => {
  const [hovered, setHovered] = useState(false);
  const [holdingDate, setHoldingDate] = useState<ClickedDateType>();
  const { currentDate } = useContext(CurrentDateContext)!;
  const { clickedDate, setClickedDate } = useContext(ClickedDateContext)!;

  console.log(clickedDate, holdingDate);

  useEffect(() => {
    if (isLastMonth)
      setHoldingDate({
        year: currentDate.month === 0 ? currentDate.year - 1 : currentDate.year,
        month: currentDate.month === 0 ? 12 : currentDate.month,
        date: Number(day),
      });
    if (nth > 0 && !isLastMonth)
      setHoldingDate({ year: currentDate.year, month: currentDate.month + 1, date: Number(day) });
  }, [currentDate]);

  const isCurrentDateClicked = clickedDate?.date === day;
  const isLastMonth = nth === 1 && Number(day) >= 26;

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
      holdingDate &&
      clickedDate.year === holdingDate.year &&
      clickedDate.month === holdingDate.month &&
      clickedDate.date === holdingDate.date
    )
      return bgColor;
    if (
      !clickedDate.year &&
      day === TODAY.date &&
      TODAY.year === currentDate.year &&
      TODAY.month === currentDate.month + 1
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
        holdingDate && setClickedDate(holdingDate);
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
