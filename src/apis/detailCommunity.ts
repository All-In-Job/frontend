import { detailCommunityApi } from 'apis';

export const requestCommunityDetailData = async (id: string) => {
  return await detailCommunityApi({
    method: 'get',
    url: id,
  });
};
