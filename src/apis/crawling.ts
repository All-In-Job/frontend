import { Certificate } from 'types/certificate.type';

import { crawlingApi } from './index';

type FuncType = (menu: string, queries: string) => Promise<Certificate[]>;

export const requestCrawlingData: FuncType = async (menu, queries) =>
  await crawlingApi({
    method: 'get',
    url: `${menu}/${queries} `,
  });
