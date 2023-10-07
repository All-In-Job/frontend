import { FC, ReactNode, createContext, useContext } from 'react';

import { CompetitionClient, ICompetitionClient } from 'apis/competition/client';

const CompetitionApiContext = createContext<ICompetitionClient | null>(null);

const client = new CompetitionClient();

interface Props {
  children: ReactNode;
}

export const CompetitionApiProvider: FC<Props> = ({ children }) => {
  return <CompetitionApiContext.Provider value={client}>{children}</CompetitionApiContext.Provider>;
};

export const useCompetitionApi = () => {
  const competitionApi = useContext(CompetitionApiContext);
  if (!competitionApi) throw new Error('competition api is not exist');
  return competitionApi;
};
