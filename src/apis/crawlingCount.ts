import { crawlingApi } from 'apis';
import { AxiosResponse } from 'axios';

type Queries = {
  [key: string]: string | undefined;
};

type FuncType = (menu: string, queries: Queries) => Promise<AxiosResponse<{ data: number }>>;

export const requestCrawlingTotalCount: FuncType = async (menu, queries) => {
  return await crawlingApi({
    method: 'get',
    url: menu,
    params: { count: true, ...queries },
  });
};
