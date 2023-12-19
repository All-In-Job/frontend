import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { SolutionProps } from 'types/solution';

import { getLoginUserInfo } from 'apis/user';

import { Desc } from './asideProfile.style';
import SolutionItem from './SolutionItem';

const Solution = () => {
  const [solutions, setSolutions] = useState<SolutionProps[]>([]);
  const solutionList = Object.entries(solutions);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await getLoginUserInfo();
        setSolutions(res.data.data.solution);
      } catch (error) {
        console.log(error);
      }
    };

    getUserProfile();
  }, []);

  return (
    <Container>
      <Title size='15px'>올인잡 솔루션</Title>
      {solutionList &&
        solutionList.map(([k, v]) => {
          return <SolutionItem key={k} solution={v} />;
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
