export type Competitions = {
  id: string;
  title: string;
  host: string;
  date: string;
  view: number;
  bookmark: number;
  dateFromToday: string;
};

export type ResponseFindCompetitions = {
  result: Competitions[];
  page: number;
  hasNext: boolean;
};

export type RequestFindCompetitions = {
  hashTag: string;
  page: number;
  length: number;
};
