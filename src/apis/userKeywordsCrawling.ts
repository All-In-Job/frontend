import { userKeywordsCrawlingApi } from 'apis';
import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';
import { Inter } from 'types/intern.type';
import { Language } from 'types/language.type';
import { PostCardProps } from 'types/postCard.type';

type FuncType = (
  menu: string,
  page: string,
) => Promise<AxiosResponse<{ data: Certificate[] | Language[] | Inter[] | PostCardProps[] }>>;

export const requestUserKeywordsCrawlingData: FuncType = async (menu, page) => {
  return await userKeywordsCrawlingApi({
    method: 'get',
    url: `${menu}`,
    params: { page },
  });
};
