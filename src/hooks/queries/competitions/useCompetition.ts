import { useQuery } from 'react-query';

import { MockCompetitionClient } from 'apis/competition/client';
import { RequestFindCompetitions, ResponseFindCompetitions } from 'apis/competition/type';
import { CommonError } from 'hooks/queries/types';

import { FIND_COMPETITION_BY_HASH } from './constants';

// const competitionApis = new CompetitionClient();
const competitionApis = new MockCompetitionClient();

export const useFindCompetitionsByHash = (params: RequestFindCompetitions) => {
  return useQuery<ResponseFindCompetitions, CommonError, RequestFindCompetitions>(
    [FIND_COMPETITION_BY_HASH, params.hashTag],
    () => competitionApis.findByHashTag(params),
  );
};
