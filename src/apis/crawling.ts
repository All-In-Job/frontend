import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';

import { crawlingApi } from './index';

type FuncType = (menu: string, queries: object) => Promise<AxiosResponse<Certificate[]>>;

export const requestCrawlingData: FuncType = async (menu, queries) => {
  const res = await crawlingApi({
    method: 'get',
    url: `${menu}`,
    params: { ...queries },
  });
  return res.data;
};
