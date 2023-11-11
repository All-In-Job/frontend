import { useContext } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

import { CurrentDateContext } from './Calendar';

export const TopBar = () => {
  const { currentDate, setCurrentDate } = useContext(CurrentDateContext)!;

  const buttonStyle = {
    borderRadius: '100%',
    border: 'none',
    width: '35px',
    aspectRatio: 1,
    cursor: 'pointer',
  };

  const changeMonth = (target: 'prev' | 'next') => {
    const { year, month } = currentDate;
    const calculatedMonth = target === 'prev' ? month - 1 : month + 1;

    if (calculatedMonth < 0)
      setCurrentDate({
        ...currentDate,
        year: year - 1,
        month: 11,
      });
    else if (calculatedMonth > 11)
      setCurrentDate({
        ...currentDate,
        year: year + 1,
        month: 0,
      });
    else setCurrentDate({ ...currentDate, month: calculatedMonth });
  };

  return (
    <StyledContainer>
      <button style={buttonStyle} onClick={() => changeMonth('prev')}>
        {'<'}
      </button>
      <StyledDate>
        <span>
          {currentDate.year}년 {currentDate.month + 1}월
        </span>
      </StyledDate>
      <button style={buttonStyle} onClick={() => changeMonth('next')}>
        {'>'}
      </button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px ${theme.palette.line.normal} solid;
`;
const StyledDate = styled.div`
  display: grid;
  place-items: center;
`;
