import { crawlingApi } from 'apis';

export const requestCrawlingTotalCount = async (menu: string) => {
  return await crawlingApi({
    method: 'get',
    url: menu,
    params: { count: true },
  });
};
