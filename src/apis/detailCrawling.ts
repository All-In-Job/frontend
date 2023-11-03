import { detailCrawlingApi } from 'apis';
import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';

export type ResponseData = Certificate;

type FuncType<T> = (path: T, id: T) => Promise<AxiosResponse<{ data: ResponseData }>>;

export const requestDetailCrawlingData: FuncType<string | undefined> = async (path, id) => {
  return await detailCrawlingApi({
    method: 'get',
    params: { path: path, id: id },
  });
};
