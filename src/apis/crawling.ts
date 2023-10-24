import { crawlingApi } from './index';

type FuncType = (menu: string, queries: string) => void;

export const requestCrawlingData: FuncType = async (menu, queries) =>
  await crawlingApi({
    method: 'get',
    url: `${menu}/${queries} `,
  });
