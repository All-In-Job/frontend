import { detailCrawlingApi } from 'apis';
import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';

export type ResponseData = Certificate;

type FuncType = (path: string, id: string) => Promise<AxiosResponse<{ data: ResponseData }>>;

export const requestDetailCrawlingData: FuncType = async (path, id) => {
  return await detailCrawlingApi({
    method: 'get',
    params: { path: path, id: id },
  });
};
