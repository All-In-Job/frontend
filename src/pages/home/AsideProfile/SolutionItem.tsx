import { FC, ReactNode } from 'react';

import { BarPieceColor } from 'components/PassionThermometer/types';

import CertificationItem from './components/CertificationItem';
import CompetitionItem from './components/CompetitionItem';
import InternItem from './components/InternItem';
import { Solution } from './type';

interface Props {
  itemKey: keyof BarPieceColor;
  solution: Solution;
}

const SolutionItem: FC<Props> = ({ itemKey, solution }) => {
  const itemMapper: Record<keyof BarPieceColor, ReactNode> = {
    CERTIFICATE: <CertificationItem solution={solution} />,
    INTERN: <InternItem solution={solution} />,
    COMPETITION: <CompetitionItem solution={solution} />,
    LANGUAGE_STUDY: <>기획 없음</>,
    OUT_SIDE_ACTIVITY: <>기획 없음</>,
  };

  return <>{itemMapper[itemKey]}</>;
};

export default SolutionItem;
