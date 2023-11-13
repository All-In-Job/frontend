import { useState } from 'react';

import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import * as S from './Calendar.styes';
// import { ReactComponent as CalendarIcon } from './res/img/calendar.svg';

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <S.CalendarContainer>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat='yyyy.MM'
        showMonthYearPicker
        placeholderText='시작년월 선택'
        locale={ko}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        dateFormat='yyyy.MM'
        showMonthYearPicker
        placeholderText='시작년월 선택'
        locale={ko}
      />
    </S.CalendarContainer>
  );
};

export default Calendar;
