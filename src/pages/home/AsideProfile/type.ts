export type User = {
  name: string;
  temperature: number;
};

export type Solution = {
  id: string;
  name: string;
  host: string;
  date: string;
  category?: string;
  region?: string;
  target?: string;
  type?: string;
};
