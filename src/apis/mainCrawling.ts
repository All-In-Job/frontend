import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';
import { Inter } from 'types/intern.type';
import { Language } from 'types/language.type';

import { crawlingApi } from './index';

type FuncType = (
  path: string,
) => Promise<AxiosResponse<{ data: Certificate[] | Language[] | Inter[] }>>;

export const requestCrawlingData: FuncType = async path => {
  return await crawlingApi({
    method: 'get',
    url: `${path}`,
  });
};
