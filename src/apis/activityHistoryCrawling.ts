import { AxiosResponse } from 'axios';
import { ActivityHistory } from 'types/activityHistory';

import { crawlingApi } from './index';

type FuncType = (
  menu: string,
  queries?: Record<string, string>,
) => Promise<AxiosResponse<{ data: ActivityHistory[] }>>;

export const requestActivityCrawlingData: FuncType = async (menu, queries) => {
  return crawlingApi({
    method: 'get',
    url: `${menu}`,
    params: { ...queries },
  });
};
