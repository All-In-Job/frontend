export type User = {
  name: string;
  temperature: number;
};

export type Img = {
  url: string;
  name: string;
};

export type Solution = {
  id: string;
  name: string;
  host: string;
  date: string;
  img: Img[];
  category?: string;
  region?: string;
  target?: string;
  type?: string;
};
