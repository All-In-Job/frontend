import styled from '@emotion/styled';
export const InputGroupHeader = () => {
  return (
    <StyledHeader>
      <StyledTitle>ALL IN JOB</StyledTitle>
      <StyledSubTitle>OO 계정을 이용한 회원가입</StyledSubTitle>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  text-align: center;
`;
const StyledTitle = styled.h1`
  color: #fd6b36;
  font-weight: bold;
  font-size: 39px;
`;
const StyledSubTitle = styled.p`
  margin-top: 16px;
`;
