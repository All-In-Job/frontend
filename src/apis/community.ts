import { communityApi } from './index';

export const requestCommunityData = async () => {
  return await communityApi({
    method: 'get',
  });
};
