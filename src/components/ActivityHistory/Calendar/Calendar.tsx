import { useEffect, useState } from 'react';

import { format, parse } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSetRecoilState } from 'recoil';

import { inputValuesState } from 'store/activityHistory';

import * as S from './Calendar.styes';
// import { ReactComponent as CalendarIcon } from './res/img/calendar.svg';

type CalendarProps = {
  periodData: string | null;
};

const Calendar = ({ periodData }: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const setPeriodValue = useSetRecoilState(inputValuesState('period'));

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    updateFormattedPeriod(date, endDate);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    updateFormattedPeriod(startDate, date);
  };

  const updateFormattedPeriod = (start: Date | null, end: Date | null) => {
    const formattedStart = start ? format(start, 'yyyy.MM') : '';
    const formattedEnd = end ? format(end, 'yyyy.MM') : '';

    if (formattedStart && formattedEnd) {
      setPeriodValue(`${formattedStart} ~ ${formattedEnd}`);
    } else {
      setPeriodValue('');
    }
  };

  const parseAndSetPeriod = (periodData: string | null) => {
    if (periodData) {
      const [start, end] = periodData.split(' ~ ');
      const startDate = parse(start, 'yyyy.MM', new Date());
      const endDate = parse(end, 'yyyy.MM', new Date());

      setStartDate(startDate);
      setEndDate(endDate);
    }
  };

  useEffect(() => {
    parseAndSetPeriod(periodData);
  }, [periodData]);

  return (
    <S.CalendarContainer>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        dateFormat='yyyy.MM'
        showMonthYearPicker
        placeholderText='시작년월 선택'
        locale={ko}
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        dateFormat='yyyy.MM'
        showMonthYearPicker
        placeholderText='시작년월 선택'
        locale={ko}
      />
    </S.CalendarContainer>
  );
};

export default Calendar;
