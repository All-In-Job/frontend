import { communityApi } from './index';

export const requestCommunityData = async (page: string, category: string) => {
  return await communityApi({
    method: 'get',
    params: { page, category },
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
