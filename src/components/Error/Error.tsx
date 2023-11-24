import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <ErrorWrapper>
      <Logo>ALL IN JOB</Logo>

      <Text>
        <Emphasis>원하시는 페이지를 찾을 수 없습니다.</Emphasis>
        찾으려는 페이지의 주소가 잘못 입력되었거나,
        <br />
        주소의 변경 혹은 삭제로 인해 사용할 수 없는 페이지입니다.
        <br />
        입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.
      </Text>

      <HomeButton>
        <Link to='/'>올인잡 홈 가기</Link>
      </HomeButton>
    </ErrorWrapper>
  );
};

export default Error;

const ErrorWrapper = styled.div`
  grid-column: span 12;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Logo = styled.h1`
  color: ${props => props.theme.palette.orange500};
  font-size: 39px;
  font-family: ExtraBold;
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  margin: 40px 0 32px;
  color: ${props => props.theme.palette.black300};
  line-height: ${props => props.theme.textStyle.title01.lineHeight};
  font-size: ${props => props.theme.textStyle.title01.fontSize};
  font-family: Medium;
  gap: 8px;
`;

const Emphasis = styled.strong`
  color: ${props => props.theme.palette.black500};
  line-height: ${props => props.theme.textStyle.headLine02.lineHeight};
  font-size: ${props => props.theme.textStyle.headLine02.fontSize};
  font-family: Bold;
  letter-spacing: 0.134px;
`;

const HomeButton = styled.button`
  width: fit-content;
  padding: 11px 24px;
  border-radius: 999px;
  border: 1px solid ${props => props.theme.palette.orange500};
  color: ${props => props.theme.palette.black400};
  background-color: ${props => props.theme.palette.orange100};
  line-height: ${props => props.theme.textStyle.title02.lineHeight};
  font-size: ${props => props.theme.textStyle.title02.fontSize};
  font-family: Medium;
  cursor: pointer;
`;
