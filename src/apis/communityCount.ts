import { communityApi } from 'apis';

export const requestCommunityCount = async () => {
  return await communityApi({
    method: 'get',
    params: { count: true },
  });
};
