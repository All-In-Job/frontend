import { crawlingApi } from './index';

// type CrawlingQuery = {
//   path?: string;
//   count?: number;
//   page?: string;
//   location?: string;
// }

export const requestCrawlingData: (menu: string, queries: string) => void = async (menu, queries) =>
  await crawlingApi({
    method: 'get',
    baseURL: `${menu}/?${queries}`,
  });
