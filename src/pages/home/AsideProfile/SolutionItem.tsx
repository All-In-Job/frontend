import { FC } from 'react';

import { SolutionProps } from 'types/solution';

import CertificationItem from './components/CertificationItem';
import CompetitionItem from './components/CompetitionItem';
import InternItem from './components/InternItem';
import OutSideItem from './components/OutSideItem';

interface Props {
  solution: SolutionProps;
}

const SolutionItem: FC<Props> = ({ solution }) => {
  const path = Object.keys(solution);

  return (
    <>
      {path.map(key => {
        switch (key) {
          case 'competition':
            return <CompetitionItem key={key} solution={solution[key]} path={key} />;
          case 'outside':
            return <OutSideItem key={key} solution={solution[key]} path={key} />;
          case 'qnet':
            return <CertificationItem key={key} solution={solution[key]} path={key} />;
          case 'intern':
            return <InternItem key={key} solution={solution[key]} path={key} />;
        }
      })}
    </>
  );
};

export default SolutionItem;
