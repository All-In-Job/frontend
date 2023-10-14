import { FC, ReactNode } from 'react';

import { BarPieceColor } from 'pages/home/PassionTemperature/Thermometer/types';

import CertificationItem from './components/CertificationItem';
import CompetitionItem from './components/CompetitionItem';
import InternItem from './components/InternItem';
import LanguageStudy from './components/LanguageStudy';
import OutSideActivity from './components/OutSideActivity';
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
    LANGUAGE_STUDY: <LanguageStudy solution={solution} />,
    OUT_SIDE_ACTIVITY: <OutSideActivity solution={solution} />,
  };

  return <>{itemMapper[itemKey]}</>;
};

export default SolutionItem;
