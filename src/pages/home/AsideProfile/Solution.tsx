import styled from '@emotion/styled';

import { BarPieceColor } from 'components/PassionThermometer/types';

import { solutions } from './mock/solution';
import SolutionItem from './SolutionItem';

const Solution = () => {
  const solutionList = Object.entries(solutions);

  return (
    <Container>
      {solutionList.map(([k, v]) => {
        return <SolutionItem itemKey={k as keyof BarPieceColor} key={k} solution={v} />;
      })}
    </Container>
  );
};

export default Solution;

const Container = styled.div``;
