import { AxiosResponse } from 'axios';
import { ActivityHistory } from 'types/activityHistory';

import { crawlingApi } from './index';

type FuncType = (
  menu: string,
  queries: object,
) => Promise<AxiosResponse<{ data: ActivityHistory[] }>>;

export const requestActivityCrawlingData: FuncType = async (menu, queries) => {
  return await crawlingApi({
    method: 'get',
    url: `${menu}`,
    params: { ...queries },
  });
};
