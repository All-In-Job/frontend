export interface BarPieceProps {
  barType: keyof BarPieceColor;
  percent: number;
}

export type BarPieceColor = {
  COMPETITION: string;
  OUT_SIDE_ACTIVITY: string;
  CERTIFICATE: string;
  LANGUAGE_STUDY: string;
  INTERN: string;
};

export type BarPieceAttr = {
  color: string;
  width: string;
  isTail: boolean;
};

export type ThermometerPercent = Pick<BarPieceProps, 'barType' | 'percent'>;

export type ThermometerPercentList = Record<keyof BarPieceColor, ThermometerPercent>;
