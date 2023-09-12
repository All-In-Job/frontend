import { FC } from 'react';

import styled from '@emotion/styled';
interface Props {
  date: string;
}

const DateBefore: FC<Props> = ({ date }) => {
  return <Container>{getDateFrom(date)}</Container>;
};

export default DateBefore;

function getDateFrom(dateValue: string) {
  const today = new Date();
  console.log('dateValue : ', dateValue);
  console.log('today : ', today);
  return 'date from todaya';
}

const Container = styled.div``;
