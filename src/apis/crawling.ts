import { crawlingApi } from './index';

export const requestCrawlingData: (menu: string, queries: string) => void = async (menu, queries) =>
  await crawlingApi({
    method: 'get',
    baseURL: `${menu}/?${queries}`,
  });
