import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { SolutionProps } from 'types/solution';

import { getLoginUserInfo } from 'apis/user';

import { Desc } from './asideProfile.style';
import SolutionItem from './SolutionItem';

const Solution = () => {
  const [solutions, setSolutions] = useState<SolutionProps[]>([]);

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
      {solutions &&
        solutions.map((solution, index) => {
          return <SolutionItem key={index} solution={solution} />;
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

  > a {
    span {
      margin-top: 16px;
    }
  }
`;

const Title = styled(Desc)`
  color: var(--black-500, #121110);
  /* Body 2/Semi */
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
`;
