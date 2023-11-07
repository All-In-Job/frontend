import { detailCommunityApi } from 'apis';

export const requestDetailCrawlingApiData = async (id: string) => {
  return await detailCommunityApi({
    method: 'get',
    url: id,
  });
};
