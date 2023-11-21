import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';
import { Inter } from 'types/intern.type';
import { Language } from 'types/language.type';
import { PostCardProps } from 'types/postCard.type';

import { crawlingApi } from './index';

type FuncType = (
  menu: string,
  queries: object,
) => Promise<AxiosResponse<{ data: Certificate[] | Language[] | Inter[] | PostCardProps[] }>>;

export const requestCrawlingData: FuncType = async (menu, queries) => {
  return await crawlingApi({
    method: 'get',
    url: `${menu}`,
    params: { ...queries },
  });
};
