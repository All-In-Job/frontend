import styled from '@emotion/styled';

export const NoResultScrap = () => {
  return <Container>찾으시는 게시물이 없습니다.</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 282px;
  font-size: 20px;
`;
