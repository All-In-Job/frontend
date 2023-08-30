import { FC } from 'react';

import { MAX_PERCENT, BAR_PIECE_COLOR } from './constants';
import * as S from './thermometer.styles';
import { BarPieceColor } from './types';

export interface Props {
  barType: keyof BarPieceColor;
  percent: number;
  isTail: boolean;
  indicatorWidth?: number;
}

const BarPiece: FC<Props> = ({ percent, barType, indicatorWidth, isTail }) => {
  if (!percent) return <></>;

  const width = getBarWidth(percent, indicatorWidth);
  const percentage = percent < 3 ? '' : `${percent}%`;

  return (
    <S.BarPiece isTail={isTail} width={width} color={BAR_PIECE_COLOR[barType]}>
      {percentage}
    </S.BarPiece>
  );
};

export default BarPiece;

function getBarWidth(percent: number, indicatorWidth?: number) {
  if (!indicatorWidth) return `0px`;

  const pieceCount = Object.keys(BAR_PIECE_COLOR).length;
  return `${(percent * (indicatorWidth / pieceCount)) / MAX_PERCENT}px`;
}
