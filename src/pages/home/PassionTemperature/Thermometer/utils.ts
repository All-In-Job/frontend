import { BAR_PIECE_COLOR, MAX_PERCENT } from './constants';

export function getBarWidth(percent: number, indicatorWidth?: number) {
  if (!indicatorWidth) return `0`;

  const pieceCount = Object.keys(BAR_PIECE_COLOR).length;
  return `${(percent * (indicatorWidth / pieceCount)) / MAX_PERCENT}`;
}
