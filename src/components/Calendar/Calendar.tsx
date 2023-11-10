import styled from '@emotion/styled';

import theme from 'styles/theme';

import { CalendarMain } from './CalendarMain';
import { CalendarSub } from './CalendarSub';

export const Calendar = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>나만의 달력</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <CalendarMain />
        <CalendarSub />
      </StyledBody>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  grid-column: span 12;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const StyledHeader = styled.div`
  border-bottom: 1px ${theme.palette.line.normal} solid;
  padding-bottom: 12px;
`;
const StyledTitle = styled.h1`
  font-size: 24px;
`;
const StyledBody = styled.div`
  width: 100%;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  background-color: ${theme.palette.background.secondary};
  border-radius: 12px;
`;
