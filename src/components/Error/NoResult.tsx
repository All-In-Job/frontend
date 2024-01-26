import styled from '@emotion/styled';
import { ReactComponent as NoResultIcon } from 'assets/no_result.svg';

import theme from 'styles/theme';

export const NoResult = () => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <NoResultIcon />
      </StyledImageContainer>
      <StyledText>찾으시는 커리어에 대한 검색 결과가 없습니다.</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  text-align: center;
`;
const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: ${theme.palette.orange100};
  border-radius: 20px;
`;
const StyledText = styled.p`
  font-weight: 700;
  margin-top: 40px;
  font-size: 24px;
`;
