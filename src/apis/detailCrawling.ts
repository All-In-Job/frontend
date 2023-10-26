import { detailCrawlingApi } from 'apis';
import { AxiosResponse } from 'axios';
import { Certificate } from 'types/certificate.type';

type FuncType = (
  path: string | undefined,
  id: string | undefined,
) => Promise<AxiosResponse<{ data: Certificate }>>;

export const requestDetailCrawlingData: FuncType = async (path, id) => {
  return await detailCrawlingApi({
    method: 'get',
    params: { path: path, id: id },
  });
};
