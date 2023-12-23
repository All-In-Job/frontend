import { communityApi } from 'apis';
import { AxiosResponse } from 'axios';

type FuncType = (category?: string) => Promise<AxiosResponse<{ data: number }>>;

export const requestCommunityCount: FuncType = async category => {
  return await communityApi({
    method: 'get',
    params: { count: true, category },
  });
};
