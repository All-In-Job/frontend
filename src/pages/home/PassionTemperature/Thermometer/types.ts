export interface BarPieceProps {
  barType: keyof temperatureColor;
  percent: number;
}

export type temperatureColor = {
  competition: string;
  outside: string;
  qnet: string;
  language: string;
  intern: string;
};

export type BarPieceColor = {
  competition: string;
  outside: string;
  qnet: string;
  intern: string;
};

export type BarPieceAttr = {
  color: string;
  width: string;
  isTail: boolean;
};

export type Thermometer = Pick<BarPieceProps, 'barType' | 'percent'>;

export type ThermometerList = Record<keyof temperatureColor, Thermometer>;
