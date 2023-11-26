import { detailCrawlingApi } from 'apis';
import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';
import { Rest } from 'types/rest.type';

export type ResponseData = (Certificate | Rest) & {
  title: string;
  scrap: number;
  view: number;
  id: string;
  isScrap: boolean | undefined;
};

type FuncType<T> = (id: T, path: T, dataId: T) => Promise<AxiosResponse<{ data: ResponseData }>>;

export const requestDetailCrawlingData: FuncType<string | undefined> = async (id, path, dataId) => {
  return await detailCrawlingApi({
    method: 'get',
    params: { id: id, path: path, dataId: dataId },
  });
};
