import { FC } from 'react';

import { SolutionProps } from 'types/solution';

import CertificationItem from './components/CertificationItem';
import CompetitionItem from './components/CompetitionItem';
import InternItem from './components/InternItem';
import OutSideActivity from './components/OutSideActivity';

interface Props {
  solution: SolutionProps;
}

const SolutionItem: FC<Props> = ({ solution }) => {
  return (
    <>
      <OutSideActivity solution={solution?.outside} />
      <CompetitionItem solution={solution?.competition} />
      <CertificationItem solution={solution?.qnet} />
      <InternItem solution={solution?.intern} />
    </>
  );
};

export default SolutionItem;
