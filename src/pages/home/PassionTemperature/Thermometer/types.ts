export interface BarPieceProps {
  barType: keyof BarPieceColor;
  percent: number;
}

export type BarPieceColor = {
  competition: string;
  outside: string;
  qnet: string;
  // language: string;
  intern: string;
};

export type BarPieceAttr = {
  color: string;
  width: string;
  isTail: boolean;
};

export type Thermometer = Pick<BarPieceProps, 'barType' | 'percent'>;

export type ThermometerList = Record<keyof BarPieceColor, Thermometer>;
