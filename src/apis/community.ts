import { communityApi } from './index';

export const requestCommunityData = async (page: string) => {
  return await communityApi({
    method: 'get',
    params: { page },
  });
};

export const getCommunitySearchResult = async (target: string, text: string) => {
  return await communityApi({
    method: 'get',
    params: {
      [target]: text,
      page: 1,
    },
  });
};
