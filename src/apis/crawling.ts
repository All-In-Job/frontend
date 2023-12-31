import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';
import { Inter } from 'types/intern.type';
import { Language } from 'types/language.type';
import { PostCardProps } from 'types/postCard.type';

import { crawlingApi, userKeywordCrawlingApi } from './index';

type FuncType = (
  menu: string,
  queries: object,
) => Promise<AxiosResponse<{ data: Certificate[] | Language[] | Inter[] | PostCardProps[] }>>;

type TitleType = (
  menu: string,
  mainCategory: string | undefined,
) => Promise<AxiosResponse<{ data: Certificate[] }>>;

export const requestCrawlingData: FuncType = async (menu, queries) => {
  return await crawlingApi({
    method: 'get',
    url: `${menu}`,
    params: { ...queries },
  });
};

export const requestCrawlingTitleData: TitleType = async (menu, mainCategory) => {
  return await crawlingApi({
    method: 'get',
    url: `${menu}`,
    params: { mainCategory },
  });
};

export const requestUserKeywordData = async (menuName: string) => {
  return await userKeywordCrawlingApi({
    method: 'get',
    url: menuName,
    params: { page: 1 },
  });
};
