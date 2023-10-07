import { getClient } from 'apis/client';
import { COMPETITION_BASE_URL, FIND_BY_HASHTAG } from 'apis/competition/constants';
import { RequestFindCompetitions, ResponseFindCompetitions } from 'apis/competition/type';

export interface ICompetitionClient {
  findByHashTag: (params: RequestFindCompetitions) => Promise<ResponseFindCompetitions>;
}

export class CompetitionClient implements ICompetitionClient {
  private client = getClient({ endpoint: COMPETITION_BASE_URL });

  findByHashTag = (params: RequestFindCompetitions) => {
    return this.client
      .get<ResponseFindCompetitions>(FIND_BY_HASHTAG, { params })
      .then(res => res.data);
  };
}

export class MockCompetitionClient implements ICompetitionClient {
  private client = getClient({ endpoint: COMPETITION_BASE_URL, isFake: true });

  findByHashTag = (params: RequestFindCompetitions) => {
    console.log('params : ', params);
    return this.client.get<ResponseFindCompetitions>('/findByHash.json').then(res => res.data);
  };
}
