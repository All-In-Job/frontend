import { communityApi } from './index';

export const requestCommunityData = async (page: string) => {
  return await communityApi({
    method: 'get',
    params: { page },
  });
};
