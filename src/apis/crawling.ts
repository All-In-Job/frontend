import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';

import { crawlingApi } from './index';

type FuncType = (menu: string, queries: string) => Promise<AxiosResponse<Certificate>>;

export const requestCrawlingData: FuncType = async (menu, queries) => {
  const res = await crawlingApi({
    method: 'get',
    url: `${menu}/${queries} `,
  });
  return res;
};
