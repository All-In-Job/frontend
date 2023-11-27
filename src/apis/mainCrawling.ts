import { mainCrawlingApi } from './index';

export const mainCrawlingData = async (menu: string | undefined, id: string | null) => {
  return await mainCrawlingApi({
    method: 'get',
    url: menu,
    params: { id: id },
  });
};
