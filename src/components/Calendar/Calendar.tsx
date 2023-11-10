import styled from '@emotion/styled';

import theme from 'styles/theme';

export const Calendar = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>나만의 달력</StyledTitle>
      </StyledHeader>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  grid-column: span 12;
`;
const StyledHeader = styled.div`
  border-bottom: 1px ${theme.palette.line.normal} solid;
  padding-bottom: 12px;
`;
const StyledTitle = styled.h1`
  font-size: 24px;
`;
