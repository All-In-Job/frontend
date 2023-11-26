import { userApi } from 'apis';

type formData = {
  path: string | undefined;
  scrapId: string;
};

export const scrap = async (postData: formData) => {
  return userApi({
    method: 'POST',
    url: 'scrapping',
    data: postData,
  });
};
