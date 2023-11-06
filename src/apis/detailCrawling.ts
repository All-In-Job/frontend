import { detailCrawlingApi } from 'apis';
import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';
import { Rest } from 'types/rest.type';

export type ResponseData = (Certificate | Rest) & { title: string; scrap: number; view: number };

type FuncType<T> = (path: T, id: T) => Promise<AxiosResponse<{ data: ResponseData }>>;

export const requestDetailCrawlingData: FuncType<string | undefined> = async (path, id) => {
  return await detailCrawlingApi({
    method: 'get',
    params: { path: path, id: id },
  });
};
