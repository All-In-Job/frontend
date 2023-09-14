import styled from '@emotion/styled';

import { BarPieceColor } from 'components/PassionThermometer/types';

import { Desc } from './asideProfile.style';
import { solutions } from './mock/solution';
import SolutionItem from './SolutionItem';

const Solution = () => {
  const solutionList = Object.entries(solutions);

  return (
    <Container>
      <Title size='15px'>올인잡 솔루션</Title>
      {solutionList.map(([k, v]) => {
        return <SolutionItem itemKey={k as keyof BarPieceColor} key={k} solution={v} />;
      })}
    </Container>
  );
};

export default Solution;

const Container = styled.div`
  margin-top: 16px;
  padding: 16px;
  width: 100%;
  border-radius: 12px;
  background: var(--orange-100, #ffe8df);

  > div:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Title = styled(Desc)`
  margin-bottom: 16px;
  color: var(--black-500, #121110);
  /* Body 2/Semi */
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
`;
