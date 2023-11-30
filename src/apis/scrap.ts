import { userApi } from 'apis';

type formData = {
  path: string | undefined;
  scrapId: string | undefined;
};

export const scrapping = async (postData: formData) => {
  return userApi({
    method: 'POST',
    url: 'scrapping',
    data: postData,
  });
};

export const getUserScrap = async (path: string, page: number) => {
  return userApi({
    method: 'GET',
    url: 'getUserScrap',
    params: { path: path, page: page },
  });
};

export const getUserScrapTotalCount = async (path: string, count: boolean) => {
  return userApi({
    method: 'GET',
    url: 'getUserScrap',
    params: { path: path, count: count },
  });
};
