import { FC } from 'react';

import styled from '@emotion/styled';
interface Props {
  date: string;
}

const DateBefore: FC<Props> = ({ date }) => {
  return <Container>{getDateFrom(date)}</Container>;
};

export default DateBefore;

const Container = styled.div`
  display: flex;
  margin-right: 4px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--orange-100, #ffe8df);

  color: var(--orange-500, #fd6b36);
`;

function getDateFrom(dateValue: string) {
  const today = new Date();
  const dDay = new Date(dateValue);
  const isNotDateObj = isNaN(dDay.getTime());
  if (isNotDateObj) return 'Nan';

  const diff = dDay.getTime() - today.getTime();
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return 'Nan';

  return `D-${diffDays}`;
}
