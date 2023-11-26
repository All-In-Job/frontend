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

export const getUserScrap = async (path: string) => {
  return userApi({
    method: 'GET',
    url: 'getUserScrap',
    params: { path: path },
  });
};
