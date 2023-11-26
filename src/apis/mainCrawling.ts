import { mainCrawlingApi } from './index';

export const mainCrawlingData = async (menu: string | undefined, id: string) => {
  return await mainCrawlingApi({
    method: 'get',
    url: menu,
    params: { id: id },
  });
};
